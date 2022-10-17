import styles from "./ActionButtons.module.css"
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
        className={styles.ActionButton} />
      <FormOutlined
        style={{ display: "block" }}
        className={styles.ActionButton} />
      <DeleteOutlined
        style={{ display: "block" }}
        className={styles.DeleteButton} />
    </div>
  )
}
