import { Location, Media } from '../src/payload-types'
import { getImageAsset } from '@sanity/asset-utils'
import payload from 'payload'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const { PAYLOAD_SECRET, MONGODB_URI } = process.env

const regionMap = (region: string) => {
  switch (region) {
    case '333b1884-bdae-43e2-8a96-b2c89ea89c79':
      return 'dorne'
    case 'bef10f36-8ac8-4780-894e-bbc1978884d3':
      return 'riverlands'
    case '94dceb06-f437-481e-b8f7-eac882e6d9c3':
      return 'theWall'
    case 'a5b3b817-c80d-4621-967c-f13b619ae235':
      return 'north'
    case 'a6b0523a-c2a7-48cd-9132-86a92cd8ba9f':
      return 'vale'
    case '4a1046e1-af4c-4e58-8beb-1db82b0562c7':
      return 'ironIslands'
    case 'fa9b1818-54dc-4799-a10b-9e25b8f0c547':
      return 'westerlands'
    case 'cf2197be-be99-4d62-95f6-ff452b07f0ec':
      return 'crownlands'
    case 'fb625d70-c2f1-4625-91b5-68b9f89064a4':
      return 'stormlands'
    case '12692247-e688-4d81-838a-083b12548ece':
      return 'reach'
    case 'd077ff2b-0ba9-48f0-b018-72dccda16187':
      return 'beyondTheWall'
  }
}

const buildCategoryMap = (buildType: string) => {
  switch (buildType) {
    case '3c75eaa9-3405-48d6-9aa1-82a7e49ff08a':
      return 'city'
    case 'aa78e9be-b3ce-4112-9ab3-7a052ac5b020':
      return 'castle'
    case 'f47f7fe4-7684-46cc-86aa-9b7275f4e0de':
      return 'town'
    case '2a760f6a-022e-4f0c-9cff-9a9d9e613f6c':
      return 'village'
    case '0532d707-dcfa-455c-847a-c3c6121ab875':
      return 'holdfast'
    case 'd2532a38-7ecc-43d9-9769-ddd442d0d831':
      return 'keep'
    case '932860c4-afd3-4ddf-8f7e-24706a24c8f1':
      return 'tower'
    case 'f7e66aa6-0612-4c05-a4cf-9a29b113b855':
      return 'clan'
    case 'b27697c2-ffc7-4339-aa55-b9d248c4d015':
      return 'crannog'
    case '925faa14-5220-4bda-9d69-024f6366019d':
      return 'landmark'
    case 'eea65049-09b1-4a2d-b340-cfa23c676618':
      return 'ruin'
    case '666e74f4-1fd4-4c1d-a829-53ba176ba8cb':
      return 'miscellaneous'
    default:
      return buildType
  }
}

const test = {
  _createdAt: '2021-01-23T01:00:47Z',
  _id: 'pyke',
  _rev: 'ztp47YqpuX31viMd75x26A',
  _type: 'location',
  _updatedAt: '2022-04-28T01:45:29Z',
  additionalImages: {
    images: [
      {
        _key: '1fTfQ5u4',
        _type: 'image',
        asset: {
          _ref: 'image-c4c0726a704821375b0884da2cb4423f65b70058-1366x768-png',
          _type: 'reference',
        },
      },
      {
        _key: 'VSClmzVZ',
        _type: 'image',
        asset: {
          _ref: 'image-c6e084e0e190c8eaaffbdb5c5791292dc39568bb-1366x768-png',
          _type: 'reference',
        },
      },
      {
        _key: '7Oc8V7ql',
        _type: 'image',
        asset: {
          _ref: 'image-9db21793d325fc9752d84d7742870800caf51365-1366x768-png',
          _type: 'reference',
        },
      },
    ],
  },
  application: '',
  bannerImage: {
    _type: 'image',
    asset: {
      _ref: 'image-f2c704fe2bd4f4cb48bd1b738c66e9c18aeca464-180x360-png',
      _type: 'reference',
    },
  },
  body: [
    {
      _key: 'e15d017bd8ed',
      _type: 'block',
      children: [
        { _key: 'e15d017bd8ed0', _type: 'span', marks: ['strong'], text: 'Pyke' },
        {
          _key: 'e15d017bd8ed1',
          _type: 'span',
          marks: [],
          text: " is an ancient stronghold. It was originally built on a cliff jutting out into the sea, but over time the cliff has eroded, leaving the castle's towers standing on series of small, barren rock stacks, surrounded by water. Since there is no safe anchorage at Pyke, those who wish to travel there have to sail to nearby Lordsport, which is managed by House Botley under direct control of House Greyjoy of Pyke.",
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'c22258bd391a',
      _type: 'block',
      children: [
        { _key: 'c22258bd391a0', _type: 'span', marks: ['strong'], text: 'House Greyjoy of Pyke' },
        {
          _key: 'c22258bd391a1',
          _type: 'span',
          marks: [],
          text: ' is one of the most prominent houses of Westeros and rules over The Iron Islands from the Seastone Chair in the castle of Pyke on the island of the same name. The head of the family is traditionally known as the Lord Reaper of Pyke. Their sigil is a golden kraken on a black field, and their house motto is "We Do Not Sow." The Greyjoys of Pyke claim descent from the Grey King of the Age of Heroes, who according to legend married a mermaid.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'be37e040eb17',
      _type: 'block',
      children: [
        {
          _key: 'be37e040eb170',
          _type: 'span',
          marks: [],
          text: 'Historically, House Greyjoy was often selected by the kingsmoot as kings alongside other prominent houses until the Conquest when King Harren the Black of House Hoare met his fate in Harrenhal and the surving lords of the Iron Islands fell into chaos. After the islands bent the knee to Aegon the Conqueror, he allowed them to choose which house would rule over them in his name and they chose Lord Vickon Greyjoy of Pyke.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '6faf274fad78',
      _type: 'block',
      children: [
        {
          _key: '6faf274fad780',
          _type: 'span',
          marks: [],
          text: "From Pyke, the Greyjoys have tried to revive the Old Way, raid the continent, and reclaim their independence from the Iron Throne, but their rebellions have been put down one way or another. Most recently following Robert's Rebellion, Lord Balon Greyjoy created the Iron Fleet and led his own rebellion against the Iron Throne, declaring himself King of the Iron Islands, like many of his ancestors. Although he burned the Lannister fleet at anchor, he was defeated by the mainland forces, his eldest songs Rodrik and Maron were killed, and his only surviving son Theon was given as a hostage and ward to Lord Eddard Stark.",
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '8b9db0fe5e04',
      _type: 'block',
      children: [
        {
          _key: '8b9db0fe5e040',
          _type: 'span',
          marks: [],
          text: 'In the War of the Five Kings, Balon Greyjoy claims independence again, leading to a series of skirmishes and political wrestling involving his daughter Asha, his estranged son Theon, and his three brothers: Aeron Damphair, the high priest of the Drowned God; Victarion, Lord Captain of the Iron Fleet; and Euron, who sailed the world on his ship ',
        },
        { _key: '8b9db0fe5e041', _type: 'span', marks: ['em'], text: 'Silence.' },
        { _key: '8b9db0fe5e042', _type: 'span', marks: [], text: '\n' },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'aeb7f551272c',
      _type: 'block',
      children: [{ _key: 'aeb7f551272c0', _type: 'span', marks: [], text: 'Features' }],
      markDefs: [],
      style: 'h3',
    },
    {
      _key: '523386494cf7',
      _type: 'block',
      children: [
        { _key: '523386494cf70', _type: 'span', marks: ['strong'], text: 'Spires,' },
        {
          _key: '523386494cf71',
          _type: 'span',
          marks: [],
          text: ' the castle is built on a cliffside and several stone spires that rise from the Sunset Sea and are pounded by the surf. The different towers and keeps are connected by bridges, some made of stone and others wooden.',
        },
      ],
      level: 1,
      listItem: 'bullet',
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'b4349a428efa',
      _type: 'block',
      children: [
        { _key: 'b4349a428efa0', _type: 'span', marks: ['strong'], text: 'The Gatehouse,' },
        {
          _key: 'b4349a428efa1',
          _type: 'span',
          marks: [],
          text: " guards the entrance to the castle complex. The walls of Pyke run in a crescent moon from cliff to cliff, with the gatehouse providing entry, located in the center portion of the wall and including an iron portcullis to provide additional protection should the wall be attacked. There are three towers to either side; the southernmost tower is new, made of a paler grey stone, after the old southern tower had been destroyed during Greyjoy's Rebellion when King Robert I Baratheon breached the walls. It is separated from the Great Keep by a high bridge.",
        },
      ],
      level: 1,
      listItem: 'bullet',
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '3c24bc5af567',
      _type: 'block',
      children: [
        { _key: '3c24bc5af5670', _type: 'span', marks: ['strong'], text: 'The Great Keep,' },
        {
          _key: '3c24bc5af5671',
          _type: 'span',
          marks: [],
          text: ' is a massive grey stone structure and caps the largest islet. It is connected to the Bloody Keep by a covered stone walkway. Its long smoky hall contains the Seastone Chair, an ancient throne carved from a mysterious black stone.',
        },
      ],
      level: 1,
      listItem: 'bullet',
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '5bed5417f5ce',
      _type: 'block',
      children: [
        { _key: '5bed5417f5ce0', _type: 'span', marks: ['strong'], text: 'The Bloody Keep,' },
        {
          _key: '5bed5417f5ce1',
          _type: 'span',
          marks: [],
          text: ' or Guest Keep is one of the largest sections of the castle. It lies on its own island, further out than the Great Keep. Its halls are larger and better furnished. It received its name a thousand years ago when the sons of the river king, Bernarr II Justman, were slaughtered within it and their pieces returned to their father on the mainland.',
        },
      ],
      level: 1,
      listItem: 'bullet',
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '1f55461f60ce',
      _type: 'block',
      children: [
        { _key: '1f55461f60ce0', _type: 'span', marks: ['strong'], text: 'The Kitchen Keep,' },
        {
          _key: '1f55461f60ce1',
          _type: 'span',
          marks: [],
          text: ' sits on its own island. It lies further out from the mainland than the Great Keep.',
        },
      ],
      level: 1,
      listItem: 'bullet',
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '590ae0951fdd',
      _type: 'block',
      children: [
        { _key: '590ae0951fdd0', _type: 'span', marks: ['strong'], text: 'The Sea Tower,' },
        {
          _key: '590ae0951fdd1',
          _type: 'span',
          marks: [],
          text: ' rises from the outermost island at the far reaches of the island. It is the oldest part of the castle, and is round and tall. The base of the tower is white from centuries of salt spray and is crooked. To get from the Great Keep to the Sea Tower, one must cross three bridges. The tower contains the solar of Lord Greyjoy.',
        },
      ],
      level: 1,
      listItem: 'bullet',
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'f429338177a8',
      _type: 'block',
      children: [{ _key: 'f429338177a80', _type: 'span', marks: [], text: 'Construction' }],
      markDefs: [],
      style: 'h3',
    },
    {
      _key: 'cdab5c0d746a',
      _type: 'figure',
      alt: 'PykeRenderLabelled',
      caption: 'The buildings of Pyke labelled on a render by Pizzainacup.',
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-ef318e37eecde2234a2e42d882fd48bb697350f6-1920x1200-jpg',
          _type: 'reference',
        },
      },
    },
    {
      _key: '2083d32d0962',
      _type: 'figure',
      alt: 'PykeGIF',
      caption: 'A GIF of Pyke created by Contra.',
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-6f195b5225b6b4ab2adcdb78e73aa727e377b7ef-445x261-gif',
          _type: 'reference',
        },
      },
    },
    {
      _key: '76e49abd620e',
      _type: 'block',
      children: [
        {
          _key: '76e49abd620e0',
          _type: 'span',
          marks: [],
          text: 'Pyke was completed on October 5, 2014 as part of the Iron Islands redo led by SMP. This server build replaced an older version of Pyke, which needed a redo like much of the Iron Islands because of new blocks, textures, and better planning and buildmanship of members of the server. The castle was one of the main server builds or major builds on the Iron Islands planned before beginning the Iron Islands redo alongside Lordsport, Pebbleton, and the Ten Towers.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '5169e55a520d',
      _type: 'block',
      children: [{ _key: '5169e55a520d0', _type: 'span', marks: [], text: 'Inspiration' }],
      markDefs: [],
      style: 'h3',
    },
    {
      _key: '1bbaacf1fe5f',
      _type: 'figure',
      alt: 'PykeHBO',
      caption: 'Pyke as imagined in the HBO series.',
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-d5b9a5ba247f831a4b1d662fdb0876a014d0a6b8-688x409-jpg',
          _type: 'reference',
        },
      },
    },
    {
      _key: '37e0f8b23a9a',
      _type: 'block',
      children: [
        {
          _key: '37e0f8b23a9a0',
          _type: 'span',
          marks: [],
          text: 'The castle is described very carefully in the books and also wonderfully imagined in the HBO show. Both the book descpription, images from the show, fan art, and our own imagination based on the Iron Islands style guide were used to complete the castle of Pyke.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '436cd2f6973f',
      _type: 'block',
      children: [{ _key: '436cd2f6973f0', _type: 'span', marks: [], text: 'Videos' }],
      markDefs: [],
      style: 'h3',
    },
    {
      _key: '8e173e7040aa',
      _type: 'video',
      url: 'https:https://www.youtube.com/embed/utJjyrP0GWM',
    },
    {
      _key: '9136837e85ec',
      _type: 'video',
      url: 'https:https://www.youtube.com/embed/dn4dVo5Rw5Y',
    },
    {
      _key: 'e285d11ce711',
      _type: 'block',
      children: [{ _key: 'e285d11ce7110', _type: 'span', marks: [], text: '\n' }],
      markDefs: [],
      style: 'normal',
    },
  ],
  buildCategory: [
    { _key: 'jHGYOlmi', _ref: 'aa78e9be-b3ce-4112-9ab3-7a052ac5b020', _type: 'reference' },
  ],
  dateCompleted: '2013-10-05T07:00:00+00:00',
  dateStarted: '2013-10-05T07:00:00+00:00',
  difficulty: '4',
  house: 'House Greyjoy',
  projectLead: 'SMP',
  projectStatus: 'completed',
  region: { _ref: '4a1046e1-af4c-4e58-8beb-1db82b0562c7', _type: 'reference' },
  slug: { _type: 'slug', current: 'pyke' },
  title: 'Pyke',
  warp: '/warp pyke',
  redoAvailable: false,
  serverProject: false,
  dynmapZoom: undefined,
  dynmapXcoord: undefined,
  dynmapYcoord: undefined,
}

// const test = {
//   _createdAt: '2021-01-23T00:49:16Z',
//   _id: 'winterfell',
//   _rev: 'K9zPvjfXvJSxgwFNXXp0bp',
//   _type: 'location',
//   _updatedAt: '2022-09-13T15:09:23Z',
//   additionalImages: {
//     images: [
//       {
//         _key: 'iV5QrUrO',
//         _type: 'image',
//         asset: {
//           _ref: 'image-9a1f7dadd33e60fe18ec3f003465e4ca5d2da205-3840x2160-jpg',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'ERxG6JqS',
//         _type: 'image',
//         asset: {
//           _ref: 'image-cbb8a2cff82258aa7c7fd83a986f2f858afb90af-1280x720-png',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'MqAba8Op',
//         _type: 'image',
//         asset: {
//           _ref: 'image-695854461a69039f79c494e935c658d9a2d692fc-1280x720-png',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'SzjdxhfC',
//         _type: 'image',
//         asset: {
//           _ref: 'image-ac34be1c93568b320abba2667f4c6ae9f1c99c3f-1280x720-png',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'zOZIbqMb',
//         _type: 'image',
//         asset: {
//           _ref: 'image-863cb1be080de05e1cd8aec0153af280224b1398-1280x720-png',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'RH8s4ThG',
//         _type: 'image',
//         asset: {
//           _ref: 'image-c3e92c5852d9b8ad2ca1ce66c8a39f2fe3557331-1280x720-png',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'gUcHA2AZ',
//         _type: 'image',
//         asset: {
//           _ref: 'image-46eb0f26e57faa82979c1f30d68939d623f10f50-1280x720-png',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'HB1wIjLE',
//         _type: 'image',
//         asset: {
//           _ref: 'image-95f58b9ceba7948d63a3c7c02f36a77a2e1faa38-1280x720-png',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'l62cQMax',
//         _type: 'image',
//         asset: {
//           _ref: 'image-f8a0570fd40a81a966752632f5aedcf4611006e2-1280x720-png',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'yIeMd3tQ',
//         _type: 'image',
//         asset: {
//           _ref: 'image-070f985501a479fcdb7ec4e20266458a70570faa-3840x2160-jpg',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'cCzbNwqw',
//         _type: 'image',
//         asset: {
//           _ref: 'image-ca71ab6a442584046d979fd86c12b5fa11099f5f-1280x720-png',
//           _type: 'reference',
//         },
//       },
//       {
//         _key: 'mYXWFSIV',
//         _type: 'image',
//         asset: {
//           _ref: 'image-2edfb8bd85ebe99781e19f1765c691803294f664-1280x800-jpg',
//           _type: 'reference',
//         },
//       },
//     ],
//   },
//   application: '',
//   bannerImage: {
//     _type: 'image',
//     asset: {
//       _ref: 'image-b9497b5e499a89ece8a981022aa76e880769236f-180x360-png',
//       _type: 'reference',
//     },
//   },
//   body: [
//     {
//       _key: '3ebb152f43e9',
//       _type: 'block',
//       children: [
//         { _key: '3ebb152f43e90', _type: 'span', marks: [], text: 'The castle ' },
//         { _key: '3ebb152f43e91', _type: 'span', marks: ['strong'], text: 'Winterfell' },
//         { _key: '3ebb152f43e92', _type: 'span', marks: [], text: ', seat of power of ' },
//         { _key: '3ebb152f43e93', _type: 'span', marks: ['strong'], text: 'House Stark' },
//         { _key: '3ebb152f43e94', _type: 'span', marks: [], text: ', capital of the ' },
//         { _key: '3ebb152f43e95', _type: 'span', marks: ['a5f6cf0fefa9'], text: 'North' },
//         {
//           _key: '3ebb152f43e96',
//           _type: 'span',
//           marks: [],
//           text: ', is located south of the northern mountains, and east of The Wolfswood. The Kingsroad, which traverses The North passes close by to the east of the castle. House Stark has been the main political power in The North for thousands of years, which is why Winterfell is considered to be the capital of this region. Over the course of history, the castle had been extended several times. Nowadays, it is a massive complex of interconnected structures interupted by a dozen of small yards and passages. With its system of hotsprings, the water of which is pumped through the walls, life within the castle stays comfortable even during the coldest years of winter.',
//         },
//       ],
//       markDefs: [
//         { _key: 'a5f6cf0fefa9', _type: 'link', href: 'https://westeroscraft.com/wiki/north' },
//       ],
//       style: 'normal',
//     },
//     {
//       _key: '7349dfe7c759',
//       _type: 'block',
//       children: [
//         {
//           _key: '7349dfe7c7590',
//           _type: 'span',
//           marks: [],
//           text: 'In the south, in front of the main gate of Winterfell, a seasonal town is situated. The town is often referred to as Winter Town, since it only really comes to life during winter, when the smallfolk returns from their summer farms and the grazing ground for their lifestock farther away.',
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '4012e4d6df7f',
//       _type: 'block',
//       children: [{ _key: '4012e4d6df7f0', _type: 'span', marks: [], text: 'Features' }],
//       markDefs: [],
//       style: 'h2',
//     },
//     {
//       _key: '7c4247920249',
//       _type: 'block',
//       children: [
//         { _key: '7c42479202490', _type: 'span', marks: ['strong'], text: 'Winterfell,' },
//         {
//           _key: '7c42479202491',
//           _type: 'span',
//           marks: [],
//           text: " massive granite complex consisting of several structures that have been constructed progressively over the course of the castle's history. From oldest to youngest: Old Keep (Unused), Old Keep Fortification, Guards Hall, Broken Tower (Ex. tallest watchtower, collapsed after fire), Bell Tower, Great Keep, Inner Walls, Great Hall, Kitchens, Brewery, Rookery, Glass Gardens, Armory, Library, Stables, Warehouse, Kennels, Guesthouse, Storehouse, Granaries, Outer Walls. Some of the structures are interconnected via walkways, cellars or galleries.",
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'fb87f97c01a2',
//       _type: 'block',
//       children: [
//         { _key: 'fb87f97c01a20', _type: 'span', marks: ['strong'], text: "Hot'n'Steamy," },
//         {
//           _key: 'fb87f97c01a21',
//           _type: 'span',
//           marks: [],
//           text: " thermal water rushes through the walls of Winterfell's countless rooms and halls. Over centuries, the Starks have developed a clever system to control and divert the flow.",
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '3d6ff4e24f6d',
//       _type: 'block',
//       children: [
//         {
//           _key: '3d6ff4e24f6d0',
//           _type: 'span',
//           marks: ['strong'],
//           text: 'Battling the Elements, ',
//         },
//         {
//           _key: '3d6ff4e24f6d1',
//           _type: 'span',
//           marks: [],
//           text: "rain and snow, freezing and thawing, the sun's fire and the night's ice take their toll on the ancient fortress. Despite of regular maintenance and structures built to dispose of excess surface water, the Starks sometimes fail to keep their feet dry.",
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '40fa675416df',
//       _type: 'block',
//       children: [
//         { _key: '40fa675416df0', _type: 'span', marks: ['strong'], text: 'A Home to Beasts, ' },
//         {
//           _key: '40fa675416df1',
//           _type: 'span',
//           marks: [],
//           text: "while the Starks are famous for allowing their Direwolves to freely roam the grounds, these are not the only beasts to call the castle's halls and yards their home.",
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'b0fbb346a52a',
//       _type: 'block',
//       children: [
//         { _key: 'b0fbb346a52a0', _type: 'span', marks: ['strong'], text: 'A Home to Men, ' },
//         {
//           _key: 'b0fbb346a52a1',
//           _type: 'span',
//           marks: [],
//           text: 'without a host of servants, Winterfell could never be held in shape or held at all. Masonry, Hunting, Cooking, Leatherwork, Carpentry, etc. Somewhere within the tall walls, there is a someone working on that.',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '38ff7d546742',
//       _type: 'block',
//       children: [
//         { _key: '38ff7d5467420', _type: 'span', marks: ['strong'], text: 'Winter Town, ' },
//         { _key: '38ff7d5467421', _type: 'span', marks: [], text: 'located south of the castle.\n' },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '2097929e64da',
//       _type: 'block',
//       children: [
//         { _key: '2097929e64da0', _type: 'span', marks: ['strong'], text: 'Flooded Quarry, ' },
//         {
//           _key: '2097929e64da1',
//           _type: 'span',
//           marks: [],
//           text: 'located west of the castle, in the Wolfswood.\n',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '58e58f331e5e',
//       _type: 'block',
//       children: [
//         {
//           _key: '58e58f331e5e0',
//           _type: 'span',
//           marks: ['strong'],
//           text: 'Abandoned Crofters Village, ',
//         },
//         {
//           _key: '58e58f331e5e1',
//           _type: 'span',
//           marks: [],
//           text: 'located west of the castle, in the Wolfswood.\n',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '6874fa70f884',
//       _type: 'block',
//       children: [
//         { _key: '6874fa70f8840', _type: 'span', marks: [], text: 'Note: ' },
//         { _key: '6874fa70f8841', _type: 'span', marks: ['e78b132fe6ae'], text: 'House Cassel' },
//         { _key: '6874fa70f8842', _type: 'span', marks: [], text: ', ' },
//         { _key: '6874fa70f8843', _type: 'span', marks: ['491df0c2b7bf'], text: 'House Poole' },
//         { _key: '6874fa70f8844', _type: 'span', marks: [], text: ', ' },
//         { _key: '6874fa70f8845', _type: 'span', marks: ['54a468ed091b'], text: 'Tumbledown Tower' },
//         { _key: '6874fa70f8846', _type: 'span', marks: [], text: ', ' },
//         {
//           _key: '6874fa70f8847',
//           _type: 'span',
//           marks: ['54617976ae7f'],
//           text: "Crofter's Village",
//         },
//         { _key: '6874fa70f8848', _type: 'span', marks: [], text: ', and the ' },
//         {
//           _key: '6874fa70f8849',
//           _type: 'span',
//           marks: ['f0fbaf8f776f'],
//           text: 'North-east Holdfast',
//         },
//         {
//           _key: '6874fa70f88410',
//           _type: 'span',
//           marks: [],
//           text: ' are considered part of the lands in and around Winterfell.',
//         },
//       ],
//       markDefs: [
//         {
//           _key: 'e78b132fe6ae',
//           _type: 'link',
//           href: 'https://awoiaf.westeros.org/index.php/House_Cassel',
//         },
//         {
//           _key: '491df0c2b7bf',
//           _type: 'link',
//           href: 'https://awoiaf.westeros.org/index.php/House_Poole',
//         },
//         {
//           _key: '54a468ed091b',
//           _type: 'link',
//           href: 'https://awoiaf.westeros.org/index.php/Tumbledown_Tower',
//         },
//         {
//           _key: '54617976ae7f',
//           _type: 'link',
//           href: 'https://awoiaf.westeros.org/index.php/Crofters%27_village',
//         },
//         {
//           _key: 'f0fbaf8f776f',
//           _type: 'link',
//           href: 'https://asoiaf.westeros.org/index.php?/topic/95113-winterfells-holdfast/',
//         },
//       ],
//       style: 'normal',
//     },
//     {
//       _key: '3f6424afdfa1',
//       _type: 'block',
//       children: [{ _key: '3f6424afdfa10', _type: 'span', marks: [], text: 'Construction' }],
//       markDefs: [],
//       style: 'h3',
//     },
//     {
//       _key: 'd48e276b5978',
//       _type: 'block',
//       children: [
//         {
//           _key: 'd48e276b59780',
//           _type: 'span',
//           marks: [],
//           text: "After some previous deliberation among the staff as to which server build should be next, Thamus_Knoward began to research for Winterfell on the 10th of February 2014. In order to account for all the decriptions of Winterfell by P.O.V. characters from the books (Catelyn, Eddard, Jon, Arya, Bran, Tyrion, Theon and Sansa), an internal research document was compiled that combined all first-hand quotes about Winterfell with screenshots from the HBO show and depictions of Winterfell by individual artists. On the basis of these quotes and screenshots Thamus_Knoward tested how to relate the canon information in 3D space within Minecraft. This resulted in three models: An off-scale model depicting the show's Winterfell, a 1:4 model that depicted the book's Winterfell and 3 models depicting individual rooms (Catelyn's and Bran's Room, Interior of the Great Hall).",
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '065c2f9c0cd2',
//       _type: 'block',
//       children: [
//         {
//           _key: '065c2f9c0cd20',
//           _type: 'span',
//           marks: [],
//           text: 'In his position of co-leading Winterfell, SMP was tasked with driving the testing/ style determination process that was to be carried out by builders in game at /warp winterfelltest. Hence, SMP plotted the test area, which was subsequently opened to the builders on May 15, 2014. After some initial tests had been build the project ground to a halt. As to not take things over from Thamus_Knoward, who had been busy IRL, SMP resigned his co-leadership position. Staff now focused all efforts towards the completion of the ',
//         },
//         { _key: '065c2f9c0cd21', _type: 'span', marks: ['fd2ed1b9c110'], text: 'Eyrie' },
//         { _key: '065c2f9c0cd22', _type: 'span', marks: [], text: '.' },
//       ],
//       markDefs: [
//         {
//           _key: 'fd2ed1b9c110',
//           _type: 'link',
//           href: 'https://westeroscraft.com/wiki/vale/the-eyrie',
//         },
//       ],
//       style: 'normal',
//     },
//     {
//       _key: '0bd0b58fcb3c',
//       _type: 'block',
//       children: [
//         {
//           _key: '0bd0b58fcb3c0',
//           _type: 'span',
//           marks: [],
//           text: 'On the 5th of July, in order to regain momentum and in search of a new co-lead for Wintefell, Thamus_Knoward translated the book model into a 1:1 2D layout plot made from wool blocks at the intended location. At the time Brookerz and thecoddfish both showed interest in co-leading the project yet declined later due to various reasons. During August, the terrain right under the 2D wool layout was terraformed to account for the differences in elevation described in the books. Public testing for individual structures slowly picked up again. On September 11, Barkus requested to construct a 1:1 rendition of the godswood as a proof of concept, which could later be inserted into the castle. It was granted, because it was hard to see how a dense, atmospheric forest would translate in the concept of a server build.',
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '245800170f94',
//       _type: 'block',
//       children: [
//         {
//           _key: '245800170f940',
//           _type: 'span',
//           marks: [],
//           text: 'Starting from the 1st of February, IwanDeLarch, Thamus_Knoward, Kor_Bro, and other builders gradually translated the 2D layout plot into 3D wireframe models, with exact canon descriptions and a fully laid-out floorplan for each structure. At this time the godswood that Barkus had completed was pasted in. On the 15th of February 2015, Thamus_Knoward completed a Winterfell style guide platform on the basis of the common tests and the 3D wool models. The platform displayed guideines on how to construct eaves and bays, palettes for walls, roads and interior, as well as recurring architectural motives:',
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'ec0d1a1f74a7',
//       _type: 'block',
//       children: [
//         {
//           _key: 'ec0d1a1f74a70',
//           _type: 'span',
//           marks: [],
//           text: 'The roofs of stone buildings are all crow-stepped gables with a 1-2 alternation in the step height.',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'b3a09f3ef404',
//       _type: 'block',
//       children: [
//         {
//           _key: 'b3a09f3ef4040',
//           _type: 'span',
//           marks: [],
//           text: 'There is not a single hallway that is only 1 block wide. All are 2 blocks or more',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '8e5852df0076',
//       _type: 'block',
//       children: [
//         {
//           _key: '8e5852df00760',
//           _type: 'span',
//           marks: [],
//           text: 'Square Towers have large triangular merlons or a crow-stepped gable roof, Round towers usually have a walkway and a flat funnel roof. There are some hybrids of this, e.g. the old granary and the belltower',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '34edf211663f',
//       _type: 'block',
//       children: [
//         {
//           _key: '34edf211663f0',
//           _type: 'span',
//           marks: [],
//           text: 'Colour/palette is indicative of the age: Darker colours = older, lighter colours = younger.',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'cfbbf24eb4e3',
//       _type: 'block',
//       children: [
//         {
//           _key: 'cfbbf24eb4e30',
//           _type: 'span',
//           marks: [],
//           text: 'After a year had passed since its inception, the server build of Winterfell was officially kicked off on the 7th of March 2015. It was intended to be different from previous server builds: Instead of working in large groups under one lead on principal structures, and then spurring them to completion over the course of a weekend, Winterfell was dissected into small individual projects, which were tackled by smaller teams of 4-6 people in their own time. The sections and their contributors are listed below:',
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'f5fb3cf57ce0',
//       _type: 'block',
//       children: [{ _key: 'f5fb3cf57ce00', _type: 'span', marks: [], text: 'Sept: Lead: BenPwen' }],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '9a23965bca5c',
//       _type: 'block',
//       children: [
//         {
//           _key: '9a23965bca5c0',
//           _type: 'span',
//           marks: [],
//           text: 'Brewery: Lead: xKrillenx, Members: Estoop',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '947eaf1679ad',
//       _type: 'block',
//       children: [
//         {
//           _key: '947eaf1679ad0',
//           _type: 'span',
//           marks: [],
//           text: 'North-Eastern Servants Cottages: Lead: Steineke',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '3efa183f4d26',
//       _type: 'block',
//       children: [
//         {
//           _key: '3efa183f4d260',
//           _type: 'span',
//           marks: [],
//           text: 'Guesthouse: Lead: RockroG(Ash), Members: Wanted',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '4a92e31237ee',
//       _type: 'block',
//       children: [
//         {
//           _key: '4a92e31237ee0',
//           _type: 'span',
//           marks: [],
//           text: 'Old-Keep Maesters Tower: Lead: Emoticone, Members: HowyJ',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '65a4f225fea2',
//       _type: 'block',
//       children: [
//         {
//           _key: '65a4f225fea20',
//           _type: 'span',
//           marks: [],
//           text: 'Servants Lichyard: Lead: Barkus',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'c13a9a271162',
//       _type: 'block',
//       children: [
//         { _key: 'c13a9a2711620', _type: 'span', marks: [], text: 'Stark Crypts: Lead: Dutchguard' },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'f4163108a683',
//       _type: 'block',
//       children: [
//         {
//           _key: 'f4163108a6830',
//           _type: 'span',
//           marks: [],
//           text: 'Old-Keep South-East Inner Ward: Members: Benpwen, lEcthelionl, Elfqueen',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'f6728e710762',
//       _type: 'block',
//       children: [
//         {
//           _key: 'f6728e7107620',
//           _type: 'span',
//           marks: [],
//           text: 'Guards Hall: Lead jakeyquack, Member: JmcMarq',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'a27b5bcb55d0',
//       _type: 'block',
//       children: [
//         {
//           _key: 'a27b5bcb55d00',
//           _type: 'span',
//           marks: [],
//           text: 'First/Old Keep: Lead: Reygame, Members: CaptScribble, Kor_Bro, NewEnglandRed,Soccarsoc,Tiny_Rhino',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '62160181f73f',
//       _type: 'block',
//       children: [
//         {
//           _key: '62160181f73f0',
//           _type: 'span',
//           marks: [],
//           text: 'Old Keep Cellars: Lead: Jakeyquack',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '40662b0f838e',
//       _type: 'block',
//       children: [
//         {
//           _key: '40662b0f838e0',
//           _type: 'span',
//           marks: [],
//           text: 'Washing Well and Archery Butts: Lead: Thamus_Knoward: Members: PrinceLafoo',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '933ebb9e1fdc',
//       _type: 'block',
//       children: [
//         {
//           _key: '933ebb9e1fdc0',
//           _type: 'span',
//           marks: [],
//           text: 'Old-Keep North-West Inner Ward: lead: woeninja, Members: starcat',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'debf68094817',
//       _type: 'block',
//       children: [
//         { _key: 'debf680948170', _type: 'span', marks: [], text: 'Bell Tower: Lead: Fduarte' },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '3cae66c50099',
//       _type: 'block',
//       children: [
//         {
//           _key: '3cae66c500990',
//           _type: 'span',
//           marks: [],
//           text: 'Northern Servants Cottages \u0026 Granaries: Lead: JMP, Members: wordsmith, wazzy, scribble',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'db65baa2173d',
//       _type: 'block',
//       children: [
//         { _key: 'db65baa2173d0', _type: 'span', marks: [], text: 'Maesters Tower: Lead: SMP' },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'fc0fbe373371',
//       _type: 'block',
//       children: [
//         {
//           _key: 'fc0fbe3733710',
//           _type: 'span',
//           marks: [],
//           text: 'Maesters Tower Cellars: Lead: Jack',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '47abc149ed41',
//       _type: 'block',
//       children: [
//         { _key: '47abc149ed410', _type: 'span', marks: [], text: 'Cell Tower: Lead: Howy' },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '107121db0815',
//       _type: 'block',
//       children: [
//         {
//           _key: '107121db08150',
//           _type: 'span',
//           marks: [],
//           text: 'Kennel Buildings: Lead: JmcMarq, Members: Soccarsoc',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'ca872afbed6b',
//       _type: 'block',
//       children: [
//         {
//           _key: 'ca872afbed6b0',
//           _type: 'span',
//           marks: [],
//           text: 'Glass Gardens: Lead: Bafflement, Members: Ben, Ash, Knight, pooza, jose, pizza, veggie',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '1920c4c124b8',
//       _type: 'block',
//       children: [
//         {
//           _key: '1920c4c124b80',
//           _type: 'span',
//           marks: [],
//           text: 'Great Hall: Lead: Tact, Members: jMp007, Knight_Krawler, Kor_Bro, Jose, Emile',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '2013cd852d67',
//       _type: 'block',
//       children: [
//         {
//           _key: '2013cd852d670',
//           _type: 'span',
//           marks: [],
//           text: 'Great Hall Cellars: Lead: NickShaiB',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'bee4c63d91e9',
//       _type: 'block',
//       children: [
//         {
//           _key: 'bee4c63d91e90',
//           _type: 'span',
//           marks: [],
//           text: 'Great Kitches: Lead: Bluecichlid, Members: HRSIDKPI, Mamorb, NewEnglandRed09, Ben, RockRoGash, Whoguy, JakeyQuack, Thamus',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '4e48d9f84cfa',
//       _type: 'block',
//       children: [
//         {
//           _key: '4e48d9f84cfa0',
//           _type: 'span',
//           marks: [],
//           text: 'Kitchen Basements: Leader: NewEnglandRed, Members, Jakeyquak, SerJmp, whoguy',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'e9362c1d751a',
//       _type: 'block',
//       children: [
//         {
//           _key: 'e9362c1d751a0',
//           _type: 'span',
//           marks: [],
//           text: 'Livestock, Foals Stables and Servants near Kitches: Lead: Jose, Members: Jack, Lyl, Knight, NewEnglandRed,Soccarsoc',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'f9e24bf18b25',
//       _type: 'block',
//       children: [{ _key: 'f9e24bf18b250', _type: 'span', marks: [], text: 'Main Stables: discs' }],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'd08ceed05648',
//       _type: 'block',
//       children: [
//         { _key: 'd08ceed056480', _type: 'span', marks: [], text: 'Warehouse: Lead: Hoosfroos' },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '2085cb3ab443',
//       _type: 'block',
//       children: [
//         { _key: '2085cb3ab4430', _type: 'span', marks: [], text: 'Storehouse: Lead: jmcmarq' },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '3b4f6f6ff47c',
//       _type: 'block',
//       children: [
//         {
//           _key: '3b4f6f6ff47c0',
//           _type: 'span',
//           marks: [],
//           text: 'Library Tower: Lead: InfinityMe123, Members: Reygame, Jakeyquack, Estoop, Tiny_Rhino, CaptnScribble, copper',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'ea85ee659317',
//       _type: 'block',
//       children: [
//         {
//           _key: 'ea85ee6593170',
//           _type: 'span',
//           marks: [],
//           text: 'Library Tower Cellars: Lead: Jakeyquack',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'dc3f44c5019a',
//       _type: 'block',
//       children: [
//         {
//           _key: 'dc3f44c5019a0',
//           _type: 'span',
//           marks: [],
//           text: 'Armory and Forge: Lead: NickShaiB, Members: Dyvim',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '09aca13158d5',
//       _type: 'block',
//       children: [
//         { _key: '09aca13158d50', _type: 'span', marks: [], text: 'Great Keep: Lead: IwanDelarch' },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '1b6e4e87799a',
//       _type: 'block',
//       children: [
//         {
//           _key: '1b6e4e87799a0',
//           _type: 'span',
//           marks: [],
//           text: 'Great Keep Cellars: Lead: BlueCichlid',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '3f6015948e46',
//       _type: 'block',
//       children: [
//         {
//           _key: '3f6015948e460',
//           _type: 'span',
//           marks: [],
//           text: "Hunter's Gate (West) Lead: SMP, Members: Fduarte",
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'ef6ba12a8b22',
//       _type: 'block',
//       children: [
//         {
//           _key: 'ef6ba12a8b220',
//           _type: 'span',
//           marks: [],
//           text: 'Battlements Gate (North). Lead: JakeyQuack',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '1ddeb745b678',
//       _type: 'block',
//       children: [
//         {
//           _key: '1ddeb745b6780',
//           _type: 'span',
//           marks: [],
//           text: 'Kingsroad Gate (East) Lead: Thamus, Members: Copper, IwanDeLarch',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '70c87e5b892a',
//       _type: 'block',
//       children: [
//         {
//           _key: '70c87e5b892a0',
//           _type: 'span',
//           marks: [],
//           text: 'Main Gate (South) Lead: Carc, Members: Hoosfroos, Fduarte, Ertylink, Tsarkaiser',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'f554930937ca',
//       _type: 'block',
//       children: [
//         {
//           _key: 'f554930937ca0',
//           _type: 'span',
//           marks: [],
//           text: '4 Inner Corner Watchtowers: Lead: Thamus, Members: Reygame, InfinityMe, RockRoGash',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '254ac0760926',
//       _type: 'block',
//       children: [
//         {
//           _key: '254ac07609260',
//           _type: 'span',
//           marks: [],
//           text: '4 Inner Wall Watchtowers: Lead: Thamus, Members: Reygame, InfinityMe, RockRoGash',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '7e1af967f6d7',
//       _type: 'block',
//       children: [
//         {
//           _key: '7e1af967f6d70',
//           _type: 'span',
//           marks: [],
//           text: '8 Outer Wall Watchtowers: Lead: Thamus, Members: Liant, Nick, Knight_Krawler',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '83862cc344f5',
//       _type: 'block',
//       children: [
//         {
//           _key: '83862cc344f50',
//           _type: 'span',
//           marks: [],
//           text: 'The Broken Tower: Lead: InfinityMe, Members: JakeyQuack',
//         },
//       ],
//       level: 1,
//       listItem: 'bullet',
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '5f4593d19f6a',
//       _type: 'block',
//       children: [
//         {
//           _key: '5f4593d19f6a0',
//           _type: 'span',
//           marks: [],
//           text: 'While initially there was a lot of fast progress, uninteresting structures were not started at all, which stretched out the entire construction process. On the 14th of July, all structures had been completed at last. A final check-up with the canon descriptions was conducted and minor errors were fixed or their existance agreed to be minor enough to stay.',
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '7ea2ab0b1d53',
//       _type: 'block',
//       children: [
//         {
//           _key: '7ea2ab0b1d530',
//           _type: 'span',
//           marks: [],
//           text: 'The construction of Winterfell was concluded by more details: The older, inner wall was eroded slightly, snow was placed in the shadows of all structures, mud and vegetation was added on the south sides, further details in the form of moss and lichen as well as gutters and rain drains were added. These people contributed to these finishing touches: Knight_Krawler, Fduarte, MiniAlpha, Axel, Lemonbear, Bafflement, Dutchguard, IwanDeLarch and Thamus_Knoward.',
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '57e4af8fa89e',
//       _type: 'block',
//       children: [
//         {
//           _key: '57e4af8fa89e0',
//           _type: 'span',
//           marks: [],
//           text: 'On Saturday the 18th of July 2015, the construction of Winterfell castle was officially completed.',
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'f3c48ec223bc',
//       _type: 'block',
//       children: [
//         {
//           _key: 'f3c48ec223bc0',
//           _type: 'span',
//           marks: [],
//           text: "Winterfell 2015 replaced the previous rendition, which had been kicked off on the 29th of February in 2012 and completed shortly after. Although Maruku's renders of the old version have become iconic for Westeroscraft, the build itself did not keep up with the change in style that occurred on the server along with the rising version count of Minecraft, and the addition of WesterosBlocks. Hence, the build was soon outdated and in need of a worthy replacement.\n",
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: '2346bb0c160c',
//       _type: 'block',
//       children: [{ _key: '2346bb0c160c0', _type: 'span', marks: [], text: 'Inspiration' }],
//       markDefs: [],
//       style: 'h3',
//     },
//     {
//       _key: '1787097a8fa5',
//       _type: 'block',
//       children: [
//         {
//           _key: '1787097a8fa50',
//           _type: 'span',
//           marks: [],
//           text: 'The architectural motives of Winterfell came from interweaving the already established styles of builds in the ',
//         },
//         { _key: '1787097a8fa51', _type: 'span', marks: ['cb5c041018ae'], text: 'North' },
//         {
//           _key: '1787097a8fa52',
//           _type: 'span',
//           marks: [],
//           text: ' such as Long Lake with the highly recognizable visual of ',
//         },
//         {
//           _key: '1787097a8fa53',
//           _type: 'span',
//           marks: ['beb877043cd2'],
//           text: "HBO's rendition of the castle",
//         },
//         {
//           _key: '1787097a8fa54',
//           _type: 'span',
//           marks: [],
//           text: ". As a result, Winterfell maintains crow-stepped gables for square buildings and the iconic tower style from the show, flat roofs with a wooden bay walkway below. Adding massive bullwarks to either side of the three principal gates is another feature that was adapted to reflect the imposing nature of the show's castle.",
//         },
//       ],
//       markDefs: [
//         { _key: 'cb5c041018ae', _type: 'link', href: 'https://westeroscraft.com/wiki/north' },
//         {
//           _key: 'beb877043cd2',
//           _type: 'link',
//           href: 'https://gameofthrones.fandom.com/wiki/Winterfell',
//         },
//       ],
//       style: 'normal',
//     },
//     {
//       _key: '05d9c982ff1c',
//       _type: 'block',
//       children: [
//         {
//           _key: '05d9c982ff1c0',
//           _type: 'span',
//           marks: [],
//           text: 'Conceptually, most of the content of Winterfell and the arrangement of structures was taken directly from the canonical description by POV characters from the books. IwanDeLarch and Thamus_Knoward aimed at recreating Winterfell as faithfully to the books as possible. This was meant to enable a reader to walk through the castle, alongside with their favourite characters, allowing the greatest immersion.',
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     {
//       _key: 'c5ee64e69f95',
//       _type: 'block',
//       children: [{ _key: 'c5ee64e69f950', _type: 'span', marks: [], text: 'Videos' }],
//       markDefs: [],
//       style: 'h3',
//     },
//     { _key: '21e5778cddf9', _type: 'video', url: 'https://www.youtube.com/embed/ARzqImQ6vUI' },
//     {
//       _key: 'c4e71b035670',
//       _type: 'block',
//       children: [
//         {
//           _key: 'c4e71b0356700',
//           _type: 'span',
//           marks: [],
//           text: "Since Winterfell is such an iconic location, many visitors to the server have filmed the old version, such as Lord Dakr in May 2014 as part of the Let's Tour: WesterosCraft series.",
//         },
//       ],
//       markDefs: [],
//       style: 'normal',
//     },
//     { _key: '1b535b8a42e0', _type: 'video', url: 'https://www.youtube.com/embed/oqYb6DRpO2c' },
//   ],
//   buildCategory: [
//     { _key: 'EHuDjnQ5', _ref: 'aa78e9be-b3ce-4112-9ab3-7a052ac5b020', _type: 'reference' },
//   ],
//   dateCompleted: '2015-03-07T08:00:00+00:00',
//   dateStarted: '2015-03-07T08:00:00+00:00',
//   difficulty: '5',
//   house: 'House Stark',
//   projectLead: 'IwanDeLarch, Thamus_Knoward',
//   projectStatus: 'completed',
//   region: { _ref: 'a5b3b817-c80d-4621-967c-f13b619ae235', _type: 'reference' },
//   slug: { _type: 'slug', current: 'winterfell' },
//   title: 'Winterfell',
//   warp: '/warp winterfell',
//   redoAvailable: false,
//   serverProject: false,
//   dynmapZoom: undefined,
//   dynmapXcoord: undefined,
//   dynmapYcoord: undefined,
// }

const getFileOrImage = (fileName: string) => {
  return getImageAsset(fileName, { projectId: '1as7cn02', dataset: 'production' })
}

async function fetchBlob(url: string) {
  const response = await fetch(url)

  return response.blob()
}

const uploadImage = async (fileName: string) => {
  const newF = getFileOrImage(fileName)
  const formData = new FormData()
  const blob = await fetchBlob(newF.url)
  formData.append('file', blob, `${newF.assetId}.${newF.extension}`)

  const options = {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }

  // @ts-ignore
  delete options.headers['Content-Type']

  const res = await fetch('http://localhost:3000/api/media', options)
  const data = await res.json()

  return data?.doc
}

const childrenMap = (children: any[]) => {
  const newChild = [] as any[]

  children?.map((child, i) => {
    if (child.marks.includes('strong')) {
      newChild.push({
        bold: true,
        text: child?.text,
      })
    } else if (child.marks.includes('underline')) {
      newChild.push({
        underline: true,
        text: child?.text,
      })
    } else if (child.marks.includes('em')) {
      newChild.push({
        italic: true,
        text: child?.text,
      })
    } else {
      newChild.push({
        text: child?.text,
      })
    }
  })

  return newChild
}

function mergeListItems(arr) {
  const mergedArray = []
  let currentGroup = null

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i]

    if (currentItem.listItem) {
      if (!currentGroup) {
        currentGroup = { type: 'ul', children: [] }
      }
      currentGroup.children.push({ type: 'li', children: childrenMap(currentItem.children) })
    } else {
      if (currentGroup) {
        mergedArray.push(currentGroup)
        currentGroup = null
      }
      mergedArray.push(currentItem)
    }
  }

  if (currentGroup) {
    mergedArray.push(currentGroup)
  }

  return mergedArray
}

const sanityRichTextToPayloadRichText = async (sRichText: typeof test.body) => {
  const newRT = [] as any[]

  for (let rt of sRichText) {
    if (rt._type === 'block') {
      // HEADINGS
      if (
        (rt.style === 'normal' ||
          rt.style === 'h3' ||
          rt.style === 'h2' ||
          rt.style === 'h1' ||
          rt.style === 'h4' ||
          rt.style === 'h5' ||
          rt.style === 'h6') &&
        rt?.listItem === undefined
      ) {
        newRT.push({
          children: childrenMap(rt.children),
          type: rt.style,
        })
      }
    }
    //  LISTS
    // @ts-ignore
    if (rt.type === 'ul') {
      newRT.push(rt)
    }

    // IMAGES
    if (rt._type === 'figure') {
      const fig = await uploadImage(rt.image.asset._ref)

      newRT.push({
        children: [
          {
            text: '',
          },
        ],
        type: 'upload',
        value: {
          ...fig,
        },
        relationTo: 'media',
      })
    }

    if (rt._type === 'video') {
      newRT.push({
        type: 'video',
        id: rt?.url?.split('/')?.pop(),
        source: 'youtube',
        children: [
          {
            text: ' ',
          },
        ],
      })
    }
  }

  return newRT
}

const uploadLocationData = async (data: typeof test) => {
  let bannerData: Media | undefined = undefined
  let locationImages: Media[] | undefined = undefined

  try {
    if (data?.bannerImage) {
      bannerData = await uploadImage(data.bannerImage.asset._ref)
    }

    if (data?.additionalImages?.images && data.additionalImages.images?.length) {
      const arr = []

      for (const image of data?.additionalImages.images) {
        const result = await uploadImage(image.asset._ref)
        arr.push({ media: result?.id })
      }

      locationImages = arr
    }

    const richText = await sanityRichTextToPayloadRichText(data.body)

    console.log('🫵 --------------------------------------------🫵')
    console.log('🫵 : uploadLocationData : richText', richText)
    console.log('🫵 --------------------------------------------🫵')

    if (richText) {
      const body: Location = {
        locationName: data?.title || '',
        slug: data?.slug?.current || undefined,
        projectDetails: {
          information: {
            region: regionMap(
              data?.region._ref,
            ) as Location['projectDetails']['information']['region'],
            status: data?.projectStatus as Location['projectDetails']['information']['status'],
            type: buildCategoryMap(
              data?.buildCategory[0]._ref,
            ) as Location['projectDetails']['information']['type'],
            warp: data?.warp || undefined,
            house: data?.house || undefined,
            application: data?.application || undefined,
            projectLeads: data?.projectLead || undefined,
            dateStarted: data?.dateStarted || undefined,
            dateCompleted: data?.dateCompleted || undefined,
            redoAvailable: data?.redoAvailable || false,
            serverProject: data?.serverProject || false,
            difficultyLevel:
              data?.difficulty as Location['projectDetails']['information']['difficultyLevel'],
          },
          dynmapLocation: {
            dynmapZoom: data?.dynmapZoom,
            dynmapXcoord: data?.dynmapXcoord,
            dynmapYcoord: data?.dynmapYcoord,
          },
        },
        layout: [
          {
            blockType: 'content',
            columns: [
              {
                // @ts-ignore
                links: [],
                width: 'full',
                alignment: 'left',
                richText,
              },
            ],
          },
        ],
        bannerImage: bannerData?.id || undefined,
        locationImages: locationImages || undefined,
      }

      await payload.create({
        collection: 'locations',
        data: body,
      })
    }
  } catch (error) {
    console.dir(error, { depth: null })
  }
}

const t = mergeListItems(test.body)

;(async () => {
  await payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: MONGODB_URI,
    local: true,
  })
  await uploadLocationData({ ...test, body: t })
})()
