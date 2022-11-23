import { Card } from "../card"
import Image from "next/image"
import { Avatar } from "../avatar"
import styles from "./ContributionCard.module.css"
import { ActionButtons } from "../buttons/action-buttons"
import { toReadableDate } from "../../../utils/to-readable-date"

export const ContributionCard = ({
  onEdit,
  onDelete,
  onShowDetail,
  type,
  imageUrl,
  authorName,
  articleName,
  authorPhotoUrl,
  publicationDate,
  originalPostUrl,
  unoptimized = false
}) => {
  const readablePublicationDate = publicationDate
    ? toReadableDate(publicationDate)
    : null

  return (
    <div className={styles.ContributionCard}>
      <Card
        style={{ padding: 0, width: "350px", height: "320px" }}>
        <Image
          width="350px"
          height="150px"
          src={imageUrl}
          objectFit="cover"
          unoptimized={unoptimized} />
        <div className={styles.ContributionCard__InfoContainer}>
          <div className={styles.ContributionCard__AuthorBadge}>
            <Avatar
              size="small"
              unoptimized={unoptimized}
              imageUrl={authorPhotoUrl} />
            <div className={styles.ContributionCard__PostInfo}>
              <strong>{authorName}</strong>
              {readablePublicationDate
                ? <p style={{ margin: 0 }}>{readablePublicationDate}</p>
                : null}
            </div>
          </div>
          <div className={styles.ContributionCard__ArticleHeading}>
            <a
              href={originalPostUrl} target="_blank"
              rel="noopener noreferrer">
              <h3 className={styles.ContributionCard__ArticleTitle}>
                {articleName}
              </h3>
            </a>
            <p className={styles.ContributionCard__ArticleType}>
              {type}
            </p>
          </div>
          <div className={styles.ContributionCard__ArticleOptions}>
            <ActionButtons
              onEdit={onEdit}
              onDelete={onDelete}
              onShowDetail={onShowDetail} />
          </div>
        </div>
      </Card>
    </div>
  )
}
