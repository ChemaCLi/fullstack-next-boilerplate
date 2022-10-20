
import styles from "./TeamMemberCard.module.css"
import Image from "next/image";
import { Card } from "../card";

export const TeamMemberCard = ({
  imageUrl,
  name,
  jobTitle,
  unoptimized = false,
  onClick,
  user
}) => {
  return (
    <Card
      onClick={() => onClick && onClick(user)}
      style={{
        width: "150px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }}>
      <div className={styles.TeamMemberCard__AvatarContainer}>
        <Image
          src={imageUrl}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="profile-photo"
          unoptimized={unoptimized} />
      </div>
      <div className={styles.TeamMemberCard__Name}>
        {name}
      </div>
      <div className={styles.TeamMemberCard__JobTitle}>
        {jobTitle}
      </div>
    </Card>
  )
}
