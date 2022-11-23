import styles from "./Card.module.css"

export const Card = ({ onClick, style, children }) => {
  return (
    <div
      style={style}
      onClick={onClick}
      className={styles.Card}>
      {children}
    </div>
  )
}
