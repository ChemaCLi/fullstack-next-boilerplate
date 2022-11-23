import { useRef } from "react"
import { Tooltip, Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import styles from "./Users.module.css"
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
    onCreateUser
  } = useUserActions({ userService })

  const handleOnCreateUser = async ({ name, email }) => {
    await onCreateUser({ name, email, onCompleted: refetch })
  }

  const handleOnEditUser = async ({ id, name, email }) => {
    await onEditUser({ id, name, email, onCompleted: refetch })
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
      <div className={styles.Users__TopContainer}>
        <div className={styles.Users__Searchbar__Container}>
          <Searchbar
            buttonLabel="Buscar"
            placeholder="Buscar usuario" />
        </div>
        <Tooltip title="Agregar usuario">
          <Button
            shape="circle"
            size={"large"}
            icon={<PlusOutlined />}
            onClick={() => modalRef.current.openModal()} />
        </Tooltip>
      </div>
      <GridList
        loading={loading}
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
