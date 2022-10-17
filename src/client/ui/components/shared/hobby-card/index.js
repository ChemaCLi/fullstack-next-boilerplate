import { Card } from "../card"
import Image from "next/image"
import styles from "./HobbyCard.module.css"
import { ActionButtons } from "../buttons/action-buttons";

export const HobbyCard = () => {
  return (
    <div style={{ width: "200px" }}>
      <Card
        style={{ width: "200px", height: "150px", padding: "0px" }}>
        <div style={{ width: "200px", height: "150px" }}>
          <Image
            unoptimized
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ryan_Dahl.jpg/440px-Ryan_Dahl.jpg"
            objectFit="cover"
            width="200px"
            height="150px" />
        </div>
      </Card>
      <div className={styles.HobbyCard__TitleContainer}>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://google.com">
          <strong className={styles.HobbyCard__Title}>
            Skate
          </strong>
        </a>
        <ActionButtons />
      </div>
    </div>
  )
}
