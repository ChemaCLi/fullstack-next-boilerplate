import { ContributionCard } from "../src/client/ui/components/shared/contribution-card";

export default {
  title: "List/ContributionCard",
  component: ContributionCard
}

export const FilledWithData = (args) => {
  return (
    <ContributionCard {...args} />
  )
}

FilledWithData.args = {
  unoptimized: true,
  type: "Video",
  articleName: "How to model 3D characters with ThreeJS and React (GitHub repo available)",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg",
  originalPostUrl: "https://google.com",
  authorName: "Luis Anaya",
  publicationDate: "2022-10-17",
  authorPhotoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/X-4_with_Female_Computer_-_GPN-2000-001932.jpg"
}
