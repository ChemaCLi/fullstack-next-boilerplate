import { NextApiRequest, NextApiResponse } from "next"
export interface IUser {
  id?: number
  name?: string | null
  email?: string | null
}