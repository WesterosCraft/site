import { Location } from './../src/payload-types'
import { getImageAsset } from '@sanity/asset-utils'

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

const getFileOrImage = (fileName: string) => {
  return getImageAsset(fileName, { projectId: '1as7cn02', dataset: 'production' })
}

async function fetchBlob(url: string) {
  const response = await fetch(url)

  // Here is the significant part
  // reading the stream as a blob instead of json
  return response.blob()
}

const uploadImage = async (fileName: string) => {
  const newF = getFileOrImage(fileName)

  console.log('🫵 -----------------------------🫵')
  console.log('🫵 : uploadImage : newF', newF)
  console.log('🫵 -----------------------------🫵')

  const formData = new FormData()

  const blob = await fetchBlob(newF.url)

  console.log('🫵 -----------------------------🫵')
  console.log('🫵 : uploadImage : blob', blob)
  console.log('🫵 -----------------------------🫵')

  formData.append('file', blob, `${newF.assetId}.${newF.extension}`)

  const options = {
    method: 'POST',
    body: formData,
    // If you add this, upload won't work
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }

  // @ts-ignore
  delete options.headers['Content-Type']

  const s = await fetch('http://localhost:3000/api/media', options)

  console.log('🫵 -----------------------🫵')
  console.log('🫵 : uploadImage : s', s)
  console.log('🫵 -----------------------🫵')
}

uploadImage(test.bannerImage.asset._ref)

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

function mergeListItems(arr: typeof test.body) {
  const newArr = [] as any[]
  const newList = [] as any[]

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i]

    if (!currentItem.listItem) {
      newArr.push(currentItem)
    } else {
      let nextItem = arr[i + 1]

      if (nextItem && nextItem.listItem) {
        newList.push(
          {
            type: 'li',
            children: childrenMap(currentItem.children),
          },
          {
            type: 'li',
            children: childrenMap(nextItem.children),
          },
        )

        const res = { type: 'ul', children: newList }

        if (!newArr.some(x => JSON.stringify(x) === JSON.stringify(res))) {
          newArr.push(res)
        }
        i++
      }
    }
  }

  return newArr
}

const sanityRichTextToPayloadRichText = (sRichText: typeof test.body) => {
  const newRT = [] as any[]

  sRichText.map((rt, x) => {
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
  })

  return newRT
}

const uploadLocationData = async (data: typeof test) => {
  const body: Location = {
    locationName: data?.title || '',
    slug: data?.slug?.current || undefined,
    difficultyLevel: data?.difficulty,
    projectDetails: {
      information: {
        region:
          (regionMap(data?.region._ref) as Location['projectDetails']['information']['region']) ||
          '',
        status: (data?.projectStatus as Location['projectDetails']['information']['status']) || '',
        type:
          (buildCategoryMap(
            data?.buildCategory[0]._ref,
          ) as Location['projectDetails']['information']['type']) || '',
        warp: data?.warp || undefined,
        house: data?.house || undefined,
        application: data?.application || undefined,
        projectLeads: data?.projectLead || undefined,
        dateStarted: data?.dateStarted || undefined,
        dateCompleted: data?.dateCompleted || undefined,
        redoAvailable: data?.redoAvailable || false,
        serverProject: data?.serverProject || false,
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
            links: [],
            width: 'full',
            alignment: 'left',
            richText: sanityRichTextToPayloadRichText(data.body),
          },
        ],
      },
    ],
  }

  try {
    const res = await fetch('http://localhost:3000/api/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const result = await res.json()

    console.log(result)
  } catch (error) {
    console.error('Error:', error)
  }
}

const t = mergeListItems(test.body)

// uploadLocationData({ ...test, entry: t })

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
