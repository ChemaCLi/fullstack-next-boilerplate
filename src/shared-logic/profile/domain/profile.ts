import { Hobby } from "../../hobby/domain/hobby"
import { isUndefined } from "../../shared/utils/is-undefined"

interface ProfileProperties {
  id?: string
  jobTitle?: string
  skills?: string[]
  resume?: string
  hobbies?: Hobby[]
  photoUrl: string
}

export class Profile implements Required<ProfileProperties> {
  public id: string
  public jobTitle: string
  public resume: string
  public skills: string[]
  public hobbies: Hobby[]
  public photoUrl: string

  constructor(properties: ProfileProperties) {
    !isUndefined(properties.id) && this.setId(properties.id)
    !isUndefined(properties.jobTitle) && this.setJobTitle(properties.jobTitle)
    !isUndefined(properties.skills) && this.setSkills(properties.skills)
    !isUndefined(properties.resume) && this.setResume(properties.resume)
    !isUndefined(properties.hobbies) && this.setHobbies(properties.hobbies)
    !isUndefined(properties.photoUrl) && this.setPhotoUrl(properties.photoUrl)
  }

  setId(id: string) {
    this.id = id
  }

  setJobTitle(jobTitle: string) {
    if (jobTitle.length > 50)
      throw new Error("Domain: Job Title must be 50 length as maximum")

    this.jobTitle = jobTitle
  }

  setSkills(skills: string[]) {
    if (!skills.every(skill => !!skill))
      throw new Error("Domain: Some skill hasn't a value")

    this.skills = skills
  }

  setResume(resume: string) {
    if (resume.length > 200)
      throw new Error("Domain: Resume must be 200 length as maximum")

    this.resume = resume
  }

  setHobbies(hobbies: Hobby[]) {
    const allHobbiesAreInstances = hobbies.every(h => (h instanceof Hobby))
    const allHobbiesAreObjects = hobbies.every(h => (typeof h === "object"))

    if (!allHobbiesAreInstances && !allHobbiesAreObjects)
      throw new Error("Domain: a hobby must be an instance of Hobby or an object with the right contract implementation")

    if (!hobbies.every(hobby => !!hobby))
      throw new Error("Domain: Some hobby hasn't a value")

    this.hobbies = allHobbiesAreInstances
      ? hobbies
      : hobbies.map(h => new Hobby(h))
  }

  setPhotoUrl(photoUrl: string) {
    if (!photoUrl?.startsWith("http"))
      throw new Error("Domain: the url should be a valid format")
    this.photoUrl = photoUrl
  }
}
