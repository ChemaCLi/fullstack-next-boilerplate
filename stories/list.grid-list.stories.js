import 'antd/dist/antd.css';
import { GridList, TeamMemberCard } from "../src/client/ui/components/shared";


export default {
  title: "List/GridList",
  component: GridList
}

export const ResponsiveGridList = args => {
  return (
    <GridList
      dataSource={args.dataSource}
      keyExtractor={user => user?.id}
      renderItem={user => (
        <TeamMemberCard
          unoptimized // hack to support remote images on storybook
          imageUrl={user.photo}
          name={user.name}
          jobTitle={user.title} />
      )} />
  )
}

ResponsiveGridList.args = {
  dataSource: [
    { id: "07", name: "Ada Lovelace", title: "Computer Inventor", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850.jpg/440px-Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850.jpg" },
    { id: "08", name: "Alan Mathison Turing", title: "Computer Scientist", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/440px-Alan_Turing_Aged_16.jpg" },
    { id: "05", name: "Dennis Ritchie", title: "Father of C and Unix", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/440px-Dennis_Ritchie_2011.jpg" },
    { id: "06", name: "Tim Berners-Lee", title: "Inventor of Internet", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/440px-Sir_Tim_Berners-Lee_%28cropped%29.jpg" },
    { id: "03", name: "Brendan Eich", title: "JavaScript Creator", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/440px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg" },
    { id: "15", name: "Ryan Dahl", title: "Software Engineer", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ryan_Dahl.jpg/440px-Ryan_Dahl.jpg" },
    { id: "01", name: "Guillermo Rauch", title: "Vercel Co-Founder", photo: "https://miro.medium.com/max/1400/1*ENddkVWaWep4JZeQuXg04A.png" },
    { id: "04", name: "Nuria Soriano", title: "Senior Frontend Developer", photo: "https://pbs.twimg.com/profile_images/1397121924434702336/i6rqVVSj_400x400.jpg" },
    { id: "02", name: "Chema CL", title: "Made this web u.u", photo: "https://cdx.solo.to/user/a/60e488e1585152_36985055.jpg" },
  ],
}
