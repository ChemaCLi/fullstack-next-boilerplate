import React from "react"
import 'antd/dist/antd.css';
import { TeamMemberCard } from "../src/client/ui/components/shared"
import profilePic from "../public/assets/user-avatar-guillermo-rauch.png"

export default {
  title: "List/TeamMemberCard",
  component: TeamMemberCard
}

export const RemoteImage = (args) => {
  return (
    <div>
      <TeamMemberCard
        unoptimized // storybook doesn't work fine with this feature enabled
        {...args} />
    </div>
  )
}

RemoteImage.args = {
  name: "Chema CL",
  imageUrl: "https://cdx.solo.to/user/a/60e488e1585152_36985055.jpg",
  jobTitle: "Frontend Developer"
}

export const StaticImage = args => {
  return (
    <div>
      <TeamMemberCard
        unoptimized // storybook doesn't work fine with this feature enabled
        {...args} />
    </div>
  )
}

StaticImage.args = {
  name: "Guillermo Rauch",
  imageUrl: profilePic,
  jobTitle: "Vercel Co-Founder"
}

export const LargeText = args => {
  return (
    <div>
      <TeamMemberCard
        unoptimized // storybook doesn't work fine with this feature enabled
        {...args} />
    </div>
  )
}

LargeText.args = {
  name: "Guillermo the Very Friendly Programmer",
  imageUrl: profilePic,
  jobTitle: "Programmer, Frontend, Dreamer"
}

