import { useRef } from "react"
import { Tooltip, Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { UserModal } from "./user-modal"
import { ImperativeModal } from "../../contexts"
import { GridList, Searchbar, TeamMemberCard } from "../shared"
import { useService, useUserActions, useServiceLayer } from "../../hooks"


export const UsersManagementPageContent = () => {
  const modalRef = useRef()
  const { userService } = useServiceLayer()

  const { data: users, loading, refetch } = useService(userService.searchUsers)

  const {
    onEditUser,
    onCreateUser,
    onDeleteUser,
  } = useUserActions({ userService })

  const handleOnCreateUser = async ({ name, email }) => {
    await onCreateUser({ name, email, onCompleted: refetch })
  }

  const handleOnEditUser = async ({ id, name, email }) => {
    await onEditUser({ id, name, email, onCompleted: refetch })
  }

  const handleOnDeleteUser = async ({ id }) => {
    await onDeleteUser({ id, onCompleted: refetch })
  }

  return (
    <>
      <ImperativeModal
        ref={modalRef}
        modal={UserModal}
        modalProps={{
          onCreateUser: handleOnCreateUser,
          onEditUser: handleOnEditUser
        }} />
      <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%", alignItems: "center" }}>
        <div style={{ maxWidth: "600px", width: "100%" }}><Searchbar placeholder="Buscar usuario" buttonLabel="Buscar" /></div>
        <Tooltip title="Agregar usuario">
          <Button shape="circle" icon={<PlusOutlined />} size={"large"} onClick={() => modalRef.current.openModal()} />
        </Tooltip>
      </div>
      <GridList
        dataSource={users || []}
        keyExtractor={user => user?.id}
        itemDimensions={{ width: "150px", height: "150px" }}
        renderItem={user => (
          <TeamMemberCard
            imageUrl={user.photo}
            name={user.name}
            jobTitle={user.title} />
        )} />
    </>
  )
}
