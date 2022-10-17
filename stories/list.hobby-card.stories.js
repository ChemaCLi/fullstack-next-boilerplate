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
      renderItem={hobby => <HobbyCard />}
      dataSource={[
        { id: "01", name: "Skate" },
        { id: "02", name: "Drawing" },
        { id: "03", name: "Drawing" },
        { id: "04", name: "Drawing" },
        { id: "05", name: "Drawing" },
        { id: "06", name: "Drawing" },
        { id: "07", name: "Drawing" },
        { id: "08", name: "Drawing" },
        { id: "09", name: "Drawing" }
      ]} />
  )
}

HobbiesList.args = {

}
