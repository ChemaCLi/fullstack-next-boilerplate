import { SearchOutlined, UserOutlined, BookOutlined } from "@ant-design/icons"
import styles from "./Layout.module.css"

export const Layout = ({ children }) => {
    return (
        <div className={styles.Layout__MainContainer}>
            <div className={styles.Layout__SideBar}>
                <SearchOutlined className={styles.Layout__SideBar__Icons} onClick={onSearch} />
                <UserOutlined className={styles.Layout__SideBar__Icons} onClick={onGoToUsers} />
                <BookOutlined className={styles.Layout__SideBar__Icons} onClick={onGoToContributions} />
            </div>
            <div className={styles.Layout__Contents}>
                {children}
            </div>
        </div>
    )
}