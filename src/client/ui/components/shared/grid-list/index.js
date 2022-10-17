import React from "react"
import styles from "./GridList.module.css"

export const GridList = ({
  renderItem = () => null,
  keyExtractor = () => null,
  dataSource = [],
  itemDimensions = { width: "150px", height: "150px" }
}) => {
  return (
    <div
      style={{
        gridAutoRows: itemDimensions.height,
        gridTemplateColumns: `repeat(auto-fill, minmax(${itemDimensions.width}, 1fr))`
    }}
      className={styles.GridListContainer}>
      {dataSource.map((item, idx) => {
        const component = renderItem(item, idx)
        const key = keyExtractor(item)
        return React.cloneElement(component, { key })
      })}
    </div>
  )
}
