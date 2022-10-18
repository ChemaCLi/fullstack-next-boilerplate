import { Card } from "../card";
import Image from "next/image";
import { ActionButtons } from "../buttons/action-buttons";
import { Avatar } from "../avatar";

export const ContributionCard = () => {
  return (
    <Card style={{ padding: 0, width: "300px", height: "350px" }}>
      <Image
        unoptimized
        objectFit="cover"
        width="300px"
        height="150px"
        src="https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" />
      <div
        style={{ padding: "8px" }}
        className="InfoContainer">
        <div
          className="AuthorBadge"
          style={{
            display: "flex",
            flexDirection: "row"
          }}>
          <Avatar
            unoptimized
            size="small"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" />
          <div style={{ display: "block", marginLeft: "8px" }}>
            <strong>Luis Anaya</strong>
            <p>17 Oct 2022</p>
          </div>
        </div>
        <div className="ArticleHeading" style={{ marginLeft: "48px" }}>
          <h3>
            How to model 3D characters with ThreeJS
          </h3>
          <p>Video</p>
        </div>
        <div
          className="ArticleOptions"
          style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionButtons />
        </div>
      </div>
    </Card>
  )
}
