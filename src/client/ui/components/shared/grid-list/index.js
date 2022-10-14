import React from "react"
import styles from "./GridList.module.css"

export const GridList = ({
  renderItem = () => null,
  keyExtractor = () => null,
  dataSource = []
}) => {
  return (
    <div className={styles.GridListContainer}>
      {dataSource.map((item, idx) => {
        const component = renderItem(item, idx)
        const key = keyExtractor(item)
        return React.cloneElement(component, { key })
      })}
    </div>
  )
}
