import { prisma } from "../prisma-client"
import { NextApiRequest, NextApiResponse, } from "next"
import { IUser, INextAPIError } from '@/typeDefs'

export default async function handler (req: NextApiRequest, res: NextApiResponse<IUser | { error: string | unknown }>) {
  try {
    switch (req.method) {
      case 'PATCH':
        return updateUser(req, res)
      case 'DELETE':
        return deleteUser(req, res)
      case 'GET':
        return getUser(req, res)
      default:
        return res.status(405).json({ error: "Method not allowed in this path" })
    }
  } catch (e) {
    const err = e as INextAPIError
    res.status(500).json({ error: err?.message || e })
  } finally {
    prisma.$disconnect()
  }
}

const getUser = async (req: NextApiRequest, res: NextApiResponse): Promise<IUser | null> => {
  const { query: { id } } = req

  const user = await prisma.user.findUnique({ where: { id: Number(id) } })

  res.status(200).json({ data: user })
  return user
}

const updateUser = async (req: NextApiRequest, res: NextApiResponse): Promise<IUser> => {
  const {
    body: { email, name },
    query: { id }
  } = req

  const updatedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      name,
      email,
    }
  })
  res.status(202).json({ data: updatedUser })
  return updatedUser
}


const deleteUser = async (req: NextApiRequest, res: NextApiResponse): Promise<IUser> => {
  const {
    query: { id },
  } = req

  const userId = Number(id)

  const deletedUser = await prisma.user.delete({
    where: { id: userId }
  })

  res.status(202).json({ data: deletedUser })
  return deletedUser
}
