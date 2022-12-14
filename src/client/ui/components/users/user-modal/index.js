import { Modal, Form, Input, Typography, message } from "antd"
import { useEffect, useState } from "react"
import { useServiceLayer, useService } from "../../../hooks"

export const UserModal = ({
  visible,
  onCancel,
  onEditUser,
  onCreateUser,
  afterSuccess,
  selectedItem = null,
  ...props
}) => {
  const { userService } = useServiceLayer()
  const [saving, setSaving] = useState(false)
  const [form] = Form.useForm()

  const { data: user, loading, reset, error } = useService(
    userService.findUserById,
    { id: selectedItem?.id },
    { shouldFetch: selectedItem?.id && visible }
  )

  useEffect(() => {
    if (error) {
      message.error("Ocurrió un error al cargar los datos")
      console.error(error)
    }

    if (user && !loading && visible) {
      return form.setFieldsValue({ ...user })
    }
  }, [form, user, visible, loading, error])

  const handleOnOk = async () => {
    setSaving(true)
    try {
      await form.validateFields()
      const { name, email } = form.getFieldsValue()

      if (selectedItem)
        onEditUser && await onEditUser({ ...selectedItem, name, email })
      else
        onCreateUser && await onCreateUser({ name, email })

      afterSuccess && await afterSuccess()
      closeModal()
    } catch (e) {
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  const closeModal = () => {
    form.resetFields()
    onCancel && onCancel()
    reset()
  }

  const disableControls = saving || (selectedItem?.id && loading)

  return (
    <Modal
      {...props}
      visible={visible}
      onOk={handleOnOk}
      onCancel={closeModal}
      cancelText="Cerrar"
      okText={selectedItem ? "Guardar cambios" : "Crear usuario"}
      okButtonProps={{ disabled: disableControls }}
      cancelButtonProps={{ disabled: disableControls }}
      title={<ModalTitle
        loading={loading}
        selectedItem={selectedItem} />
      }>
      <Form
        form={form}
        layout="vertical">
        <Form.Item
          rules={[{ required: true }]}
          label="Nombre"
          name="name">
          <Input
            disabled={disableControls}
            placeholder="Nombre" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          label="Email"
          name="email">
          <Input
            disabled={disableControls}
            placeholder="Email" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

const ModalTitle = ({ selectedItem, loading }) => (
  <div style={{
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center"
  }}>
    <div>
      {selectedItem ? "Editar usuario" : "Crear usuario"}
    </div>
    {(loading && selectedItem) && (
      <Typography.Text
        type="secondary"
        style={{ fontSize: "0.75rem" }}>
        cargando...
      </Typography.Text>
    )}
  </div>
)
