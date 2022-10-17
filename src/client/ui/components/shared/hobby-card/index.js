import { Card } from "../card"
import Image from "next/image"
import { ActionButtons } from "../buttons/action-buttons"

export const HobbyCard = ({
  id = "",
  navigateTo = "",
  onClick,
  name = "",
  imageUrl
}) => {
  return (
    <div
      style={{ width: "200px" }}
      className="HobbyCard">
      <Card
        onClick={() => onClick && onClick({ id })}
        style={{ width: "200px", height: "150px", padding: "0px" }}>
        <div style={{ width: "200px", height: "150px" }}>
          <Image
            unoptimized
            src={imageUrl}
            objectFit="cover"
            width="200px"
            height="150px" />
        </div>
      </Card>
      <div className="HobbyCard__TitleContainer">
        <a
          className="HobbyCard__Title"
          target="_blank"
          rel="noreferrer noopener"
          href={navigateTo}>
          <strong>
            {name}
          </strong>
        </a>
        <div className="OptionsContainer">
          <ActionButtons />
        </div>
      </div>
    </div>
  )
}
