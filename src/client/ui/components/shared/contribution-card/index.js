import { Card } from "../card";
import Image from "next/image";
import { ActionButtons } from "../buttons/action-buttons";
import { Avatar } from "../avatar";
import styles from "./ContributionCard.module.css"

export const ContributionCard = () => {
  return (
    <div className={styles.ContributionCard}>
      <Card
        style={{ padding: 0, width: "350px", height: "320px" }}>
        <Image
          unoptimized
          objectFit="cover"
          width="350px"
          height="150px"
          src="https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" />
        <div className={styles.ContributionCard__InfoContainer}>
          <div className={styles.ContributionCard__AuthorBadge}>
            <Avatar
              unoptimized
              size="small"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" />
            <div className={styles.ContributionCard__PostInfo}>
              <strong>Luis Anaya</strong>
              <p style={{ margin: 0 }}>17 Oct 2022</p>
            </div>
          </div>
          <div className={styles.ContributionCard__ArticleHeading}>
            <a href={"https://google.com"} target="_blank" rel="noopener noreferrer">
              <h3 className={styles.ContributionCard__ArticleTitle}>
                How to model 3D characters with ThreeJS and React (GitHub repo available)
              </h3>
            </a>
            <p className={styles.ContributionCard__ArticleType}>Video</p>
          </div>
          <div className={styles.ContributionCard__ArticleOptions}>
            <ActionButtons />
          </div>
        </div>
      </Card>
    </div>
  )
}
