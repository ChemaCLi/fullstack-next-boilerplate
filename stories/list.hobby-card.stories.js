
import "../styles/components/action-button.css"
import "../styles/components/hobby-card.css"
import { GridList, HobbyCard } from "../src/client/ui/components/shared";

export default {
  title: "List/HobbyCard",
  component: HobbyCard
}

export const EmptyHobbyCard = args => {
  return (
    <HobbyCard>
    </HobbyCard>
  )
}

EmptyHobbyCard.args = {
}

export const HobbiesList = args => {
  return (
    <GridList
      itemDimensions={{ width: "200px", height: "200px" }}
      keyExtractor={hobby => hobby.id}
      renderItem={hobby => <HobbyCard
        imageUrl={hobby.imageUrl}
        navigateTo={`./${hobby.id}/hobby/${hobby.id}`}
        name={hobby.name} />}
      dataSource={[
        { id: "01", name: "Skate", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" },
        { id: "02", name: "Drawing", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" },
        { id: "03", name: "Computing", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" },
        { id: "04", name: "Programming", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" },
        { id: "05", name: "To Be beautiful", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" },
        { id: "06", name: "Large Breaking Hobby Naming", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" },
        { id: "07", name: "Drawing", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" },
        { id: "08", name: "Drawing", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" },
        { id: "09", name: "Drawing", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg" }
      ]} />
  )
}

HobbiesList.args = {

}
