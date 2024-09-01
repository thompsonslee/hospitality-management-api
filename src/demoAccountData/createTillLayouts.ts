import { Types } from "mongoose"

export const createTillLayouts = (mainBarId: Types.ObjectId,sideBarId: Types.ObjectId) => [
    {
        _id: new Types.ObjectId(),
        name: 'Side Bar Till 1',
        area: sideBarId,
        gridItems: [
            {
            product: '66d167db0a630f90315dfdb4',
            row: 0,
            column: 0,
            _id: '66d16b8d0745835613fb87ca'
            },
            {
            product: '66c19c86433678afcecac719',
            row: 0,
            column: 1,
            _id: '66d16b8d0745835613fb87cb'
            },
            {
            product: '66d1681f0a630f90315dfdb6',
            row: 0,
            column: 2,
            _id: '66d16b8d0745835613fb87cc'
            },
            {
            product: '66cabe7bb237c75938b3f2ec',
            row: 0,
            column: 3,
            _id: '66d16b8d0745835613fb87cd'
            },
            {
            product: '66d168680a630f90315dfdb7',
            row: 0,
            column: 4,
            _id: '66d16b8d0745835613fb87ce'
            },
            {
            product: '66d167f20a630f90315dfdb5',
            row: 1,
            column: 0,
            _id: '66d16b8d0745835613fb87cf'
            },
            {
            product: '66d168a10a630f90315dfdb9',
            row: 1,
            column: 1,
            _id: '66d16b8d0745835613fb87d0'
            }
        ],
        size: 5,
        __v: 0
    },  
    {
        _id: new Types.ObjectId(),
        name: 'Main Bar Till 1',
        area: mainBarId,
        gridItems: [
            {
            product: '66d167db0a630f90315dfdb4',
            row: 0,
            column: 0,
            _id: '66d1a78afcaf2918ceee508a'
            },
            {
            product: '66c19c86433678afcecac719',
            row: 0,
            column: 1,
            _id: '66d1a78afcaf2918ceee508b'
            },
            {
            product: '66d1681f0a630f90315dfdb6',
            row: 0,
            column: 2,
            _id: '66d1a78afcaf2918ceee508c'
            },
            {
            product: '66cabe7bb237c75938b3f2ec',
            row: 0,
            column: 3,
            _id: '66d1a78afcaf2918ceee508d'
            },
            {
            product: '66d168680a630f90315dfdb7',
            row: 0,
            column: 4,
            _id: '66d1a78afcaf2918ceee508e'
            },
            {
            product: '66d167f20a630f90315dfdb5',
            row: 2,
            column: 0,
            _id: '66d1a78afcaf2918ceee508f'
            },
            {
            product: '66d168a10a630f90315dfdb9',
            row: 2,
            column: 1,
            _id: '66d1a78afcaf2918ceee5090'
            },
            {
            product: '66cff0cc273ed13ebef1b3ae',
            row: 4,
            column: 0,
            _id: '66d1a78afcaf2918ceee5091'
            },
            {
            product: '66d167b10a630f90315dfdb2',
            row: 4,
            column: 1,
            _id: '66d1a78afcaf2918ceee5092'
            },
            {
            product: '66d167c70a630f90315dfdb3',
            row: 4,
            column: 2,
            _id: '66d1a78afcaf2918ceee5093'
            },
            {
            product: '66d168850a630f90315dfdb8',
            row: 4,
            column: 3,
            _id: '66d1a78afcaf2918ceee5094'
            }
        ],
        size: 7,
        __v: 0
    }
]