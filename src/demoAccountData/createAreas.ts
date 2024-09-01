import { Types } from "mongoose"



export const createAreas = (userId:Types.ObjectId,storageId:Types.ObjectId,mainBarId:Types.ObjectId,SideBarId:Types.ObjectId) => [
    {
      _id: storageId,
      name: 'Storage',
      user: userId,
      __v: 0
    },
    {
      _id: mainBarId,
      name: 'Main Bar',
      user: userId,
      __v: 0
    },
    {
      _id: SideBarId,
      name: 'Side Bar',
      user: userId,
      __v: 0
    }
  ]
  