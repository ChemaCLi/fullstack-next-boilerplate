import Image from "next/image"
import styles from "./Avatar.module.css"

/**
 * @param imageUrl
 * @param unoptimized
 * @param {"medium" | "small" | "large"} size
 */
export const Avatar = ({ imageUrl, unoptimized, size = "medium" }) => {
  const sizes = {
    large: { width: "8rem", height: "8rem" },
    medium: { width: "4rem", height: "4rem" },
    small: { width: "40px", height: "40px" }
  }

  const sizeStyle = sizes[size] || {}

  return (
    <div
      style={sizeStyle}
      className={styles.Avatar}>
      <Image
        src={imageUrl}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="profile-photo"
        unoptimized={unoptimized} />
    </div>
  )
}
