import {
  EyeOutlined,
  FormOutlined,
  DeleteOutlined
} from "@ant-design/icons"

export const ActionButtons = () => {
  return (
    <div
      style={{
        gap: "8px",
        display: "flex",
        flexDirection: "row"
    }}>
      <EyeOutlined
        style={{ display: "block" }}
        className="ActionButton" />
      <FormOutlined
        style={{ display: "block" }}
        className="ActionButton" />
      <DeleteOutlined
        style={{ display: "block" }}
        className="DeleteButton" />
    </div>
  )
}
