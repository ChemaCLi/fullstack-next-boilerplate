import { SearchOutlined, UserOutlined, BookOutlined } from "@ant-design/icons"
import styles from "./Layout.module.css"

export const Layout = ({ children }) => {
    return (
        <div className={styles.Layout__MainContainer}>
            <div className={styles.Layout__SideBar}>
                <SearchOutlined />
                <UserOutlined />
                <BookOutlined />
            </div>
            <div className={styles.Layout__Contents}>
                {children}
            </div>
        </div>
    )
}