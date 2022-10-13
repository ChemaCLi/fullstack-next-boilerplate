
import styles from "./TeamMemberCard.module.css"
import Image from "next/image";

export const TeamMemberCard = ({
  imageUrl,
  name,
  jobTitle,
  unoptimized = false,
  onClick,
  user
}) => {
  return (
    <div
      onClick={onClick && onClick(user)}
      className={styles.TeamMemberCard__Container}>
      <div className={styles.TeamMemberCard__AvatarContainer}>
        <Image
          src={imageUrl}
          width="100%"
          height="100%"
          alt="profile-photo"
          unoptimized={unoptimized} />
      </div>
      <div className={styles.TeamMemberCard__Name}>
        {name}
      </div>
      <div className={styles.TeamMemberCard__JobTitle}>
        {jobTitle}
      </div>
    </div>
  )
}
