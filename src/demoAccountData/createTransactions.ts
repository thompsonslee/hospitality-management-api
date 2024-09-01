import { Types } from "mongoose"

export const createTransactions = (userId:Types.ObjectId,storageId:Types.ObjectId, mainBarId:Types.ObjectId, sideBarId:Types.ObjectId) => [
    {
      _id: new Types.ObjectId(),
      type: 'buy',
      cost: 704,
      user: userId,
      area: storageId,
      Date: '2024-08-30T06:40:16.176Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'sell',
      cost: 24,
      user: userId,
      area: sideBarId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'sell',
      cost: 48,
      user: userId,
      area: sideBarId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'sell',
      cost: 45,
      user: userId,
      area: sideBarId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'buy',
      cost: 96,
      user: userId,
      area: storageId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'buy',
      cost: 390,
      user: userId,
      area: storageId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'sell',
      cost: 130,
      user: userId,
      area: mainBarId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'sell',
      cost: 24,
      user: userId,
      area: mainBarId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'sell',
      cost: 24,
      user: userId,
      area: mainBarId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'buy',
      cost: 500,
      user: userId,
      area: storageId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'sell',
      cost: 16,
      user: userId,
      area: sideBarId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'sell',
      cost: 8,
      user: userId,
      area: sideBarId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'sell',
      cost: 15,
      user: userId,
      area: sideBarId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'buy',
      cost: 292,
      user: userId,
      area: storageId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'buy',
      cost: 240,
      user: userId,
      area: storageId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    },
    {
      _id: new Types.ObjectId(),
      type: 'buy',
      cost: 270,
      user: userId,
      area: storageId,
      Date: '2024-08-30T07:22:30.791Z',
      __v: 0
    }
  ]