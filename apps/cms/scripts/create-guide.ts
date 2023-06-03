import { Guide, Media } from '../src/payload-types'
import payload from 'payload'
import path from 'path'
import dotenv from 'dotenv'
import { sanityRichTextToPayloadRichText, mergeListItems } from './shared'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const { PAYLOAD_SECRET, MONGODB_URI } = process.env

const data = [
  {
    _createdAt: '2021-03-23T18:33:14Z',
    _id: '6707ae60-2f4c-458e-81af-5eaa181bbe2e',
    _rev: 'i5e7SxTSsJ8BOjx3CYgH0A',
    _type: 'guide',
    _updatedAt: '2022-12-30T17:18:41Z',
    body: [
      {
        _key: 'e108ce70a74b',
        _type: 'block',
        children: [
          {
            _key: '29bdf46a87b8',
            _type: 'span',
            marks: [],
            text: 'Canon Projects are the bread and butter of WesterosCraft. These projects concentrate on canon locations within the ',
          },
          {
            _key: '85738c70ae74',
            _type: 'span',
            marks: ['8427cd08d624'],
            text: 'Song of Ice and Fire universe',
          },
          {
            _key: 'fea803bdbc35',
            _type: 'span',
            marks: [],
            text: ', have one or two project leaders, and enlist the help of many others in their construction. Projects can range in scale from the very small (',
          },
          {
            _key: '35b6fb295a2c',
            _type: 'span',
            marks: ['df746443a571'],
            text: 'Tower of Joy',
          },
          {
            _key: '36aa838fc931',
            _type: 'span',
            marks: [],
            text: ') to the very large (',
          },
          {
            _key: 'c102ffe812e2',
            _type: 'span',
            marks: ['fb4a3e8778ad'],
            text: 'Fairmarket',
          },
          {
            _key: 'f84aedd11008',
            _type: 'span',
            marks: [],
            text: '). ',
          },
        ],
        markDefs: [
          {
            _key: '8427cd08d624',
            _type: 'link',
            href: 'https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire',
          },
          {
            _key: 'df746443a571',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/dorne/tower-of-joy',
          },
          {
            _key: 'fb4a3e8778ad',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/riverlands/fairmarket',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'bad66914b788',
        _type: 'block',
        children: [
          {
            _key: '0b2dc4392667',
            _type: 'span',
            marks: [],
            text: 'Choosing a Project',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '42a50bfc2dd7',
        _type: 'block',
        children: [
          {
            _key: 'dd186cafb40c',
            _type: 'span',
            marks: ['strong'],
            text: 'Viability\n',
          },
          {
            _key: '9a73f3163cf8',
            _type: 'span',
            marks: [],
            text: 'Anything listed on our ',
          },
          {
            _key: '2115d653f75a',
            _type: 'span',
            marks: ['e845f5cd80c8'],
            text: 'Progress Page',
          },
          {
            _key: '36b809d60d50',
            _type: 'span',
            marks: [],
            text: ' can be considered significant enough to be a standalone Canon Project. It may also be worth discussing your ideas with a moderator ahead of time so that you understand what might be expected of you as a project leader (terraforming, project size, level of detail, etc.).',
          },
        ],
        markDefs: [
          {
            _key: 'e845f5cd80c8',
            _type: 'link',
            href: 'https://westeroscraft.com/progress',
          },
        ],
        style: 'normal',
      },
      {
        _key: '07e7ae8fae0e',
        _type: 'block',
        children: [
          {
            _key: '9b86f0377e76',
            _type: 'span',
            marks: ['strong'],
            text: 'Location\n',
          },
          {
            _key: '19e186ce8cb0',
            _type: 'span',
            marks: [],
            text: 'Most canon locations already have in-game warps placed according to canon details. Check out the ',
          },
          {
            _key: '37112b3dbda8',
            _type: 'span',
            marks: ['7a8874ad3eff'],
            text: 'Map Repository',
          },
          {
            _key: 'f7052b9791fe',
            _type: 'span',
            marks: [],
            text: " threads on the forums for more information on how we decided which project goes where. Please do also check the 'Borders' layer on the ",
          },
          {
            _key: '135efc0f9aea',
            _type: 'span',
            marks: ['a084a2201f44'],
            text: 'DynMap',
          },
          {
            _key: 'b33ef3db631a',
            _type: 'span',
            marks: [],
            text: ' to see the area your project will be expected to cover. ',
          },
        ],
        markDefs: [
          {
            _key: '7a8874ad3eff',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/forum/inspiration-worldbuilding.10/',
          },
          {
            _key: 'a084a2201f44',
            _type: 'link',
            href: 'http://mc.westeroscraft.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'fc6e62245bc2',
        _type: 'block',
        children: [
          {
            _key: '2851ef367a91',
            _type: 'span',
            marks: ['strong'],
            text: 'Redo, Update, or Foster?\n',
          },
          {
            _key: '478c3cf48ea1',
            _type: 'span',
            marks: [],
            text: 'If you are considering redoing, updating, or fostering an old project, please consult the ',
          },
          {
            _key: 'f00f2588e93b',
            _type: 'span',
            marks: ['07b0251a422d'],
            text: 'Official No-Redo Rule',
          },
          {
            _key: '3addadcde3ea',
            _type: 'span',
            marks: [],
            text: ' and ',
          },
          {
            _key: '09f78903455c',
            _type: 'span',
            marks: ['56b64ccf4336'],
            text: 'Projects Orphanage',
          },
          {
            _key: '30d3177ddedf',
            _type: 'span',
            marks: [],
            text: '. Currently each of these project types is defined as:\n\n',
          },
          {
            _key: '155e85f279ac',
            _type: 'span',
            marks: ['strong'],
            text: 'Redo',
          },
          {
            _key: 'efa4c047813a',
            _type: 'span',
            marks: [],
            text: ': Complete removal and replacement of the old project.\n',
          },
          {
            _key: 'd17a5c60641e',
            _type: 'span',
            marks: ['strong'],
            text: 'Update',
          },
          {
            _key: 'bbbdf7fe5b71',
            _type: 'span',
            marks: [],
            text: ': Part removal and replacement of the old project, updating remaining buildings without changing their form significantly to bring them to current standards. Extent of replacement to be negotiated with moderators.\n',
          },
          {
            _key: 'b8f3fc7ef17f',
            _type: 'span',
            marks: ['strong'],
            text: 'Foster',
          },
          {
            _key: '009145a3865e',
            _type: 'span',
            marks: [],
            text: ': No removal of any existing builds, only adding where areas are left incomplete, and updating existing buildings without changing their form or appearance significantly to bring them to current standards.',
          },
        ],
        markDefs: [
          {
            _key: '07b0251a422d',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/official-no-redo-rule',
          },
          {
            _key: '56b64ccf4336',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/projects-orphanage',
          },
        ],
        style: 'normal',
      },
      {
        _key: '88fb216a4eeb',
        _type: 'block',
        children: [
          {
            _key: 'f0be125cc7be',
            _type: 'span',
            marks: [],
            text: 'Before Applying',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '874af0cc43f4',
        _type: 'block',
        children: [
          {
            _key: 'b76f782b78b1',
            _type: 'span',
            marks: ['strong'],
            text: 'Rank\n',
          },
          {
            _key: 'e409244b995c',
            _type: 'span',
            marks: [],
            text: 'In order to apply you need to be a full, non-probationary builder.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '782bfde39a29',
        _type: 'block',
        children: [
          {
            _key: 'e0758b8dd750',
            _type: 'span',
            marks: ['strong'],
            text: 'Experience\n',
          },
          {
            _key: '6b74ecb60a3f',
            _type: 'span',
            marks: [],
            text: 'To apply for a canon project you must have completed at least two Mini Builds, or at least one Mini Build and one Immersion Build. ',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'e5abc4426bc6',
        _type: 'block',
        children: [
          {
            _key: '5365329bf28f',
            _type: 'span',
            marks: [],
            text: 'Application Format',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'a39b04419109',
        _type: 'block',
        children: [
          {
            _key: '9334f79f630d',
            _type: 'span',
            marks: [],
            text: 'Project applications should be posted in the ',
          },
          {
            _key: '6cbad3850a08',
            _type: 'span',
            marks: ['222aeba31c3b'],
            text: 'canon projects subforum',
          },
          {
            _key: '34004a993ed4',
            _type: 'span',
            marks: [],
            text: " corresponding to the project's region. Thread titles should be formatted as the following:",
          },
        ],
        markDefs: [
          {
            _key: '222aeba31c3b',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/categories/canon-projects.84/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '20fa81301d30',
        _type: 'block',
        children: [
          {
            _key: 'e31785197673',
            _type: 'span',
            marks: ['strong'],
            text: 'Project Application: [Project name] by [Builder name(s)]',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '15e93a7dbe6c',
        _type: 'block',
        children: [
          {
            _key: '83243a6ffb5a',
            _type: 'span',
            marks: [],
            text: 'In the body of the thread or in an attached Google doc or PDF you must include the following information:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a3776547b0e8',
        _type: 'block',
        children: [
          {
            _key: 'd1f4b325aaed',
            _type: 'span',
            marks: ['strong'],
            text: 'Project Title',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6d5abacee6ce',
        _type: 'block',
        children: [
          {
            _key: 'ce57c8d39cc2',
            _type: 'span',
            marks: ['strong'],
            text: 'Builder Name(s)',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '8e399da799d7',
        _type: 'block',
        children: [
          {
            _key: 'fadd323a2e72',
            _type: 'span',
            marks: ['strong'],
            text: 'Introduction',
          },
          {
            _key: 'b79270634136',
            _type: 'span',
            marks: [],
            text: '\nThe introduction contains general information about the project you are applying for. Things that may be included here are the rough location of a project, a map with the location of the project, general information on the house and other information you want to share.\n\n',
          },
          {
            _key: '36d4c3bc7640',
            _type: 'span',
            marks: ['strong'],
            text: 'Resumé',
          },
          {
            _key: '8be0df930761',
            _type: 'span',
            marks: [],
            text: '\nList of all previously completed projects, immersions, minis and other noteworthy accomplishments. The purpose of this section is to show your previous accomplishments and leadership engagements. This is a quick way for moderators to check if you are up to the challenges the project will present. At minimum, there should be two minis here.\n\n',
          },
          {
            _key: 'ba84c58fa91d',
            _type: 'span',
            marks: ['strong'],
            text: 'Canon',
          },
          {
            _key: '6f5ad915b885',
            _type: 'span',
            marks: [],
            text: '\nDescription of all relevant canon on the house, history, location, region, nature, population, military activity and most importantly events in the books. It is important here to be throughout but present it in a clear and concise way. All relevant quotes can be attached in this document. Use highlights for important information within the quote.\n\nGreat sources you could use for your research are the books (or on ',
          },
          {
            _key: 'fda02cd16e47',
            _type: 'span',
            marks: ['strong', '6d8a422bce38'],
            text: 'A Search of Ice and Fire',
          },
          {
            _key: '0932304ec547',
            _type: 'span',
            marks: [],
            text: ') and secondary sources like ',
          },
          {
            _key: 'ddbfe05035b5',
            _type: 'span',
            marks: ['strong', 'af0101a1abc4'],
            text: 'A Wiki of Ice and Fire',
          },
          {
            _key: 'a66f7b5eae91',
            _type: 'span',
            marks: [],
            text: ' and ',
          },
          {
            _key: 'd55c90939e50',
            _type: 'span',
            marks: ['strong', 'd83481494d67'],
            text: 'The Citadel',
          },
          {
            _key: '7df66ede402c',
            _type: 'span',
            marks: [],
            text: '.\n\n',
          },
          {
            _key: '18d1ea585242',
            _type: 'span',
            marks: ['strong'],
            text: 'Society/ Culture',
          },
          {
            _key: 'c3f8fba5eb53',
            _type: 'span',
            marks: [],
            text: '\nWhat can be said about the society and culture in the project? Is there a special form of hierarchy that you can derive from the canon? E.g., clan chieftains in the north. How is the population spread out? Is there any reason for this? Are there any specific cultural practices or traditions that could be related to the project? Please try to stay as logical as possible and base yourself in historic precedents that would fit with the region.\n\nNote that not every project will need to have extensive information on this.\n\n',
          },
          {
            _key: '48860fc4a9ac',
            _type: 'span',
            marks: ['strong'],
            text: 'Economy',
          },
          {
            _key: '5e433ca4ceed',
            _type: 'span',
            marks: [],
            text: '\nWhat makes up the economy of the project? How does the population sustain themselves? What does the land offer them? (E.g., hunting and foresting in the woods, agriculture in the open flatter areas, pastures/shepherds on the hills, mining in the mountains.) How does the local economy work? Do they trade and with others? How does this impact them? Are there any economic hubs within or near the project?\n\n',
          },
          {
            _key: 'fb79e970f7de',
            _type: 'span',
            marks: ['strong'],
            text: 'Plans',
          },
          {
            _key: '258117ba3d3d',
            _type: 'span',
            marks: [],
            text: '\nOutline your specific plans with as much detail as possible. These plans can include maps, planned Mini Builds, guides, or anything else that might help the moderators understand your vision for the area. It is important that you mark the project borders on your map as well as provide an easily accessible map legend. Please also check the "Borders" layer on the ',
          },
          {
            _key: '9ebf63e78fc5',
            _type: 'span',
            marks: ['strong', '369ca1a012c8'],
            text: 'DynMap',
          },
          {
            _key: '2fc227ceef20',
            _type: 'span',
            marks: [],
            text: ' to see the extent of your project area.\n\n',
          },
          {
            _key: 'acccef20e48d',
            _type: 'span',
            marks: ['strong'],
            text: 'Terra',
          },
          {
            _key: '8dbcef3abcc7',
            _type: 'span',
            marks: [],
            text: '\nHow will you terraform the project? Please provide thorough explanations and inspiration.\n\n',
          },
          {
            _key: '57876e4a2fbe',
            _type: 'span',
            marks: ['strong'],
            text: 'Architecture',
          },
          {
            _key: 'b61758bed171',
            _type: 'span',
            marks: [],
            text: '\nWhat is the style you want to use? How does it relate to nearby projects? Why did you choose to incorporate specific building elements and what is the logic behind it? We will ask you to attach real-world inspiration here.\n\n',
          },
          {
            _key: '5fe5a1de06f2',
            _type: 'span',
            marks: ['strong'],
            text: 'Tests',
          },
          {
            _key: '4bf39dea662d',
            _type: 'span',
            marks: [],
            text: '\nTests for castles must include: gradient, façade, wall, and tower tests.\nTests for towns/villages must include: façade tests for all relevant house classes; Can include: special buildings like guildhalls, septs, etc.\nTests for the terrain are highly recommended, especially if your project area includes significant geologic features such as coastline and mountains. If you are a beginner at terraforming, please ask some of our more experienced builders for help with your tests.',
          },
        ],
        markDefs: [
          {
            _key: '6d8a422bce38',
            _type: 'link',
            href: 'http://asearchoficeandfire.com/',
          },
          {
            _key: 'af0101a1abc4',
            _type: 'link',
            href: 'http://awoiaf.westeros.org/',
          },
          {
            _key: 'd83481494d67',
            _type: 'link',
            href: 'https://www.westeros.org/Citadel/Heraldry/',
          },
          {
            _key: '369ca1a012c8',
            _type: 'link',
            href: 'http://mc.westeroscraft.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '60cb89685813',
        _type: 'block',
        children: [
          {
            _key: 'ac8423b42a2a',
            _type: 'span',
            marks: [],
            text: 'After Submission',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'd4de68892112',
        _type: 'block',
        children: [
          {
            _key: 'c89ddce7e554',
            _type: 'span',
            marks: ['strong'],
            text: 'Approval\n',
          },
          {
            _key: 'ccef23844175',
            _type: 'span',
            marks: [],
            text: 'The project application must be approved by at least two moderators before it can begin.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f945520af375',
        _type: 'block',
        children: [
          {
            _key: '15c464203144',
            _type: 'span',
            marks: ['strong'],
            text: 'Plots and Mini Builds',
          },
          {
            _key: '9adf75fd8118',
            _type: 'span',
            marks: [],
            text: '\nPlease advertise available plots  and Mini Builds using ',
          },
          {
            _key: '7bb58a9afcda',
            _type: 'span',
            marks: ['9a0577a239eb'],
            text: 'marker signs',
          },
          {
            _key: '50a544b3c3a3',
            _type: 'span',
            marks: [],
            text: ' and by posting in your project application thread. Builders can take on Mini Builds by applying for them in the project thread and must be approved in writing by the project leader and one of the approving moderators before it can begin. \nNote: If you currently have an in progress Canon Project, you may still apply for and lead other Mini and Immersion Builds.',
          },
        ],
        markDefs: [
          {
            _key: '9a0577a239eb',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/marker-signs.2405/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'dc2c21849fe0',
        _type: 'block',
        children: [
          {
            _key: '7d932f5dc2ee',
            _type: 'span',
            marks: ['strong'],
            text: 'Abandonment',
          },
          {
            _key: 'd2a64fb40643',
            _type: 'span',
            marks: [],
            text: '\nIf for whatever reason you feel you can no longer complete your project, you may declare the project as abandoned at any time. Your project may also automatically become abandoned if you are inactive for an extended period (without giving prior notice of extended leave). If you declare a project as abandoned you must wait a period of one month before you can apply for another canon project.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '374cd2b279c9',
        _type: 'block',
        children: [
          {
            _key: 'b62909098608',
            _type: 'span',
            marks: [],
            text: 'Completion',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '1148979f87a8',
        _type: 'block',
        children: [
          {
            _key: '02017082ff2f',
            _type: 'span',
            marks: ['strong'],
            text: 'Final Checks',
          },
          {
            _key: 'c067c2cc3eea',
            _type: 'span',
            marks: [],
            text: '\nOnce your Canon Project application has been approved, you are required to finish the project to 100% completion including all Mini Builds and terraforming as well as a ',
          },
          {
            _key: 'e2754132fc18',
            _type: 'span',
            marks: ['94645bcb7c82'],
            text: 'Wiki Submission',
          },
          {
            _key: '1c821df34668',
            _type: 'span',
            marks: [],
            text: '. It is your responsibility to see that all areas of your project are completed and finished to an acceptable standard, including those areas delegated to others. ',
          },
        ],
        markDefs: [
          {
            _key: '94645bcb7c82',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/form/wiki-article-submission-form.6/select',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'b4752d2b11db',
        _type: 'block',
        children: [
          {
            _key: 'f7d2376a6db4',
            _type: 'span',
            marks: ['strong'],
            text: 'Post Approval',
          },
          {
            _key: 'ad42a97d61ed',
            _type: 'span',
            marks: [],
            text: '\nAfter you have completed your project to 100%, the moderators who originally approved the application will do a final quality check, give feedback which you must address, and eventually post-approve the project.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f8794feb47f9',
        _type: 'block',
        children: [
          {
            _key: 'cb014fe77dc5',
            _type: 'span',
            marks: ['strong'],
            text: "What's Next?",
          },
          {
            _key: '194a761fd8e5',
            _type: 'span',
            marks: [],
            text: "\nYou're free to apply for a new project after you mark your project complete and before it is given a final post-approval. However, if the mods give any feedback during the post-approval review stage, you are expected to put any new project on hold in order to address the feedback for the previous. \n",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '8837ee46-c394-4de7-93e7-cfcc140dac62',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-4db6188931dbd214fc8004180008419cf85058dd-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'canon-project-application-guidelines',
    },
    title: 'Canon Project Application Guidelines',
  },
  {
    _createdAt: '2021-07-31T20:49:26Z',
    _id: '79e5a26b-378d-4ff3-84af-ef1997e63c55',
    _rev: 'Bm7S0KZmajesdgpEXDhklD',
    _type: 'guide',
    _updatedAt: '2022-07-16T18:26:02Z',
    body: [
      {
        _key: 'c92a8179e12d',
        _type: 'block',
        children: [
          {
            _key: '4d0f54f4d46a',
            _type: 'span',
            marks: [],
            text: 'The ',
          },
          {
            _key: '1f4be943dcd3',
            _type: 'span',
            marks: ['strong'],
            text: 'WesterosCraft Custom Launcher',
          },
          {
            _key: '648a1315e361',
            _type: 'span',
            marks: [],
            text: ' (now the ',
          },
          {
            _key: '88f9a79b8a3d',
            _type: 'span',
            marks: ['7e3f096ddc8a'],
            text: 'HeliosLauncher',
          },
          {
            _key: 'f3c542901f03',
            _type: 'span',
            marks: [],
            text: ') is a launcher built from the ground up for making running and launching into Westeros as easy as possible.  As of August 2021, we no longer recommend or support the WesterosCraft Custom Launcher as the primary method of accessing the game.  However, if for whatever reason you still wish to use it, you are free to do so.',
          },
        ],
        markDefs: [
          {
            _key: '7e3f096ddc8a',
            _type: 'link',
            href: 'https://github.com/dscalzi/HeliosLauncher',
          },
        ],
        style: 'normal',
      },
      {
        _key: '0fc681f58c15',
        _type: 'block',
        children: [
          {
            _key: '5c0a5f8334d6',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1badd700b119',
        _type: 'callout',
        text: 'Please be aware this launcher does NOT work if you have purchased a Mojang account after December 2020, or you have already migrated your Mojang account to a Microsoft account.  Use another method.',
      },
      {
        _key: 'e858188949d0',
        _type: 'block',
        children: [
          {
            _key: '84eeecf62e39',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'c7552408add0',
        _type: 'block',
        children: [
          {
            _key: '0246a5128a90',
            _type: 'span',
            marks: [],
            text: 'Steps:',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '6d883672c106',
        _type: 'block',
        children: [
          {
            _key: '0e5c300f46600',
            _type: 'span',
            marks: [],
            text: 'Download the appropriate launcher for your operating system.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '96ab83379e5e',
        _type: 'block',
        children: [
          {
            _key: '4a9613686a180',
            _type: 'span',
            marks: [],
            text: "Open the application, and when prompted, enter the usual information you would on the vanilla Minecraft launcher. (Don't worry, none of this information is stored or sent to us in any way, your account is just verified through the Mojang servers, exactly like logging in to normal Minecraft!)",
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1b5d5f37713c',
        _type: 'block',
        children: [
          {
            _key: 'b10117adda370',
            _type: 'span',
            marks: [],
            text: 'On the left of the launcher you will see our production server logo; if its glowing green, that means theres an update. Click to update!',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '0a8a0509e095',
        _type: 'block',
        children: [
          {
            _key: '632bf1f7c8680',
            _type: 'span',
            marks: [],
            text: 'Once complete, click "Launch Minecraft." It will log you in right to our server! Easy!',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7020f91c90a9',
        _type: 'block',
        children: [
          {
            _key: 'd532abacc6dc0',
            _type: 'span',
            marks: ['strong'],
            text: 'Windows Download:',
          },
          {
            _key: 'e3d0a20b55e7',
            _type: 'span',
            marks: [],
            text: ' ',
          },
          {
            _key: '58c61ce337a7',
            _type: 'span',
            marks: ['b147b3e0ec7c'],
            text: 'https://github.com/WesterosCraft/ElectronLauncher/releases/download/v1.8.0/westeroscraftlauncher-1.8.0.exe',
          },
        ],
        markDefs: [
          {
            _key: 'b147b3e0ec7c',
            _type: 'link',
            href: 'https://github.com/WesterosCraft/ElectronLauncher/releases/download/v1.8.0/westeroscraftlauncher-1.8.0.exe',
          },
        ],
        style: 'normal',
      },
      {
        _key: '3ec612670068',
        _type: 'block',
        children: [
          {
            _key: 'b588736a63cd',
            _type: 'span',
            marks: ['strong'],
            text: 'Mac Download:',
          },
          {
            _key: 'ce4332f22d48',
            _type: 'span',
            marks: [],
            text: ' ',
          },
          {
            _key: '466dc5c37b07',
            _type: 'span',
            marks: ['964aeb8fd5db'],
            text: 'https://github.com/WesterosCraft/ElectronLauncher/releases/download/v1.8.0/westeroscraftlauncher-1.8.0.dmg',
          },
        ],
        markDefs: [
          {
            _key: '964aeb8fd5db',
            _type: 'link',
            href: 'https://github.com/WesterosCraft/ElectronLauncher/releases/download/v1.8.0/westeroscraftlauncher-1.8.0.dmg',
          },
        ],
        style: 'normal',
      },
      {
        _key: '06360afdde57',
        _type: 'block',
        children: [
          {
            _key: '2eb846d3862c',
            _type: 'span',
            marks: ['strong'],
            text: 'Linux Download:',
          },
          {
            _key: 'b1681872c23b',
            _type: 'span',
            marks: [],
            text: ' ',
          },
          {
            _key: 'b6b18455b1a6',
            _type: 'span',
            marks: ['3ea656b8b3e4'],
            text: 'https://github.com/WesterosCraft/ElectronLauncher/releases/download/v1.8.0/westeroscraftlauncher-1.8.0.AppImage',
          },
        ],
        markDefs: [
          {
            _key: '3ea656b8b3e4',
            _type: 'link',
            href: 'https://github.com/WesterosCraft/ElectronLauncher/releases/download/v1.8.0/westeroscraftlauncher-1.8.0.AppImage',
          },
        ],
        style: 'normal',
      },
      {
        _key: '483caafd21fb',
        _type: 'block',
        children: [
          {
            _key: 'a3448065e006',
            _type: 'span',
            marks: [],
            text: '\n',
          },
        ],
        markDefs: [
          {
            _key: 'b147b3e0ec7c',
            _type: 'link',
            href: 'https://github.com/WesterosCraft/ElectronLauncher/releases/download/v1.8.0/westeroscraftlauncher-1.8.0.exe',
          },
        ],
        style: 'normal',
      },
      {
        _key: '98d085f22e59',
        _type: 'callout',
        text: "Note that we do NOT support the custom launcher anymore.  This means if you run into problems and or have questions, we can't help you!  Check into old topics on our support forums, as it's has most likely been address there.",
      },
    ],
    description:
      'The WesterosCraft Custom Launcher was a custom launcher built for our server, but we have since moved on from supporting it.',
    guideCategory: {
      _ref: '5f099069-f0ea-4077-b723-af85761811d6',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-6075b802562f45843922db2f4c2403b9f34fb622-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'westeroscraft-custom-launcher',
    },
    title: '(Legacy) - WesterosCraft Custom Launcher',
  },
  {
    _createdAt: '2021-04-13T14:04:15Z',
    _id: '955e8115-9a06-4bc1-b695-cfc824883778',
    _rev: 'Bm7S0KZmajesdgpEXDbY20',
    _type: 'guide',
    _updatedAt: '2022-07-16T17:22:58Z',
    body: [
      {
        _key: 'cf290c3d5042',
        _type: 'block',
        children: [
          {
            _key: '629c3bab4c26',
            _type: 'span',
            marks: [],
            text: 'The following is the guide to install the Macro Keybind mod for 1.12.2',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd507e8e56c9b',
        _type: 'block',
        children: [
          {
            _key: 'a84789b9334a',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd1e130e2b23b',
        _type: 'block',
        children: [
          {
            _key: 'a8e0f0daac90',
            _type: 'span',
            marks: [],
            text: 'Download the Macro/Keybind Mod version 0.15.4 for Minecraft 1.12 ',
          },
          {
            _key: '6db69ffe3e19',
            _type: 'span',
            marks: ['56baba9dd664'],
            text: 'here.',
          },
          {
            _key: '8d0fc9de49f2',
            _type: 'span',
            marks: [],
            text: ' [',
          },
          {
            _key: '613d52ec7405',
            _type: 'span',
            marks: ['7a5fd81bfd98'],
            text: 'Original Forum Entry',
          },
          {
            _key: 'b21fab23ba9c',
            _type: 'span',
            marks: [],
            text: ']',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '56baba9dd664',
            _type: 'link',
            href: 'http://eq2.co.uk/minecraft/mods/mod_macros_0.15.4_for_1.12.1.litemod',
          },
          {
            _key: '7a5fd81bfd98',
            _type: 'link',
            href: 'https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/1275039-macro-keybind-mod',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'e632227fba7a',
        _type: 'block',
        children: [
          {
            _key: '264c80a3ecd9',
            _type: 'span',
            marks: [],
            text: 'Download Liteloader 1.12.2 Snapshot either .exe or .jar [',
          },
          {
            _key: '0b658de4aa71',
            _type: 'span',
            marks: ['172ed1f180ed'],
            text: 'Homepage',
          },
          {
            _key: 'ca72c2d83791',
            _type: 'span',
            marks: [],
            text: ']',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '172ed1f180ed',
            _type: 'link',
            href: 'http://www.liteloader.com/download#snapshot_11220',
          },
        ],
        style: 'normal',
      },
      {
        _key: '6c86efbd13ae',
        _type: 'block',
        children: [
          {
            _key: '237323d2b600',
            _type: 'span',
            marks: [],
            text: 'Execute the .exe or double click on the .jar and choose the option to "manually extract" to a folder of your choosing. This will give you this file "liteloader-1.12.2-SNAPSHOT-release.jar"',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b2cbec9c3a7c',
        _type: 'block',
        children: [
          {
            _key: '50746d90f086',
            _type: 'span',
            marks: [],
            text: 'Place the extracted Liteloader.jar ( "liteloader-1.12.2-SNAPSHOT-release.jar") into your system\'s equivalent of "C:\\Users\\YOUR_USERNAME\\AppData\\Roaming\\.westeroscraft\\instances\\WesterosCraft-1.12.2\\mods"',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'c3fbea72d0ae',
        _type: 'block',
        children: [
          {
            _key: '8d1b00a32e5d',
            _type: 'span',
            marks: [],
            text: 'Drop the Macro/Keybind Mod file ("mod_macros_0.15.4_for_1.12.1.litemod") into the same folder!',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f3180efc3c08',
        _type: 'block',
        children: [
          {
            _key: '9416c390d40b',
            _type: 'span',
            marks: [],
            text: 'Start the launcher and navigate to the mods tab.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '2e0460fdb19e',
        _type: 'block',
        children: [
          {
            _key: '253a848a0483',
            _type: 'span',
            marks: [],
            text: 'Disable both DynamicSurroundings and the "Macro/Keybind Mod" in the Optional Mods section and make sure that in the Drop-in Mods section both "liteloader-1.12.2-SNAPSHOT-release.jar" and "mod_macros_0.15.4_for_1.12.1.litemod" appear and are activated. Just like in the attached screenshot.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '58ce81891eb4',
        _type: 'block',
        children: [
          {
            _key: '309ca6ec7740',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'fd0ac26930b3',
        _type: 'figure',
        alt: 'macro mod',
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-6a262bbe129ace29944bbb9d7da4953d7f71bc65-1046x670-png',
            _type: 'reference',
          },
        },
      },
      {
        _key: '1aaa4ebde661',
        _type: 'block',
        children: [
          {
            _key: '01ec0be9d735',
            _type: 'span',
            marks: [],
            text: 'Start the game and enjoy!',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '52a3451d-02e6-4cea-bcc4-e97b78a99e74',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-6075b802562f45843922db2f4c2403b9f34fb622-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'installing-the-macro-keybind',
    },
    title: 'Installing the Macro Keybind',
  },
  {
    _createdAt: '2021-01-23T16:56:42Z',
    _id: 'block-usage-guide',
    _rev: '9SW1xi54QyXoHspJF3ZMQl',
    _type: 'guide',
    _updatedAt: '2022-07-16T18:24:54Z',
    body: [
      {
        _key: 'c3642cd4faae',
        _type: 'block',
        children: [
          {
            _key: '9f48e8c78224',
            _type: 'span',
            marks: [],
            text: 'The creation of the continent of Westeros is driven by the desire to provide a cohesive, logical and vivid environment for the upcoming MMORPG. In order to coordinate this, a number of agreements have been made that assign distinct styles to the 7 principal regions of Westeros. These styles are based on based on cultural, socio-economic and canonical knowledge and govern the usage of our custom blocks to various degrees. The original style guides can be found at /warp regiontest. It is important to distinguish between primary and secondary palette blocks. Primary palette denotes the usage of a block in those parts of a build that make up the bulk structure e.g. exterior or interior walls, pillars, roof. Secondary palette means those blocks that are used as individual accents or unique patterns in a structure. They would usually appear in a very limited quantity.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '556af22e7951',
        _type: 'block',
        children: [
          {
            _key: '423e8ff2a9b30',
            _type: 'span',
            marks: [],
            text: 'Free Blocks: Standard vanilla building blocks, without a dedicated regional-name can generally be used in any region as the primary and secondary palette. The only factor influencing this free usage is the assumption that the 7 kingdoms due to climatic and cultural differences, unique traditions and limited regional exchange/ transport of materials have developed self-contained styles i.e. architectural patterns and motives as well as preferred building materials (blocks) that they use. Towards the borders of a region these styles may blend.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '32fe2bc3ffc9',
        _type: 'block',
        children: [
          {
            _key: '58f881f6258e0',
            _type: 'span',
            marks: [],
            text: "Primary Region Blocks: Custom blocks that have a name pointing to a specific region or style (i.e. stormlands stone, reach pink bricks, etc.), These shouldn't be used as the primary building material outside of their region, unless canon states otherwise. For example, there shouldn't be any dark brown castles in the Westerlands nor should there be light pink castles in the North. We trust you to use your common sense when using them outside of the region for other (secondary) purposes (roads, special features, etc).",
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'e23b8245035f',
        _type: 'block',
        children: [
          {
            _key: '87eaabb2a18f0',
            _type: 'span',
            marks: [],
            text: 'Canonically or logically location-specific and culture-specific Blocks (Short: Canon Blocks): There are certain blocks that do not make sense outside of their specific region or build. This might be because they: a) clearly reflect a regional tradition/culture/circumstance (i.e. Hanging Frogs block \u003e said only to be consumed in the neck and greenblood area), b) depict a location-specific material (i.e. Winterfell granite, black basalt) or c) incorporate a motive that is canonically mentioned for one build only (i.e. Dragon Carvings \u003e Dragonstone). For these blocks, the traditional region rules still apply, which means they are restricted and cannot be used as primary or secondary palette outside of their respective build or region. Following is a list of those specific blocks:',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a75ae9dd2ca0',
        _type: 'block',
        children: [
          {
            _key: '52fb73b620b20',
            _type: 'span',
            marks: [],
            text: 'Hanging frogs \u003e Greenblood, The neck',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '702c6d511f0a',
        _type: 'block',
        children: [
          {
            _key: '11954a64a7c20',
            _type: 'span',
            marks: [],
            text: "Mance Tents and Giant Antlers \u003e Mance's Camp",
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b7b28b335796',
        _type: 'block',
        children: [
          {
            _key: 'e71bd822beab0',
            _type: 'span',
            marks: [],
            text: 'Hanging rats \u003e Flea Bottom',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '06ef58e535aa',
        _type: 'block',
        children: [
          {
            _key: 'ee531d997f730',
            _type: 'span',
            marks: [],
            text: 'Baelors Orbs \u003e Sept of Baelor',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ad2c14cf0eec',
        _type: 'block',
        children: [
          {
            _key: 'de1a1df4aa260',
            _type: 'span',
            marks: [],
            text: "KL Sewer Lids \u003e King's Landing",
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7f47810fa95c',
        _type: 'block',
        children: [
          {
            _key: '8f5f89185d3d0',
            _type: 'span',
            marks: [],
            text: 'Wolf statues \u003e Winterfell',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '81aa90f5237e',
        _type: 'block',
        children: [
          {
            _key: 'f5603a1ead400',
            _type: 'span',
            marks: [],
            text: 'Dragon carvings \u003e Dragonstone',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9d4f4c389465',
        _type: 'block',
        children: [
          {
            _key: 'fd8c3d4c79650',
            _type: 'span',
            marks: [],
            text: 'Eyrie carved door \u003e Eyrie',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'e0fe4500e424',
        _type: 'block',
        children: [
          {
            _key: '3e253a9980590',
            _type: 'span',
            marks: [],
            text: 'Both Oldtown Plaster and Keystone Blocks! \u003e Oldtown',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1a0ee8e5e436',
        _type: 'block',
        children: [
          {
            _key: 'b103ea6b6a960',
            _type: 'span',
            marks: [],
            text: 'Winterfell Granite (Carved and uncarved) \u003e Winterfell',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '421f8a330db0',
        _type: 'block',
        children: [
          {
            _key: '1126ac1711bc0',
            _type: 'span',
            marks: [],
            text: 'Alyssas Tears \u003e Alyssas Tears',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'cc464bdc4e79',
        _type: 'block',
        children: [
          {
            _key: '5198f9514e7f0',
            _type: 'span',
            marks: [],
            text: 'Fruit baskets * \u003e Mostly Dorne, its immediate border and ports with dornish merchant',
          },
        ],
        level: 2,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '8cff4cb904a4',
        _type: 'block',
        children: [
          {
            _key: 'dfd6585ab33c0',
            _type: 'span',
            marks: [],
            text: '(*Fruit baskets are Dorne-specific because the crops that are inside them only really make sense in Dorne. They might feasibly be placed in the very Southern areas of the Reach, and even then only areas near a port. Remember, fruit goes bad pretty quickly.)',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '4b353a5218a8',
        _type: 'block',
        children: [
          {
            _key: '8d7213f730e50',
            _type: 'span',
            marks: [],
            text: 'This list is subject to change at our discretion, but we aim to keep it minimal.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6c219da59c1f',
        _type: 'block',
        children: [
          {
            _key: 'e7f7fe4fbdaa0',
            _type: 'span',
            marks: [],
            text: 'The terrainsets are a special case similar to the canonical blocks. They must never be used outside their region or in any form of "manmade" build. Ocean and River rock can be used to display "wet" areas in conjunction with any of the regional sets.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '05e34218195e',
        _type: 'block',
        children: [
          {
            _key: 'bd9640b83c5e0',
            _type: 'span',
            marks: [],
            text: 'We reserve the right to enforce any changes in builds regarding block usage we find inappropriate.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '52a3451d-02e6-4cea-bcc4-e97b78a99e74',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-b44870a7bdb0acc531c5cebeb662c7555c60fc33-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'block-usage-guide',
    },
    title: 'Block Usage Guide',
  },
  {
    _createdAt: '2021-03-23T18:29:37Z',
    _id: '25b97444-c41b-4a66-a055-eee288b54d2d',
    _rev: '9SW1xi54QyXoHspJF3p9IH',
    _type: 'guide',
    _updatedAt: '2022-07-16T20:46:37Z',
    body: [
      {
        _key: '4680a9b42772',
        _type: 'block',
        children: [
          {
            _key: 'b6d004f33e84',
            _type: 'span',
            marks: [],
            text: 'Welcome and thank you for your interest in becoming a builder!',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a99ca208d3e7',
        _type: 'block',
        children: [
          {
            _key: '34149f33af08',
            _type: 'span',
            marks: [],
            text: 'The purpose of this guide is to prepare you for the application and identify common building mistakes.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '3f82ece756ac',
        _type: 'block',
        children: [
          {
            _key: '4524a01f69ea',
            _type: 'span',
            marks: [],
            text: 'Before an Application',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'a34b71d23ba4',
        _type: 'block',
        children: [
          {
            _key: '94637621931b',
            _type: 'span',
            marks: [],
            text: 'To get a basic foundational understanding of our server style, do the following:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5d0223472ad7',
        _type: 'block',
        children: [
          {
            _key: '3199232cf401',
            _type: 'span',
            marks: [],
            text: 'Explore the various warps found at /warp portals, particularly the ones featured below.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5f3c33219311',
        _type: 'block',
        children: [
          {
            _key: '559184bf0bb3',
            _type: 'span',
            marks: [],
            text: 'Look for ways to improve your own builds from examples fround on the server.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '909e4c582dac',
        _type: 'block',
        children: [
          {
            _key: '9c2c9eb566dd',
            _type: 'span',
            marks: [],
            text: 'Visit and observe our builders work on new additions to the map. Try not to get too up close and personal but feel free to ask questions or give feedback at any time!',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd54a0fca67f3',
        _type: 'block',
        children: [
          {
            _key: '0d0136e4c809',
            _type: 'span',
            marks: [],
            text: 'Familiarize yourself with the server rules as well as our styles adn expectations and review the application guidelines carefully; your application will not be reviewed if they are not followed correctly.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'e464adee0d14',
        _type: 'block',
        children: [
          {
            _key: 'e817b04a1eb4',
            _type: 'span',
            marks: [],
            text: 'As a server, we have developed a series of styles that create a sense of transition and seamlessness throughout the map. ',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'e27e22ec7541',
        _type: 'block',
        children: [
          {
            _key: 'c5ece6612d66',
            _type: 'span',
            marks: [],
            text: 'Each of the 7 Kingdoms are relatively unique and have distinct traits that can make combining more than one region problematic. When you begin a build, make sure to have a close think about the style of the area, climate, economy and influences.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '35ed9f2387d8',
        _type: 'block',
        children: [
          {
            _key: 'ea38f3b02f14',
            _type: 'span',
            marks: [],
            text: 'Block Variation',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'e1a6394a4cd1',
        _type: 'block',
        children: [
          {
            _key: 'f19fedb2cb80',
            _type: 'span',
            marks: [],
            text: 'A fundamental principle of creating an engaging aesthetic is to vary the blocks used in your palette.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'de64b25ca148',
        _type: 'block',
        children: [
          {
            _key: 'fd75fa5666d0',
            _type: 'span',
            marks: [],
            text: 'When building, consider whether placing the same block immediately next to each other multiple times looks too repetitive or noticeably monotone from a distance. Consider what other blocks could be used to break it up and add some variation.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '2fbd53473004',
        _type: 'block',
        children: [
          {
            _key: '0a90562ac21c',
            _type: 'span',
            marks: [],
            text: 'However, a block mix should never be totally random. When using dark, lighter and very light materials, make sure that the dark and the light materials never touch directly. Most of the time our gradients are darkest towards the ground where it is exposed to dirt/pedestrians and areas where the wall is exposed to weather.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '86b7a5c1092e',
        _type: 'block',
        children: [
          {
            _key: 'f1b78dbf06fa',
            _type: 'span',
            marks: [],
            text: 'Layout',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '9b9d5a243ad1',
        _type: 'block',
        children: [
          {
            _key: '41b7c5e04d57',
            _type: 'span',
            marks: [],
            text: 'The first thing done before beginning a build is planning the structural frame. Often this, is done by constructing a wool frame that makes an outline. By doing this you get a general idea of the size of the build as well as a rough visualisation of the interiors. Doing so will help preving creating short or cramped rooms (2 block tall rooms, for example).',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ed328a71e225',
        _type: 'block',
        children: [
          {
            _key: 'ab27b579e6e7',
            _type: 'span',
            marks: [],
            text: "Another important concept of layout is the shape. Avoid symmetrical square shapes as they can look simple and boring, but try to avoid adding extra wings/offshoots just for the sake of it without thinking about what they'd be used for.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '57d04d90ac20',
        _type: 'block',
        children: [
          {
            _key: '3b2fcdb94147',
            _type: 'span',
            marks: [],
            text: 'Vary the shape of the structure by employing more 3-dimensional shapes, such a L shapes, T-shapes, slight offsets (respectively, as shown on the photo to the right), or take some inspiration from houses you see on the server.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'c4585448bcf3',
        _type: 'block',
        children: [
          {
            _key: 'dfb7ebc5912a',
            _type: 'span',
            marks: [],
            text: 'Foundation',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'c05035d2e9be',
        _type: 'block',
        children: [
          {
            _key: 'f2f4b67c45e6',
            _type: 'span',
            marks: [],
            text: 'Usually a structure should have some sort of stone foundation that extends far enough down that nothing is visible beneath it. ',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd178db197d44',
        _type: 'block',
        children: [
          {
            _key: '1cd71ce428fe',
            _type: 'span',
            marks: [],
            text: "A foundation that does not extend down far enough and leaves dirt/sand visible beneath it makes the build look incomplete and more importantly compromises the build's structural integrity/realism.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '31eca8fa4d08',
        _type: 'block',
        children: [
          {
            _key: 'f05e8f1c7a5f',
            _type: 'span',
            marks: [],
            text: 'Facade ',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'e2237d1602d8',
        _type: 'block',
        children: [
          {
            _key: '7c55ca2b84f4',
            _type: 'span',
            marks: [],
            text: "Minecraft, shockingly tends to have a rather blocky nature which often does not exactly lend itself towards interesting yet realistic structures. This obstacle is often attempted to be overcome by adding extra depth and layers to a building facade. However, in Vanilla and in older buildings on the server, depth was used to an excessive amount. Builds became cumbersome and thick with elaborate designs and details that don't hold up with our current standards.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '13c3999ddf9f',
        _type: 'block',
        children: [
          {
            _key: '820dc14dbfe2',
            _type: 'span',
            marks: [],
            text: "With the custom blocks our server now offers you get the chance to create interesting and beautiful facades in just one layer, and when combined with an appropriate level of depth, people will be surprised to find out you're building with Minecraft at all.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1fc851c1b470',
        _type: 'block',
        children: [
          {
            _key: '59c2b320ba8e',
            _type: 'span',
            marks: [],
            text: 'Planks are good material for walls, however a wall of one plank color type is generally not an acceptable level of detail in most places. Take it further and employ more detail by mixing two different wood types.  Good combinations are birch-oak, oak-jungle or jungle-spruce. When experimenting with other combinations, be wary as sometimes certain block mixes will clash.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'eb0fec62fb3a',
        _type: 'block',
        children: [
          {
            _key: '65a6c0573ca5',
            _type: 'span',
            marks: [],
            text: 'Timber and daub blocks are great to use and a staple of medieval architecture. However it does some some care and attention to use correctly. We have a number of shades of timber and daub colors, each one has four different core designs (or "hatches"), as well or as one plain daub block, which lend themselves to various design patterns.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9669e34841f7',
        _type: 'block',
        children: [
          {
            _key: 'ba184cdd55fb',
            _type: 'span',
            marks: [],
            text: 'Try to experiment with the different designs to create interesting patterns. However you should only use one color of timber and daub per build and when in doubt, just make it a standard symmetrical grid pattern.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b2de2bc74f2e',
        _type: 'block',
        children: [
          {
            _key: '240f21e7be1d',
            _type: 'span',
            marks: [],
            text: 'Roof',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '87eeedde69fa',
        _type: 'block',
        children: [
          {
            _key: '3aeea4bcbf1f',
            _type: 'span',
            marks: [],
            text: 'The roof is another important element of a structure. Many roofs, especially those that have a relatively steep pitch, compromise a large part of the build; so ensure that sufficient thought and planning goes into it.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '341d66fa6390',
        _type: 'block',
        children: [
          {
            _key: '83c7a1cbabc8',
            _type: 'span',
            marks: [],
            text: 'A roof should in most, but not necessarily in all places include some sort of eave, or overhang. Eaves hep give the build a little more depth and prevent rain from washing out the foundation.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a05853eead95',
        _type: 'block',
        children: [
          {
            _key: 'fed230c7bf6f',
            _type: 'span',
            marks: [],
            text: 'Most roofs should be made from either sod, wood, thatch or slate - always depending on the region you are building in. ',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '21845cecb0d6',
        _type: 'block',
        children: [
          {
            _key: '60469a8eb8a7',
            _type: 'span',
            marks: [],
            text: 'A wooden roof should feature at least two wood types, the base color and an alternative to add signs of weathering. Doing so helps give the roof a worn look and makes it a little more interesting and unique. Be careful to avoid making it look messy and jumped, try to only discolor in ways that make sense (e.g. from sun-bleaching/watershed points).',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '493d969509b4',
        _type: 'block',
        children: [
          {
            _key: 'b58d2f529a8c',
            _type: 'span',
            marks: [],
            text: 'Thatch is probably the most common roof materials, as it fits a few middle class and almost all low class house styles. When using thatch as roof material, there are a few things to look out for. The two thatch types should never be mixed. It just looks unrealistic and messy. Thatch roofs should have to be at least 45° steep, since thatch would not be waterproof on a lower angle. A common mistake often made is making the thatch roof look like a shapeless blob. It should still always have a defined roof shape, albeit a little roughed up.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '80ce06cd1e5e',
        _type: 'block',
        children: [
          {
            _key: 'db1717429f6a',
            _type: 'span',
            marks: [],
            text: 'Interiors',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'b591c82fbe79',
        _type: 'block',
        children: [
          {
            _key: 'a94f0d969aac',
            _type: 'span',
            marks: [],
            text: 'Interiors can be a challenging, yet gratifying aspect of building. An important part of interior design is the partitioning of space into smaller, more useable spaces. A method of achieving this effect is simply placing more walls, hence making more rooms, to divide the larger rooms into smaller ones.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '92e10eb5f642',
        _type: 'block',
        children: [
          {
            _key: '405bf942d225',
            _type: 'span',
            marks: [],
            text: 'On a similar note of division of rooms, applying different purposes to different rooms is a good way to employ a sense of coherence and sequentiality through the interiors. Consider what you have in your own home: separate rooms for sleeping, food preparing, storage and so on. Attempt to employ these into your own builds to base the structure in reality.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b09bd581e564',
        _type: 'block',
        children: [
          {
            _key: 'f992e0283e76',
            _type: 'span',
            marks: [],
            text: 'Although this tip is not exclusive to interiors, ensure that each block that you place has a purpose. If the block is only there to fill space, it is not serving a worthy purpose and should be replaced by something else that would contirbute to a more engaging environment. For example, a pile of crates may occupy space, thus making the build slightly less boring, but do not serve any other purpose. ',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a95a62ff49c5',
        _type: 'block',
        children: [
          {
            _key: '2ea32f77a4ac',
            _type: 'span',
            marks: [],
            text: "General Dos and Don'ts",
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '8c26184e506f',
        _type: 'block',
        children: [
          {
            _key: '3b359c535b1e',
            _type: 'span',
            marks: [],
            text: 'DO',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '74892c17f69a',
        _type: 'block',
        children: [
          {
            _key: 'f15dc5fc320b',
            _type: 'span',
            marks: [],
            text: 'Add roof rafters',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '67f19e01ec74',
        _type: 'block',
        children: [
          {
            _key: 'fd15b67aedf4',
            _type: 'span',
            marks: [],
            text: "It's important to make sure that roof blocks are seen to have the support necessary to hold them up, we do this with a combination of wooden stair blocks/stairs and half doors. A general rule of thumb is to make sure the external roof blocks are not visible from inside the house. ",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '8d8bd3a3e04e',
        _type: 'block',
        children: [
          {
            _key: 'a365e4ff78cc',
            _type: 'span',
            marks: [],
            text: 'Cover up cabinets/drawers profession blocks',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '698fbe4b9e5f',
        _type: 'block',
        children: [
          {
            _key: '5deb3ef849b1',
            _type: 'span',
            marks: [],
            text: 'When using our custom blocks, you should come across blocks like Bench Drawers, Table Drawers, Cabinets, all kinds of toolblocks and bookshelves. Those blocks have multiple sides with the exact same look. Since it would make any sense to be able to pull out drawers to all sides, you should always cover all but one side of these blocks. You can use walls, halfdoors, wattle fences or other blocks for that. In very few cases it is ok to not completely cover a side, for example placing a drawer next to a bed.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a6d088f64442',
        _type: 'block',
        children: [
          {
            _key: '183120283ab0',
            _type: 'span',
            marks: [],
            text: 'Use slabs/half doors to create cross beams',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '1347917f703d',
        _type: 'block',
        children: [
          {
            _key: '0a0265285d6f',
            _type: 'span',
            marks: [],
            text: "When adding another floor to a building, a common mistake of early builders is to just use full wooden plank blocks or slabs for the floor material. Using rows of stairs is an effect and easy way to create the effect of floor rafter cross beams. It's best to have these cross beams span the shortest width of the house, rather than the length (this means the beams are shorter/more structurally sound).",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'dc6c43336cf6',
        _type: 'block',
        children: [
          {
            _key: 'a26bf20bc828',
            _type: 'span',
            marks: [],
            text: 'Add a profession',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'ad4223506b61',
        _type: 'block',
        children: [
          {
            _key: 'd11b58d59bf2',
            _type: 'span',
            marks: [],
            text: 'Most medieval homeowners would use some portion of their home for professional use (e.g. a carpenter would have their workshop downstairs below their living area). The exception to these is the common farm worker, but there houses will tend to be smaller by virtue of just having a sleeping/kitchen area, but is is still good to think about other details you can add (e.g. an animal pen, vegetable garden, wood chopping area).',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7e97fe5387d6',
        _type: 'block',
        children: [
          {
            _key: '16712b58525c',
            _type: 'span',
            marks: [],
            text: 'Add a yard',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '4871163b75d1',
        _type: 'block',
        children: [
          {
            _key: 'c6f0c668a426',
            _type: 'span',
            marks: [],
            text: 'Most houses in small towns and hamlets will have a square yard out the back for growing vegetables, doing washing, storage and animal pens.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '39bd827b5a14',
        _type: 'block',
        children: [
          {
            _key: '6833c9afd445',
            _type: 'span',
            marks: [],
            text: "DON'T",
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '500b50170eba',
        _type: 'block',
        children: [
          {
            _key: 'f1e66f785989',
            _type: 'span',
            marks: [],
            text: "Don't use torch blocks",
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '31368acb0096',
        _type: 'block',
        children: [
          {
            _key: '0bed7bd27e74',
            _type: 'span',
            marks: [],
            text: 'Torches are generally restricted to castle braziers, in normal houses/professions a fireplace, candle or lantern on a table or bench is fine. ',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '2e8a1460b0e6',
        _type: 'block',
        children: [
          {
            _key: 'b7d2bfd3b7e5',
            _type: 'span',
            marks: [],
            text: "Don't use log blocks",
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '3b662d7bcab5',
        _type: 'block',
        children: [
          {
            _key: 'ba33088da4e6',
            _type: 'span',
            marks: [],
            text: "We try to avoid using the full log blocks in structures these days as they look clunky and don't allow for much variation.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '93a657203881',
        _type: 'block',
        children: [
          {
            _key: '512d3fca9e67',
            _type: 'span',
            marks: [],
            text: "Don't use trapdoors/signs",
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '4d2ef311abff',
        _type: 'block',
        children: [
          {
            _key: '60cd76b47340',
            _type: 'span',
            marks: [],
            text: 'Like with log blocks, these are an outdated building block and half doors/shutters are better suited for their used.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9aa7d66dbd41',
        _type: 'block',
        children: [
          {
            _key: 'af9e377164c8',
            _type: 'span',
            marks: [],
            text: "Don't mix stone block palettes",
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'e8ae2d20b634',
        _type: 'block',
        children: [
          {
            _key: '1ca491915541',
            _type: 'span',
            marks: [],
            text: "When deciding what bricks/stone to build with, it's best to maintain a consistent style and color of stone, e.g. don't mix yellow sandstone bricks with dark cobblestone.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '52e76a860c95',
        _type: 'block',
        children: [
          {
            _key: 'd9b03eedcf87',
            _type: 'span',
            marks: [],
            text: 'Conclusion',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'd2bf6b67e95d',
        _type: 'block',
        children: [
          {
            _key: 'cad0580010aa',
            _type: 'span',
            marks: [],
            text: "There is a lot of information contained within this guide and its important that you understand and take it onboard. However there is still much more for you to learn, so spend some time exploring around our server. Apply these principles in your new builds and see what you can do to improve. Builder applicants are almost always eager, but there's no need to rush; there's plenty of cool builds to come. Good luck and feel free to ask questions!",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b2aa0d2fd3af',
        _type: 'block',
        children: [
          {
            _key: 'a239f110c0dd',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '52a3451d-02e6-4cea-bcc4-e97b78a99e74',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-6c81c9508a3903ca6c0aea93906f5e2ae68d5c48-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'basic-building-guide-for-applicants',
    },
    title: 'Basic Building Guide for Applicants',
  },
  {
    _createdAt: '2021-07-31T14:49:10Z',
    _id: '06cb68de-89e1-4af3-8429-845bd284de59',
    _rev: 'tjfsjo0IgZq2kjKDgpY38W',
    _type: 'guide',
    _updatedAt: '2022-08-26T23:18:27Z',
    body: [
      {
        _key: 'cb2082e8b2e8',
        _type: 'block',
        children: [
          {
            _key: 'fdbf94f73f5b',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [
          {
            _key: '470d78f2e482',
            _type: 'link',
            href: 'https://download.curseforge.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'fd0158149087',
        _type: 'callout',
        text: 'MultiMC Launcher does NOT currently support Microsoft accounts.  If you have already migrated your Mojang credentials, or purchased Minecraft after December 2020, this guide is currently NOT for you.',
      },
      {
        _key: '9fc9ca582247',
        _type: 'block',
        children: [
          {
            _key: 'f25cfc69e222',
            _type: 'span',
            marks: ['strong'],
            text: 'MultiMC Launcher',
          },
          {
            _key: '9403dd7a12e3',
            _type: 'span',
            marks: [],
            text: ' is a custom Minecraft launcher and one of the most popular and long running custom launchers. Adding and playing on the WesterosCraft server is very easy with ',
          },
          {
            _key: '6717a50800e5',
            _type: 'span',
            marks: ['strong'],
            text: 'MultiMC Launcher',
          },
          {
            _key: 'bd2a32a03e96',
            _type: 'span',
            marks: [],
            text: '.\n\nFirst things first: Download ',
          },
          {
            _key: 'f78740a62b3a',
            _type: 'span',
            marks: ['strong'],
            text: 'MultiMC Launcher',
          },
          {
            _key: '2f0a332f4cb9',
            _type: 'span',
            marks: [],
            text: ' from their site here: ',
          },
          {
            _key: '4599379fcafa',
            _type: 'span',
            marks: ['658edc04e489'],
            text: 'https://multimc.org/',
          },
        ],
        markDefs: [
          {
            _key: '658edc04e489',
            _type: 'link',
            href: 'https://multimc.org/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '51e370453738',
        _type: 'block',
        children: [
          {
            _key: '37d8afdf7056',
            _type: 'span',
            marks: [],
            text: 'After that, load ',
          },
          {
            _key: '4a77d476dca8',
            _type: 'span',
            marks: ['strong'],
            text: 'MultiMC Launcher',
          },
          {
            _key: '620b348ef1d1',
            _type: 'span',
            marks: [],
            text: ' and follow the rest of the steps closely.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '915bfd1cfef4',
        _type: 'block',
        children: [
          {
            _key: 'a562aff318e2',
            _type: 'span',
            marks: [],
            text: '\nStep 1',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '5bf7fc4b9c8f',
        _type: 'block',
        children: [
          {
            _key: 'd121b8904d87',
            _type: 'span',
            marks: [],
            text: 'Once in, you want to click the Add Instance button in the top left of the program.  Select Twitch, and search for our modpack using the keywords ',
          },
          {
            _key: 'f3c1f04e4f37',
            _type: 'span',
            marks: ['strong'],
            text: 'Westeros',
          },
          {
            _key: 'f78f89dcff9f',
            _type: 'span',
            marks: [],
            text: ' or ',
          },
          {
            _key: 'aedd5e0b0f3a',
            _type: 'span',
            marks: ['strong'],
            text: 'WesterosCraft.  ',
          },
          {
            _key: 'f0c8dbcfbfdd',
            _type: 'span',
            marks: [],
            text: 'Select the WesterosCraft Modpack, and hit OK to install.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '100e246bb522',
        _type: 'block',
        children: [
          {
            _key: '0b0d1eb84377',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '0a335ba03660',
        _type: 'file',
        asset: {
          _ref: 'file-6d84c6ef3a239db59d14ff6f9feff94acb32bb64-mp4',
          _type: 'reference',
        },
        fileField: {
          _type: 'internalFile',
          asset: {
            _ref: 'file-6d84c6ef3a239db59d14ff6f9feff94acb32bb64-mp4',
            _type: 'reference',
          },
        },
      },
      {
        _key: 'f212de7f6cc6',
        _type: 'block',
        children: [
          {
            _key: '11c0b5561d2e',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'e979f0318bf3',
        _type: 'block',
        children: [
          {
            _key: '2542418ae242',
            _type: 'span',
            marks: [],
            text: 'The modpack should automatically start downloading.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd0299190c751',
        _type: 'block',
        children: [
          {
            _key: '06685d229fcf',
            _type: 'span',
            marks: [],
            text: 'Step 2',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'b4047df995ac',
        _type: 'block',
        children: [
          {
            _key: 'f9f840075cc9',
            _type: 'span',
            marks: [],
            text: 'Next up, you need to download a mod called ',
          },
          {
            _key: 'ab679c79b536',
            _type: 'span',
            marks: ['strong', 'c5e87b5f56c8'],
            text: 'Optifine',
          },
          {
            _key: '0f9922aa18a0',
            _type: 'span',
            marks: ['strong'],
            text: '.',
          },
          {
            _key: 'a5528baef571',
            _type: 'span',
            marks: [],
            text: '  This is a mod that our texture pack relies heavily on - unfortunately, the mod author does not allow server owners to distribute his mod like almost every other mod creator does, so you will have to download the 1.12.2 version separately here: ',
          },
          {
            _key: '8d83ed9c4ae3',
            _type: 'span',
            marks: ['ef8fcc9439ed'],
            text: 'Optifine HD U G5',
          },
          {
            _key: 'd90d98257a22',
            _type: 'span',
            marks: [],
            text: '.  Be sure to grab the 1.12.2 version!\n\n',
          },
        ],
        markDefs: [
          {
            _key: 'ef8fcc9439ed',
            _type: 'link',
            href: 'http://adfoc.us/serve/sitelinks/?id=475250\u0026url=http://optifine.net/adloadx?f=OptiFine_1.12.2_HD_U_G5.jar\u0026x=b647',
          },
          {
            _key: 'c5e87b5f56c8',
            _type: 'link',
            href: 'https://optifine.net/home',
          },
        ],
        style: 'normal',
      },
      {
        _key: '816fd8e9f755',
        _type: 'callout',
        text: "Just a warning - the Optifine download links route you through some scummy ad sites before letting you download.  Be sure to not click on anything you don't mean to!",
      },
      {
        _key: 'c112623f2331',
        _type: 'block',
        children: [
          {
            _key: 'b1387c38c115',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '46bcdb2a5736',
        _type: 'block',
        children: [
          {
            _key: 'cbbc4ac772da',
            _type: 'span',
            marks: [],
            text: 'Once you have Optifine downloaded, adding the mod to your ',
          },
          {
            _key: '2de50e956b94',
            _type: 'span',
            marks: ['strong'],
            text: 'MultiMC Launcher',
          },
          {
            _key: 'ffc48a85d851',
            _type: 'span',
            marks: [],
            text: " instance is pretty easy.\n\nJust click Edit Instance on the right side, check 'Loader Mods', and drag and drop Optifine into that screen.\n\n",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '859b48f94334',
        _type: 'file',
        asset: {
          _ref: 'file-1ca11735a2ec664c7951fb70ad35bdefd5bdae0e-mp4',
          _type: 'reference',
        },
      },
      {
        _key: 'bfba33ab5b99',
        _type: 'block',
        children: [
          {
            _key: '623442030417',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1f0f11c7d86d',
        _type: 'block',
        children: [
          {
            _key: 'b3398f1df78d',
            _type: 'span',
            marks: [],
            text: 'Step 3',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '3d3add649c9e',
        _type: 'block',
        children: [
          {
            _key: 'f50c350f2bc2',
            _type: 'span',
            marks: [],
            text: "Almost done!  You can launch the game now.  Double click the instance to launch the game.  You may be asked to enter your Mojang credentials if you haven't already done so.  Once the Minecraft client loads, be sure to activate our resource pack (included in the modpack).\n\n",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'c239b81e8978',
        _type: 'file',
        asset: {
          _ref: 'file-68176d5e6108b2601de192439791138c67a7781a-mp4',
          _type: 'reference',
        },
      },
      {
        _key: 'b7bd0d45fe50',
        _type: 'block',
        children: [
          {
            _key: '813a37b92d8f',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b3a5baa2d950',
        _type: 'block',
        children: [
          {
            _key: '8c3535d5f7db',
            _type: 'span',
            marks: [],
            text: 'Step 4',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '0b596cb3d450',
        _type: 'block',
        children: [
          {
            _key: '834070211400',
            _type: 'span',
            marks: [],
            text: 'Last step.  All you gotta do is add our server to the server list.  The server IP is: ',
          },
          {
            _key: '194ed1a2ad58',
            _type: 'span',
            marks: ['strong'],
            text: 'mc.westeroscraft.com',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a454d9f855c3',
        _type: 'block',
        children: [
          {
            _key: '923b60041865',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9c799c5ffa63',
        _type: 'file',
        asset: {
          _ref: 'file-d378807b16c8626386cee16a8b179c46185e54af-mp4',
          _type: 'reference',
        },
      },
      {
        _key: 'd27b3e7d2d0a',
        _type: 'block',
        children: [
          {
            _key: '7c21966701f2',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '90be3167054a',
        _type: 'block',
        children: [
          {
            _key: 'c46cb56f5238',
            _type: 'span',
            marks: [],
            text: 'Thats it.  Join and have fun traveling the Kings Road.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    description: 'A guide on accessing the WesterosCraft server using the MultiMC Launcher.',
    guideCategory: {
      _ref: '5f099069-f0ea-4077-b723-af85761811d6',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-6075b802562f45843922db2f4c2403b9f34fb622-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'multimc-launcher-setup',
    },
    title: 'MultiMC Launcher Setup',
  },
  {
    _createdAt: '2021-01-23T19:14:23Z',
    _id: 'custom-resource-pack',
    _rev: 'Bm7S0KZmajesdgpEXFVcMM',
    _type: 'guide',
    _updatedAt: '2022-07-17T15:38:17Z',
    body: [
      {
        _key: '79b4b7cf0f53',
        _type: 'block',
        children: [
          {
            _key: '79b4b7cf0f530',
            _type: 'span',
            marks: [],
            text: 'Introduction\n',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'fbe59e001bd9',
        _type: 'block',
        children: [
          {
            _key: 'fbe59e001bd90',
            _type: 'span',
            marks: [],
            text: "The WesterosCraft Resource Pack (WCRP) not only makes a plethora of new textures available to the game, but swaps out most of Minecraft's standard sounds for more realistic counterparts.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '206ac4942e77',
        _type: 'block',
        children: [
          {
            _key: '206ac4942e770',
            _type: 'span',
            marks: [],
            text: 'The WCRP is a remix of ',
          },
          {
            _key: '206ac4942e771',
            _type: 'span',
            marks: ['140d7b3e1318'],
            text: 'Dokucraft',
          },
          {
            _key: '206ac4942e772',
            _type: 'span',
            marks: [],
            text: ', ',
          },
          {
            _key: '206ac4942e773',
            _type: 'span',
            marks: ['c98be46329ab'],
            text: 'Doku TSC',
          },
          {
            _key: '206ac4942e774',
            _type: 'span',
            marks: [],
            text: ' and custom textures specifically tailored to fit the atmosphere of the WesterosCraft Creative Server. The sound effects are from ',
          },
          {
            _key: '206ac4942e775',
            _type: 'span',
            marks: ['03266e3743d5'],
            text: 'Soundjay.com',
          },
          {
            _key: '206ac4942e776',
            _type: 'span',
            marks: [],
            text: ' and ',
          },
          {
            _key: '206ac4942e777',
            _type: 'span',
            marks: ['c721d28f704b'],
            text: 'Pond5.com',
          },
          {
            _key: '206ac4942e778',
            _type: 'span',
            marks: [],
            text: ', either paid for under an Attribution 3.0 license or considered in the public domain.',
          },
        ],
        markDefs: [
          {
            _key: '140d7b3e1318',
            _type: 'link',
            href: 'http://dokucraft.co.uk/',
          },
          {
            _key: 'c98be46329ab',
            _type: 'link',
            href: 'http://www.minecraftforum.net/topic/513093-16x32x64x162-dokucraft-the-saga-continues/',
          },
          {
            _key: '03266e3743d5',
            _type: 'link',
            href: 'http://www.soundjay.com/',
          },
          {
            _key: 'c721d28f704b',
            _type: 'link',
            href: 'http://www.pond5.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'fea49efa386d',
        _type: 'block',
        children: [
          {
            _key: 'fea49efa386d0',
            _type: 'span',
            marks: [],
            text: 'Tailored to Fit',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '842f176c6112',
        _type: 'block',
        children: [
          {
            _key: '842f176c61120',
            _type: 'span',
            marks: [],
            text: 'In several ways, the WCRP has been adapted to help convey a true-to-the-lore atmosphere of the world of "A Song of Ice and Fire".',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9bcf3a77162f',
        _type: 'block',
        children: [
          {
            _key: '9bcf3a77162f0',
            _type: 'span',
            marks: [],
            text: 'Additions to the Textures have been made to account for the Religions mentioned in ASOIF like painted images of of the Seven (on the Dye Items), the seven-pointed star as a metal adornment on plaster blocks and the colours of the seven on a crystal glass windows and the enchantment table.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1ac87a123da6',
        _type: 'block',
        children: [
          {
            _key: '1ac87a123da60',
            _type: 'span',
            marks: [],
            text: 'Other textures e.g. the daub \u0026 wattle blocks (on the Endstone metadatas) were created to emphasize the cultural and geographical differences between the regions of Westeros . The wealth or educational level of a build can be expressed by adding various types of (book)shelves, cabinets and chests that are made from different materials.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6fce269c664a',
        _type: 'block',
        children: [
          {
            _key: '6fce269c664a0',
            _type: 'span',
            marks: [],
            text: 'The interior detail of a project is just as important as the exterior, which is why several blocks display household items (food plates on pressure plates, tankard on flower pot) or even foodstuffs (hanging sausages, hares, fowls on cobbweb metadatas). Just as George R. R. Martin put great effort into describing foods and beverages, we put great effort into recreating that diversity. Netherwarts have been retextured to peas, potatos to turnips and the creeper head is now a head of lettuce and lots of other ingredients have been added as the content of crates and barrels.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9c35d344b283',
        _type: 'block',
        children: [
          {
            _key: '9c35d344b2830',
            _type: 'span',
            marks: [],
            text: 'There are a lot of textures that only differ slightly in tone or texture e.g. the sandstones. This helps to portray a realistic weathering or aging effect to walls and roofs of builds without creating harsh contrasts.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'c84b79614d6d',
        _type: 'block',
        children: [
          {
            _key: 'c84b79614d6d0',
            _type: 'span',
            marks: [],
            text: 'This pack is purely a Creative Mode pack. Currently there are no plans to make this into a pack that works with vanilla Survival.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7ba65b2c8ae4',
        _type: 'block',
        children: [
          {
            _key: '7ba65b2c8ae40',
            _type: 'span',
            marks: [],
            text: 'CTM \u0026 MCPatcher',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '8b14c9a363a2',
        _type: 'block',
        children: [
          {
            _key: '8b14c9a363a20',
            _type: 'span',
            marks: [],
            text: 'In the pre-launcher versions the RP made excessive use of ',
          },
          {
            _key: '8b14c9a363a21',
            _type: 'span',
            marks: ['b65c98d320e4'],
            text: "MCPatcher's",
          },
          {
            _key: '8b14c9a363a22',
            _type: 'span',
            marks: [],
            text: ' most notable feature, the Connected Textures Mod (CTM). The CTM allowed the creators of the WCRP to increase the amount of textures a block can display, by assigning textures to the ',
          },
          {
            _key: '8b14c9a363a23',
            _type: 'span',
            marks: ['cd03a10714a7'],
            text: 'metadatas',
          },
          {
            _key: '8b14c9a363a24',
            _type: 'span',
            marks: [],
            text: ' of a block ID that the vanilla game did not use. The mod also comes with a set of different ',
          },
          {
            _key: '8b14c9a363a25',
            _type: 'span',
            marks: ['3b908cbd1c8d'],
            text: 'features',
          },
          {
            _key: '8b14c9a363a26',
            _type: 'span',
            marks: [],
            text: ' on how textures on a block change with the placement of the block in 3D space.',
          },
        ],
        markDefs: [
          {
            _key: 'b65c98d320e4',
            _type: 'link',
            href: 'http://www.minecraftforum.net/topic/1496369-173pre-172-164-and-earlierupdate-127-mcpatcher-hd-fix-431/',
          },
          {
            _key: 'cd03a10714a7',
            _type: 'link',
            href: 'http://minecraft.gamepedia.com/Data_values#Data',
          },
          {
            _key: '3b908cbd1c8d',
            _type: 'link',
            href: 'http://www.minecraftforum.net/topic/1414510-a-texture-artists-guide-to-mcpatchers-features/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'da8f39234f56',
        _type: 'block',
        children: [
          {
            _key: 'da8f39234f560',
            _type: 'span',
            marks: [],
            text: 'We learned a lot about the CTM by studing the Packs of ',
          },
          {
            _key: 'da8f39234f561',
            _type: 'span',
            marks: ['8a7314b76273'],
            text: 'FyreUK',
          },
          {
            _key: 'da8f39234f562',
            _type: 'span',
            marks: [],
            text: ',',
          },
          {
            _key: 'da8f39234f563',
            _type: 'span',
            marks: ['a1a7a663707d'],
            text: 'John Smith',
          },
          {
            _key: 'da8f39234f564',
            _type: 'span',
            marks: [],
            text: ' \u0026 ',
          },
          {
            _key: 'da8f39234f565',
            _type: 'span',
            marks: ['3d430691f586'],
            text: "Misa's Texture Pack.",
          },
          {
            _key: 'da8f39234f566',
            _type: 'span',
            marks: [],
            text: ' We would like to thank them for being pioneers of CTM.',
          },
        ],
        markDefs: [
          {
            _key: '8a7314b76273',
            _type: 'link',
            href: 'http://fyreuk.com/',
          },
          {
            _key: 'a1a7a663707d',
            _type: 'link',
            href: 'http://www.jslegacy.com/',
          },
          {
            _key: '3d430691f586',
            _type: 'link',
            href: 'http://www.minecraftforum.net/topic/69354-64x162-misas-realistic-texture-pack-updated-1jul13/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'f12ef502b047',
        _type: 'block',
        children: [
          {
            _key: 'f12ef502b0470',
            _type: 'span',
            marks: [],
            text: 'History of Resource Pack Development',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'a8d1aa1c001d',
        _type: 'block',
        children: [
          {
            _key: 'a8d1aa1c001d0',
            _type: 'span',
            marks: [],
            text: 'Current Situation',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '07a10642b8e3',
        _type: 'block',
        children: [
          {
            _key: '07a10642b8e30',
            _type: 'span',
            marks: [],
            text: 'The current WCRP is specificly designed to complement the corresponding version of the WesterosBlocks mod, which has to be installed on a Forge based server and client. The WCRP features 177 textures that use various CTM methods, significant changes to standard MC blocks, a custom sky set with several moving clouds, customs sounds and lots of biome dependent colour-overlays.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'afb352627eec',
        _type: 'block',
        children: [
          {
            _key: 'afb352627eec0',
            _type: 'span',
            marks: [],
            text: 'It is about 44 MB large.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '22018c2d0158',
        _type: 'block',
        children: [
          {
            _key: '22018c2d01580',
            _type: 'span',
            marks: [],
            text: 'Outlook',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '00e04da09497',
        _type: 'block',
        children: [
          {
            _key: '00e04da094970',
            _type: 'span',
            marks: [],
            text: 'In the future, development will focus on refreshing the item and sound portion of the Resource Pack. Check out our ongoing development on the ',
          },
          {
            _key: '00e04da094971',
            _type: 'span',
            marks: ['bd803c0f5091'],
            text: 'forums.',
          },
        ],
        markDefs: [
          {
            _key: 'bd803c0f5091',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/westeroscraft-texture-pack-megathread.34/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '293e97d51cd5',
        _type: 'block',
        children: [
          {
            _key: '293e97d51cd50',
            _type: 'span',
            marks: [],
            text: 'Creators \u0026 Contributors',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'e178de5feb0b',
        _type: 'block',
        children: [
          {
            _key: 'e178de5feb0b0',
            _type: 'span',
            marks: [],
            text: 'Emoticone, Marken4, Moozipan, Hal9007, Jack05, Thamus_Knoward, WhitefireNeo',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '14abd8c245a9',
        _type: 'block',
        children: [
          {
            _key: '14abd8c245a90',
            _type: 'span',
            marks: [],
            text: 'Special thanks to ',
          },
          {
            _key: '14abd8c245a91',
            _type: 'span',
            marks: ['8f3091139c44'],
            text: 'Doku',
          },
          {
            _key: '14abd8c245a92',
            _type: 'span',
            marks: [],
            text: ', ',
          },
          {
            _key: '14abd8c245a93',
            _type: 'span',
            marks: ['0c54703f0de5'],
            text: 'Misa',
          },
          {
            _key: '14abd8c245a94',
            _type: 'span',
            marks: [],
            text: ', ',
          },
          {
            _key: '14abd8c245a95',
            _type: 'span',
            marks: ['2d214c2c9249'],
            text: 'Hickerydickery, WantedRobot,',
          },
          {
            _key: '14abd8c245a96',
            _type: 'span',
            marks: ['e7ff9d9d666d'],
            text: 'SMP,',
          },
          {
            _key: '14abd8c245a97',
            _type: 'span',
            marks: [],
            text: ' and the following users from the DokuCommunity for their input on the respective textures:',
          },
        ],
        markDefs: [
          {
            _key: '8f3091139c44',
            _type: 'link',
            href: 'http://www.minecraftforum.net/topic/207781-32x17x-dokucraft-25-free-to-use/',
          },
          {
            _key: '0c54703f0de5',
            _type: 'link',
            href: 'http://www.minecraftforum.net/topic/69354-64x162-misas-realistic-texture-pack-updated-1jul13/',
          },
          {
            _key: '2d214c2c9249',
            _type: 'link',
            href: 'http://dokucraft.co.uk/',
          },
          {
            _key: 'e7ff9d9d666d',
            _type: 'link',
            href: 'http://smptextures.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'ad8f23a23e0e',
        _type: 'block',
        children: [
          {
            _key: 'ad8f23a23e0e0',
            _type: 'span',
            marks: [],
            text: 'Balloftape - Skull, CreeperHead, SurvivorHead, Redstone Lamp\nMetatron - Zombie Head\nSavage Alien - Empty Map\nGabriel MBR - Baked Potatoe, Pumpkin Pie\nDuru - Armor Icons, Compass, Pork, Brewing Stand\nFoodstamp - Armor Icons\nCCCode - Chainmail Icons\nLordofSax - Helmet, Chestplate, Leggins, etc.\nDark_Tundra - Banner\nWessexstock - Survivor Skin, Zombie Skin\nZaph34r - Sign\nDiet Taco - Trap Door\nAlexium - Cake, Cake Item\nKloporte - Bread\nNoodaa - Rotten Flesh, Melon Slice\nDark Defender - ChickenMeat, Cauldron, Mushroom Block\nAceofhrts97 - Beef\nDubca7 - Cauldron\nSerAaron - Book, Flagstones\nStraxael - Explosion\nJetStorm - Wooden Planks, Chiseled Stone Brick, SandStone\nStaretta - Glasspanes\nAwesomeSauceUK- NetherBrick\nRecreps4444, SeanFletcher,DWSkanska, TheBaconizer - Oak Sapling, Assorted Flowers\nMax - DiamondBlock\nDWSkanska - Carrot, Skull, Language Buttons.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: 'e1ac352f-1567-410a-ac16-d516ef533faf',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-9eaec2dd56083786fe0570582c60a2c445ebf7a4-240x240-png',
        _type: 'reference',
      },
    },
    slug: {
      _type: 'slug',
      current: 'custom-resource-pack',
    },
    title: 'Custom Resource Pack',
  },
  {
    _createdAt: '2021-07-31T14:48:44Z',
    _id: 'b62f52a2-9749-4a88-aef5-6629bc8c2744',
    _rev: 'tjfsjo0IgZq2kjKDgphQia',
    _type: 'guide',
    _updatedAt: '2022-08-27T00:28:17Z',
    body: [
      {
        _key: '24d751bab282',
        _type: 'block',
        children: [
          {
            _key: '1809c24a4b02',
            _type: 'span',
            marks: ['strong'],
            text: 'GDLauncher ',
          },
          {
            _key: '2ea8b23a959d',
            _type: 'span',
            marks: [],
            text: 'is a custom Minecraft launcher recommended by the WesterosCraft admins for its focus on design and ease of use.  Adding and playing on the WesterosCraft server is very easy with ',
          },
          {
            _key: '14f52aea92f9',
            _type: 'span',
            marks: ['strong'],
            text: 'GDLauncher',
          },
          {
            _key: 'd0cd1ec7f177',
            _type: 'span',
            marks: [],
            text: '.\n\nFirst things first: Download GDLauncher from their site here: ',
          },
          {
            _key: '0bf8df563ca4',
            _type: 'span',
            marks: ['109a0f0ac4fe'],
            text: 'https://gdevs.io/',
          },
        ],
        markDefs: [
          {
            _key: '109a0f0ac4fe',
            _type: 'link',
            href: 'https://gdevs.io/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '0f4b106128d3',
        _type: 'block',
        children: [
          {
            _key: '4499d684559b',
            _type: 'span',
            marks: [],
            text: 'After that, log into GDLauncher with your Minecraft credentials and the rest of the steps are pretty easy.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '96942414d53e',
        _type: 'block',
        children: [
          {
            _key: '494563fdba48',
            _type: 'span',
            marks: [],
            text: '\nStep 1',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'f638f7a3d1cf',
        _type: 'block',
        children: [
          {
            _key: '90b57370974a',
            _type: 'span',
            marks: [],
            text: "Once in, click the 'plus' sign in the lower left corner of the launcher, select the CurseForge tab, and search for our modpack using the keywords ",
          },
          {
            _key: '8de190f9f13b',
            _type: 'span',
            marks: ['strong'],
            text: 'Westeros',
          },
          {
            _key: '7039ce92f615',
            _type: 'span',
            marks: [],
            text: ' or ',
          },
          {
            _key: '0533b35e8cca',
            _type: 'span',
            marks: ['strong'],
            text: 'WesterosCraft. ',
          },
          {
            _key: '265cdc96a2d3',
            _type: 'span',
            marks: [],
            text: 'Our modpack should appear.  Select ',
          },
          {
            _key: 'aaf1afb5546e',
            _type: 'span',
            marks: ['strong'],
            text: 'Download Latest.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'acdf1c36dede',
        _type: 'block',
        children: [
          {
            _key: '641d0a6683d9',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '0d115183c5d6',
        _type: 'file',
        asset: {
          _ref: 'file-22862aa80374b93e42e5ec4b10425b5cb5d203f5-mp4',
          _type: 'reference',
        },
      },
      {
        _key: 'dcba4b915cc8',
        _type: 'block',
        children: [
          {
            _key: 'd1f268504896',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5806bb7ce7d6',
        _type: 'block',
        children: [
          {
            _key: 'a09f38c3d11e',
            _type: 'span',
            marks: [],
            text: 'The modpack should automatically start downloading.\n\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '82d6dadd4a33',
        _type: 'file',
        asset: {
          _ref: 'file-d16ac599f9fb13972db6388d72050461276d5ecb-mp4',
          _type: 'reference',
        },
      },
      {
        _key: '3d31a0535778',
        _type: 'block',
        children: [
          {
            _key: 'cb2819337259',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a17f80e009b9',
        _type: 'block',
        children: [
          {
            _key: 'f80e4ae81388',
            _type: 'span',
            marks: [],
            text: 'Step 2',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '8be750b490d9',
        _type: 'block',
        children: [
          {
            _key: '63e29ce5b25e',
            _type: 'span',
            marks: [],
            text: 'Next up, you need to download a mod called ',
          },
          {
            _key: '6c7f3de6f441',
            _type: 'span',
            marks: ['strong', '55099c4f2e8c'],
            text: 'Optifine',
          },
          {
            _key: '00b1b4545373',
            _type: 'span',
            marks: ['strong'],
            text: '.',
          },
          {
            _key: 'f20560aee354',
            _type: 'span',
            marks: [],
            text: '  This is a mod that our texture pack relies heavily on - unfortunately, the mod author does not allow server owners to distribute his mod like almost every other mod creator does, so you will have to download the 1.12.2 version separately here: ',
          },
          {
            _key: '9bbc5c0e5537',
            _type: 'span',
            marks: ['859320864fbb'],
            text: 'Optifine HD U G5',
          },
          {
            _key: 'bbd45b36781b',
            _type: 'span',
            marks: [],
            text: '.  Be sure to grab the 1.12.2 version!\n\n',
          },
        ],
        markDefs: [
          {
            _key: '859320864fbb',
            _type: 'link',
            href: 'http://adfoc.us/serve/sitelinks/?id=475250\u0026url=http://optifine.net/adloadx?f=OptiFine_1.12.2_HD_U_G5.jar\u0026x=b647',
          },
          {
            _key: '55099c4f2e8c',
            _type: 'link',
            href: 'https://optifine.net/home',
          },
        ],
        style: 'normal',
      },
      {
        _key: '6d3670d0666b',
        _type: 'callout',
        text: "Just a warning - the Optifine download links route you through some scummy ad sites before letting you download.  Be sure to not click on anything you don't mean to!",
      },
      {
        _key: 'd9a6677d6cd5',
        _type: 'block',
        children: [
          {
            _key: '9e49bf25c23d',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '97004edfd00c',
        _type: 'block',
        children: [
          {
            _key: 'd43d58409577',
            _type: 'span',
            marks: [],
            text: 'Once you have Optifine downloaded, adding the mod to your GDLauncher instance is pretty easy.\n\nJust right click on the WesterosCraft modpack, select Manage, and drag and drop the mod file into the launcher!  You can also modify Minecraft settings from here, like how much memory your computer should devote to Minecraft.\n\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9da90e1b08d3',
        _type: 'file',
        asset: {
          _ref: 'file-8c19757eea6760dd643857bcea4e018d9534ec7f-mp4',
          _type: 'reference',
        },
      },
      {
        _key: 'defaf850b7e9',
        _type: 'block',
        children: [
          {
            _key: 'fbe695e2534f',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '3cc6f5f5eaee',
        _type: 'block',
        children: [
          {
            _key: 'e096e786b653',
            _type: 'span',
            marks: [],
            text: 'Step 3',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'a2e3643c99c8',
        _type: 'block',
        children: [
          {
            _key: 'be71dd108c09',
            _type: 'span',
            marks: [],
            text: 'Almost done!  You can launch the game now.  Once the Minecraft client loads, be sure to activate our resource pack (included in the modpack).\n\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5875237f48b2',
        _type: 'file',
        asset: {
          _ref: 'file-68176d5e6108b2601de192439791138c67a7781a-mp4',
          _type: 'reference',
        },
      },
      {
        _key: '75ca79f98d03',
        _type: 'block',
        children: [
          {
            _key: '93a0dbe31e52',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6882107d05db',
        _type: 'block',
        children: [
          {
            _key: '7f5966403eba',
            _type: 'span',
            marks: [],
            text: 'Step 4',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '9a01052dc21c',
        _type: 'block',
        children: [
          {
            _key: '5292646b6915',
            _type: 'span',
            marks: [],
            text: 'Last step.  All you gotta do is add our server to the server list.  The server IP is: ',
          },
          {
            _key: '57468b115fa4',
            _type: 'span',
            marks: ['strong'],
            text: 'mc.westeroscraft.com',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f81b4c3b2bf5',
        _type: 'block',
        children: [
          {
            _key: '597113b63fea',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '50c5b5893acf',
        _type: 'file',
        asset: {
          _ref: 'file-d378807b16c8626386cee16a8b179c46185e54af-mp4',
          _type: 'reference',
        },
      },
      {
        _key: '1f83a5b8080b',
        _type: 'block',
        children: [
          {
            _key: '0ec98d92db08',
            _type: 'span',
            marks: [],
            text: 'Thats it.  Join and have fun traveling the Kings Road.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    description: 'A guide on accessing the WesterosCraft server using the GDLauncher.',
    guideCategory: {
      _ref: '5f099069-f0ea-4077-b723-af85761811d6',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-6075b802562f45843922db2f4c2403b9f34fb622-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'gdlauncher-setup',
    },
    title: 'GDLauncher Setup',
  },
  {
    _createdAt: '2021-07-31T14:48:30Z',
    _id: '16cb0154-08be-463d-b4bd-71e66b79b332',
    _rev: '0penztPZlC32Cv2tewnKiH',
    _type: 'guide',
    _updatedAt: '2022-08-26T23:31:58Z',
    body: [
      {
        _key: '796067d28e04',
        _type: 'block',
        children: [
          {
            _key: 'b8a4d7e53945',
            _type: 'span',
            marks: ['strong'],
            text: 'CurseForge Launcher',
          },
          {
            _key: '8b2eb34c8d8b',
            _type: 'span',
            marks: [],
            text: ' is a custom Minecraft launcher and one of the most popular launchers, mainly due to it being tied directly to the biggest Minecraft mod ecosystem. Adding and playing on the WesterosCraft server is very easy with ',
          },
          {
            _key: 'bbbd8fea000d',
            _type: 'span',
            marks: ['strong'],
            text: 'CurseForge Launcher',
          },
          {
            _key: '433640f5ca7b',
            _type: 'span',
            marks: [],
            text: '.\n\nFirst things first: Download ',
          },
          {
            _key: '61d2919934d1',
            _type: 'span',
            marks: ['strong'],
            text: 'CurseForge Launcher',
          },
          {
            _key: '9347f9ac508b',
            _type: 'span',
            marks: [],
            text: ' from their site here: ',
          },
          {
            _key: 'a93cf9b39817',
            _type: 'span',
            marks: ['9d4a26cc535d'],
            text: 'https://download.curseforge.com/',
          },
        ],
        markDefs: [
          {
            _key: '9d4a26cc535d',
            _type: 'link',
            href: 'https://download.curseforge.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '860c36de6ff7',
        _type: 'block',
        children: [
          {
            _key: '8ae3bb3b8d84',
            _type: 'span',
            marks: [],
            text: 'After that, load ',
          },
          {
            _key: '00b909d423b2',
            _type: 'span',
            marks: ['strong'],
            text: 'CurseForge Launcher ',
          },
          {
            _key: '94bb63e82915',
            _type: 'span',
            marks: [],
            text: 'with your and follow the rest of the steps closely.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9da3b8382bf0',
        _type: 'block',
        children: [
          {
            _key: '72f724217fbd',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '75187c15c70b',
        _type: 'callout',
        text: 'A quick note: the CurseForge launcher install is coupled with another program called Overwolf.  We recommend going into the Overwolf settings and blocking it from running on the CurseForge launcher startup.',
      },
      {
        _key: '539545f35098',
        _type: 'block',
        children: [
          {
            _key: 'aa08e75d27f6',
            _type: 'span',
            marks: [],
            text: '\nStep 1',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '412605101dfc',
        _type: 'block',
        children: [
          {
            _key: '19fe4130372b',
            _type: 'span',
            marks: [],
            text: 'Once in, you want to select a game you want to add a mod for.  You obviously want to click Minecraft.   In the search bar, search for our modpack using the keywords ',
          },
          {
            _key: '047c6f52b0c8',
            _type: 'span',
            marks: ['strong'],
            text: 'Westeros',
          },
          {
            _key: 'adf244f6e48d',
            _type: 'span',
            marks: [],
            text: ' or ',
          },
          {
            _key: '8449d1934c7f',
            _type: 'span',
            marks: ['strong'],
            text: 'WesterosCraft',
          },
          {
            _key: '9478659a126d',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '93f23a19830a',
        _type: 'block',
        children: [
          {
            _key: 'd80b82530346',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '20b731df4f40',
        _type: 'file',
        asset: {
          _ref: 'file-369843c8038ea09073401cdc6b26b7e2c074c9e0-mp4',
          _type: 'reference',
        },
      },
      {
        _key: 'd646c0b9a4a1',
        _type: 'block',
        children: [
          {
            _key: '07ae7ee97877',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '22783b3fe7ed',
        _type: 'block',
        children: [
          {
            _key: '14b39d344da5',
            _type: 'span',
            marks: [],
            text: 'The modpack should automatically start downloading.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'edfb4ec0a489',
        _type: 'block',
        children: [
          {
            _key: 'd6d6ee1c4c72',
            _type: 'span',
            marks: [],
            text: 'Step 2',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '9660a53ddac3',
        _type: 'block',
        children: [
          {
            _key: 'e67173c21b7d',
            _type: 'span',
            marks: [],
            text: 'Next up, you need to download a mod called ',
          },
          {
            _key: 'ba97e0d1e36a',
            _type: 'span',
            marks: ['strong', 'b9b037b66d93'],
            text: 'Optifine',
          },
          {
            _key: '6687886acd46',
            _type: 'span',
            marks: ['strong'],
            text: '.',
          },
          {
            _key: '6de2ddfd90e9',
            _type: 'span',
            marks: [],
            text: '  This is a mod that our texture pack relies heavily on - unfortunately, the mod author does not allow server owners to distribute his mod like almost every other mod creator does, so you will have to download the 1.12.2 version separately here: ',
          },
          {
            _key: '24c9d560122e',
            _type: 'span',
            marks: ['80b7eca2486b'],
            text: 'Optifine HD U G5',
          },
          {
            _key: 'fa6aa5ceed98',
            _type: 'span',
            marks: [],
            text: '.  Be sure to grab the 1.12.2 version!\n\n',
          },
        ],
        markDefs: [
          {
            _key: '80b7eca2486b',
            _type: 'link',
            href: 'http://adfoc.us/serve/sitelinks/?id=475250\u0026url=http://optifine.net/adloadx?f=OptiFine_1.12.2_HD_U_G5.jar\u0026x=b647',
          },
          {
            _key: 'b9b037b66d93',
            _type: 'link',
            href: 'https://optifine.net/home',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'f9f50487a4bf',
        _type: 'callout',
        text: "Just a warning - the Optifine download links route you through some scummy ad sites before letting you download.  Be sure to not click on anything you don't mean to!",
      },
      {
        _key: '7fd4c6692fda',
        _type: 'block',
        children: [
          {
            _key: '9ceb5f913ba6',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '0d1ad79b816c',
        _type: 'block',
        children: [
          {
            _key: '3736be7500cd',
            _type: 'span',
            marks: [],
            text: 'Once you have Optifine downloaded, adding the mod to your ',
          },
          {
            _key: '4122e9d00b32',
            _type: 'span',
            marks: ['strong'],
            text: 'CurseForge Launcher',
          },
          {
            _key: '2fcb8b7bd643',
            _type: 'span',
            marks: [],
            text: ' instance is pretty easy.\n\nJust right click on the WesterosCraft modpack, select Open Folder, and drag and drop the mod file into your mods folder!\n\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '8d2df8be4f18',
        _type: 'file',
        asset: {
          _ref: 'file-a43ed0217a9a10d0285f6d42f8b002b6790ee0fa-mp4',
          _type: 'reference',
        },
      },
      {
        _key: 'd666e78f6068',
        _type: 'block',
        children: [
          {
            _key: '6ca6105b3163',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'e0b71cd07cf4',
        _type: 'block',
        children: [
          {
            _key: '478bfaac3182',
            _type: 'span',
            marks: [],
            text: 'Step 3',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '0299a69ece33',
        _type: 'block',
        children: [
          {
            _key: 'cde72fe50127',
            _type: 'span',
            marks: [],
            text: 'Almost done!  You can launch the game now.  The Minecraft launcher will load, and the correct installation should be automatically selected.  Hit ',
          },
          {
            _key: 'ddfec9595ce6',
            _type: 'span',
            marks: ['strong'],
            text: 'Play',
          },
          {
            _key: 'bd190ede30ec',
            _type: 'span',
            marks: [],
            text: '.  Once the Minecraft client loads, be sure to activate our resource pack (included in the modpack).\n\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'c5d5e47ee3d5',
        _type: 'file',
        asset: {
          _ref: 'file-68176d5e6108b2601de192439791138c67a7781a-mp4',
          _type: 'reference',
        },
      },
      {
        _key: 'df2be2bf2c93',
        _type: 'block',
        children: [
          {
            _key: '3ad6a8be8f2e',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f1a3ef4262a6',
        _type: 'block',
        children: [
          {
            _key: 'f804d5d7463b',
            _type: 'span',
            marks: [],
            text: 'Step 4',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '5a7674549dc8',
        _type: 'block',
        children: [
          {
            _key: '7c0f5890fc46',
            _type: 'span',
            marks: [],
            text: 'Last step.  All you gotta do is add our server to the server list.  The server IP is: ',
          },
          {
            _key: '46f6684f156c',
            _type: 'span',
            marks: ['strong'],
            text: 'mc.westeroscraft.com',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'dd5fb3103948',
        _type: 'block',
        children: [
          {
            _key: '04d426568a9f',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '336017725f2f',
        _type: 'file',
        asset: {
          _ref: 'file-d378807b16c8626386cee16a8b179c46185e54af-mp4',
          _type: 'reference',
        },
      },
      {
        _key: '5e8c39c9749e',
        _type: 'block',
        children: [
          {
            _key: '6f9b51ca7d17',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '122af16c2f96',
        _type: 'block',
        children: [
          {
            _key: 'b67e27c96c3c',
            _type: 'span',
            marks: [],
            text: 'Thats it.  Join and have fun traveling the Kings Road.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    description:
      'A guide on accessing the WesterosCraft server using the CurseForge/Twitch Launcher.',
    guideCategory: {
      _ref: '5f099069-f0ea-4077-b723-af85761811d6',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-6075b802562f45843922db2f4c2403b9f34fb622-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'curseforge-launcher-setup',
    },
    title: 'CurseForge/Twitch Launcher Setup',
  },
  {
    _createdAt: '2021-01-23T16:56:42Z',
    _id: 'general-building-guidelines',
    _rev: 'ChIptyqGxUgclKXif58br0',
    _type: 'guide',
    _updatedAt: '2022-07-16T18:27:55Z',
    body: [
      {
        _key: 'd0699631ca4c',
        _type: 'block',
        children: [
          {
            _key: '3b56be74dc60',
            _type: 'span',
            marks: [],
            text: 'WesterosCraft organizes building into seven levels: ',
          },
          {
            _key: '37f3536533f9',
            _type: 'span',
            marks: ['strong'],
            text: 'Singleplayer Builds',
          },
          {
            _key: '5cda0de03212',
            _type: 'span',
            marks: [],
            text: ', server ',
          },
          {
            _key: '5c55a4d11b32',
            _type: 'span',
            marks: ['strong'],
            text: 'Plot Building',
          },
          {
            _key: '301884851235',
            _type: 'span',
            marks: [],
            text: ', taking on ',
          },
          {
            _key: '8e65752d142d',
            _type: 'span',
            marks: ['strong'],
            text: 'Mini Builds',
          },
          {
            _key: '192b0a0d43d0',
            _type: 'span',
            marks: [],
            text: ' and ',
          },
          {
            _key: '37248327ebac',
            _type: 'span',
            marks: ['strong'],
            text: 'Immersion Builds',
          },
          {
            _key: '7421efba5537',
            _type: 'span',
            marks: [],
            text: ', leading ',
          },
          {
            _key: '46d3baaf0b55',
            _type: 'span',
            marks: ['strong', 'cd68798c3b91'],
            text: 'Canon Projects',
          },
          {
            _key: 'c8d6350a87d4',
            _type: 'span',
            marks: [],
            text: ', and participating in ',
          },
          {
            _key: '711a16101181',
            _type: 'span',
            marks: ['strong'],
            text: 'Megabuilds',
          },
          {
            _key: 'd749ae443ee5',
            _type: 'span',
            marks: [],
            text: ' and ',
          },
          {
            _key: '3ad93c19d421',
            _type: 'span',
            marks: ['strong'],
            text: 'Server Builds',
          },
          {
            _key: '0e0fe99d4f4d',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [
          {
            _key: 'cd68798c3b91',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/canon-project-application-guidelines',
          },
        ],
        style: 'normal',
      },
      {
        _key: '2e8176853973',
        _type: 'block',
        children: [
          {
            _key: '7ca8982578540',
            _type: 'span',
            marks: [],
            text: 'Singleplayer Builds',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'fb49baa8466f',
        _type: 'block',
        children: [
          {
            _key: '6d876682b8b90',
            _type: 'span',
            marks: [],
            text: 'In your ',
          },
          {
            _key: '6d876682b8b91',
            _type: 'span',
            marks: ['e9f66fd8b6aa'],
            text: 'builder application',
          },
          {
            _key: '6d876682b8b92',
            _type: 'span',
            marks: [],
            text: ' you will need to submit builds in singleplayer using our ',
          },
          {
            _key: '6d876682b8b93',
            _type: 'span',
            marks: ['c52d9f7ca6eb'],
            text: 'WesterosCraft launcher',
          },
          {
            _key: 'eae298758e10',
            _type: 'span',
            marks: [],
            text: ' (after initially submitting a copy of the apphouse). Be sure to check out our ',
          },
          {
            _key: '6d876682b8b95',
            _type: 'span',
            marks: ['152032329790'],
            text: 'Basic Building Guide for Applicants',
          },
          {
            _key: '6d876682b8b96',
            _type: 'span',
            marks: [],
            text: ' if you are applying to become a builder. Once you are approved for builder status you will be given build permissions on our server, where you can start your ',
          },
          {
            _key: '6d876682b8b97',
            _type: 'span',
            marks: ['16ba21ae95e9'],
            text: 'probation',
          },
          {
            _key: '6d876682b8b98',
            _type: 'span',
            marks: [],
            text: ' and will be expected to start building on plots.',
          },
        ],
        markDefs: [
          {
            _key: 'e9f66fd8b6aa',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/form/builder-application.3/select',
          },
          {
            _key: 'c52d9f7ca6eb',
            _type: 'link',
            href: 'https://westeroscraft.com/launcher',
          },
          {
            _key: '152032329790',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/basic-building-guide-for-applicants',
          },
          {
            _key: '16ba21ae95e9',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/new-builders-guide',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'eb308444a7b2',
        _type: 'block',
        children: [
          {
            _key: 'd27ab088bf5e0',
            _type: 'span',
            marks: [],
            text: 'Plot Building',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '3dfcd8c71a87',
        _type: 'block',
        children: [
          {
            _key: 'd937c159bf970',
            _type: 'span',
            marks: ['strong'],
            text: 'What are Plots?',
          },
          {
            _key: 'd937c159bf971',
            _type: 'span',
            marks: [],
            text: '\nWhen you first check out a build, you might see a lot of square shapes on the ground made of various colored glass or wool; these are ',
          },
          {
            _key: 'd937c159bf972',
            _type: 'span',
            marks: ['strong'],
            text: 'plots',
          },
          {
            _key: 'd937c159bf973',
            _type: 'span',
            marks: [],
            text: '. Plots are basically big markers saying "Hey! Build this building here, in this shape!"',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '77265f94dcd4',
        _type: 'block',
        children: [
          {
            _key: '75ef8d5ba9fe0',
            _type: 'span',
            marks: ['strong'],
            text: 'What do the Colors Mean?',
          },
          {
            _key: '75ef8d5ba9fe1',
            _type: 'span',
            marks: [],
            text: '\nWhen you first warp to a work in progress (WIP) build, the first thing you will usually see is a style guide with project information. Colors indicate the type of building the project leaders want to build there. Colors might be different from build to build so be sure to check the guide when you warp somewhere new. Red and orange might mean rich and poor, while blue and purple might mean different kinds of shops.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '92a5d2217f0f',
        _type: 'block',
        children: [
          {
            _key: '4b66a68826950',
            _type: 'span',
            marks: ['strong'],
            text: 'Special Plots',
          },
          {
            _key: '4b66a68826951',
            _type: 'span',
            marks: [],
            text: '\nIn the plot there may be a sign with ',
          },
          {
            _key: '4b66a68826952',
            _type: 'span',
            marks: ['strong'],
            text: 'specific instructions',
          },
          {
            _key: '4b66a68826953',
            _type: 'span',
            marks: [],
            text: ' for that building. There might also be a single block sitting in it. Usually this block shows you what material you are supposed to use for the roof.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5e11f715cc2e',
        _type: 'block',
        children: [
          {
            _key: '9dbc6462708a0',
            _type: 'span',
            marks: ['strong'],
            text: 'Builder Tags',
          },
          {
            _key: '9dbc6462708a1',
            _type: 'span',
            marks: [],
            text: '\nWhen you have claimed a plot and are working on a build, ',
          },
          {
            _key: '9dbc6462708a2',
            _type: 'span',
            marks: ['strong'],
            text: 'always leave a tag there',
          },
          {
            _key: '9dbc6462708a3',
            _type: 'span',
            marks: [],
            text: ", even if you have just started. What's a tag? It's a block floating above the building with your name signed on it. It lets us know who is responsible for what and helps us keep track of things. Be sure to keep your tag up even when you are done building. ",
          },
          {
            _key: '9dbc6462708a4',
            _type: 'span',
            marks: ['strong'],
            text: 'Always tag your buildings!',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '3a1ccecb3400',
        _type: 'block',
        children: [
          {
            _key: '99d24b05b4ee0',
            _type: 'span',
            marks: ['strong'],
            text: 'Do not take more than one plot at a time.',
          },
          {
            _key: '99d24b05b4ee1',
            _type: 'span',
            marks: [],
            text: ' \nPlease ensure you finish a building before starting another.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'de6e5d7cdaf1',
        _type: 'block',
        children: [
          {
            _key: '0a9fd10b5d470',
            _type: 'span',
            marks: ['strong'],
            text: 'Feedback',
          },
          {
            _key: '0a9fd10b5d471',
            _type: 'span',
            marks: [],
            text: '\nEveryone on the server is allowed to leave feedback or constructive criticisms on WIP builds. If you have feedback, place a ',
          },
          {
            _key: '0a9fd10b5d472',
            _type: 'span',
            marks: ['strong'],
            text: 'melon block ',
          },
          {
            _key: '0a9fd10b5d473',
            _type: 'span',
            marks: [],
            text: 'somewhere above their building with your message written on it with signs. If you are replying to feedback, use any other block but melon. Generally people use ',
          },
          {
            _key: '0a9fd10b5d474',
            _type: 'span',
            marks: ['strong'],
            text: 'pumpkins',
          },
          {
            _key: '0a9fd10b5d475',
            _type: 'span',
            marks: [],
            text: ' to reply but you can use anything as long as it sticks out.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '90817f01f9e6',
        _type: 'block',
        children: [
          {
            _key: '950103a7378f0',
            _type: 'span',
            marks: [],
            text: "Always be sure to keep checking back at your individual builds for any feedback until the entire project is done or the project leader has approved it. If the leader of a project tells you to change something, listen to them. It's their build and they have the option to remove your build entirely if they think it isn't suitable.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9d9fdf6c723e',
        _type: 'block',
        children: [
          {
            _key: '6648924378ce0',
            _type: 'span',
            marks: [],
            text: 'If you have addressed all the feedback and think your build is done, place a "',
          },
          {
            _key: '6648924378ce1',
            _type: 'span',
            marks: ['strong'],
            text: 'Done',
          },
          {
            _key: '6648924378ce2',
            _type: 'span',
            marks: [],
            text: '" block near your builder tag.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '80df0f254cce',
        _type: 'block',
        children: [
          {
            _key: '4780c06231820',
            _type: 'span',
            marks: ['strong'],
            text: 'How to Find Available Plots',
          },
          {
            _key: '4780c06231821',
            _type: 'span',
            marks: [],
            text: '\nCheck out ',
          },
          {
            _key: '4780c06231822',
            _type: 'span',
            marks: ['strong'],
            text: '/warp build',
          },
          {
            _key: '4780c06231823',
            _type: 'span',
            marks: [],
            text: ', ask around in game, check the forums, or check out the "Open Plot" layer on the ',
          },
          {
            _key: 'cc93a6ff0726',
            _type: 'span',
            marks: ['4cd7fd75782b'],
            text: 'dynmap',
          },
          {
            _key: '0315217dffdb',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [
          {
            _key: '4cd7fd75782b',
            _type: 'link',
            href: 'http://mc.westeroscraft.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '5de04083372e',
        _type: 'block',
        children: [
          {
            _key: '85d478cbc667',
            _type: 'span',
            marks: [],
            text: "Really can't find anything at all? As a new builder you won't be able to do much else until you pass probation, but you could start testing for a Mini or Immersion Build.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '774ed42db82f',
        _type: 'block',
        children: [
          {
            _key: '8c16e610a0660',
            _type: 'span',
            marks: [],
            text: 'Mini Builds',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '3662e6864bf2',
        _type: 'block',
        children: [
          {
            _key: 'b831458b25a90',
            _type: 'span',
            marks: [],
            text: 'Mini Builds are non-canon sub projects of any larger project, and could be holdfasts, mines, quarries or other points of interest. They usually involve a set of buildings of some type that the applicant has to test, plan/plot and oversee to construction of in coordination with other builders. Experience with Mini Builds is required to apply for a larger ',
          },
          {
            _key: '184bc5689ece',
            _type: 'span',
            marks: ['53ba592f535d'],
            text: 'Canon Project',
          },
        ],
        markDefs: [
          {
            _key: '53ba592f535d',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/canon-project-application-guidelines',
          },
        ],
        style: 'normal',
      },
      {
        _key: '6534b542b531',
        _type: 'block',
        children: [
          {
            _key: '4bcc928dab150',
            _type: 'span',
            marks: [],
            text: 'You can find opportunities to lead mini builds on project application threads in the ',
          },
          {
            _key: '4bcc928dab151',
            _type: 'span',
            marks: ['e4995dc4fdf0'],
            text: 'Canon Project forums',
          },
          {
            _key: '1b0f8c985f94',
            _type: 'span',
            marks: [],
            text: ', as well as by activating the "Available Mini" layer on the DynMap. You can apply to lead these mini builds on a projects application thread, which will need to be approved by the canon project lead before you can begin. ',
          },
          {
            _key: '4bcc928dab153',
            _type: 'span',
            marks: ['strong'],
            text: 'Only full, non-probationary builders may apply for Mini Builds',
          },
          {
            _key: '4bcc928dab154',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [
          {
            _key: 'e4995dc4fdf0',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/categories/canon-projects.84/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'd771c8f877e6',
        _type: 'block',
        children: [
          {
            _key: '0932db1ff4b30',
            _type: 'span',
            marks: [],
            text: 'Immersion Builds',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'bc7c37b953dd',
        _type: 'block',
        children: [
          {
            _key: '55eec2bd254a0',
            _type: 'span',
            marks: [],
            text: 'Immersion Builds are a step up from Mini Builds in that they operate independently of a parent project. Please refer to the ',
          },
          {
            _key: '55eec2bd254a1',
            _type: 'span',
            marks: ['4fc63e7883f0'],
            text: 'Immersion Build Application Guidelines',
          },
          {
            _key: '55eec2bd254a2',
            _type: 'span',
            marks: [],
            text: ' for more details. ',
          },
          {
            _key: '55eec2bd254a3',
            _type: 'span',
            marks: ['strong'],
            text: 'You must be a full, non-probationary Builder and have completed one Mini Build to apply for an Immersion Build',
          },
          {
            _key: '55eec2bd254a4',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [
          {
            _key: '4fc63e7883f0',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/immersion-build-application-guidelines',
          },
        ],
        style: 'normal',
      },
      {
        _key: '5e29bed10f14',
        _type: 'block',
        children: [
          {
            _key: 'a56d3026aeaa0',
            _type: 'span',
            marks: [],
            text: 'Canon Projects',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'c6e243dce0f7',
        _type: 'block',
        children: [
          {
            _key: '2b2705ef34df0',
            _type: 'span',
            marks: [],
            text: 'Canon Projects are of significant canon locations in Westeros, have one or multiple project leaders, and enlist the help of many others to complete. Projects can range from the very small (',
          },
          {
            _key: '2b2705ef34df1',
            _type: 'span',
            marks: ['e5471dd52fb1'],
            text: 'Crossroads Inn',
          },
          {
            _key: '2b2705ef34df2',
            _type: 'span',
            marks: [],
            text: ') to the very large (',
          },
          {
            _key: '2b2705ef34df3',
            _type: 'span',
            marks: ['f2861b333bc9'],
            text: 'Fairmarket',
          },
          {
            _key: '2b2705ef34df4',
            _type: 'span',
            marks: [],
            text: '). Any location found on our ',
          },
          {
            _key: '2b2705ef34df5',
            _type: 'span',
            marks: ['9339aa1daa8c'],
            text: 'Progress Page',
          },
          {
            _key: '2b2705ef34df6',
            _type: 'span',
            marks: [],
            text: ' and on our ',
          },
          {
            _key: '2b2705ef34df7',
            _type: 'span',
            marks: ['31a33c6594c2'],
            text: 'Wiki',
          },
          {
            _key: '2b2705ef34df8',
            _type: 'span',
            marks: [],
            text: ' can be considered significant enough to be a canon project.',
          },
        ],
        markDefs: [
          {
            _key: 'e5471dd52fb1',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/riverlands/crossroads-inn',
          },
          {
            _key: 'f2861b333bc9',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/riverlands/fairmarket',
          },
          {
            _key: '9339aa1daa8c',
            _type: 'link',
            href: 'https://westeroscraft.com/progress',
          },
          {
            _key: '31a33c6594c2',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'f502254a3814',
        _type: 'block',
        children: [
          {
            _key: '1c2c72c858890',
            _type: 'span',
            marks: ['strong'],
            text: 'To apply for a Canon Project you must have completed at least two Mini Builds, or one Mini Build and one',
          },
          {
            _key: '1c2c72c858891',
            _type: 'span',
            marks: [],
            text: ' ',
          },
          {
            _key: '1c2c72c858892',
            _type: 'span',
            marks: ['strong', '97586c06e32c'],
            text: 'Immersion Build',
          },
          {
            _key: '1c2c72c858893',
            _type: 'span',
            marks: [],
            text: '. Check out our ',
          },
          {
            _key: '1c2c72c858894',
            _type: 'span',
            marks: ['15139bea117e'],
            text: 'Canon Project Application Guidelines',
          },
          {
            _key: '1c2c72c858895',
            _type: 'span',
            marks: [],
            text: ' for more details.',
          },
        ],
        markDefs: [
          {
            _key: '97586c06e32c',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/immersion-build-application-guidelines',
          },
          {
            _key: '15139bea117e',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/canon-project-application-guidelines',
          },
        ],
        style: 'normal',
      },
      {
        _key: '39003c32b515',
        _type: 'block',
        children: [
          {
            _key: 'e60c06cbc29f0',
            _type: 'span',
            marks: [],
            text: 'Megabuilds',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'bb9449124204',
        _type: 'block',
        children: [
          {
            _key: 'bb245b9a06ea0',
            _type: 'span',
            marks: [],
            text: 'Megabuilds are projects which combine several locations into one cohesive area. The ',
          },
          {
            _key: 'bb245b9a06ea1',
            _type: 'span',
            marks: ['0880fb853fe7'],
            text: 'Central Westerlands Megabuild',
          },
          {
            _key: 'bb245b9a06ea2',
            _type: 'span',
            marks: [],
            text: ' is a good example. ',
          },
          {
            _key: 'bb245b9a06ea3',
            _type: 'span',
            marks: ['strong'],
            text: 'Only builders with experience of all other levels of planning and building are eligible to apply for Megabuilds',
          },
          {
            _key: 'bb245b9a06ea4',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [
          {
            _key: '0880fb853fe7',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/central-westerlands-megabuild-tarbeck-hall-sarsfield-oxcross-hornvale-by-lemonbear.1801/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'dcb608352a99',
        _type: 'block',
        children: [
          {
            _key: 'e3b431488f8f0',
            _type: 'span',
            marks: [],
            text: 'Server Builds',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '52e4b674a88f',
        _type: 'block',
        children: [
          {
            _key: '6101ecf2ec3d0',
            _type: 'span',
            marks: [],
            text: 'Server builds are usually coordinated by community moderators, and seek to involve as many members of the community as possible. Server builds sometimes culminate in a ',
          },
          {
            _key: '6101ecf2ec3d1',
            _type: 'span',
            marks: ['strong'],
            text: 'server-wide build day',
          },
          {
            _key: '6101ecf2ec3d2',
            _type: 'span',
            marks: [],
            text: ' where teams of builders are assigned to different areas of the project. Check the ',
          },
          {
            _key: '6101ecf2ec3d3',
            _type: 'span',
            marks: ['7dec47b20553'],
            text: 'Server Build forum',
          },
          {
            _key: '6101ecf2ec3d4',
            _type: 'span',
            marks: [],
            text: ' for information on any current or upcoming server builds. Server builds are organized and delegated by the moderating team, so please get in touch with a moderator if you have any ideas for the following builds.',
          },
        ],
        markDefs: [
          {
            _key: '7dec47b20553',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/categories/server-builds.85/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '3e1a771e5510',
        _type: 'block',
        children: [
          {
            _key: 'b5551e055e1d0',
            _type: 'span',
            marks: [],
            text: 'The following locations are considered canonically significant and large enough to be considered Server Builds.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'dfdb43050471',
        _type: 'block',
        children: [
          {
            _key: 'fb59f0007b560',
            _type: 'span',
            marks: ['de723986ad90'],
            text: "Mance's Camp",
          },
          {
            _key: 'fb59f0007b561',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b562',
            _type: 'span',
            marks: ['45149d2d9bd9'],
            text: 'Castle Black',
          },
          {
            _key: 'fb59f0007b563',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b564',
            _type: 'span',
            marks: ['cfadd49e68ee'],
            text: 'Nightfort',
          },
          {
            _key: 'fb59f0007b565',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b566',
            _type: 'span',
            marks: ['595eacd53a47'],
            text: 'Winterfell',
          },
          {
            _key: 'fb59f0007b567',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b568',
            _type: 'span',
            marks: ['fc725062ae9b'],
            text: 'White Harbor',
          },
          {
            _key: 'fb59f0007b569',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5610',
            _type: 'span',
            marks: ['66257f2f97f3'],
            text: 'The Twins',
          },
          {
            _key: 'fb59f0007b5611',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5612',
            _type: 'span',
            marks: ['470a05dfa963'],
            text: 'The Eyrie',
          },
          {
            _key: 'fb59f0007b5613',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5614',
            _type: 'span',
            marks: ['3f6017b53bd2'],
            text: 'Gulltown',
          },
          {
            _key: 'fb59f0007b5615',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5616',
            _type: 'span',
            marks: ['b3bea0b3f325'],
            text: 'Pyke',
          },
          {
            _key: 'fb59f0007b5617',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5618',
            _type: 'span',
            marks: ['19ca79c75683'],
            text: 'Riverrun',
          },
          {
            _key: 'fb59f0007b5619',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5620',
            _type: 'span',
            marks: ['416b81e2daf3'],
            text: 'Harrenhal',
          },
          {
            _key: 'fb59f0007b5621',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5622',
            _type: 'span',
            marks: ['ca6fdb024aad'],
            text: 'Dragonstone',
          },
          {
            _key: 'fb59f0007b5623',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5624',
            _type: 'span',
            marks: ['fff4b899eb21'],
            text: 'Duskendale',
          },
          {
            _key: 'fb59f0007b5625',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5626',
            _type: 'span',
            marks: ['9abef7a9bc75'],
            text: 'Lannisport',
          },
          {
            _key: 'fb59f0007b5627',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5628',
            _type: 'span',
            marks: ['8721370a977e'],
            text: 'Casterly Rock',
          },
          {
            _key: 'fb59f0007b5629',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5630',
            _type: 'span',
            marks: ['67582e8a8404'],
            text: "King's Landing",
          },
          {
            _key: 'fb59f0007b5631',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5632',
            _type: 'span',
            marks: ['2d426fa0bb3f'],
            text: 'The Red Keep',
          },
          {
            _key: 'fb59f0007b5633',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5634',
            _type: 'span',
            marks: ['ee392f18dc8d'],
            text: "Storm's End",
          },
          {
            _key: 'fb59f0007b5635',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5636',
            _type: 'span',
            marks: ['08308567f437'],
            text: 'Highgarden',
          },
          {
            _key: 'fb59f0007b5637',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5638',
            _type: 'span',
            marks: ['ebe189ee62ff'],
            text: 'Oldtown',
          },
          {
            _key: 'fb59f0007b5639',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5640',
            _type: 'span',
            marks: ['26a2a9c8c029'],
            text: 'The Arbor',
          },
          {
            _key: 'fb59f0007b5641',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'fb59f0007b5642',
            _type: 'span',
            marks: ['9c33fbb49f6c'],
            text: 'Sunspear',
          },
          {
            _key: 'fb59f0007b5643',
            _type: 'span',
            marks: [],
            text: '\n',
          },
        ],
        markDefs: [
          {
            _key: 'de723986ad90',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/beyond-the-wall/mances-camp',
          },
          {
            _key: '45149d2d9bd9',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/the-wall/castle-black',
          },
          {
            _key: 'cfadd49e68ee',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/the-wall/nightfort',
          },
          {
            _key: '595eacd53a47',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/north/winterfell',
          },
          {
            _key: 'fc725062ae9b',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/north/white-harbor',
          },
          {
            _key: '66257f2f97f3',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/riverlands/the-twins',
          },
          {
            _key: '470a05dfa963',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/vale/the-eyrie',
          },
          {
            _key: '3f6017b53bd2',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/vale/gulltown',
          },
          {
            _key: 'b3bea0b3f325',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/iron-islands/pyke',
          },
          {
            _key: '19ca79c75683',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/riverlands/riverrun',
          },
          {
            _key: '416b81e2daf3',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/riverlands/harrenhal',
          },
          {
            _key: 'ca6fdb024aad',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/crownlands/dragonstone',
          },
          {
            _key: 'fff4b899eb21',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/crownlands/duskendale',
          },
          {
            _key: '9abef7a9bc75',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/westerlands/lannisport',
          },
          {
            _key: '8721370a977e',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/westerlands/casterly-rock',
          },
          {
            _key: '67582e8a8404',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/crownlands/kings-landing',
          },
          {
            _key: '2d426fa0bb3f',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/crownlands/red-keep',
          },
          {
            _key: 'ee392f18dc8d',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/stormlands/storms-end',
          },
          {
            _key: '08308567f437',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/reach/highgarden',
          },
          {
            _key: 'ebe189ee62ff',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/reach/oldtown',
          },
          {
            _key: '26a2a9c8c029',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/reach/the-arbor',
          },
          {
            _key: '9c33fbb49f6c',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/dorne/sunspear',
          },
        ],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '8837ee46-c394-4de7-93e7-cfcc140dac62',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-5406f88f0bc08a0df5311dc5942acc6c30f3b00d-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'general-building-guidelines',
    },
    title: 'General Building Guidelines',
  },
  {
    _createdAt: '2021-01-24T04:00:53Z',
    _id: 'frequently-asked-questions',
    _rev: 'Bm7S0KZmajesdgpEXDaU5r',
    _type: 'guide',
    _updatedAt: '2022-07-16T17:08:16Z',
    guideCategory: {
      _ref: 'e1ac352f-1567-410a-ac16-d516ef533faf',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-796307ce11746142062b7b17c259aecbe9e1f8e2-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [
      {
        _key: '5BnnXMo8',
        _type: 'accordion',
        accordionContent: [
          {
            _key: '2bEl7ErP',
            copy: [
              {
                _key: '54b1fb4195aa',
                _type: 'block',
                children: [
                  {
                    _key: '54b1fb4195aa0',
                    _type: 'span',
                    marks: [],
                    text: 'Our mission is to recreate the universe imagined by author ',
                  },
                  {
                    _key: '54b1fb4195aa1',
                    _type: 'span',
                    marks: ['d17f63f7573b'],
                    text: 'George RR Martin',
                  },
                  {
                    _key: '54b1fb4195aa2',
                    _type: 'span',
                    marks: [],
                    text: ' in his book series ',
                  },
                  {
                    _key: '54b1fb4195aa3',
                    _type: 'span',
                    marks: ['d53c9fa3a217'],
                    text: 'A Song of Ice and Fire',
                  },
                  {
                    _key: '54b1fb4195aa4',
                    _type: 'span',
                    marks: [],
                    text: ' (ASoIaF) as accurately and precisely as possible within the confines of ',
                  },
                  {
                    _key: '54b1fb4195aa5',
                    _type: 'span',
                    marks: ['20bfaab120fc'],
                    text: 'Minecraft',
                  },
                  {
                    _key: '54b1fb4195aa6',
                    _type: 'span',
                    marks: [],
                    text: ', in an effort to custom create a world which will be the stage for a ',
                  },
                  {
                    _key: '54b1fb4195aa7',
                    _type: 'span',
                    marks: ['2e99e4dfc5a4'],
                    text: 'roleplaying game',
                  },
                  {
                    _key: '54b1fb4195aa8',
                    _type: 'span',
                    marks: [],
                    text: '.',
                  },
                  {
                    _key: '54b1fb4195aa9',
                    _type: 'span',
                    marks: ['strong'],
                    text: ' In pursuit of this endeavor we aim to provide a friendly and encouraging atmosphere for our creative community at all times.',
                  },
                ],
                markDefs: [
                  {
                    _key: 'd17f63f7573b',
                    _type: 'link',
                    href: 'http://www.georgerrmartin.com/',
                  },
                  {
                    _key: 'd53c9fa3a217',
                    _type: 'link',
                    href: 'http://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire',
                  },
                  {
                    _key: '20bfaab120fc',
                    _type: 'link',
                    href: 'https://minecraft.net/',
                  },
                  {
                    _key: '2e99e4dfc5a4',
                    _type: 'link',
                    href: 'https://forum.westeroscraft.com/forum/mmo.44/',
                  },
                ],
                style: 'normal',
              },
              {
                _key: '74349e5e0395',
                _type: 'block',
                children: [
                  {
                    _key: '74349e5e03950',
                    _type: 'span',
                    marks: [],
                    text: 'To accomplish this we use our ',
                  },
                  {
                    _key: '74349e5e03951',
                    _type: 'span',
                    marks: ['ad8851833f0e'],
                    text: 'Forums',
                  },
                  {
                    _key: '74349e5e03952',
                    _type: 'span',
                    marks: [],
                    text: ' , this ',
                  },
                  {
                    _key: '74349e5e03953',
                    _type: 'span',
                    marks: ['6d080080d415'],
                    text: 'Wiki ',
                  },
                  {
                    _key: '74349e5e03954',
                    _type: 'span',
                    marks: [],
                    text: ', a ',
                  },
                  {
                    _key: '74349e5e03955',
                    _type: 'span',
                    marks: ['d6e94d4843a3'],
                    text: 'Dynamic Map',
                  },
                  {
                    _key: '74349e5e03956',
                    _type: 'span',
                    marks: [],
                    text: ' , ',
                  },
                  {
                    _key: '74349e5e03957',
                    _type: 'span',
                    marks: ['2649b18acec0'],
                    text: 'Discord',
                  },
                  {
                    _key: '74349e5e03958',
                    _type: 'span',
                    marks: [],
                    text: ' , a ',
                  },
                  {
                    _key: '74349e5e03959',
                    _type: 'span',
                    marks: ['7beed0e23388'],
                    text: 'Custom Launcher',
                  },
                  {
                    _key: '74349e5e039510',
                    _type: 'span',
                    marks: [],
                    text: ' , and the ',
                  },
                  {
                    _key: '74349e5e039511',
                    _type: 'span',
                    marks: ['fcaab1860d90'],
                    text: 'Song of Ice and Fire books',
                  },
                  {
                    _key: '74349e5e039512',
                    _type: 'span',
                    marks: [],
                    text: ' in addition to hundreds of online resources that we use to learn as much as possible about the world we are building.',
                  },
                ],
                markDefs: [
                  {
                    _key: 'ad8851833f0e',
                    _type: 'link',
                    href: 'https://forum.westeroscraft.com/forum/',
                  },
                  {
                    _key: '6d080080d415',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki',
                  },
                  {
                    _key: 'd6e94d4843a3',
                    _type: 'link',
                    href: 'http://mc.westeroscraft.com/',
                  },
                  {
                    _key: '2649b18acec0',
                    _type: 'link',
                    href: 'https://discordapp.com/',
                  },
                  {
                    _key: '7beed0e23388',
                    _type: 'link',
                    href: 'http://www.westeroscraft.com/launcher',
                  },
                  {
                    _key: 'fcaab1860d90',
                    _type: 'link',
                    href: 'http://www.amazon.com/George-Martins-Thrones-5-Book-Boxed/dp/0345535529/ref=la_B000APIGH4_1_1?s=books\u0026ie=UTF8\u0026qid=1391856345\u0026sr=1-1',
                  },
                ],
                style: 'normal',
              },
              {
                _key: 'fc4efd2a41f8',
                _type: 'block',
                children: [
                  {
                    _key: 'fc4efd2a41f80',
                    _type: 'span',
                    marks: [],
                    text: 'Most importantly, we are a community of people dedicated to both our loves for Minecraft and the ASoIaF series, and use this project as a way to explore our relevant interests.',
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
            ],
            heading: 'What is WesterosCraft?',
          },
          {
            _key: 'B8zK4XMA',
            copy: [
              {
                _key: 'f699fb51badd',
                _type: 'block',
                children: [
                  {
                    _key: 'f699fb51badd0',
                    _type: 'span',
                    marks: [],
                    text: "Over the years we found that we were slowly pushing the limits of what a traditional Minecraft game could handle, and decided we needed to develop our own launcher in order to handle our constantly growing needs. A launcher is a program designed to 'launch' an application, such as Minecraft. As long as you have a legal copy of the Minecraft game, you should be able to use our launcher without issue. You can purchase a digital copy of Minecraft ",
                  },
                  {
                    _key: 'f699fb51badd1',
                    _type: 'span',
                    marks: ['8a7ec860746e'],
                    text: 'here',
                  },
                  {
                    _key: 'f699fb51badd2',
                    _type: 'span',
                    marks: [],
                    text: ' . The launcher enables us to expand our inventory of custom blocks, provide everyone with easy-access to our custom texture pack, and to be able to implement roleplaying elements into the game which could otherwise not exist. You can easily download our launcher ',
                  },
                  {
                    _key: 'f699fb51badd3',
                    _type: 'span',
                    marks: ['d130158f765f', 'strong'],
                    text: 'here',
                  },
                  {
                    _key: 'f699fb51badd4',
                    _type: 'span',
                    marks: ['d130158f765f'],
                    text: '.',
                  },
                ],
                markDefs: [
                  {
                    _key: '8a7ec860746e',
                    _type: 'link',
                    href: 'https://minecraft.net/',
                  },
                  {
                    _key: 'd130158f765f',
                    _type: 'link',
                    href: 'http://www.westeroscraft.com/launcher',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'What is a custom launcher and why do you have one?',
          },
          {
            _key: 'Z0wuJzZ9',
            copy: [
              {
                _key: '7122ae33c674',
                _type: 'block',
                children: [
                  {
                    _key: '7122ae33c6740',
                    _type: 'span',
                    marks: [],
                    text: 'Head over to our ',
                  },
                  {
                    _key: '7122ae33c6741',
                    _type: 'span',
                    marks: ['2a0ae6a40bc8'],
                    text: 'Troubleshooting Guide',
                  },
                  {
                    _key: '7122ae33c6742',
                    _type: 'span',
                    marks: [],
                    text: '. It answers the most frequent issues users had in the past, and is likely to contain the answer to your problem as well. If your problem persists you may contact us via the ',
                  },
                  {
                    _key: '7122ae33c6743',
                    _type: 'span',
                    marks: ['43509ac6b1ef'],
                    text: 'Support Forum',
                  },
                  {
                    _key: '7122ae33c6744',
                    _type: 'span',
                    marks: [],
                    text: ' or on ',
                  },
                  {
                    _key: '7122ae33c6745',
                    _type: 'span',
                    marks: ['6762323cf6f1'],
                    text: 'Discord',
                  },
                  {
                    _key: '7122ae33c6746',
                    _type: 'span',
                    marks: [],
                    text: '. Please note that requests not following the ',
                  },
                  {
                    _key: '7122ae33c6747',
                    _type: 'span',
                    marks: ['b9a0d2e778a1'],
                    text: 'Submission Rules',
                  },
                  {
                    _key: '7122ae33c6748',
                    _type: 'span',
                    marks: [],
                    text: ' will be deleted.',
                  },
                ],
                markDefs: [
                  {
                    _key: '2a0ae6a40bc8',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki/guides/troubleshooting-guide',
                  },
                  {
                    _key: '43509ac6b1ef',
                    _type: 'link',
                    href: 'https://forum.westeroscraft.com/forum/support.40/',
                  },
                  {
                    _key: '6762323cf6f1',
                    _type: 'link',
                    href: 'https://discord.com/invite/pBS5TH4',
                  },
                  {
                    _key: 'b9a0d2e778a1',
                    _type: 'link',
                    href: 'https://forum.westeroscraft.com/threads/electron-launcher-tech-support-read-before-you-post.1511/',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'I am having difficulty logging into the server, what can I do?',
          },
          {
            _key: 'YgKKgLVL',
            copy: [
              {
                _key: '9f0ba7373d29',
                _type: 'block',
                children: [
                  {
                    _key: '9f0ba7373d290',
                    _type: 'span',
                    marks: [],
                    text: "We're working on this project since late 2011. So far, we've done and redone our map a couple of times, at present we are roughly at 60% completion. We can not make a reliable prediction about when we would be able to finish this, but we're getting closer with every house and every castle that's built.",
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
              {
                _key: 'cffad7d06d22',
                _type: 'block',
                children: [
                  {
                    _key: 'cffad7d06d220',
                    _type: 'span',
                    marks: [],
                    text: 'Here is a link to our list of',
                  },
                  {
                    _key: 'cffad7d06d221',
                    _type: 'span',
                    marks: ['strong', '747e10efa4e4'],
                    text: 'WesterosCraft Projects',
                  },
                  {
                    _key: 'cffad7d06d222',
                    _type: 'span',
                    marks: [],
                    text: ' .',
                  },
                ],
                markDefs: [
                  {
                    _key: '747e10efa4e4',
                    _type: 'link',
                    href: 'https://www.westeroscraft.com/progress',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'When can I roleplay on the map?',
          },
          {
            _key: 'FPFjbn8O',
            copy: [
              {
                _key: '7abee30f7cd5',
                _type: 'block',
                children: [
                  {
                    _key: '7abee30f7cd50',
                    _type: 'span',
                    marks: [],
                    text: "Unfortunately the map is not available for download. One reason would be the large file size of the map, another is the project isn't completed, and another is that the map is and always will be free to visit.\n",
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
            ],
            heading: 'Can I download the map?',
          },
          {
            _key: 'wG3Gk2Ex',
            copy: [
              {
                _key: '03bf95d178d8',
                _type: 'block',
                children: [
                  {
                    _key: '03bf95d178d80',
                    _type: 'span',
                    marks: [],
                    text: 'While the immediate goal is to finish Westeros, there is a great deal of interest in Essos and its creation. It is more than likely we will create all of Essos, but it will still be quite some time before we get there.',
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
            ],
            heading: 'Are you going to build Essos? (Qarth, Astapor, Braavos, etc)',
          },
          {
            _key: 'E1vNFiTO',
            copy: [
              {
                _key: '3c64590ac596',
                _type: 'block',
                children: [
                  {
                    _key: '3c64590ac5960',
                    _type: 'span',
                    marks: [],
                    text: 'Nobuild: Exactly what it means, these members and visitors do not have any permissions to alter our map. This is the default starting rank.',
                  },
                ],
                level: 1,
                listItem: 'bullet',
                markDefs: [],
                style: 'normal',
              },
              {
                _key: 'e52be1de30b7',
                _type: 'block',
                children: [
                  {
                    _key: 'e52be1de30b70',
                    _type: 'span',
                    marks: [],
                    text: 'NewBuilder, [N]-Builder: Also called Probation Builder, or Probie. They have permissions to build, but are required to meet certain requirements. An experienced builder assists them during their first weeks of buildership.',
                  },
                ],
                level: 1,
                listItem: 'bullet',
                markDefs: [],
                style: 'normal',
              },
              {
                _key: '4d99b0c8a968',
                _type: 'block',
                children: [
                  {
                    _key: '4d99b0c8a9680',
                    _type: 'span',
                    marks: [],
                    text: "Builder: The server's workforce. They create most of the content by hand.",
                  },
                ],
                level: 1,
                listItem: 'bullet',
                markDefs: [],
                style: 'normal',
              },
              {
                _key: '1f2c345e099e',
                _type: 'block',
                children: [
                  {
                    _key: '1f2c345e099e0',
                    _type: 'span',
                    marks: [],
                    text: 'Builders with Editor Lite, [E]-Lites: Builders can apply for limited WorldEdit perms to use for terraforming heavy operations at their own projects.',
                  },
                ],
                level: 1,
                listItem: 'bullet',
                markDefs: [],
                style: 'normal',
              },
              {
                _key: '0638894521c3',
                _type: 'block',
                children: [
                  {
                    _key: '0638894521c30',
                    _type: 'span',
                    marks: [],
                    text: 'Editors: These are builders with permissions for WorldEdit and VoxelSniper. They handle minor worldediting requests as well as large terraformings',
                  },
                ],
                level: 1,
                listItem: 'bullet',
                markDefs: [],
                style: 'normal',
              },
              {
                _key: '01f266691dd4',
                _type: 'block',
                children: [
                  {
                    _key: '01f266691dd40',
                    _type: 'span',
                    marks: [],
                    text: 'Moderators: Handle the administration of the server. They reply to builder applications, organise and moderate content creation, serve justice and officially represent the community.',
                  },
                ],
                level: 1,
                listItem: 'bullet',
                markDefs: [],
                style: 'normal',
              },
              {
                _key: 'aca5d2798b7c',
                _type: 'block',
                children: [
                  {
                    _key: 'aca5d2798b7c0',
                    _type: 'span',
                    marks: [],
                    text: "Coders: The technical backbone of the server, they maintain the complex workings 'behind the scenes'",
                  },
                ],
                level: 1,
                listItem: 'bullet',
                markDefs: [],
                style: 'normal',
              },
              {
                _key: '004afc93c7b2',
                _type: 'block',
                children: [
                  {
                    _key: '004afc93c7b20',
                    _type: 'span',
                    marks: [],
                    text: 'Administrators: The founders and captains of the server, they are in control of the finances and hardware.',
                  },
                ],
                level: 1,
                listItem: 'bullet',
                markDefs: [],
                style: 'normal',
              },
            ],
            heading: 'What are the ranks of the server?',
          },
          {
            _key: 'Zbp9H6QL',
            copy: [
              {
                _key: '4d35b1bead90',
                _type: 'block',
                children: [
                  {
                    _key: '4d35b1bead900',
                    _type: 'span',
                    marks: [],
                    text: 'Read the ',
                  },
                  {
                    _key: '4d35b1bead901',
                    _type: 'span',
                    marks: ['b888eafa78a0'],
                    text: 'Application Guidelines',
                  },
                  {
                    _key: '4d35b1bead902',
                    _type: 'span',
                    marks: [],
                    text: ' carefully, they are very important. Then fill out the application form completely.',
                  },
                ],
                markDefs: [
                  {
                    _key: 'b888eafa78a0',
                    _type: 'link',
                    href: 'https://forum.westeroscraft.com/form/builder-application.3/select',
                  },
                ],
                style: 'normal',
              },
              {
                _key: 'b84a50eab4de',
                _type: 'block',
                children: [
                  {
                    _key: 'b84a50eab4de0',
                    _type: 'span',
                    marks: [],
                    text: 'As a word of advice, be sure to explore our server thoroughly before submitting your application so that you know what kinds of builds we are looking for. If you do not submit any images of builds, your application will be rejected. Check out our ',
                  },
                  {
                    _key: 'b84a50eab4de1',
                    _type: 'span',
                    marks: ['69d263619a6f'],
                    text: 'Basic Building Guide for Applicants',
                  },
                  {
                    _key: 'b84a50eab4de2',
                    _type: 'span',
                    marks: [],
                    text: ' for more helpful advice.',
                  },
                ],
                markDefs: [
                  {
                    _key: '69d263619a6f',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki/guides/applicant-building-guide',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'How do I become a Builder?',
          },
        ],
        title: 'General',
      },
      {
        _key: 'e3Lg9aMM',
        _type: 'accordion',
        accordionContent: [
          {
            _key: 'YSqkMk2M',
            copy: [
              {
                _key: '9af45cc9d118',
                _type: 'block',
                children: [
                  {
                    _key: '9af45cc9d1180',
                    _type: 'span',
                    marks: [],
                    text: "If you are a new visitor, you are free to explore the server and it's builds at your leisure. Please check our ",
                  },
                  {
                    _key: '9af45cc9d1181',
                    _type: 'span',
                    marks: ['0f189edbaa41'],
                    text: 'Server Rules',
                  },
                  {
                    _key: '9af45cc9d1182',
                    _type: 'span',
                    marks: [],
                    text: ' before going online.',
                  },
                ],
                markDefs: [
                  {
                    _key: '0f189edbaa41',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki/miscellaneous/server-rules',
                  },
                ],
                style: 'normal',
              },
              {
                _key: '94d532716a1d',
                _type: 'block',
                children: [
                  {
                    _key: '94d532716a1d0',
                    _type: 'span',
                    marks: [],
                    text: 'Unfortunately you will not be able to build until you have put in an ',
                  },
                  {
                    _key: '94d532716a1d1',
                    _type: 'span',
                    marks: ['9f60de4e8d51'],
                    text: 'application on our forums',
                  },
                  {
                    _key: '94d532716a1d2',
                    _type: 'span',
                    marks: [],
                    text: ' and been accepted. For more info about this, check out our ',
                  },
                  {
                    _key: '94d532716a1d3',
                    _type: 'span',
                    marks: ['c04d4946fe6e'],
                    text: 'Basic Building Guide for Applicants',
                  },
                  {
                    _key: '94d532716a1d4',
                    _type: 'span',
                    marks: [],
                    text: ' before making an application.',
                  },
                ],
                markDefs: [
                  {
                    _key: '9f60de4e8d51',
                    _type: 'link',
                    href: 'https://forum.westeroscraft.com/form/builder-application.3/select',
                  },
                  {
                    _key: 'c04d4946fe6e',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki/guides/applicant-building-guide',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'What can I do on the server?',
          },
          {
            _key: 'uuxY3B5D',
            copy: [
              {
                _key: '32529a437821',
                _type: 'block',
                children: [
                  {
                    _key: '32529a4378210',
                    _type: 'span',
                    marks: [],
                    text: 'If you know the name of the place you want to visit, type ',
                  },
                  {
                    _key: '32529a4378211',
                    _type: 'span',
                    marks: ['strong'],
                    text: '/warp [location]',
                  },
                  {
                    _key: '32529a4378212',
                    _type: 'span',
                    marks: [],
                    text: " in the chat. Replace [location] with the name of your destination. Warp names are one word only with no punctuation. For example, to warp to King's Landing type ",
                  },
                  {
                    _key: '32529a4378213',
                    _type: 'span',
                    marks: ['strong'],
                    text: '/warp kingslanding',
                  },
                  {
                    _key: '32529a4378214',
                    _type: 'span',
                    marks: [],
                    text: " in chat. If you don't know the name or you are unsure about the spelling you are welcome to ask.",
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
              {
                _key: 'ebb9f9378aff',
                _type: 'block',
                children: [
                  {
                    _key: 'ebb9f9378aff0',
                    _type: 'span',
                    marks: [],
                    text: 'A great way to explore new locations is',
                  },
                  {
                    _key: 'ebb9f9378aff1',
                    _type: 'span',
                    marks: ['strong'],
                    text: ' /warp map',
                  },
                  {
                    _key: 'ebb9f9378aff2',
                    _type: 'span',
                    marks: [],
                    text: ' in game',
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
              {
                _key: '22e1f274a493',
                _type: 'block',
                children: [
                  {
                    _key: '22e1f274a4930',
                    _type: 'span',
                    marks: [],
                    text: 'To see all of our warps in one place, or just to check out the scale of our map, check out our ',
                  },
                  {
                    _key: '22e1f274a4931',
                    _type: 'span',
                    marks: ['strong', 'f7f456495c53'],
                    text: 'dynamic map',
                  },
                  {
                    _key: '22e1f274a4932',
                    _type: 'span',
                    marks: [],
                    text: ' . You can focus it on your character to follow your journey through Westeros, as well as enable and disable different layers of information, such as player names or warps (this can be useful to find out where you are - but beware, there is a lot of warps! Enabling this layer while zoomed out may cause your browser to freeze or crash.)',
                  },
                ],
                markDefs: [
                  {
                    _key: 'f7f456495c53',
                    _type: 'link',
                    href: 'http://mc.westeroscraft.com/',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'How do I visit a location?',
          },
        ],
        title: 'Gameplay',
      },
      {
        _key: 'kIO7EQDa',
        _type: 'accordion',
        accordionContent: [
          {
            _key: '0QNr98eh',
            copy: [
              {
                _key: 'b3f88986ae92',
                _type: 'block',
                children: [
                  {
                    _key: 'b3f88986ae920',
                    _type: 'span',
                    marks: [],
                    text: "The map is currently several dozen gigs in file size. If you're wondering about the dimensions, it's roughly 22,000 x 59,000 blocks. About 1298 sq km / 501.14 sq mi, roughly the size of Los Angeles.",
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
            ],
            heading: 'How big is the map?',
          },
          {
            _key: 'zpk6LdHF',
            copy: [
              {
                _key: '2d204905e32b',
                _type: 'block',
                children: [
                  {
                    _key: '2d204905e32b0',
                    _type: 'span',
                    marks: [],
                    text: 'We used a program called ',
                  },
                  {
                    _key: '2d204905e32b1',
                    _type: 'span',
                    marks: ['a85acd057422'],
                    text: 'WorldPainter',
                  },
                  {
                    _key: '2d204905e32b2',
                    _type: 'span',
                    marks: [],
                    text: ' to shape the map and do basic terraforming. In-game we use a mixture of hand work, ',
                  },
                  {
                    _key: '2d204905e32b3',
                    _type: 'span',
                    marks: ['bdfb394ea716'],
                    text: 'WorldEdit',
                  },
                  {
                    _key: '2d204905e32b4',
                    _type: 'span',
                    marks: [],
                    text: ' and ',
                  },
                  {
                    _key: '2d204905e32b5',
                    _type: 'span',
                    marks: ['afb9f1e0fb6c'],
                    text: 'VoxelSniper',
                  },
                  {
                    _key: '2d204905e32b6',
                    _type: 'span',
                    marks: [],
                    text: ' to refine the terrain further.',
                  },
                ],
                markDefs: [
                  {
                    _key: 'a85acd057422',
                    _type: 'link',
                    href: 'http://worldpainter.net/',
                  },
                  {
                    _key: 'bdfb394ea716',
                    _type: 'link',
                    href: 'https://dev.bukkit.org/projects/worldedit',
                  },
                  {
                    _key: 'afb9f1e0fb6c',
                    _type: 'link',
                    href: 'https://dev.bukkit.org/projects/voxelsniper-rebooted',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'How did you make the map?',
          },
          {
            _key: 'OexSLDfk',
            copy: [
              {
                _key: 'b1b38149c2a9',
                _type: 'block',
                children: [
                  {
                    _key: 'b1b38149c2a90',
                    _type: 'span',
                    marks: [],
                    text: "Since the beginning, we've had hundreds of contributors, but people come and go. For scale, 173 people built houses in the city of ",
                  },
                  {
                    _key: 'b1b38149c2a91',
                    _type: 'span',
                    marks: ['c705661ec546'],
                    text: "King's Landing",
                  },
                  {
                    _key: 'b1b38149c2a92',
                    _type: 'span',
                    marks: [],
                    text: '. We currently have 160 active builders.',
                  },
                ],
                markDefs: [
                  {
                    _key: 'c705661ec546',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki/crownlands/kings-landing',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'How many people have worked on the server?',
          },
          {
            _key: 'JxaGUqzZ',
            copy: [
              {
                _key: '409e7af2b866',
                _type: 'block',
                children: [
                  {
                    _key: '409e7af2b8660',
                    _type: 'span',
                    marks: [],
                    text: 'You can check out all our projects by visiting our ',
                  },
                  {
                    _key: '409e7af2b8661',
                    _type: 'span',
                    marks: ['8a01b6c256d5', 'strong'],
                    text: 'livemap',
                  },
                  {
                    _key: '409e7af2b8662',
                    _type: 'span',
                    marks: [],
                    text: ' or our ',
                  },
                  {
                    _key: '409e7af2b8663',
                    _type: 'span',
                    marks: ['strong', 'dd2e800c5aeb'],
                    text: 'progress page',
                  },
                  {
                    _key: '409e7af2b8664',
                    _type: 'span',
                    marks: [],
                    text: '. We have quite a lot of the most famous landmarks done though, including ',
                  },
                  {
                    _key: '409e7af2b8665',
                    _type: 'span',
                    marks: ['aa703ec3f828'],
                    text: 'Winterfell',
                  },
                  {
                    _key: '409e7af2b8666',
                    _type: 'span',
                    marks: [],
                    text: ', ',
                  },
                  {
                    _key: '409e7af2b8667',
                    _type: 'span',
                    marks: ['d6409be1f421'],
                    text: 'Castle Black',
                  },
                  {
                    _key: '409e7af2b8668',
                    _type: 'span',
                    marks: [],
                    text: ', ',
                  },
                  {
                    _key: '409e7af2b8669',
                    _type: 'span',
                    marks: ['7c492d7c2d4f'],
                    text: 'The Wall',
                  },
                  {
                    _key: '409e7af2b86610',
                    _type: 'span',
                    marks: [],
                    text: ' and ',
                  },
                  {
                    _key: '409e7af2b86611',
                    _type: 'span',
                    marks: ['e8c44126e3c1'],
                    text: "King's Landing",
                  },
                  {
                    _key: '409e7af2b86612',
                    _type: 'span',
                    marks: [],
                    text: '.',
                  },
                ],
                markDefs: [
                  {
                    _key: '8a01b6c256d5',
                    _type: 'link',
                    href: 'http://mc.westeroscraft.com/',
                  },
                  {
                    _key: 'dd2e800c5aeb',
                    _type: 'link',
                    href: 'https://westeroscraft.com/progress',
                  },
                  {
                    _key: 'aa703ec3f828',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki/north/winterfell',
                  },
                  {
                    _key: 'd6409be1f421',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki/the-wall/castle-black',
                  },
                  {
                    _key: '7c492d7c2d4f',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki/the-wall',
                  },
                  {
                    _key: 'e8c44126e3c1',
                    _type: 'link',
                    href: 'https://westeroscraft.com/wiki/crownlands/kings-landing',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'What cities are currently finished?',
          },
          {
            _key: 'xYOLG7Xm',
            copy: [
              {
                _key: 'f95ab5dc8d18',
                _type: 'block',
                children: [
                  {
                    _key: 'f95ab5dc8d180',
                    _type: 'span',
                    marks: [],
                    text: 'Our builds are based on the books, but we do use the HBO show as inspiration.',
                  },
                ],
                markDefs: [],
                style: 'normal',
              },
            ],
            heading: 'Is the server based on the books or the HBO show?',
          },
          {
            _key: 'CIGbQ1tR',
            copy: [
              {
                _key: 'c1860b48cbfd',
                _type: 'block',
                children: [
                  {
                    _key: 'c1860b48cbfd0',
                    _type: 'span',
                    marks: [],
                    text: 'The server is set on 3/3/299 according to this',
                  },
                  {
                    _key: 'c1860b48cbfd1',
                    _type: 'span',
                    marks: ['1693a73ea5d8'],
                    text: ' timeline',
                  },
                  {
                    _key: 'c1860b48cbfd2',
                    _type: 'span',
                    marks: [],
                    text: '. This puts us at the start of A Clash of Kings, specifically the first Davos chapter. Explore with caution, Westeroscraft has destinations that contain show spoilers.',
                  },
                ],
                markDefs: [
                  {
                    _key: '1693a73ea5d8',
                    _type: 'link',
                    href: 'https://docs.google.com/spreadsheets/d/1ZsY3lcDDtTdBWp1Gx6mfkdtZT6-Gk0kdTGeSC_Dj7WM/edit#gid=8',
                  },
                ],
                style: 'normal',
              },
            ],
            heading: 'What book is the the server set in?',
          },
        ],
        title: 'The World',
      },
    ],
    slug: {
      _type: 'slug',
      current: 'frequently-asked-questions',
    },
    title: 'Frequently Asked Questions',
  },
  {
    _createdAt: '2021-01-23T16:56:42Z',
    _id: 'immersion-build-application-guidelines',
    _rev: 'tjfsjo0IgZq2kjKDgpmP7E',
    _type: 'guide',
    _updatedAt: '2022-08-27T00:51:40Z',
    body: [
      {
        _key: 'a8dcf2bb4dc3',
        _type: 'block',
        children: [
          {
            _key: 'ca2e92b98990',
            _type: 'span',
            marks: [],
            text: 'Our current system of projects is centered around the Great Houses, towns and cities of Westeros, and their respective vassal houses, communities and features. I.e., Builders lead or co-lead one project at a time, focused on a single house and their lands. While we have no intention of changing this approach, we do want to explore other options beyond just: “One house. One project.” As it currently stands, this method of organising our projects has led to us running the risk of our map of Westeros becoming a series of walled gardens (rich and detailed builds/projects, but with wide and dull empty spaces between them), which will make the spaces between projects feel unfinished and dull to visitors exploring the map.\n\n',
          },
          {
            _key: 'f2026f465cb8',
            _type: 'span',
            marks: ['strong'],
            text: 'Immersion Builds',
          },
          {
            _key: '5d38e9dc72bd',
            _type: 'span',
            marks: [],
            text: ' are therefore meant to fill the void caused by our current project system. They would be small builds, not necessarily tied to any particular piece of canon or lordly house, but instead intended to add points of interest and life to the empty parts of Westeros, which can include inns, taverns, camps, farms, First Men ruins, terrain features etc. The priority will be to fill mostly empty stretches along the main roads and travel routes, but off the beaten path areas can also be considered for immersion builds. And not everything has to imply human presence; small terraforming/nature projects like rock formations, enchanted groves, spooky forests, caves, etc., also fit into the Immersion Build category. The sky’s the limit!\n\nImmersion Build applications most often require two approving moderators before they can proceed. However, if the plans are considered small enough, one moderator is sufficient. ',
          },
          {
            _key: '35d251e3f63f',
            _type: 'span',
            marks: ['strong'],
            text: 'You must be a full, non-probationary builder and have completed at least one',
          },
          {
            _key: '7c2889be4e90',
            _type: 'span',
            marks: [],
            text: ' ',
          },
          {
            _key: '477201a28a7d',
            _type: 'span',
            marks: ['strong', 'a82dcc26a18a'],
            text: 'Mini Build',
          },
          {
            _key: '38904d029d1f',
            _type: 'span',
            marks: [],
            text: ' ',
          },
          {
            _key: '6bdd751ffee5',
            _type: 'span',
            marks: ['strong'],
            text: 'to apply for an Immersion Build.',
          },
          {
            _key: 'f2fc16acd394',
            _type: 'span',
            marks: [],
            text: '\nBuilders who are in the process of leading a Canon Project, Megabuild, or Server Build are permitted to apply for Immersion Builds.',
          },
        ],
        markDefs: [
          {
            _key: 'a82dcc26a18a',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/general-building-guidelines',
          },
        ],
        style: 'normal',
      },
      {
        _key: '652c03ac3c73',
        _type: 'block',
        children: [
          {
            _key: '32a4bd12448a0',
            _type: 'span',
            marks: [],
            text: 'How to Find a Location',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'b6fe3b8f6da4',
        _type: 'block',
        children: [
          {
            _key: '270175e204ee0',
            _type: 'span',
            marks: [],
            text: 'Check out the ',
          },
          {
            _key: '270175e204ee1',
            _type: 'span',
            marks: ['6643c77cabaa'],
            text: 'Map',
          },
          {
            _key: '270175e204ee2',
            _type: 'span',
            marks: [],
            text: ', and turn on the warp markers (top left). Areas without warps are usually pretty boring and empty; the perfect place for an immersion build!',
          },
        ],
        markDefs: [
          {
            _key: '6643c77cabaa',
            _type: 'link',
            href: 'http://mc.westeroscraft.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'c8a283c7921e',
        _type: 'block',
        children: [
          {
            _key: '857feebd014d0',
            _type: 'span',
            marks: [],
            text: 'How to Apply',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'c9939a96df52',
        _type: 'block',
        children: [
          {
            _key: '3dd7bc70fce00',
            _type: 'span',
            marks: [],
            text: 'Immersion Build applications should be posted in the ',
          },
          {
            _key: '3dd7bc70fce01',
            _type: 'span',
            marks: ['5d8912be3f55'],
            text: 'Immersion Builds subforum',
          },
          {
            _key: '3dd7bc70fce02',
            _type: 'span',
            marks: [],
            text: " corresponding to the project's region. Thread titles should be formatted as the following:",
          },
        ],
        markDefs: [
          {
            _key: '5d8912be3f55',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/categories/immersion-builds.87/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'ccfdc3ecc91e',
        _type: 'block',
        children: [
          {
            _key: 'e1f2880bee260',
            _type: 'span',
            marks: ['strong'],
            text: '[Project name] by [Builder name(s)]',
          },
          {
            _key: 'e1f2880bee261',
            _type: 'span',
            marks: [],
            text: '\n\nIn the body of the thread or in an attached Google doc or PDF you must include the following information:\n\n',
          },
          {
            _key: 'e1f2880bee262',
            _type: 'span',
            marks: ['strong'],
            text: 'Builder Name(s)',
          },
          {
            _key: 'e1f2880bee263',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'e1f2880bee264',
            _type: 'span',
            marks: ['strong'],
            text: 'Approximate Coordinates',
          },
          {
            _key: 'e1f2880bee265',
            _type: 'span',
            marks: [],
            text: '\n\n',
          },
          {
            _key: 'e1f2880bee266',
            _type: 'span',
            marks: ['strong'],
            text: 'Research/Inspiration',
          },
          {
            _key: 'e1f2880bee267',
            _type: 'span',
            marks: [],
            text: '\n* Is it mentioned in canon but not included in any of the surrounding finished projects?\n* What information about the surrounding region can you find in the books (or on ',
          },
          {
            _key: 'e1f2880bee268',
            _type: 'span',
            marks: ['d600406d625b'],
            text: 'A Search of Ice and Fire',
          },
          {
            _key: 'e1f2880bee269',
            _type: 'span',
            marks: [],
            text: ') or on secondary sources like ',
          },
          {
            _key: 'e1f2880bee2610',
            _type: 'span',
            marks: ['fd6b93b60bf5'],
            text: 'A Wiki of Ice and Fire',
          },
          {
            _key: 'e1f2880bee2611',
            _type: 'span',
            marks: [],
            text: ' or ',
          },
          {
            _key: 'e1f2880bee2612',
            _type: 'span',
            marks: ['9775081c3e7a'],
            text: 'The Citadel',
          },
          {
            _key: 'e1f2880bee2613',
            _type: 'span',
            marks: [],
            text: '?\n* What type of real world locations and buildings (or other sources) have influenced your plans? What type of feel are you going for?\n\n',
          },
          {
            _key: 'e1f2880bee2614',
            _type: 'span',
            marks: ['strong'],
            text: 'Plans',
          },
          {
            _key: 'e1f2880bee2615',
            _type: 'span',
            marks: [],
            text: '\n* Outline your specific plans with as much detail as possible. These plans can include maps, minis, layouts, and anything else you feel you need for the project.\n\n',
          },
          {
            _key: 'e1f2880bee2616',
            _type: 'span',
            marks: ['strong'],
            text: 'Tests',
          },
          {
            _key: 'e1f2880bee2617',
            _type: 'span',
            marks: [],
            text: '\n* Include tests for anything relevant to your project. These can include terra tests, facade tests, etc.',
          },
        ],
        markDefs: [
          {
            _key: 'd600406d625b',
            _type: 'link',
            href: 'http://asearchoficeandfire.com/',
          },
          {
            _key: 'fd6b93b60bf5',
            _type: 'link',
            href: 'http://awoiaf.westeros.org/',
          },
          {
            _key: '9775081c3e7a',
            _type: 'link',
            href: 'https://www.westeros.org/Citadel/Heraldry/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '4d6eafa6b150',
        _type: 'block',
        children: [
          {
            _key: '4606293f94060',
            _type: 'span',
            marks: [],
            text: 'After Completion',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'be8159be7a1f',
        _type: 'block',
        children: [
          {
            _key: 'ef3dd0a5a4fb0',
            _type: 'span',
            marks: ['strong'],
            text: 'Wiki Submission',
          },
          {
            _key: 'ef3dd0a5a4fb1',
            _type: 'span',
            marks: [],
            text: '\n* You are not required to submit content for Immersion Build projects, but if you would like to, please fill out a ',
          },
          {
            _key: 'ef3dd0a5a4fb2',
            _type: 'span',
            marks: ['a195fa050b3b'],
            text: 'Wiki Submission Form',
          },
          {
            _key: 'ef3dd0a5a4fb3',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [
          {
            _key: 'a195fa050b3b',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/form/wiki-article-submission-form.6/select',
          },
        ],
        style: 'normal',
      },
      {
        _key: '2e6325ec0fc8',
        _type: 'block',
        children: [
          {
            _key: '127865b6f0e40',
            _type: 'span',
            marks: ['strong'],
            text: 'Post-Approval',
          },
          {
            _key: '127865b6f0e41',
            _type: 'span',
            marks: [],
            text: '\n* As with all build projects, you must seek post-approval from the originally approving mods before you can apply for another project.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '8837ee46-c394-4de7-93e7-cfcc140dac62',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-d1629e96b93e41d57ac09cbb3ac53ecd80e8a58b-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'immersion-build-application-guidelines',
    },
    title: 'Immersion Build Application Guidelines',
  },
  {
    _createdAt: '2021-01-23T19:14:23Z',
    _id: 'official-no-redo-rule',
    _rev: 'Bm7S0KZmajesdgpEXDhhXP',
    _type: 'guide',
    _updatedAt: '2022-07-16T18:25:18Z',
    body: [
      {
        _key: 'b1c215d026e6',
        _type: 'block',
        children: [
          {
            _key: 'b1c215d026e60',
            _type: 'span',
            marks: [],
            text: 'Preamble',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'f27475be6a94',
        _type: 'block',
        children: [
          {
            _key: 'f27475be6a940',
            _type: 'span',
            marks: [],
            text: "All of our builders and guests have a vested interest in seeing the project complete. Not only does this provide a sense of accomplishment and completion, it also allows the map to be passed to our Developers, who will then start the process of using the map to create an RPG game. Currently, it's estimated that our project stands somewhere in the ballpark of 65%-70% complete, with major builds such as Oldtown still looming. One persistent problem we've faced is the aging process of older builds, and the desire by people to redo builds which are considered outdated. It is believed that allowing for redos in general would create a vicious cycle, where we would never finish due to builds constantly becoming outdated, or at the very least would set us back by a great many completion points. Consequently, we've operated under a rule forbidding redos in general.\n\nThus far, however, the no-redo rule has been applied as somewhat of a precedent law. This has, in the past, lead to a large amount of confusion and debates about how the rule is applied. This post intends to solidify the no-redo rule, and to make it unambiguously applicable.\n\n",
          },
          {
            _key: 'f27475be6a941',
            _type: 'span',
            marks: ['em'],
            text: "Please note that none of these rules or stipulations are new; they are merely a formalization of the cumulative discussions and precedent cases we've had previously regarding redos.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9dbc8372300f',
        _type: 'block',
        children: [
          {
            _key: '9dbc8372300f0',
            _type: 'span',
            marks: [],
            text: 'Definitions in Use',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'e221f349a44a',
        _type: 'block',
        children: [
          {
            _key: 'e221f349a44a0',
            _type: 'span',
            marks: [],
            text: '1. A "redo", for the purposes and intents of this post, is defined as the action of wiping clean all or most of a build, and re-building it from scratch according to new plans.\n\n2. An "update", for the purposes and intents of this post, is defined as (1) adding on to an existing build without removing the existing portions (for instance, adding surrounding lands which weren\'t there before), and/or (2) modifying the exteriors or interiors of an existing build without removing the build and starting from scratch.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '8d13416c41bc',
        _type: 'block',
        children: [
          {
            _key: '8d13416c41bc0',
            _type: 'span',
            marks: [],
            text: 'The Rule',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'b56310cf1300',
        _type: 'block',
        children: [
          {
            _key: 'b56310cf13000',
            _type: 'span',
            marks: ['strong'],
            text: '1. Redos Forbidden: ',
          },
          {
            _key: 'b56310cf13001',
            _type: 'span',
            marks: [],
            text: 'Redoing a build is expressly forbidden, under any circumstances, except for in the case where one of the following clauses holds true. Note that while appeals to quality or appeals to planning can be used as ',
          },
          {
            _key: 'b56310cf13002',
            _type: 'span',
            marks: ['em'],
            text: 'motivation',
          },
          {
            _key: 'b56310cf13003',
            _type: 'span',
            marks: [],
            text: ' for a redo, they ',
          },
          {
            _key: 'b56310cf13004',
            _type: 'span',
            marks: ['em'],
            text: 'cannot',
          },
          {
            _key: 'b56310cf13005',
            _type: 'span',
            marks: [],
            text: ' be used as reasons for why a redo should be allowed. Only the following clauses can be used to claim that a redo should be allowed:\n\na) ',
          },
          {
            _key: 'b56310cf13006',
            _type: 'span',
            marks: ['underline'],
            text: 'Server Build Clause:',
          },
          {
            _key: 'b56310cf13007',
            _type: 'span',
            marks: [],
            text: ' If the build under consideration is a server build, it may be allowed to be redone after extensive discussion. However, server build redos will in general be postponed until ',
          },
          {
            _key: 'b56310cf13008',
            _type: 'span',
            marks: ['em'],
            text: 'all incomplete',
          },
          {
            _key: 'b56310cf13009',
            _type: 'span',
            marks: [],
            text: ' server builds are either complete or in progress. When server builds are redone, it will only be done if the redo does not have substantial impact on the direction of our completion rate.\n\nb) ',
          },
          {
            _key: 'b56310cf130010',
            _type: 'span',
            marks: ['underline'],
            text: 'Inadequate Canon Clause:',
          },
          {
            _key: 'b56310cf130011',
            _type: 'span',
            marks: [],
            text: ' If the build under consideration objectively lacks important canon, which directly impacts the planning or style of the build, it may be allowed to be redone. For this to be satisfied, the claimant must prove ',
          },
          {
            _key: 'b56310cf130012',
            _type: 'span',
            marks: ['em'],
            text: 'unambiguously',
          },
          {
            _key: 'b56310cf130013',
            _type: 'span',
            marks: [],
            text: " that a substantial amount of canon has been missed. The claimant's case will be assisted if it can be shown that this lack of canon was understood to be an issue before they intended to apply for redo.\n[UPDATE (12/16/18)]: Redos will be tentatively allowed for builds which get new canon in new publications, but giving mods the right reject these on a case-by-case basis depending on circumstances.\n\nc) ",
          },
          {
            _key: 'b56310cf130014',
            _type: 'span',
            marks: ['underline'],
            text: 'Abandoned Build Clause:',
          },
          {
            _key: 'b56310cf130015',
            _type: 'span',
            marks: [],
            text: ' If a build is incomplete and filed under the ',
          },
          {
            _key: 'b56310cf130016',
            _type: 'span',
            marks: ['cec3969c18f2'],
            text: 'projects orphanage',
          },
          {
            _key: 'b56310cf130017',
            _type: 'span',
            marks: [],
            text: " as an abandoned build, it may be allowed to be redone. The intuition behind this clause is that it can be difficult to pick up someone else's outdated work, and if we expect people to do this very few people would want to apply to finish abandoned builds. However, moderators reserve the right to veto a redo for an abandoned build if they deem the existing portions to be particularly high quality.",
          },
        ],
        markDefs: [
          {
            _key: 'cec3969c18f2',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/projects-orphanage',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'a2c863bc81fe',
        _type: 'block',
        children: [
          {
            _key: '47ef22012bd9',
            _type: 'span',
            marks: [],
            text: 'd) ',
          },
          {
            _key: 'a366856499f7',
            _type: 'span',
            marks: ['underline'],
            text: 'Megabuild Clause:',
          },
          {
            _key: '6ee9d91c7607',
            _type: 'span',
            marks: [],
            text: ' If a build is a part of a megabuild (see ',
          },
          {
            _key: '9846aa10ac5c',
            _type: 'span',
            marks: ['8c2565149804'],
            text: 'this guide',
          },
          {
            _key: '4e549b2451cc',
            _type: 'span',
            marks: [],
            text: ' for a definition), it may be allowed to be redone given justification in the megabuild proposal. The reasoning for this is to allow megaproject leaders to establish stylistic coherence in a broader region rather than having to work around an existing project. This also has a higher probability of leading to a high-quality, finalized region than an isolated redo. This clause is a formalization of previous precedent (e.g., the removal of the projects surrounding Oldtown to allow for a consistent regional style to be established).\n\n',
          },
          {
            _key: 'b56310cf130018',
            _type: 'span',
            marks: ['strong'],
            text: '2. Updates Allowed with Stipulations: ',
          },
          {
            _key: 'b56310cf130019',
            _type: 'span',
            marks: [],
            text: 'Updating a build is not expressly forbidden, however an update must abide by the following stipulations to be approved:\n\na) ',
          },
          {
            _key: 'b56310cf130020',
            _type: 'span',
            marks: ['underline'],
            text: 'Sufficient Additional Value Clause:',
          },
          {
            _key: 'b56310cf130021',
            _type: 'span',
            marks: [],
            text: ' The update under consideration adds ',
          },
          {
            _key: 'b56310cf130022',
            _type: 'span',
            marks: ['em'],
            text: 'sufficient value',
          },
          {
            _key: 'b56310cf130023',
            _type: 'span',
            marks: [],
            text: ' to the existing project. As there is no strict criteria to judge this by, it will be analyzed on a case-by-case basis. Some general principles are that an update is more likely to be allowed if it completes underdeveloped or non-existent surrounding lands. If a build has poor layout or planning to begin with, an update may be less likely to be allowed because interior/exterior updates are unlikely to solve the fundamental source of low-quality, and these efforts would be better allocated to increasing our completion rate through doing incomplete builds.\n\nb) ',
          },
          {
            _key: 'b56310cf130024',
            _type: 'span',
            marks: ['underline'],
            text: 'Abiding by Update Clause:',
          },
          {
            _key: 'b56310cf130025',
            _type: 'span',
            marks: [],
            text: ' An approved update cannot, under any circumstances, turn into a full redo. If a builder attempts to get something approved as an update and then transition into a redo, approval may be revoked.\n\n',
          },
          {
            _key: 'b56310cf130026',
            _type: 'span',
            marks: ['strong'],
            text: '3. Conditions for Lifting Redo Ban:',
          },
          {
            _key: 'b56310cf130027',
            _type: 'span',
            marks: [],
            text: ' Only once the following two conditions have been satisfied will we lift the general ban on redos:\n\ni) The world has reached ',
          },
          {
            _key: 'b56310cf130028',
            _type: 'span',
            marks: ['em'],
            text: '100% completion rate',
          },
          {
            _key: 'b56310cf130029',
            _type: 'span',
            marks: [],
            text: ', judged by a thorough investigation and quality check by the entire team. This may not necessarily include detailed terraforming and non-canon space fillers everywhere, but it does include at the very least all canon builds on the official project list. All WIP terraforms must be finished at this point in time as well.\n\nii) The 100% complete world has been ',
          },
          {
            _key: 'b56310cf130030',
            _type: 'span',
            marks: ['em'],
            text: 'backed up',
          },
          {
            _key: 'b56310cf130031',
            _type: 'span',
            marks: [],
            text: ' and exported to the Development team.\n\nThe lifting of the redo rule may be coupled by the introduction of a plethora of new blocks which we were previously unable to introduce due to aging concerns. Following this point, the server will operate under an "incremental updates" model: every time a redo is fully completed on the production server, that build is ',
          },
          {
            _key: 'b56310cf130032',
            _type: 'span',
            marks: ['em'],
            text: 'ported',
          },
          {
            _key: 'b56310cf130033',
            _type: 'span',
            marks: [],
            text: ' over to the development server in place of the existing one. Thus, the development server remains at 100% completion, but quality increases incrementally.',
          },
        ],
        markDefs: [
          {
            _key: '8c2565149804',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/project-categories.3286/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '04e137fc6f80',
        _type: 'block',
        children: [
          {
            _key: '04e137fc6f800',
            _type: 'span',
            marks: ['strong'],
            text: '4. Submitting an Appeal: ',
          },
          {
            _key: '04e137fc6f801',
            _type: 'span',
            marks: [],
            text: 'In the case where an individual believes a project is exempt from the no-redo rule, or believes a build qualifies for an update, they will be expected to start a new thread in the appropriate regional sub-forum entitled "[Project] Redo Appeal" or "[Project] Update Appeal" wherein a public discussion surrounding the project and appeal may begin. The moderating team will then by majority vote approve or deny the appeal.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '4610fef47a64',
        _type: 'block',
        children: [
          {
            _key: '4610fef47a640',
            _type: 'span',
            marks: [],
            text: 'Projects approved under 1(a-c) for redo are open to all builders per standard project rules. While the original builder who appealed the project for redo will be given greater consideration, all builders are as welcome to apply for the redo through the formal application process as much as the original appealing builder.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6c16363dd42f',
        _type: 'block',
        children: [
          {
            _key: '6c16363dd42f0',
            _type: 'span',
            marks: [],
            text: 'Conclusion',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'c98e14d27cf2',
        _type: 'block',
        children: [
          {
            _key: 'c98e14d27cf20',
            _type: 'span',
            marks: [],
            text: 'We hope that the formalization of this rule may prevent future confusion and debate, and allow us to consistently apply the rule in a way which does not bring fairness into question. Above all, we hope that this rule helps us to see the light at the end of the tunnel, and focus our effort to completing the mammoth task of recreating Westeros in Minecraft.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '8837ee46-c394-4de7-93e7-cfcc140dac62',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-3333b6b66746802137b103cac1e784d163d0872a-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'official-no-redo-rule',
    },
    title: 'Official No-Redo Rule',
  },
  {
    _createdAt: '2021-01-23T19:14:23Z',
    _id: 'map-repository',
    _rev: '9SW1xi54QyXoHspJF3RTP7',
    _type: 'guide',
    _updatedAt: '2022-07-16T17:07:21Z',
    body: [
      {
        _key: '105ba1690c88',
        _type: 'block',
        children: [
          {
            _key: '105ba1690c880',
            _type: 'span',
            marks: ['strong'],
            text: 'Regional Maps',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'db3ed8291a66',
        _type: 'block',
        children: [
          {
            _key: 'db3ed8291a660',
            _type: 'span',
            marks: ['strong'],
            text: 'North',
          },
          {
            _key: 'db3ed8291a661',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'db3ed8291a662',
            _type: 'span',
            marks: ['0e9d4c984177'],
            text: 'Map',
          },
          {
            _key: 'db3ed8291a663',
            _type: 'span',
            marks: [],
            text: '​',
          },
        ],
        markDefs: [
          {
            _key: '0e9d4c984177',
            _type: 'link',
            href: 'https://imgur.com/e1DsZRl',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'c31597dc1bc7',
        _type: 'block',
        children: [
          {
            _key: 'c31597dc1bc70',
            _type: 'span',
            marks: ['strong'],
            text: 'Riverlands',
          },
          {
            _key: 'c31597dc1bc71',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'c31597dc1bc72',
            _type: 'span',
            marks: ['f7c13b83f2b4'],
            text: 'Research',
          },
          {
            _key: 'c31597dc1bc73',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'c31597dc1bc74',
            _type: 'span',
            marks: ['9700cae3b06b'],
            text: 'Map',
          },
          {
            _key: 'c31597dc1bc75',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'c31597dc1bc76',
            _type: 'span',
            marks: ['41506b5c1c99'],
            text: 'Map',
          },
          {
            _key: 'c31597dc1bc77',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'c31597dc1bc78',
            _type: 'span',
            marks: ['4b68659bb752'],
            text: 'Map',
          },
          {
            _key: 'c31597dc1bc79',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'c31597dc1bc710',
            _type: 'span',
            marks: ['34f7e1a79ca8'],
            text: 'Map',
          },
          {
            _key: 'c31597dc1bc711',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'c31597dc1bc712',
            _type: 'span',
            marks: ['3422fb176776'],
            text: 'Map',
          },
          {
            _key: 'c31597dc1bc713',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'c31597dc1bc714',
            _type: 'span',
            marks: ['0ef90a9173f5'],
            text: 'Map',
          },
          {
            _key: 'c31597dc1bc715',
            _type: 'span',
            marks: [],
            text: '​',
          },
        ],
        markDefs: [
          {
            _key: 'f7c13b83f2b4',
            _type: 'link',
            href: 'https://docs.google.com/document/d/13W3P7GSpVC5MGcLDAVsMgmuVmtFPsIQhbCVSUmtlzUg/edit#heading=h.qzmx3ffoq359',
          },
          {
            _key: '9700cae3b06b',
            _type: 'link',
            href: 'https://imgur.com/D42yRQW',
          },
          {
            _key: '41506b5c1c99',
            _type: 'link',
            href: 'https://imgur.com/FBd904j',
          },
          {
            _key: '4b68659bb752',
            _type: 'link',
            href: 'https://imgur.com/MfoHrF9',
          },
          {
            _key: '34f7e1a79ca8',
            _type: 'link',
            href: 'https://imgur.com/ag8QZgw',
          },
          {
            _key: '3422fb176776',
            _type: 'link',
            href: 'https://imgur.com/RuRGMEJ',
          },
          {
            _key: '0ef90a9173f5',
            _type: 'link',
            href: 'https://imgur.com/wY620YL',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'd91ef49b6e87',
        _type: 'block',
        children: [
          {
            _key: 'd91ef49b6e870',
            _type: 'span',
            marks: ['strong'],
            text: 'Westerlands',
          },
          {
            _key: 'd91ef49b6e871',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'd91ef49b6e872',
            _type: 'span',
            marks: ['e40aaefb45b7'],
            text: 'Research',
          },
          {
            _key: 'd91ef49b6e873',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'd91ef49b6e874',
            _type: 'span',
            marks: ['c61817dde1af'],
            text: 'Map',
          },
          {
            _key: 'd91ef49b6e875',
            _type: 'span',
            marks: [],
            text: '​',
          },
        ],
        markDefs: [
          {
            _key: 'e40aaefb45b7',
            _type: 'link',
            href: 'https://docs.google.com/document/d/1b6Ny0bgl35E88oe0cRERruHPyef0IrAK60AzsxpNfH8/edit?usp=sharing',
          },
          {
            _key: 'c61817dde1af',
            _type: 'link',
            href: 'https://imgur.com/pDoz4fw',
          },
        ],
        style: 'normal',
      },
      {
        _key: '2e7368338c73',
        _type: 'block',
        children: [
          {
            _key: '2e7368338c730',
            _type: 'span',
            marks: ['strong'],
            text: 'Crownlands',
          },
          {
            _key: '2e7368338c731',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '2e7368338c732',
            _type: 'span',
            marks: ['a2f8ee99198c'],
            text: 'Research',
          },
          {
            _key: '2e7368338c733',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '2e7368338c734',
            _type: 'span',
            marks: ['ac6e19460d90'],
            text: 'Map',
          },
        ],
        markDefs: [
          {
            _key: 'a2f8ee99198c',
            _type: 'link',
            href: 'https://docs.google.com/document/d/1BTIRF13_ZP-yhsvddrMuAFQ3LfeRdxqbx97MGdpVNXk/edit?usp=sharing',
          },
          {
            _key: 'ac6e19460d90',
            _type: 'link',
            href: 'https://imgur.com/vV45h2u',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'f788d63988a6',
        _type: 'block',
        children: [
          {
            _key: 'f788d63988a60',
            _type: 'span',
            marks: ['strong'],
            text: '​Iron Islands',
          },
          {
            _key: 'f788d63988a61',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'f788d63988a62',
            _type: 'span',
            marks: ['0562d2096658'],
            text: 'Map',
          },
          {
            _key: 'f788d63988a63',
            _type: 'span',
            marks: [],
            text: '​',
          },
        ],
        markDefs: [
          {
            _key: '0562d2096658',
            _type: 'link',
            href: 'https://imgur.com/HZgNlVe',
          },
        ],
        style: 'normal',
      },
      {
        _key: '3e1fd8e33ec8',
        _type: 'block',
        children: [
          {
            _key: '3e1fd8e33ec80',
            _type: 'span',
            marks: ['strong'],
            text: 'Vale',
          },
          {
            _key: '3e1fd8e33ec81',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '3e1fd8e33ec82',
            _type: 'span',
            marks: ['7962715d341f'],
            text: 'Research',
          },
          {
            _key: '3e1fd8e33ec83',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '3e1fd8e33ec84',
            _type: 'span',
            marks: ['d6b62bd2e5e6'],
            text: 'Map',
          },
          {
            _key: '3e1fd8e33ec85',
            _type: 'span',
            marks: [],
            text: '​',
          },
        ],
        markDefs: [
          {
            _key: '7962715d341f',
            _type: 'link',
            href: 'https://docs.google.com/document/d/1bxM09oswCxvErdX1eKR2y_wyIm3Nx8-Inher-DNtESw/edit?usp=sharing',
          },
          {
            _key: 'd6b62bd2e5e6',
            _type: 'link',
            href: 'https://imgur.com/6eP6EBW',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'f440b5cefe85',
        _type: 'block',
        children: [
          {
            _key: 'f440b5cefe850',
            _type: 'span',
            marks: ['strong'],
            text: 'Reach',
          },
          {
            _key: 'f440b5cefe851',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'f440b5cefe852',
            _type: 'span',
            marks: ['b068a29937e9'],
            text: 'Map',
          },
          {
            _key: 'f440b5cefe853',
            _type: 'span',
            marks: [],
            text: '​',
          },
        ],
        markDefs: [
          {
            _key: 'b068a29937e9',
            _type: 'link',
            href: 'https://imgur.com/Gn505fJ',
          },
        ],
        style: 'normal',
      },
      {
        _key: '3f2689bce72e',
        _type: 'block',
        children: [
          {
            _key: '3f2689bce72e0',
            _type: 'span',
            marks: ['strong'],
            text: 'Stormlands',
          },
          {
            _key: '3f2689bce72e1',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '3f2689bce72e2',
            _type: 'span',
            marks: ['f056e53a1b27'],
            text: 'Map',
          },
          {
            _key: '3f2689bce72e3',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '3f2689bce72e4',
            _type: 'span',
            marks: ['847beb1f4d90'],
            text: 'Map',
          },
          {
            _key: '3f2689bce72e5',
            _type: 'span',
            marks: [],
            text: '​',
          },
        ],
        markDefs: [
          {
            _key: 'f056e53a1b27',
            _type: 'link',
            href: 'https://i.imgur.com/WCfwU4l.jpg',
          },
          {
            _key: '847beb1f4d90',
            _type: 'link',
            href: 'https://imgur.com/Gn505fJ',
          },
        ],
        style: 'normal',
      },
      {
        _key: '6cc6f9645fc8',
        _type: 'block',
        children: [
          {
            _key: '6cc6f9645fc80',
            _type: 'span',
            marks: ['strong'],
            text: 'Dorne',
          },
          {
            _key: '6cc6f9645fc81',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '6cc6f9645fc82',
            _type: 'span',
            marks: ['9422206e2948'],
            text: 'Map',
          },
        ],
        markDefs: [
          {
            _key: '9422206e2948',
            _type: 'link',
            href: 'https://i.imgflip.com/1freth.jpg',
          },
        ],
        style: 'normal',
      },
      {
        _key: '78419235039d',
        _type: 'block',
        children: [
          {
            _key: '78419235039d0',
            _type: 'span',
            marks: ['strong'],
            text: 'Climate Maps',
          },
          {
            _key: '78419235039d1',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '78419235039d2',
            _type: 'span',
            marks: ['b5859e86d447'],
            text: 'Map',
          },
          {
            _key: '78419235039d3',
            _type: 'span',
            marks: [],
            text: '​',
          },
        ],
        markDefs: [
          {
            _key: 'b5859e86d447',
            _type: 'link',
            href: 'https://s3.amazonaws.com/files.enjin.com/403550/modules/forum/attachments/Westeros+climate_1440473770.jpg',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'eecbbc268010',
        _type: 'block',
        children: [
          {
            _key: 'eecbbc2680100',
            _type: 'span',
            marks: ['strong'],
            text: 'Vegetation Maps',
          },
          {
            _key: 'eecbbc2680101',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'eecbbc2680102',
            _type: 'span',
            marks: ['afd0c5a77d91'],
            text: 'Doc',
          },
          {
            _key: 'eecbbc2680103',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'eecbbc2680104',
            _type: 'span',
            marks: ['334d5f3e173d'],
            text: 'Doc',
          },
        ],
        markDefs: [
          {
            _key: 'afd0c5a77d91',
            _type: 'link',
            href: 'https://docs.google.com/document/d/1LIjWAMIrjLvDnKMa0wEbGm5WzvkFqapG7yrKk0kP7U8/edit?usp=sharing',
          },
          {
            _key: '334d5f3e173d',
            _type: 'link',
            href: 'https://docs.google.com/document/d/1951reoZC3UkG9chNlgUrHbQGOrHzjNfJ0OTnevQyPoc/edit?usp=sharing',
          },
        ],
        style: 'h4',
      },
      {
        _key: 'b54789a56929',
        _type: 'block',
        children: [
          {
            _key: 'b54789a569290',
            _type: 'span',
            marks: [],
            text: '​',
          },
          {
            _key: 'b54789a569291',
            _type: 'span',
            marks: ['strong'],
            text: 'Stylized Maps',
          },
          {
            _key: 'b54789a569292',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'b54789a569293',
            _type: 'span',
            marks: ['7d7bbcd7849d'],
            text: "carcinogenius' map",
          },
        ],
        markDefs: [
          {
            _key: '7d7bbcd7849d',
            _type: 'link',
            href: 'https://www.flickr.com/photos/96601762@N02/10391669173/sizes/l/in/set-72157636186641263/',
          },
        ],
        style: 'h4',
      },
      {
        _key: 'a8fa9aed931b',
        _type: 'figure',
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-a917d443605be559ca892bfdacd4efee46cab1d3-4769x8192-png',
            _type: 'reference',
          },
        },
      },
    ],
    guideCategory: {
      _ref: 'e1ac352f-1567-410a-ac16-d516ef533faf',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-3243b6e0de982542585cc3868869771f26af1b23-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'map-repository',
    },
    title: 'Map Repository',
  },
  {
    _createdAt: '2021-01-23T16:56:42Z',
    _id: 'manually-building-the-custom-client',
    _rev: '9SW1xi54QyXoHspJF3RRbV',
    _type: 'guide',
    _updatedAt: '2022-07-16T17:06:55Z',
    body: [
      {
        _key: 'd532326abfa3',
        _type: 'block',
        children: [
          {
            _key: '94f1c33ee7d3',
            _type: 'span',
            marks: [],
            text: 'This procedure is intended to allow folks that, for whatever reason, would prefer to use the standard ',
          },
          {
            _key: '2b77ef7ee593',
            _type: 'span',
            marks: ['strong'],
            text: 'Minecraft Java Edition Launcher',
          },
          {
            _key: '5466c0901c1c',
            _type: 'span',
            marks: [],
            text: ' to run the WesterosCraft Custom Client. ',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '53f63ef0ac2c',
        _type: 'block',
        children: [
          {
            _key: 'b2cc4ddcb219',
            _type: 'span',
            marks: [],
            text: '\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ff762b3e0829',
        _type: 'callout',
        text: "As of version 1.11.2, we require Java 8 and we STRONGLY recommend running with at least 3GB of memory configured (which implies a requirement for a 64-bit Java). Confirm these by looking at the 'Java Executable' and 'JVM Options' settings on your profile in the launcher. If the vanilla launcher freezes while loading WesterosCraft or our Resource Pack, bump up the memory to 3GB or even higher.",
      },
      {
        _key: 'f4c704eef034',
        _type: 'block',
        children: [
          {
            _key: '907583b4bf761',
            _type: 'span',
            marks: [],
            text: '\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd9e87cc3a2fc',
        _type: 'block',
        children: [
          {
            _key: 'ce1b07a0fe110',
            _type: 'span',
            marks: [],
            text: 'Before starting, please ensure the following:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '36de94af535c',
        _type: 'block',
        children: [
          {
            _key: 'c96e049bacfb0',
            _type: 'span',
            marks: [],
            text: 'Install Java 8 64bit for Windows 10 here: ',
          },
          {
            _key: 'c96e049bacfb1',
            _type: 'span',
            marks: ['7ce2e72971cb'],
            text: 'https://java.com/en/download/win10.jsp',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '7ce2e72971cb',
            _type: 'link',
            href: 'https://java.com/en/download/win10.jsp',
          },
        ],
        style: 'normal',
      },
      {
        _key: '07d55fb8d445',
        _type: 'block',
        children: [
          {
            _key: '0dad64bf1dd70',
            _type: 'span',
            marks: [],
            text: "Make sure you've run ",
          },
          {
            _key: '3b1a0357ee60',
            _type: 'span',
            marks: ['strong'],
            text: 'Vanilla v1.12.2',
          },
          {
            _key: '0dad64bf1dd72',
            _type: 'span',
            marks: [],
            text: ' on your Minecraft Java Launcher at least once, so that the necessary files for v1.12.2 have been downloaded',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '20fae8f31b6b',
        _type: 'block',
        children: [
          {
            _key: '5c36629dd3f00',
            _type: 'span',
            marks: [],
            text: 'Steps:',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '5fed06ca6375',
        _type: 'block',
        children: [
          {
            _key: 'da58a729add90',
            _type: 'span',
            marks: [],
            text: '1) Download the installer for ',
          },
          {
            _key: 'da58a729add91',
            _type: 'span',
            marks: ['strong'],
            text: 'MinecraftForge v1.12.2',
          },
          {
            _key: 'da58a729add92',
            _type: 'span',
            marks: [],
            text: ' ',
          },
          {
            _key: 'da58a729add93',
            _type: 'span',
            marks: ['strong'],
            text: 'version',
          },
          {
            _key: 'da58a729add94',
            _type: 'span',
            marks: [],
            text: ' ',
          },
          {
            _key: 'da58a729add95',
            _type: 'span',
            marks: ['strong', 'strong'],
            text: '14.23.5.2854',
          },
          {
            _key: 'da58a729add96',
            _type: 'span',
            marks: [],
            text: ' from',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a1d6140f34e4',
        _type: 'block',
        children: [
          {
            _key: '67a7d60cf183',
            _type: 'span',
            marks: ['7073a3b0c09d'],
            text: 'https://maven.minecraftforge.net/net/minecraftforge/forge/1.12.2-14.23.5.2859/forge-1.12.2-14.23.5.2859-installer.jar',
          },
        ],
        markDefs: [
          {
            _key: '7073a3b0c09d',
            _type: 'link',
            href: 'https://maven.minecraftforge.net/net/minecraftforge/forge/1.12.2-14.23.5.2859/forge-1.12.2-14.23.5.2859-installer.jar',
          },
        ],
        style: 'normal',
      },
      {
        _key: '7d9bdd037dbb',
        _type: 'block',
        children: [
          {
            _key: '984611786cdc0',
            _type: 'span',
            marks: [],
            text: '2) Run the ',
          },
          {
            _key: '984611786cdc1',
            _type: 'span',
            marks: ['strong'],
            text: 'MinecraftForge installer JAR file',
          },
          {
            _key: '984611786cdc2',
            _type: 'span',
            marks: [],
            text: '. Select "Install Client" and click OK.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '61c6201dec6d',
        _type: 'block',
        children: [
          {
            _key: '2bf2cbc88c390',
            _type: 'span',
            marks: [],
            text: '3) Open up the ',
          },
          {
            _key: '2bf2cbc88c391',
            _type: 'span',
            marks: ['strong'],
            text: 'Minecraft Java Edition Launcher',
          },
          {
            _key: '2bf2cbc88c392',
            _type: 'span',
            marks: [],
            text: ' (restart it if it was open during the Forge installation), navigate to the ',
          },
          {
            _key: '2bf2cbc88c393',
            _type: 'span',
            marks: ['strong'],
            text: 'Installations',
          },
          {
            _key: '2bf2cbc88c394',
            _type: 'span',
            marks: [],
            text: ' tab, and create a new release (if needed) for our client, named "',
          },
          {
            _key: '2bf2cbc88c395',
            _type: 'span',
            marks: ['strong'],
            text: 'WesterosCraft v1.12.2',
          },
          {
            _key: '2bf2cbc88c396',
            _type: 'span',
            marks: [],
            text: "\", set the 'Version' to '",
          },
          {
            _key: '2bf2cbc88c397',
            _type: 'span',
            marks: ['strong'],
            text: 'release 1.12.2-forge1.12.2-14.23.5.2859',
          },
          {
            _key: 'de0e3f8faaea',
            _type: 'span',
            marks: [],
            text: "'.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '21b53150de2d',
        _type: 'block',
        children: [
          {
            _key: '23aaf1b88a3a0',
            _type: 'span',
            marks: [],
            text: "4) On the same screen, locate the 'Game Directory' field and change the directory to a directory of your choosing (this will keep the mods from our client from interfering with other mods you might have installed). ",
          },
          {
            _key: '23aaf1b88a3a1',
            _type: 'span',
            marks: ['strong'],
            text: 'Remember this directory',
          },
          {
            _key: '23aaf1b88a3a2',
            _type: 'span',
            marks: [],
            text: " - for the sake of this example, we'll refer to this directory as \u003cclient-dir\u003e in the future (as all other steps will be adding files in and under this directory). ",
          },
          {
            _key: '23aaf1b88a3a3',
            _type: 'span',
            marks: ['strong'],
            text: 'You should create this directory, if needed',
          },
          {
            _key: '23aaf1b88a3a4',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '2479291a4deb',
        _type: 'block',
        children: [
          {
            _key: '7299e15a2d640',
            _type: 'span',
            marks: [],
            text: "5) If you have not dedicated more memory to your installation, this is the time to do it. Click on the 'MORE OPTIONS' button and change the argument '-Xmx2G' to '-Xmx4G' (or 6G, or 8G, however much memory you wish to dedicate). ",
          },
          {
            _key: '7299e15a2d641',
            _type: 'span',
            marks: ['strong'],
            text: 'Press Save',
          },
          {
            _key: '7299e15a2d642',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '4dc22835acb7',
        _type: 'block',
        children: [
          {
            _key: '9fe1326b0c5d0',
            _type: 'span',
            marks: [],
            text: '6) Go back to the \'Play\' tab on the launcher and select the new release you just created. Hit the Play button to launch the client: this should download other needed files, and create needed directories. If things start properly, you should see "Powered by Forge 14.23.5.2859" in the lower left corner of the main window. ',
          },
          {
            _key: '9fe1326b0c5d1',
            _type: 'span',
            marks: ['strong'],
            text: 'Close the client',
          },
          {
            _key: '9fe1326b0c5d2',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '81f0ae77e0cb',
        _type: 'block',
        children: [
          {
            _key: '02acad71bbdb0',
            _type: 'span',
            marks: [],
            text: "7) Open the folder for the \u003cclient-dir\u003e created in step 4. Download each of the following files, and place them in the '",
          },
          {
            _key: '02acad71bbdb1',
            _type: 'span',
            marks: ['strong'],
            text: 'mods',
          },
          {
            _key: '02acad71bbdb2',
            _type: 'span',
            marks: [],
            text: "' subdirectory under the \u003cclient-dir\u003e:",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd4fa45d22e82',
        _type: 'block',
        children: [
          {
            _key: 'caeac16d9ef10',
            _type: 'span',
            marks: ['strong'],
            text: 'REQUIRED MODS',
          },
          {
            _key: 'caeac16d9ef11',
            _type: 'span',
            marks: [],
            text: ':',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '853f2b45f2b4',
        _type: 'block',
        children: [
          {
            _key: '08e86e1bc4410',
            _type: 'span',
            marks: [],
            text: 'OptiFine 1.12.2 HD U F5 - ',
          },
          {
            _key: '08e86e1bc4411',
            _type: 'span',
            marks: ['9033d5f7e1fb'],
            text: 'https://optifine.net/adloadx?f=OptiFine_1.12.2_HD_U_F5.jar',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '9033d5f7e1fb',
            _type: 'link',
            href: 'https://optifine.net/adloadx?f=OptiFine_1.12.2_HD_U_F5.jar',
          },
        ],
        style: 'normal',
      },
      {
        _key: '8de40b0e99f7',
        _type: 'block',
        children: [
          {
            _key: 'ea792319f44c0',
            _type: 'span',
            marks: [],
            text: 'WesterosBlocks - ',
          },
          {
            _key: '8745112e88e7',
            _type: 'span',
            marks: ['41b6b5e2a566'],
            text: 'https://www.curseforge.com/minecraft/mc-mods/westerosblocks/files',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '41b6b5e2a566',
            _type: 'link',
            href: 'https://www.curseforge.com/minecraft/mc-mods/westerosblocks/files',
          },
        ],
        style: 'normal',
      },
      {
        _key: '3756c59b31ad',
        _type: 'block',
        children: [
          {
            _key: '30b8db3fbff6',
            _type: 'span',
            marks: [],
            text: 'Realistic Horse Genetics: v1.12.2-1.3.6a - ',
          },
          {
            _key: 'c8a3374e26ef',
            _type: 'span',
            marks: ['6c535c6643ee'],
            text: 'https://www.curseforge.com/minecraft/mc-mods/realistic-horse-genetics/files/3040410',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '6c535c6643ee',
            _type: 'link',
            href: 'https://www.curseforge.com/minecraft/mc-mods/realistic-horse-genetics/files/3040410',
          },
        ],
        style: 'normal',
      },
      {
        _key: '61b8bb4a94fb',
        _type: 'block',
        children: [
          {
            _key: 'fb5d96817e2e',
            _type: 'span',
            marks: [],
            text: 'Creative Core 1.10.65 - ',
          },
          {
            _key: 'c69e553424dc',
            _type: 'span',
            marks: ['597ff2baae83'],
            text: 'https://www.curseforge.com/minecraft/mc-mods/creativecore/files/3467576',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '597ff2baae83',
            _type: 'link',
            href: 'https://www.curseforge.com/minecraft/mc-mods/creativecore/files/3467576',
          },
        ],
        style: 'normal',
      },
      {
        _key: '335aa1e0b5e5',
        _type: 'block',
        children: [
          {
            _key: '035b6ba43041',
            _type: 'span',
            marks: [],
            text: 'WCOnlinePicutreFrame 1.7.0-beta-1 - ',
          },
          {
            _key: '17b8470dbae6',
            _type: 'span',
            marks: ['ba3ab1c8562d'],
            text: 'https://www.curseforge.com/minecraft/mc-mods/wconlinepictureframe/files/3495943',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: 'ba3ab1c8562d',
            _type: 'link',
            href: 'https://www.curseforge.com/minecraft/mc-mods/wconlinepictureframe/files/3495943',
          },
        ],
        style: 'normal',
      },
      {
        _key: '8bc6c3e1acc8',
        _type: 'block',
        children: [
          {
            _key: '408baafb999c',
            _type: 'span',
            marks: [],
            text: 'Statues - ',
          },
          {
            _key: 'a648051686f7',
            _type: 'span',
            marks: ['9092a449c957'],
            text: 'https://www.curseforge.com/minecraft/mc-mods/statues/files/2972370',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '9092a449c957',
            _type: 'link',
            href: 'https://www.curseforge.com/minecraft/mc-mods/statues/files/2972370',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'ddf7019bb087',
        _type: 'block',
        children: [
          {
            _key: '16d737f37d7e0',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '177b20d84470',
        _type: 'block',
        children: [
          {
            _key: '4cebacf1f163',
            _type: 'span',
            marks: ['strong'],
            text: 'OPTIONAL (BUT RECOMMENDED) MODS:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b666d4a28c0d',
        _type: 'block',
        children: [
          {
            _key: '4e904b51827d0',
            _type: 'span',
            marks: [],
            text: 'JustEnoughItems mod (1.12.2-4.14.3.242) - ',
          },
          {
            _key: '4e904b51827d1',
            _type: 'span',
            marks: ['2dbd562a1568'],
            text: 'https://www.curseforge.com/minecraft/mc-mods/jei/files/2652749',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '2dbd562a1568',
            _type: 'link',
            href: 'https://www.curseforge.com/minecraft/mc-mods/jei/files/2652749',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'e1306283b631',
        _type: 'block',
        children: [
          {
            _key: 'c890cfb29e640',
            _type: 'span',
            marks: [],
            text: '8) Download and install the ',
          },
          {
            _key: 'c890cfb29e641',
            _type: 'span',
            marks: ['strong'],
            text: 'WesterosCraft Resource Pack',
          },
          {
            _key: 'c890cfb29e642',
            _type: 'span',
            marks: [],
            text: " into the 'resourcepacks' directory under \u003cclient-dir\u003e: ",
          },
          {
            _key: '47ccb82b1f19',
            _type: 'span',
            marks: ['e1023089ff86'],
            text: 'https://www.curseforge.com/minecraft/texture-packs/westeroscraft-resource-pack/files',
          },
        ],
        markDefs: [
          {
            _key: 'e1023089ff86',
            _type: 'link',
            href: 'https://www.curseforge.com/minecraft/texture-packs/westeroscraft-resource-pack/files',
          },
        ],
        style: 'normal',
      },
      {
        _key: '9032dde1db8d',
        _type: 'block',
        children: [
          {
            _key: 'ab8fa0f1181c0',
            _type: 'span',
            marks: [],
            text: '9) Start Minecraft client again from the ',
          },
          {
            _key: 'ab8fa0f1181c1',
            _type: 'span',
            marks: ['strong'],
            text: 'Minecraft Java Edition Launcher',
          },
          {
            _key: 'ab8fa0f1181c2',
            _type: 'span',
            marks: [],
            text: ". Click 'Options'. Click 'Resource Packs'. Move the 'WesterosCraftRP' resource pack to active.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '98576c52ebdf',
        _type: 'block',
        children: [
          {
            _key: '02660f3ee4720',
            _type: 'span',
            marks: [],
            text: '10) Click "Multiplayer". Click "Add Server". Enter "',
          },
          {
            _key: '02660f3ee4721',
            _type: 'span',
            marks: ['strong'],
            text: 'WesterosCraft',
          },
          {
            _key: '02660f3ee4722',
            _type: 'span',
            marks: [],
            text: '" for name, and "',
          },
          {
            _key: '02660f3ee4723',
            _type: 'span',
            marks: ['strong'],
            text: 'mc.westeroscraft.com',
          },
          {
            _key: '02660f3ee4724',
            _type: 'span',
            marks: [],
            text: '" for the address. Click \'Done".',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'eb34c2c64249',
        _type: 'block',
        children: [
          {
            _key: 'a739d7801fc90',
            _type: 'span',
            marks: [],
            text: '11) Launch the server selection, and start exploring Westeros!',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    description:
      'A guide on manually building the WesterosCraft modpack using the vanilla Minecraft launcher.',
    guideCategory: {
      _ref: '5f099069-f0ea-4077-b723-af85761811d6',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-d650d53f9635a159c26368bd0f7d6ec9a3979d76-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'manually-building-the-custom-client',
    },
    title: 'Manually Building the Custom Client',
  },
  {
    _createdAt: '2021-01-23T16:56:42Z',
    _id: 'new-builders-guide',
    _rev: 'ChIptyqGxUgclKXif5QSFe',
    _type: 'guide',
    _updatedAt: '2022-07-16T20:47:22Z',
    body: [
      {
        _key: '069a16803150',
        _type: 'block',
        children: [
          {
            _key: '16cfeba86fe3',
            _type: 'span',
            marks: [],
            text: 'If you are reading this and are a new builder, congratulations and welcome to the team! You are now a part of the build team of WesterosCraft.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '2a355e86d3b6',
        _type: 'block',
        children: [
          {
            _key: 'ba24384692d0',
            _type: 'span',
            marks: [],
            text: 'After you have successfully completed all the challenges that moderators give you during your application process, your ',
          },
          {
            _key: '3cf40f537ece',
            _type: 'span',
            marks: ['strong'],
            text: 'probation',
          },
          {
            _key: 'a6159632a924',
            _type: 'span',
            marks: [],
            text: ' begins. Think of probation as an in-game continuation of the application process; it helps to slowly introduce new builders to how the server operates. The probation period normally lasts around ',
          },
          {
            _key: 'a0e217982899',
            _type: 'span',
            marks: ['strong'],
            text: 'one month',
          },
          {
            _key: '59b08b457f79',
            _type: 'span',
            marks: [],
            text: '. Once you have completed the following steps to the satisfaction of the moderating team, you will be promoted to full builder status.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '94a3a584837c',
        _type: 'block',
        children: [
          {
            _key: '269a8cfb06e1',
            _type: 'span',
            marks: [],
            text: 'Probation',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '335c3a560df4',
        _type: 'block',
        children: [
          {
            _key: 'f3dc8bf8a00a',
            _type: 'span',
            marks: [],
            text: 'After being approved, every new builder will be required to undergo a one month probationary period and will be required to do the following to be promoted:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'e527d304a299',
        _type: 'block',
        children: [
          {
            _key: '5378b737dc0d',
            _type: 'span',
            marks: [],
            text: '1. Make a new thread called: "',
          },
          {
            _key: 'edde27236ccb',
            _type: 'span',
            marks: ['strong'],
            text: 'Probation: yourplayername',
          },
          {
            _key: 'd95f1aee715f',
            _type: 'span',
            marks: [],
            text: '" in the ',
          },
          {
            _key: '90bf1e45825b',
            _type: 'span',
            marks: ['ccb17b0b57f3'],
            text: 'Probation forum',
          },
          {
            _key: 'bfdf98696aaf',
            _type: 'span',
            marks: [],
            text: '.\n',
          },
        ],
        markDefs: [
          {
            _key: 'ccb17b0b57f3',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/forum/probation.39/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '6827daf556a3',
        _type: 'block',
        children: [
          {
            _key: '0f40b364cf1d',
            _type: 'span',
            marks: [],
            text: '​2. ',
          },
          {
            _key: '7f175530cbe4',
            _type: 'span',
            marks: ['strong'],
            text: 'Build at least five houses in five different locations.',
          },
          {
            _key: 'd3e8be7a6c6a',
            _type: 'span',
            marks: [],
            text: ' Be sure to place a builder tag with your name on it at each build. Once a build is completed, comment on your probation thread with the following information:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a40ca129dab5',
        _type: 'block',
        children: [
          {
            _key: 'ab48c0a8a903',
            _type: 'span',
            marks: ['strong'],
            text: 'Build number',
          },
          {
            _key: 'c459ef45541e',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '02128ae11937',
            _type: 'span',
            marks: ['strong'],
            text: '/warp ',
          },
          {
            _key: '601856e94bd5',
            _type: 'span',
            marks: [],
            text: '- should be the nearest available warp as seen from the ',
          },
          {
            _key: '2da87c94f267',
            _type: 'span',
            marks: ['7df25ca095d1'],
            text: 'Dynamic Map',
          },
          {
            _key: 'c7e236f96e30',
            _type: 'span',
            marks: [],
            text: '.\n',
          },
          {
            _key: '20ed63f3358d',
            _type: 'span',
            marks: ['strong'],
            text: 'XYZ coordinates',
          },
          {
            _key: '2e54f909ee34',
            _type: 'span',
            marks: [],
            text: ' -',
          },
          {
            _key: 'f5795a9e4883',
            _type: 'span',
            marks: ['strong'],
            text: ' ',
          },
          {
            _key: '10d380ebc8ef',
            _type: 'span',
            marks: [],
            text: 'found by pressing F3 in game.',
          },
          {
            _key: 'ab44d009c7ce',
            _type: 'span',
            marks: ['strong'],
            text: '\nNotes',
          },
          {
            _key: '6ef40145141e',
            _type: 'span',
            marks: [],
            text: ' - any notes relevant to the build; areas you struggled with etc. ',
          },
        ],
        markDefs: [
          {
            _key: '7df25ca095d1',
            _type: 'link',
            href: 'http://mc.westeroscraft.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'b62dcc2a677c',
        _type: 'block',
        children: [
          {
            _key: 'c98be11cf345',
            _type: 'span',
            marks: [],
            text: '3. Wait for a probation leader to claim your probation and give you feedback on your builds. Any builder who is an approved probation leader or a moderator may assume leadership of probation. Project leaders, though not responsible for your probation, will likely also give you feedback which you must also follow. For how our in-game feedback system works, check out the ',
          },
          {
            _key: 'aa78c6d0c4f2',
            _type: 'span',
            marks: ['a1832bb9cd0c'],
            text: 'General Building Guidelines',
          },
          {
            _key: '5c83c34bd948',
            _type: 'span',
            marks: [],
            text: '.\n\n​​4. Assuming you successfully completed all requirements of probation (build five quality houses at five different locations, maintain activity, and display a favourable attitude) you will be promoted to full builder status by a moderator.',
          },
        ],
        markDefs: [
          {
            _key: 'a1832bb9cd0c',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/general-building-guidelines',
          },
        ],
        style: 'normal',
      },
      {
        _key: '25f0168daec5',
        _type: 'block',
        children: [
          {
            _key: 'b083c56cc525',
            _type: 'span',
            marks: [],
            text: 'Find Something to Build',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '4c9ef8fb10b4',
        _type: 'block',
        children: [
          {
            _key: 'f11e1884b8b7',
            _type: 'span',
            marks: [],
            text: 'The best place to start is by looking at our ',
          },
          {
            _key: '013976bef272',
            _type: 'span',
            marks: ['14da64fe2384'],
            text: 'Dynmap',
          },
          {
            _key: 'a9975c477a00',
            _type: 'span',
            marks: [],
            text: ' for any ',
          },
          {
            _key: '46f9220af8b8',
            _type: 'span',
            marks: ['strong', '02eff9b5ea00'],
            text: 'plot markers',
          },
          {
            _key: '3be9cfb65f54',
            _type: 'span',
            marks: [],
            text: '. These show up as little green flags on the map. Make sure you have the "',
          },
          {
            _key: '3d6378cf8049',
            _type: 'span',
            marks: ['strong'],
            text: 'Open Plot',
          },
          {
            _key: '5f93d1c6debb',
            _type: 'span',
            marks: [],
            text: '" layer turned on in the layers list (top left corner).',
          },
        ],
        markDefs: [
          {
            _key: '14da64fe2384',
            _type: 'link',
            href: 'http://mc.westeroscraft.com/',
          },
          {
            _key: '02eff9b5ea00',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/marker-signs.2405/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'da9dcbe2af03',
        _type: 'block',
        children: [
          {
            _key: 'dec71195dcab',
            _type: 'span',
            marks: [],
            text: 'Check all ',
          },
          {
            _key: 'a979ead03b6b',
            _type: 'span',
            marks: ['f9e972532953'],
            text: 'recent projects on the forums',
          },
          {
            _key: 'e8d5d92c99e9',
            _type: 'span',
            marks: [],
            text: ' and see if any of them have villages or hamlets open to build at. If that fails, just ask anyone in game and more often than not someone will point you in the right direction.',
          },
        ],
        markDefs: [
          {
            _key: 'f9e972532953',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/categories/canon-projects.84/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '220f03439fa9',
        _type: 'block',
        children: [
          {
            _key: '8a0f7523dbc1',
            _type: 'span',
            marks: [],
            text: 'Be sure to check out our ',
          },
          {
            _key: 'f560acb0ea2a',
            _type: 'span',
            marks: ['d3707cdacd56'],
            text: 'General Building Guidelines',
          },
          {
            _key: '96ccc7e7463f',
            _type: 'span',
            marks: [],
            text: ' or more information on our plot building system.',
          },
        ],
        markDefs: [
          {
            _key: 'd3707cdacd56',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/general-building-guidelines',
          },
        ],
        style: 'normal',
      },
      {
        _key: '3e78611adb07',
        _type: 'block',
        children: [
          {
            _key: 'db3f1e9eaae9',
            _type: 'span',
            marks: [],
            text: "Can't Find any Plots?",
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'cd5ee29e33b4',
        _type: 'block',
        children: [
          {
            _key: '99eba582d79d',
            _type: 'span',
            marks: [],
            text: "Waiting for feedback on a house you've built? Here are a few things you can do keep busy on the server.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '98c8d889e061',
        _type: 'block',
        children: [
          {
            _key: '840c2722774d',
            _type: 'span',
            marks: [],
            text: '- ',
          },
          {
            _key: '9c1cae975580',
            _type: 'span',
            marks: ['strong'],
            text: 'Ask builders if they need any help with their project.',
          },
          {
            _key: '279eb69493c6',
            _type: 'span',
            marks: [],
            text: " Projects are more than just house plots. Castles need to be furnished, fields fenced, barns built, boats added to rivers, forests planted. Just because they don't have any plots, doesn't mean project leaders don't need you.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '02130cd9b2ff',
        _type: 'block',
        children: [
          {
            _key: 'c328133bcc04',
            _type: 'span',
            marks: [],
            text: '- ',
          },
          {
            _key: 'c27c5e96a8f7',
            _type: 'span',
            marks: ['strong'],
            text: 'Plan a mini-app',
          },
          {
            _key: '42bd037f4d4a',
            _type: 'span',
            marks: [],
            text: '. Completing mini-apps (hamlets, quarries, lumber camps, mills) is the quickest way to getting your first project started. Check the forums and /warp build or just ask around to find out what mini-apps are available. Just bear in mind you cannot officially apply until you are a full builder.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b005500076cf',
        _type: 'block',
        children: [
          {
            _key: '6bd30ea1cb14',
            _type: 'span',
            marks: [],
            text: '- ',
          },
          {
            _key: '06b53e84e469',
            _type: 'span',
            marks: ['strong'],
            text: 'Test for a server build',
          },
          {
            _key: '8a84c3a099cc',
            _type: 'span',
            marks: [],
            text: ". Scattered around the Test world are areas dedicated to testing for major locations that haven't been started or are planned for re-do (e.g. Dorne, Old Town, Gull Town, Harrenhal). Feel free to test out ideas for these at any time (just remember to tag your work!).",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1cf612a9f43d',
        _type: 'block',
        children: [
          {
            _key: 'e03310fa39fc',
            _type: 'span',
            marks: [],
            text: '- ',
          },
          {
            _key: 'a5c75f79e76c',
            _type: 'span',
            marks: ['strong'],
            text: 'Build something on your test plot. ',
          },
          {
            _key: '6fd541b9ecf1',
            _type: 'span',
            marks: [],
            text: 'As a probationary builder you are welcome to claim a 200x200 ',
          },
          {
            _key: '7a565c2ad0f0',
            _type: 'span',
            marks: ['strong'],
            text: 'test plot',
          },
          {
            _key: '032b3a4b7b22',
            _type: 'span',
            marks: [],
            text: ' in our test world. Find an empty plot and ask a moderator in game to assign it to you.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b6342caaff72',
        _type: 'block',
        children: [
          {
            _key: 'ac7ba9566e0a',
            _type: 'span',
            marks: [],
            text: 'Community',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'a209c9f75c31',
        _type: 'block',
        children: [
          {
            _key: '8b41dfcd41f5',
            _type: 'span',
            marks: [],
            text: 'As a new builder, we want you to keep in touch with the community and the latest happenings. Read the ',
          },
          {
            _key: '0bb91e0e49f3',
            _type: 'span',
            marks: ['1d3562819a4b'],
            text: 'forums',
          },
          {
            _key: 'fe000ca44ed5',
            _type: 'span',
            marks: [],
            text: ', like our ',
          },
          {
            _key: '7b19ce98d3b2',
            _type: 'span',
            marks: ['e244cb090a25'],
            text: 'facebook page',
          },
          {
            _key: 'af87b664b94f',
            _type: 'span',
            marks: [],
            text: ', subscribe to our ',
          },
          {
            _key: '47ea21d775bc',
            _type: 'span',
            marks: ['60f6c33b341e'],
            text: 'YouTube channel',
          },
          {
            _key: '7fa8fd84af75',
            _type: 'span',
            marks: [],
            text: ', follow our ',
          },
          {
            _key: 'a3c6232ac9db',
            _type: 'span',
            marks: ['12abfe56d7cc'],
            text: 'instagram',
          },
          {
            _key: 'a463ccfb203b',
            _type: 'span',
            marks: [],
            text: ', or hang out in ',
          },
          {
            _key: '4935990b5071',
            _type: 'span',
            marks: ['fa0949c57dcd'],
            text: 'Discord',
          },
          {
            _key: 'a878946a814a',
            _type: 'span',
            marks: [],
            text: ", up to you, just don't be shy!",
          },
        ],
        markDefs: [
          {
            _key: '1d3562819a4b',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/forum/',
          },
          {
            _key: 'e244cb090a25',
            _type: 'link',
            href: 'https://www.facebook.com/WesterosCraft/',
          },
          {
            _key: '60f6c33b341e',
            _type: 'link',
            href: 'https://www.youtube.com/user/WesterosCraft',
          },
          {
            _key: '12abfe56d7cc',
            _type: 'link',
            href: 'https://www.instagram.com/westeroscraft/?hl=en',
          },
          {
            _key: 'fa0949c57dcd',
            _type: 'link',
            href: 'https://discord.com/invite/pBS5TH4',
          },
        ],
        style: 'normal',
      },
      {
        _key: '55809bd5c49c',
        _type: 'block',
        children: [
          {
            _key: '91abf4288ff7',
            _type: 'span',
            marks: [],
            text: 'Notes',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '802f59875ce1',
        _type: 'block',
        children: [
          {
            _key: 'f60fc49e973f',
            _type: 'span',
            marks: [],
            text: '- If you would prefer to have another probation leader (due to time zones, communication issues, or whatever), please notify a moderator through private message.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f69406b2d660',
        _type: 'block',
        children: [
          {
            _key: '8252dcfa7417',
            _type: 'span',
            marks: [],
            text: '- For builders re-applying after a long period of inactivity: once the re-application is approved, a moderator may still ask you to undergo a full probation period or, depending on the circumstances, allow you to skip probation altogether.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'fd7ecd6d7236',
        _type: 'block',
        children: [
          {
            _key: 'cce6bc6c949a',
            _type: 'span',
            marks: [],
            text: '- Note that probationary builders may not apply for projects, including mini-builds and immersion projects.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '456c8e5fb552',
        _type: 'block',
        children: [
          {
            _key: '0b916c24cd92',
            _type: 'span',
            marks: [],
            text: '- If for some reason your forum name does not match your in-game name, please request it to be changed ',
          },
          {
            _key: '8396bb13b8c1',
            _type: 'span',
            marks: ['3818794073f3'],
            text: 'here',
          },
        ],
        markDefs: [
          {
            _key: '3818794073f3',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/forum-name-change-request.2254/',
          },
        ],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '52a3451d-02e6-4cea-bcc4-e97b78a99e74',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-14a2dce9f7f8ee9c7b0cb81f8a5acad2e75de49e-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'new-builders-guide',
    },
    title: "New Builders' Guide",
  },
  {
    _createdAt: '2021-01-23T19:14:23Z',
    _id: 'schem-sets',
    _rev: '9SW1xi54QyXoHspJF3RnLE',
    _type: 'guide',
    _updatedAt: '2022-07-16T17:12:08Z',
    guideCategory: {
      _ref: 'e1ac352f-1567-410a-ac16-d516ef533faf',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-52c6d74d9bce708ad5d5467e591ddb3509bfbe2b-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [
      {
        _key: '9xuBLDOZ',
        _type: 'imageGallery',
        images: [
          {
            _key: 'nrTG7vZ6',
            _type: 'image',
            alt: 'Alder M',
            asset: {
              _ref: 'image-94b96765f1de7c9819d2a122bcd67ec41870764f-973x594-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AlderM',
            title: 'AlderM',
          },
          {
            _key: 'ZucDj8Yh',
            _type: 'image',
            alt: 'Alder S',
            asset: {
              _ref: 'image-2e4b6a100fa48b3047746ac0da0c4710040c2054-917x459-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AlderS',
            title: 'AlderS',
          },
          {
            _key: 'ZInN2h3u',
            _type: 'image',
            alt: 'Alder Tall M',
            asset: {
              _ref: 'image-4b94bca1b8144a33d66884739f39263a6d3363fa-1089x789-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Alder TallM',
            title: 'Alder TallM',
          },
          {
            _key: 'ggXncTVx',
            _type: 'image',
            alt: 'Aleppo Dead',
            asset: {
              _ref: 'image-d9d115e12dcd3088dd646c8616cd58d2610c020c-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AleppoDead',
            title: 'AleppoDead',
          },
          {
            _key: 'yk8JTtjw',
            _type: 'image',
            alt: 'Aleppo L',
            asset: {
              _ref: 'image-48363babf2af1c3f26538f4f43af189bad8c93d7-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AleppoL',
            title: 'AleppoL',
          },
          {
            _key: '1vnCuMkW',
            _type: 'image',
            alt: 'Aleppo M',
            asset: {
              _ref: 'image-f035ad4920f567722aae35ea667f5b5180238be2-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AleppoM',
            title: 'AleppoM',
          },
          {
            _key: 'GDZx56ko',
            _type: 'image',
            alt: 'Aleppo S',
            asset: {
              _ref: 'image-b59515006849bfaa3cea6c7702220bdee6b1166f-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AleppoS',
            title: 'AleppoS',
          },
          {
            _key: 'zz1b50iA',
            _type: 'image',
            alt: 'Almond S',
            asset: {
              _ref: 'image-92db61e7805dfed2830028cd7228ef645a669798-1119x516-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AlmondS',
            title: 'AlmondS',
          },
          {
            _key: '1fTZA4Xr',
            _type: 'image',
            alt: 'Apple M',
            asset: {
              _ref: 'image-13c183f9d8b9e8ea8d23257e69d6bac7a670e4bd-1128x593-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AppleM',
            title: 'AppleM',
          },
          {
            _key: 'OlvfDqvo',
            _type: 'image',
            alt: 'Apple S',
            asset: {
              _ref: 'image-898b2d1e0559c1460763d212f2a852671fda2989-1067x571-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AppleS',
            title: 'AppleS',
          },
          {
            _key: 'liMNvJk6',
            _type: 'image',
            alt: 'Apricot S',
            asset: {
              _ref: 'image-a0ea61a8dd2a2a9ff0fa7bd1df61a37e8777f511-973x559-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ApricotS',
            title: 'ApricotS',
          },
          {
            _key: 'y00fmW3n',
            _type: 'image',
            alt: 'Ash L',
            asset: {
              _ref: 'image-3dd6a652b2de40a0a610ce9df399d8d44027ee42-1581x847-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AshL',
            title: 'AshL',
          },
          {
            _key: 'bOoK2LUC',
            _type: 'image',
            alt: 'Ash S',
            asset: {
              _ref: 'image-b39d0fc499879029ed6771d20f3855f829066681-1031x521-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AshS',
            title: 'AshS',
          },
          {
            _key: 'OvN3zivf',
            _type: 'image',
            alt: 'Aspen M',
            asset: {
              _ref: 'image-f7618cd64e509f60ba0b433ec1a6da45555ec265-1081x612-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AspenM',
            title: 'AspenM',
          },
          {
            _key: 'madwwQU6',
            _type: 'image',
            alt: 'Aspen S',
            asset: {
              _ref: 'image-d2ee77126b92b0c4631b08cdf8678d7b5bd31dbb-1148x574-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AspenS',
            title: 'AspenS',
          },
          {
            _key: '08guRu3M',
            _type: 'image',
            alt: 'B Ash M',
            asset: {
              _ref: 'image-72048848065478b2f8f4ac495e389befe706cd13-1243x772-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BAshM',
            title: 'BAshM',
          },
          {
            _key: 'egPScmRo',
            _type: 'image',
            alt: 'B Cypress',
            asset: {
              _ref: 'image-9144678c957578019e91509dbebb5dce7fc4bd9c-947x625-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BCypress',
            title: 'BCypress',
          },
          {
            _key: 'AAoPKIQT',
            _type: 'image',
            alt: 'B Date Palm M',
            asset: {
              _ref: 'image-354d0eb02714f35075069ef851ed36f56c4fa80f-1020x701-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BDatePalmM',
            title: 'BDatePalmM',
          },
          {
            _key: 'rDiDHgyu',
            _type: 'image',
            alt: 'Beech L',
            asset: {
              _ref: 'image-d05be6e9fbf6eb5cc1140d3c6b820a5c321e5a2c-1581x784-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BeechL',
            title: 'BeechL',
          },
          {
            _key: 'q4GIoXRa',
            _type: 'image',
            alt: 'Beech M',
            asset: {
              _ref: 'image-8d9296e9dc264f9f7012c895f50a249862b9d018-1446x678-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BeechM',
            title: 'BeechM',
          },
          {
            _key: 'z7HMuENB',
            _type: 'image',
            alt: 'Beech S',
            asset: {
              _ref: 'image-fd35f41256d282838967f59708f8d461b003921a-954x385-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BeechS',
            title: 'BeechS',
          },
          {
            _key: 'vmw8946i',
            _type: 'image',
            alt: 'Birch M',
            asset: {
              _ref: 'image-1077cfa28ec6d633e4825cc8df8d950833f1a5bc-962x591-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BirchM',
            title: 'BirchM',
          },
          {
            _key: 'Ssa6uEeG',
            _type: 'image',
            alt: 'Birch S',
            asset: {
              _ref: 'image-e2da1f25cebdeb75325e9e69cbcc2b6e6faed4a8-948x491-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BirchS',
            title: 'BirchS',
          },
          {
            _key: 'vPAtPQRh',
            _type: 'image',
            alt: 'B Ironwood S',
            asset: {
              _ref: 'image-4f52c1b79aa1d74e6c663ae623b1007c190dfbb0-955x620-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BIronwoodS',
            title: 'BIronwoodS',
          },
          {
            _key: 'OKsZnBcC',
            _type: 'image',
            alt: 'B Maple M',
            asset: {
              _ref: 'image-f2fe02d1bd10c50bc924ff46c772d8ccca45dd22-1461x748-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BMapleM',
            title: 'BMapleM',
          },
          {
            _key: 'r1FvDQPC',
            _type: 'image',
            alt: 'B Olive S',
            asset: {
              _ref: 'image-c7353867dc563ce2cf42b28b588d49d2b5f3b554-901x425-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BOliveS',
            title: 'BOliveS',
          },
          {
            _key: 'TtszvCeY',
            _type: 'image',
            alt: 'B Pine',
            asset: {
              _ref: 'image-5d2bfe76d43e3dc3e1635d2a418de2cecef5c378-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BPineBPine',
            title: 'BPineBPine',
          },
          {
            _key: 'isuxCTL1',
            _type: 'image',
            alt: 'B Sentinel M',
            asset: {
              _ref: 'image-a2eb2bbaf63473790ae22f5dca7b4daf23f456ec-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BSentinelM',
            title: 'BSentinelM',
          },
          {
            _key: '6GFdBQ3j',
            _type: 'image',
            alt: 'Buddleja',
            asset: {
              _ref: 'image-6ce4476869d4444d7724dfa471df38dab17c959f-892x428-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Buddleja',
            title: 'Buddleja',
          },
          {
            _key: 'Y5TaElHZ',
            _type: 'image',
            alt: 'B Weirwood L',
            asset: {
              _ref: 'image-64df1816a539c3a51e7ed3e0325b60f19a8885f5-1920x1057-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BWeirwoodL',
            title: 'BWeirwoodL',
          },
          {
            _key: 'JcqQPLM0',
            _type: 'image',
            alt: 'B Weirwood M',
            asset: {
              _ref: 'image-a23f848abd3753642dd5d010467c85f8f2ddc245-1558x643-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BWeirwoodM',
            title: 'BWeirwoodM',
          },
          {
            _key: 'BAxxLUak',
            _type: 'image',
            alt: 'B Weirwood S',
            asset: {
              _ref: 'image-a1f594bc5b67db89123edd964749002705ad549d-1036x447-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BWeirwoodS',
            title: 'BWeirwoodS',
          },
          {
            _key: 'JHZi3St6',
            _type: 'image',
            alt: 'Carc Small Birch',
            asset: {
              _ref: 'image-b26c887312bfc5c74f17e216f089f83f5ff46494-1010x470-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CarcSmallBirch',
            title: 'CarcSmallBirch',
          },
          {
            _key: 'Rz88MRcH',
            _type: 'image',
            alt: 'Carc Small Pine',
            asset: {
              _ref: 'image-8e2642889151780b983954fd2d2072f2eeac6b8b-963x410-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CarcSmallPine',
            title: 'CarcSmallPine',
          },
          {
            _key: 'AnIEsTuZ',
            _type: 'image',
            alt: 'Carc Small Pine Oak',
            asset: {
              _ref: 'image-170280ce8d3509abcc74e84d2f01d28b9caf93cb-903x293-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CarcSmallPineOak',
            title: 'CarcSmallPineOak',
          },
          {
            _key: 'O0XcZhwl',
            _type: 'image',
            alt: 'Carc Tall Pine',
            asset: {
              _ref: 'image-19c59706dc6d1891d123f1ba4a8fa2f73c9a3e5b-988x783-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CarcTallPine',
            title: 'CarcTallPine',
          },
          {
            _key: 'soU3hHel',
            _type: 'image',
            alt: 'Carc Tall Pine L',
            asset: {
              _ref: 'image-244659e7911cca6578feccca17d7a65998b4b229-1251x862-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CarcTallPineL',
            title: 'CarcTallPineL',
          },
          {
            _key: 'B9Q0gN15',
            _type: 'image',
            alt: 'Carc Tall Pine M',
            asset: {
              _ref: 'image-db6beb078d4d98bc2e7ef2980be350e19c69e3c0-933x754-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CarcTallPineM',
            title: 'CarcTallPineM',
          },
          {
            _key: 'EWCxWqDH',
            _type: 'image',
            alt: 'Cherry S',
            asset: {
              _ref: 'image-8a7599d3a64615f9c9214c082706de78a52ab96d-955x416-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CherryS',
            title: 'CherryS',
          },
          {
            _key: 'GCzQt1vE',
            _type: 'image',
            alt: 'Chestnut L',
            asset: {
              _ref: 'image-e9f0d7f71ed0d471d6529a3dd6b4c7c85459328d-1920x1057-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ChestnutL',
            title: 'ChestnutL',
          },
          {
            _key: 'm5sljR49',
            _type: 'image',
            alt: 'Chestnut S',
            asset: {
              _ref: 'image-be59c07bd634d2febf180428c0cdda5087af37f8-1000x492-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ChestnutS',
            title: 'ChestnutS',
          },
          {
            _key: 'mltpKCy3',
            _type: 'image',
            alt: 'Cork M',
            asset: {
              _ref: 'image-de05bdc8491e58334193e7386c0d86c6e3babb12-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CorkM',
            title: 'CorkM',
          },
          {
            _key: 'jFaGPxiA',
            _type: 'image',
            alt: 'Cottonwood L',
            asset: {
              _ref: 'image-d262a3b09ba2a02b9df81e6b5f7f6464d3a085d9-1179x695-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CottonwoodL',
            title: 'CottonwoodL',
          },
          {
            _key: 'joqI1Bta',
            _type: 'image',
            alt: 'Cottonwood M',
            asset: {
              _ref: 'image-64d87af93f57adc9288bd2424767c115720af1b8-976x589-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CottonwoodM',
            title: 'CottonwoodM',
          },
          {
            _key: 'Rb1MxhNE',
            _type: 'image',
            alt: 'Cottonwood S',
            asset: {
              _ref: 'image-03419e36e5e7fadc0c9a1c0dddb3606a9814d193-965x513-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CottonwoodS',
            title: 'CottonwoodS',
          },
          {
            _key: 'ovEKVN0z',
            _type: 'image',
            alt: 'Cypress S',
            asset: {
              _ref: 'image-d17324fcc4c7f14bcb788a8f72b670a33a04e77b-906x503-png',
              _type: 'reference',
            },
            description: null,
            heading: 'CypressS',
            title: 'CypressS',
          },
          {
            _key: 'EB5KHXhc',
            _type: 'image',
            alt: 'Dead Evergreen S',
            asset: {
              _ref: 'image-a95aaae19716d1dbe68bd4559ba16589f1789a22-859x546-png',
              _type: 'reference',
            },
            description: null,
            heading: 'DeadEvergreenS',
            title: 'DeadEvergreenS',
          },
          {
            _key: 'vtaYkE6A',
            _type: 'image',
            alt: 'Dead Birch',
            asset: {
              _ref: 'image-b8a5ea9a0191e52675af4e4126cb640a54979de9-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'DeadBirch',
            title: 'DeadBirch',
          },
          {
            _key: '9eRa3Gyp',
            _type: 'image',
            alt: 'Dead Pine',
            asset: {
              _ref: 'image-ad0ca4e2369827e353ffde3a7ec0f4e625e02c51-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'DeadPine',
            title: 'DeadPine',
          },
          {
            _key: 'IZB0Ltpf',
            _type: 'image',
            alt: 'Emily Pine',
            asset: {
              _ref: 'image-ec33b60fac2c21dc95357c014556139ed4b5a4b7-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'EmilyPine',
            title: 'EmilyPine',
          },
          {
            _key: 'GNZ9lEsT',
            _type: 'image',
            alt: 'Emily Pine D',
            asset: {
              _ref: 'image-1eca28663153dfea648a1b1ea8da9308df37d5cc-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'EmilyPineD',
            title: 'EmilyPineD',
          },
          {
            _key: '5bTdTSDF',
            _type: 'image',
            alt: 'Evergreen S',
            asset: {
              _ref: 'image-7807e89362d290a78f1bb055f5f09b82ae123004-998x613-png',
              _type: 'reference',
            },
            description: null,
            heading: 'EvergreenS',
            title: 'EvergreenS',
          },
          {
            _key: '8AkDxxUQ',
            _type: 'image',
            alt: 'Evergreen No Snow M',
            asset: {
              _ref: 'image-484612f721c5ffbbf1169400db9c94f55885da84-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'EvergreenNoSnowM',
            title: 'EvergreenNoSnowM',
          },
          {
            _key: 'fx5kXaoW',
            _type: 'image',
            alt: 'Evergreen Oak M',
            asset: {
              _ref: 'image-0abae085513b176620844136c2090e68ccef9728-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'EvergreenOakM',
            title: 'EvergreenOakM',
          },
          {
            _key: 'IDOsdFn8',
            _type: 'image',
            alt: 'Forest Alder',
            asset: {
              _ref: 'image-a121979427b01bdd56405aad2e311be23fbc74ee-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ForestAlder',
            title: 'ForestAlder',
          },
          {
            _key: 'vvNFkBBo',
            _type: 'image',
            alt: 'Forest Detail',
            asset: {
              _ref: 'image-fc4a10d536ec61566d0e70d07046f828bb1887fb-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ForestDetail',
            title: 'ForestDetail',
          },
          {
            _key: 'jg8veSuH',
            _type: 'image',
            alt: 'Forest Maple',
            asset: {
              _ref: 'image-d8aafc1cb3a66ad0c2fd14108b9d32a019dbfbee-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ForestMaple',
            title: 'ForestMaple',
          },
          {
            _key: 'fonpTsmG',
            _type: 'image',
            alt: 'Forest Alder',
            asset: {
              _ref: 'image-a121979427b01bdd56405aad2e311be23fbc74ee-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ForestAlder',
            title: 'ForestAlder',
          },
          {
            _key: 'aBL6nfvp',
            _type: 'image',
            alt: 'Forest Oak',
            asset: {
              _ref: 'image-c595501ab8363ac21c999b5f2fb5176945235e21-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ForestOak',
            title: 'ForestOak',
          },
          {
            _key: 'YenJwyNW',
            _type: 'image',
            alt: 'Generic Fruit',
            asset: {
              _ref: 'image-163b0dc280576342a0a73b581c97f50976cade05-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'GenericFruit',
            title: 'GenericFruit',
          },
          {
            _key: '7r1uGYsg',
            _type: 'image',
            alt: 'Hawthorn',
            asset: {
              _ref: 'image-43be5b74aa2eb830c9c16e132e71c9d486debf8d-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Hawthorn',
            title: 'Hawthorn',
          },
          {
            _key: 'mC2TtkS9',
            _type: 'image',
            alt: 'Hawthorn L',
            asset: {
              _ref: 'image-5d38b15e1704b3423dcd8fcb18b7ad73729a9fd1-1403x624-png',
              _type: 'reference',
            },
            description: null,
            heading: 'HawthornL',
            title: 'HawthornL',
          },
          {
            _key: 'hrsMOkXM',
            _type: 'image',
            alt: 'Hawthorn M',
            asset: {
              _ref: 'image-48221f9cf6932e38369ef359dcdfdd8917112e36-1250x613-png',
              _type: 'reference',
            },
            description: null,
            heading: 'HawthornM',
            title: 'HawthornM',
          },
          {
            _key: '6JTU2q0M',
            _type: 'image',
            alt: 'Hawthorn S',
            asset: {
              _ref: 'image-92db4c2032fe161dd8ef49213c50079a0c6a8621-1215x402-png',
              _type: 'reference',
            },
            description: null,
            heading: 'HawthornS',
            title: 'HawthornS',
          },
          {
            _key: 'Xi6IEpI1',
            _type: 'image',
            alt: 'Herm Birch',
            asset: {
              _ref: 'image-ddc054d7c1c19f35c0bb8d561976863b98462ee9-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'HermBirch',
            title: 'HermBirch',
          },
          {
            _key: 'ppNXuKr4',
            _type: 'image',
            alt: 'Herm Evergreen',
            asset: {
              _ref: 'image-99808d801497730569679e1b01652b9d2c3addd3-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'HermEvergreen',
            title: 'HermEvergreen',
          },
          {
            _key: 'sJCrRNB7',
            _type: 'image',
            alt: 'Herm Willow Wood',
            asset: {
              _ref: 'image-bcd636d3e2b183788a6015d7675f0e96b7c1555a-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'HermWillowWood',
            title: 'HermWillowWood',
          },
          {
            _key: 's6pJCeR8',
            _type: 'image',
            alt: 'Jacaranda',
            asset: {
              _ref: 'image-3efa1e0bb3889f25714aafc7b4c796246455ffdf-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Jacaranda',
            title: 'Jacaranda',
          },
          {
            _key: 'viAb6W88',
            _type: 'image',
            alt: 'Larch M',
            asset: {
              _ref: 'image-19140594fb8b9997cedaa74acb47b9764b51122c-1209x736-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LarchM',
            title: 'LarchM',
          },
          {
            _key: 'k5kwlCGz',
            _type: 'image',
            alt: 'Larch S',
            asset: {
              _ref: 'image-c700f159f13a4f9f62788853884842163860bc58-983x536-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LarchS',
            title: 'LarchS',
          },
          {
            _key: 'Blrk4I4w',
            _type: 'image',
            alt: 'Lemon S',
            asset: {
              _ref: 'image-0177ab5d1a0e9c643d56973f9f160bf55958b4b0-955x440-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LemonS',
            title: 'LemonS',
          },
          {
            _key: '8CMEIKC0',
            _type: 'image',
            alt: 'Lilac M',
            asset: {
              _ref: 'image-1340444f1c9244856b4c4441a3f320bbf64dffd1-1144x447-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LilacM',
            title: 'LilacM',
          },
          {
            _key: 'K6JfeByx',
            _type: 'image',
            alt: 'L Jungle L',
            asset: {
              _ref: 'image-aea8ae4ccb4c85ef2096562443095fcdac8d7345-1160x548-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LJungleL',
            title: 'LJungleL',
          },
          {
            _key: 'lf0wc0dx',
            _type: 'image',
            alt: 'L Jungle M',
            asset: {
              _ref: 'image-29c72a758e0c5f6073ceb8785ec8f48bac520fa8-1180x594-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LJungleM',
            title: 'LJungleM',
          },
          {
            _key: 'CN1t9GgF',
            _type: 'image',
            alt: 'L Jungle S',
            asset: {
              _ref: 'image-59ef063cf6ba1397953d75cdfee14346ffc5b6bc-903x382-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LJungleS',
            title: 'LJungleS',
          },
          {
            _key: 'LLcive2e',
            _type: 'image',
            alt: 'L Oak L',
            asset: {
              _ref: 'image-5e7b498ea64e7e11280710bd0734e8997c7c26db-1119x712-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LOakL',
            title: 'LOakL',
          },
          {
            _key: 'uE6AkHFs',
            _type: 'image',
            alt: 'L Oak M',
            asset: {
              _ref: 'image-7cd44a64a84da9ce32e8c9b6def4da536dfa9adf-1201x626-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LOakM',
            title: 'LOakM',
          },
          {
            _key: 'FMkDBVuu',
            _type: 'image',
            alt: 'L Oak S',
            asset: {
              _ref: 'image-33566ec6043f7feeba7f309f37408f2faa221e69-1001x415-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LOakS',
            title: 'LOakS',
          },
          {
            _key: 'gBoIOB1K',
            _type: 'image',
            alt: 'Low Redwood M',
            asset: {
              _ref: 'image-769f7cdab9bf5369c8cea9b80903981d2ccfb6cd-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LowRedwoodM',
            title: 'LowRedwoodM',
          },
          {
            _key: 'WzfxJ26Y',
            _type: 'image',
            alt: 'L Spruce L',
            asset: {
              _ref: 'image-d70933dfe06dbd4e3b4c4dfd1c4b805b3d2082b2-1185x689-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LSpruceL',
            title: 'LSpruceL',
          },
          {
            _key: '2BIj72nU',
            _type: 'image',
            alt: 'L Spruce M',
            asset: {
              _ref: 'image-b02aa63840c0953b0712d07a03931d44d49c66e2-1241x575-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LSpruceM',
            title: 'LSpruceM',
          },
          {
            _key: 'niMfBygW',
            _type: 'image',
            alt: 'L Spruce S',
            asset: {
              _ref: 'image-840c15791c9e1e0ad64d2b8d4a5274432282577c-837x316-png',
              _type: 'reference',
            },
            description: null,
            heading: 'LSpruceS',
            title: 'LSpruceS',
          },
          {
            _key: 'DHSOM6XH',
            _type: 'image',
            alt: 'Mulberry S',
            asset: {
              _ref: 'image-7ed06175b2b47e7501549e68976cd117891355bb-1031x403-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MulberryS',
            title: 'MulberryS',
          },
          {
            _key: 'Q8o8u1LZ',
            _type: 'image',
            alt: 'Mangrove Tree M',
            asset: {
              _ref: 'image-d9aaf75599a5c844e9352d155e1089fdd46fdf61-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MangroveTreeM',
            title: 'MangroveTreeM',
          },
          {
            _key: 'xYzVDGwQ',
            _type: 'image',
            alt: 'Mangrove Tree S',
            asset: {
              _ref: 'image-0e5825efa128af40ab016e450f162c47ffa0f0a6-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MangroveTreeS',
            title: 'MangroveTreeS',
          },
          {
            _key: 'vdNHtndv',
            _type: 'image',
            alt: 'Mangrove Tree M',
            asset: {
              _ref: 'image-d9aaf75599a5c844e9352d155e1089fdd46fdf61-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MapleS',
            title: 'MapleS',
          },
          {
            _key: 'xYhqtTBi',
            _type: 'image',
            alt: 'Mist Ash M',
            asset: {
              _ref: 'image-dd32d4a9dd60a9eaf9fbb4667b98b439c4872531-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MistAshM',
            title: 'MistAshM',
          },
          {
            _key: 'XHfTrEKH',
            _type: 'image',
            alt: 'Mist Maple L',
            asset: {
              _ref: 'image-7e83e3126cd6e89fb8cc706316fdd9a212aa6fe2-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MistMapleL',
            title: 'MistMapleL',
          },
          {
            _key: 'un0Nzqix',
            _type: 'image',
            alt: 'Mist Oak L',
            asset: {
              _ref: 'image-01e596fe2c03c5be463d56bcf0393144c18a1cf8-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MistOakL',
            title: 'MistOakL',
          },
          {
            _key: 'iz2R2L1e',
            _type: 'image',
            alt: 'Mist Pine L',
            asset: {
              _ref: 'image-adb26c7795857df9af556ba3f96c84a9784296a7-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MistPineL',
            title: 'MistPineL',
          },
          {
            _key: '0qhEhqRa',
            _type: 'image',
            alt: 'Mist Pine M',
            asset: {
              _ref: 'image-e615515fcf9b6a06d259c6bf7d46ad65c25e835b-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MistPineM',
            title: 'MistPineM',
          },
          {
            _key: '4woBDH52',
            _type: 'image',
            alt: 'Mist Pine XL',
            asset: {
              _ref: 'image-626b49608377c86dbaa54d98e7673d7accd0909a-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MistPineXL',
            title: 'MistPineXL',
          },
          {
            _key: 'kfPOQba6',
            _type: 'image',
            alt: 'Mist Sentinel L',
            asset: {
              _ref: 'image-7ea5bc65915b8c69d1e352600cc87347ad266a8a-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MistSentinelL',
            title: 'MistSentinelL',
          },
          {
            _key: 'nNhY8Gzn',
            _type: 'image',
            alt: 'Mixed Thin Birch',
            asset: {
              _ref: 'image-0ef9ceb80a6539d769a31d108e8f375644bda434-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'MixedThinBirch',
            title: 'MixedThinBirch',
          },
          {
            _key: '1rA54kXA',
            _type: 'image',
            alt: 'New Redwood M',
            asset: {
              _ref: 'image-cfad110d201030674e795f44d71a432fbd0bd0ba-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'NewRedwoodM',
            title: 'NewRedwoodM',
          },
          {
            _key: '66qFJiHw',
            _type: 'image',
            alt: 'Northern Thin Birch',
            asset: {
              _ref: 'image-45cefa7c3fb18ee77cd32d0b1f5e07cee39b3a68-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'NorthernThinBirch',
            title: 'NorthernThinBirch',
          },
          {
            _key: 'afYUsFCv',
            _type: 'image',
            alt: 'Oak L',
            asset: {
              _ref: 'image-6bf83d22c9cb82ee2938e0268571360b71578718-1367x693-png',
              _type: 'reference',
            },
            description: null,
            heading: 'OakL',
            title: 'OakL',
          },
          {
            _key: '5Nq4cDqv',
            _type: 'image',
            alt: 'Oak M',
            asset: {
              _ref: 'image-2d0aa5c476f7bc862e5bf840f7c960adf0ebff4d-1755x700-png',
              _type: 'reference',
            },
            description: null,
            heading: 'OakM',
            title: 'OakM',
          },
          {
            _key: 'iIpqzHqJ',
            _type: 'image',
            alt: 'Oak S',
            asset: {
              _ref: 'image-933c97c08dde0633c044ee3f6ca060be0f5a1deb-1205x598-png',
              _type: 'reference',
            },
            description: null,
            heading: 'OakS',
            title: 'OakS',
          },
          {
            _key: 'cIHU2TEI',
            _type: 'image',
            alt: 'Oak XL',
            asset: {
              _ref: 'image-e006ff364e009cefdd34806beb333c438e667cb7-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'OakXL',
            title: 'OakXL',
          },
          {
            _key: 'x1OFcQjq',
            _type: 'image',
            alt: 'Oleander S',
            asset: {
              _ref: 'image-620fc984b0da8de06bf242e7b1465b16a148437a-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'OleanderSOleanderS',
            title: 'OleanderSOleanderS',
          },
          {
            _key: 'F9I1YTFS',
            _type: 'image',
            alt: 'Olive S',
            asset: {
              _ref: 'image-cfd9724d338e3f92e95e061cc76ae3ed2b4411ca-1049x420-png',
              _type: 'reference',
            },
            description: null,
            heading: 'OliveS',
            title: 'OliveS',
          },
          {
            _key: 'cmK1eIeL',
            _type: 'image',
            alt: 'Orange S',
            asset: {
              _ref: 'image-6520dc1dc1a1be28e7ee10bc24c965089d690a4f-1175x630-png',
              _type: 'reference',
            },
            description: null,
            heading: 'OrangeS',
            title: 'OrangeS',
          },
          {
            _key: 'F96fNyIT',
            _type: 'image',
            alt: 'Peach M',
            asset: {
              _ref: 'image-cf0c4fef50ae6f786380d621f2d00c2eff625dfa-1172x643-png',
              _type: 'reference',
            },
            description: null,
            heading: 'PeachM',
            title: 'PeachM',
          },
          {
            _key: 'i6BisAMV',
            _type: 'image',
            alt: 'Peach S',
            asset: {
              _ref: 'image-56f0ec07a612d51bccfed9938282fb3e0ad8e8ff-997x490-png',
              _type: 'reference',
            },
            description: null,
            heading: 'PeachS',
            title: 'PeachS',
          },
          {
            _key: 'tyfnDkJj',
            _type: 'image',
            alt: 'Pecan M',
            asset: {
              _ref: 'image-528d0466a065c7dbb52b950d7bfd0f3f2a8d0ca5-1181x618-png',
              _type: 'reference',
            },
            description: null,
            heading: 'PecanM',
            title: 'PecanM',
          },
          {
            _key: 'Smg1CeN4',
            _type: 'image',
            alt: 'Pecan S',
            asset: {
              _ref: 'image-605b46370da73894678a86a34874bf6b220b63a5-991x606-png',
              _type: 'reference',
            },
            description: null,
            heading: 'PecanS',
            title: 'PecanS',
          },
          {
            _key: 'rSrGxloB',
            _type: 'image',
            alt: 'Pine S',
            asset: {
              _ref: 'image-002efc4077ae7b21976b81149e1c60f97f0bcd49-1002x625-png',
              _type: 'reference',
            },
            description: null,
            heading: 'PineS',
            title: 'PineS',
          },
          {
            _key: 'eXk25hmB',
            _type: 'image',
            alt: 'Plum M',
            asset: {
              _ref: 'image-8fdb09afc1ac799d2e43953960daf15b6c02cabc-949x536-png',
              _type: 'reference',
            },
            description: null,
            heading: 'PlumM',
            title: 'PlumM',
          },
          {
            _key: 'TRcKWD18',
            _type: 'image',
            alt: 'Plum S',
            asset: {
              _ref: 'image-c1c10fa1fee26ef823da02ca717907c8f0cc56e5-993x524-png',
              _type: 'reference',
            },
            description: null,
            heading: 'PlumS',
            title: 'PlumS',
          },
          {
            _key: 'kYsv8V8h',
            _type: 'image',
            alt: 'Pomegranate S',
            asset: {
              _ref: 'image-bf0748c610cd11c77c22c363b5643fd2c303246a-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'PPomegranateS',
            title: 'PPomegranateS',
          },
          {
            _key: '3A8cEfOE',
            _type: 'image',
            alt: 'Poplar M',
            asset: {
              _ref: 'image-ef84eb82470790b62b75e2fc1ba38ee10c322b41-966x597-png',
              _type: 'reference',
            },
            description: null,
            heading: 'PoplarM',
            title: 'PoplarM',
          },
          {
            _key: 'l34wwNFq',
            _type: 'image',
            alt: 'Redwood M',
            asset: {
              _ref: 'image-c34f63f95f731b19b017a41a8697b721ef7c3a9a-1135x794-png',
              _type: 'reference',
            },
            description: null,
            heading: 'RedwoodM',
            title: 'RedwoodM',
          },
          {
            _key: 'RuAlTAWU',
            _type: 'image',
            alt: 'Redwood S',
            asset: {
              _ref: 'image-45b1248bf54209e36e4581545ca379e89235e69e-1068x775-png',
              _type: 'reference',
            },
            description: null,
            heading: 'RedwoodS',
            title: 'RedwoodS',
          },
          {
            _key: 'E0UXndJx',
            _type: 'image',
            alt: 'Sandalwood S',
            asset: {
              _ref: 'image-53044fbb023055f802c47ff60cf9820aae5a3d74-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SandalwoodS',
            title: 'SandalwoodS',
          },
          {
            _key: '5XZQz4mS',
            _type: 'image',
            alt: 'Sandbeggar M',
            asset: {
              _ref: 'image-945d97a56070e151184a3abbf601265a8289910c-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SandbeggarM',
            title: 'SandbeggarM',
          },
          {
            _key: 'lqk9hgGY',
            _type: 'image',
            alt: 'Sentinel S',
            asset: {
              _ref: 'image-97485298aa1f1a28b5479bc8a30ed9e804a494d7-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SentinelS',
            title: 'SentinelS',
          },
          {
            _key: 'wX9FEC7X',
            _type: 'image',
            alt: 'Skinny B Ash M',
            asset: {
              _ref: 'image-f9a118c2545255cac847351da775bc5e2c58978a-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SkinnyBAshM',
            title: 'SkinnyBAshM',
          },
          {
            _key: 'hdLn0q0c',
            _type: 'image',
            alt: 'Soldier Pine S',
            asset: {
              _ref: 'image-b6b4447094f09b9708e38922a2490afc97d0364c-989x429-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SoldierPineS',
            title: 'SoldierPineS',
          },
          {
            _key: 'RSMxgPNQ',
            _type: 'image',
            alt: 'Spruce L',
            asset: {
              _ref: 'image-7a81444dab5ae3ef85d417ac28281ac5e8c261cf-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SpruceL',
            title: 'SpruceL',
          },
          {
            _key: 'k9EUGyJO',
            _type: 'image',
            alt: 'Spruce M',
            asset: {
              _ref: 'image-db36f89995ba2c572e03ffdda3145ad6855c3d5d-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SpruceM',
            title: 'SpruceM',
          },
          {
            _key: '2y1MFN7u',
            _type: 'image',
            alt: 'Spruce S',
            asset: {
              _ref: 'image-f36abd8e5b272688a7bf9552895e0289422c8c01-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SpruceS',
            title: 'SpruceS',
          },
          {
            _key: 'byEw3Mnu',
            _type: 'image',
            alt: 'Swamp S',
            asset: {
              _ref: 'image-4e332e2e9bf0b3366551b813a7bbeba1035ee1e3-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SwampS',
            title: 'SwampS',
          },
          {
            _key: 'QbpKQCXy',
            _type: 'image',
            alt: 'Tamarix',
            asset: {
              _ref: 'image-7d848c15e2edc73c7c01ab851d40f8e5cd551ced-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Tamarix',
            title: 'Tamarix',
          },
          {
            _key: 'q4LsoB27',
            _type: 'image',
            alt: 'Thin Redwood M',
            asset: {
              _ref: 'image-4f9492567aa1eb58ee57c0fc607b3038f37e4a22-1131x790-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ThinRedwoodM',
            title: 'ThinRedwoodM',
          },
          {
            _key: 'B1phXe7A',
            _type: 'image',
            alt: 'Tiny Pine',
            asset: {
              _ref: 'image-8560a3e124f651532c4d07c83ca09cc7452ab11f-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'TinyPineTinyPine',
            title: 'TinyPineTinyPine',
          },
          {
            _key: '2ZlTlypt',
            _type: 'image',
            alt: 'Vale Pine S',
            asset: {
              _ref: 'image-3e80d66079677d1cda1aea4b3af4db70d33a2bc7-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'ValePineS',
            title: 'ValePineS',
          },
          {
            _key: 'RP2zwBcZ',
            _type: 'image',
            alt: 'Willow L',
            asset: {
              _ref: 'image-71a2f1f3ee14e6ead1d9c5ffd8e1b5728aeb943c-1716x719-png',
              _type: 'reference',
            },
            description: null,
            heading: 'WillowL',
            title: 'WillowL',
          },
          {
            _key: 'zLmChNSI',
            _type: 'image',
            alt: 'Willow M',
            asset: {
              _ref: 'image-4e4a5b8449172c90e278b322618ebe17e186a5a1-1161x575-png',
              _type: 'reference',
            },
            description: null,
            heading: 'WillowMWillowM',
            title: 'WillowMWillowM',
          },
          {
            _key: 'VS44aeyD',
            _type: 'image',
            alt: 'Willow S',
            asset: {
              _ref: 'image-7f2672c9cbf60e2950be5537c6e476d7d119fe47-978x474-png',
              _type: 'reference',
            },
            description: null,
            heading: 'WillowS',
            title: 'WillowS',
          },
          {
            _key: 'I4k4oEEH',
            _type: 'image',
            alt: 'Weeping Willow',
            asset: {
              _ref: 'image-a7039459ed9e64e2adceb928e5c4623be8ad8082-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'WeepingWillow',
            title: 'WeepingWillow',
          },
          {
            _key: 'HHbxGF4A',
            _type: 'image',
            alt: 'Willow S Fresh Poll',
            asset: {
              _ref: 'image-ff4fecb1fe83820125632db37b1f85cf69fc2743-1920x1017-png',
              _type: 'reference',
            },
            description: null,
            heading: 'WillowSFreshPoll',
            title: 'WillowSFreshPoll',
          },
          {
            _key: 'HimTpSw1',
            _type: 'image',
            alt: 'Willow S One Poll',
            asset: {
              _ref: 'image-00c1fb37806e8bcd2feec3e67ef9975e3dbf8c0a-1920x1017-png',
              _type: 'reference',
            },
            description: null,
            heading: 'WillowSOnePoll',
            title: 'WillowSOnePoll',
          },
          {
            _key: 'Ci2cGSL7',
            _type: 'image',
            alt: 'Willow S Two Poll',
            asset: {
              _ref: 'image-78a61a5a2ea01295b47cfd3df1c6f521867e6da1-1920x1017-png',
              _type: 'reference',
            },
            description: null,
            heading: 'WillowSTwoPoll',
            title: 'WillowSTwoPoll',
          },
          {
            _key: 'C1HqGOu0',
            _type: 'image',
            alt: 'Weirwood M',
            asset: {
              _ref: 'image-65bdf07249e1759006facdfdd311444764a55e75-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'WeirwoodM',
            title: 'WeirwoodM',
          },
          {
            _key: 'najEFqfk',
            _type: 'image',
            alt: 'Willow XL',
            asset: {
              _ref: 'image-3c692381346460f091a58bec73b74e3701d902b6-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'WillowXL',
            title: 'WillowXL',
          },
        ],
        metadata: '/schbr \u0026\u003cID\u003e',
        title: 'Tree Sets',
      },
      {
        _key: 'bRBdmSaQ',
        _type: 'imageGallery',
        images: [
          {
            _key: '1b48xfod',
            _type: 'image',
            alt: 'Alder All',
            asset: {
              _ref: 'image-4e05411991ebaf7dd60c0f6edec4a446183b04ef-1280x720-png',
              _type: 'reference',
            },
            description: 'A mixture of AlderS and AlderM variants',
            heading: 'AlderAll',
            title: 'AlderAll',
          },
          {
            _key: 'a0p28tPN',
            _type: 'image',
            alt: 'All Bush Low',
            asset: {
              _ref: 'image-eb87aa20ff5513f8c867a5ea27a303ddffe376d0-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AllBushLow',
            title: 'AllBushLow',
          },
          {
            _key: 'QyTze1OE',
            _type: 'image',
            alt: 'All Bush Tall',
            asset: {
              _ref: 'image-8dafe8a293fc8253190f4095943e51037d6e306c-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'AllBushTall',
            title: 'AllBushTall',
          },
          {
            _key: 'jTT8X0ay',
            _type: 'image',
            alt: 'Birch All',
            asset: {
              _ref: 'image-8a778f33b5aa03f2788ae22f606ad9966de35e7e-1280x720-png',
              _type: 'reference',
            },
            description: 'A mixture of BirchS and BirchM variants',
            heading: 'BirchAll',
            title: 'BirchAll',
          },
          {
            _key: 'C2qGVfkG',
            _type: 'image',
            alt: 'Broadleaf L',
            asset: {
              _ref: 'image-02ceff32a6b1e2cbbf6dd7ad443d7bd989df6563-1565x654-png',
              _type: 'reference',
            },
            description: 'A mixture of large oaks, willows, and chestnuts. Good for forests',
            heading: 'BroadleafL',
            title: 'BroadleafL',
          },
          {
            _key: '465DJhui',
            _type: 'image',
            alt: 'Broad Leaf Mixed',
            asset: {
              _ref: 'image-cf28a3422920ab48aeaf0f4da205a49864748b48-1280x720-png',
              _type: 'reference',
            },
            description: 'A mixture of ForestMaple, ForestOak, CottonwoodM, ForestMaple',
            heading: 'BroadLeafMixed',
            title: 'BroadLeafMixed',
          },
          {
            _key: 'Z0i1zLgP',
            _type: 'image',
            alt: 'Broadleaf XL',
            asset: {
              _ref: 'image-59cb9c1cd1fba5478cb5c3bb4443053f34f9856e-1336x817-png',
              _type: 'reference',
            },
            description:
              'A mixture of very large oaks, willows, and chestnuts. For deep forest only',
            heading: 'BroadleafXL',
            title: 'BroadleafXL',
          },
          {
            _key: '2Ob7nTq6',
            _type: 'image',
            alt: 'Carc Fallen Tree',
            asset: {
              _ref: 'image-e3582afbaa17d5d06e9447c41373fbd97945d5d6-1893x717-png',
              _type: 'reference',
            },
            description: "Fallen trees of mixed logs. Don't overuse!",
            heading: 'CarcFallenTree',
            title: 'CarcFallenTree',
          },
          {
            _key: 'ArmQXMkP',
            _type: 'image',
            alt: 'Carc Bush Mix',
            asset: {
              _ref: 'image-7669b0a2804643e411ffd2462b738b39c8ae4141-1280x720-png',
              _type: 'reference',
            },
            description: 'Small mixed bushes',
            heading: 'CarcBushMix',
            title: 'CarcBushMix',
          },
          {
            _key: 'Eu1AHvsF',
            _type: 'image',
            alt: 'Carc Small Tree',
            asset: {
              _ref: 'image-cfb4f29c09c479b358e50e93bf986a049995eaad-995x379-png',
              _type: 'reference',
            },
            description: 'Small mixed trees',
            heading: 'CarcSmallTree',
            title: 'CarcSmallTree',
          },
          {
            _key: 'W2QOZwr3',
            _type: 'image',
            alt: 'Filler Forest',
            asset: {
              _ref: 'image-4e6b3621e677485b7a8e064839d8244f374b1b36-1253x757-png',
              _type: 'reference',
            },
            description: 'A mixture of alders, cottonwoods, and oaks',
            heading: 'FillerForest',
            title: 'FillerForest',
          },
          {
            _key: 'fjFTstOz',
            _type: 'image',
            alt: 'Leafy Forest',
            asset: {
              _ref: 'image-ff9dbe587a50230e50c46fa3e4691e3d67f2eab5-1280x720-png',
              _type: 'reference',
            },
            description: 'A mixture of AspenM, BeechM, HawthornS,BeechS, OakS, OakM, OakL',
            heading: 'LeafyForest',
            title: 'LeafyForest',
          },
          {
            _key: 'A1m68Cri',
            _type: 'image',
            alt: 'Lovely Forest',
            asset: {
              _ref: 'image-ee32e1f24b11f480d8e3b272ca0ecb70781c3c53-1280x720-png',
              _type: 'reference',
            },
            description: 'A mixture of OakM, AshM, BMapleM, CottonwoodM, AlderM',
            heading: 'LovelyForest',
            title: 'LovelyForest',
          },
          {
            _key: 'rJxO17Dr',
            _type: 'image',
            alt: 'Mixed Redwood M',
            asset: {
              _ref: 'image-27f82c808b9545c4bc63ef2f5811427e76c6e75f-1087x762-png',
              _type: 'reference',
            },
            description: 'Mixed medium redwoods',
            heading: 'MixedRedwoodM',
            title: 'MixedRedwoodM',
          },
          {
            _key: 'V1JqzsYH',
            _type: 'image',
            alt: 'Mixed Bush Low',
            asset: {
              _ref: 'image-166c0a76b7081880bce6cdcbf135305e0e049f82-1280x720-png',
              _type: 'reference',
            },
            description: 'Mixed low bushes',
            heading: 'MixedBushLow',
            title: 'MixedBushLow',
          },
          {
            _key: '5a84RNk5',
            _type: 'image',
            alt: 'Mixed Bush Tall',
            asset: {
              _ref: 'image-19a4a1a5ae16c6c810fbb0415a5992c85fa51a32-1280x720-png',
              _type: 'reference',
            },
            description: 'Mixed large bushes',
            heading: 'MixedBushTall',
            title: 'MixedBushTall',
          },
          {
            _key: 'MiOhSfU7',
            _type: 'image',
            alt: 'Mixed Forest',
            asset: {
              _ref: 'image-256dbfc04adf35d5d286165715963161f322aef1-1280x720-png',
              _type: 'reference',
            },
            description: 'A mixture of ForestMaple, ForestOak, ForestAlder',
            heading: 'MixedForest',
            title: 'MixedForest',
          },
          {
            _key: 'mjmI9wbu',
            _type: 'image',
            alt: 'Oak All',
            asset: {
              _ref: 'image-dde4420af98df08a01ba447aedeba10488c43210-1280x720-png',
              _type: 'reference',
            },
            description: 'A mixture of OakS, OakM, OakL',
            heading: 'OakAll',
            title: 'OakAll',
          },
          {
            _key: 'YDTPfQUD',
            _type: 'image',
            alt: 'Rainwood XL',
            asset: {
              _ref: 'image-a43a17c80c7fa2836c5fbfebfbff881d68344b8e-1411x862-png',
              _type: 'reference',
            },
            description: 'Very large trees with vines, for the rainwood only',
            heading: 'RainwoodXL',
            title: 'RainwoodXL',
          },
          {
            _key: 'qLbMP2ut',
            _type: 'image',
            alt: 'Spottswood',
            asset: {
              _ref: 'image-e0c2519d2c340be01c1b75d6ad4642f82dce769c-1280x720-png',
              _type: 'reference',
            },
            description: 'Mix of UmbrellaPineL, SandbeggarS, SandbeggarL',
            heading: 'Spottswood',
            title: 'Spottswood',
          },
          {
            _key: 'Sb2fXJWi',
            _type: 'image',
            alt: 'Wolfswood All',
            asset: {
              _ref: 'image-6c3346a4bdc36204d2e3b58652ed0a2119f1309d-1280x720-png',
              _type: 'reference',
            },
            description: 'Mixture of WolfswoodS and WolfswoodM',
            heading: 'WolfswoodAll',
            title: 'WolfswoodAll',
          },
          {
            _key: 'czVyN5sh',
            _type: 'image',
            alt: 'Wolfswood L',
            asset: {
              _ref: 'image-5b6eb0c2611f9b6c0ae2110a471943cb40c2a1fd-1655x889-png',
              _type: 'reference',
            },
            description: 'Mixture of large trees for northern forests',
            heading: 'WolfswoodL',
            title: 'WolfswoodL',
          },
          {
            _key: 'Kb4JcBJH',
            _type: 'image',
            alt: 'Wolfswood M',
            asset: {
              _ref: 'image-e3c3d5f88381db7517ef96aa8e1b4e16b63c506b-1044x688-png',
              _type: 'reference',
            },
            description: 'Mixture of medium trees, for northern forests (oak and spruce trunks)',
            heading: 'WolfswoodM',
            title: 'WolfswoodM',
          },
          {
            _key: 'RZtQO5a4',
            _type: 'image',
            alt: 'Wolfswood S',
            asset: {
              _ref: 'image-4c5c93dba45ea1bfe918db9374467d99b6287b85-989x531-png',
              _type: 'reference',
            },
            description: 'Mixture of small trees, for northern forests (spruce and jungle trunks)',
            heading: 'WolfswoodS',
            title: 'WolfswoodS',
          },
          {
            _key: 'zjKTvlmq',
            _type: 'image',
            alt: 'Wolfswood XL',
            asset: {
              _ref: 'image-21855262e0660bb9ea32f895bdecbf4308318709-1528x845-png',
              _type: 'reference',
            },
            description: 'Mixture of extra large trees, for northern forests (deep forest only!)',
            heading: 'WolfswoodXL',
            title: 'WolfswoodXL',
          },
        ],
        metadata: '/schbr \u0026\u003cID\u003e',
        title: 'Mixed',
      },
      {
        _key: 'KVodLeQI',
        _type: 'imageGallery',
        images: [
          {
            _key: 'RoDFZTJZ',
            _type: 'image',
            alt: 'Snowy Evergreen M',
            asset: {
              _ref: 'image-aa72301ac9f2f2920829d67a45f5bee1bbfc1128-1280x720-png',
              _type: 'reference',
            },
            description: 'Medium Evergreen trees with snow',
            heading: 'SnowyEvergreenM',
            title: 'SnowyEvergreenM',
          },
          {
            _key: 'ZoncMyWk',
            _type: 'image',
            alt: 'Snowy Leafless',
            asset: {
              _ref: 'image-5b66cc0f63ac696774abba5d5a8ada1846db74b4-1584x617-png',
              _type: 'reference',
            },
            description: 'Dead trees with snow',
            heading: 'SnowyLeafless',
            title: 'SnowyLeafless',
          },
          {
            _key: 'I7XPy3o7',
            _type: 'image',
            alt: 'Snowy Pine L',
            asset: {
              _ref: 'image-9967ef932f63097d08980bd9838a81b344ac355e-1080x831-png',
              _type: 'reference',
            },
            description: 'Large pine with snow',
            heading: 'SnowyPineL',
            title: 'SnowyPineL',
          },
          {
            _key: 'rjdt6nyI',
            _type: 'image',
            alt: 'Snowy Pine M',
            asset: {
              _ref: 'image-820eb1f4a8bd5a2456278f6a60d00876eafc0078-963x766-png',
              _type: 'reference',
            },
            description: 'Medium pines with snow',
            heading: 'SnowyPineM',
            title: 'SnowyPineM',
          },
          {
            _key: 'XASUMB6Z',
            _type: 'image',
            alt: 'Snowy Soldier L',
            asset: {
              _ref: 'image-c6fef31b2fbc461c1a9ad6e702b2ae1092170c2d-1220x673-png',
              _type: 'reference',
            },
            description: 'Large soldier pines with snow',
            heading: 'SnowySoldierL',
            title: 'SnowySoldierL',
          },
          {
            _key: 'Z8yzL7Lu',
            _type: 'image',
            alt: 'Snowy Spruce L',
            asset: {
              _ref: 'image-1c78082d6c2e20802beb2b45fd3d914dab66191c-1315x756-png',
              _type: 'reference',
            },
            description: 'Large spruce trees with snow',
            heading: 'SnowySpruceL',
            title: 'SnowySpruceL',
          },
          {
            _key: 'oLbDnBM7',
            _type: 'image',
            alt: 'Snowy Weirwood',
            asset: {
              _ref: 'image-8ae2cf354888b3486a2aacc4352817fcb8b43a30-1280x720-png',
              _type: 'reference',
            },
            description: 'Mix of weirwoods with snow',
            heading: 'SnowyWeirwood',
            title: 'SnowyWeirwood',
          },
        ],
        metadata: '/schbr \u0026\u003cID\u003e',
        title: 'Snowy Trees',
      },
      {
        _key: '6dRAo9fG',
        _type: 'imageGallery',
        images: [
          {
            _key: 'yn1Z3gcF',
            _type: 'image',
            alt: 'Alder Bush',
            asset: {
              _ref: 'image-11e9803a23f651f748b9da94fb92d2a755f8a59c-1920x1057-png',
              _type: 'reference',
            },
            description: 'Tall, alder type bushes',
            heading: 'AlderBush',
            title: 'AlderBush',
          },
          {
            _key: 'hrmwiKOz',
            _type: 'image',
            alt: 'Birch Bush L',
            asset: {
              _ref: 'image-e569ae324f4d5abe431744db365a8701152be445-1622x484-png',
              _type: 'reference',
            },
            description: 'Large scatterings of birch bushes',
            heading: 'BirchBushL',
            title: 'BirchBushL',
          },
          {
            _key: 'Hb14BYLJ',
            _type: 'image',
            alt: 'Birch Bush Low',
            asset: {
              _ref: 'image-c9bc99f129fb9f66ae60d8f78dba6d3bb1636c38-1139x341-png',
              _type: 'reference',
            },
            description: 'Small birch bushes',
            heading: 'BirchBushLow',
            title: 'BirchBushLow',
          },
          {
            _key: '7ymGxNTQ',
            _type: 'image',
            alt: 'Birch Bush S',
            asset: {
              _ref: 'image-e3ba6dff1e51415665a2ae14a807561b170643b4-1280x720-png',
              _type: 'reference',
            },
            description: 'More small birch bushes',
            heading: 'BirchBushS',
            title: 'BirchBushS',
          },
          {
            _key: 'bfniSaJr',
            _type: 'image',
            alt: 'Birch Bush Tall',
            asset: {
              _ref: 'image-03cd6eab22d1275b0aa7b881f1abcc72f43943eb-1243x473-png',
              _type: 'reference',
            },
            description: 'Large birch bushes',
            heading: 'BirchBushTall',
            title: 'BirchBushTall',
          },
          {
            _key: 'FuT1c20h',
            _type: 'image',
            alt: 'Bird Bush',
            asset: {
              _ref: 'image-7ebd152400dd96167785decc1f94799166819708-1360x467-png',
              _type: 'reference',
            },
            description: 'Collections of small bushes/vegetation',
            heading: 'BirdBush',
            title: 'BirdBush',
          },
          {
            _key: '5lg5nPpv',
            _type: 'image',
            alt: 'Bird Bush S',
            asset: {
              _ref: 'image-27569a278b701d35e38391299a6da65cf342f908-1306x357-png',
              _type: 'reference',
            },
            description: 'Smaller collections of bushes/vegetation',
            heading: 'BirdBushS',
            title: 'BirdBushS',
          },
          {
            _key: '4p3ocHJ2',
            _type: 'image',
            alt: 'Carc Bush S',
            asset: {
              _ref: 'image-fba1812df43db64c717b85c011463bf9936c7ae7-1249x441-png',
              _type: 'reference',
            },
            description: 'Small bushes, mixed leaves',
            heading: 'CarcBushS',
            title: 'CarcBushS',
          },
          {
            _key: 'h63udWYk',
            _type: 'image',
            alt: 'Carc Bocage3',
            asset: {
              _ref: 'image-414e788dab2ab7d1513b937bdc0107e7226bc463-1280x720-png',
              _type: 'reference',
            },
            description: 'medium size bushes',
            heading: 'CarcBocage3',
            title: 'CarcBocage3',
          },
          {
            _key: '5rUAGjDq',
            _type: 'image',
            alt: 'J Sprawling Fern L',
            asset: {
              _ref: 'image-42b2ef9d276943126c388634e3f15910262fc358-1280x720-png',
              _type: 'reference',
            },
            description: 'Large groups of jungle ferns',
            heading: 'JSprawlingFernL',
            title: 'JSprawlingFernL',
          },
          {
            _key: 'E4cDi1ms',
            _type: 'image',
            alt: 'Jungle Bush L',
            asset: {
              _ref: 'image-7331de0d021553be608178cc78df768226e9f3de-1280x720-png',
              _type: 'reference',
            },
            description: 'Large groups of jungle bushes',
            heading: 'JungleBushL',
            title: 'JungleBushL',
          },
          {
            _key: 'nnNoY8RL',
            _type: 'image',
            alt: 'Jungle Bush Low',
            asset: {
              _ref: 'image-f3b367c8ecd1d8350dda4b7ac6b9c1feaec936af-1229x374-png',
              _type: 'reference',
            },
            description: 'Small jungle bushes',
            heading: 'JungleBushLow',
            title: 'JungleBushLow',
          },
          {
            _key: 'YA8zZIM1',
            _type: 'image',
            alt: 'Jungle Bush S',
            asset: {
              _ref: 'image-3a3247d5d5f333b55714e1e0ca39f966192d5d08-1280x720-png',
              _type: 'reference',
            },
            description: 'Groups of small jungle bushes',
            heading: 'JungleBushS',
            title: 'JungleBushS',
          },
          {
            _key: 'PlBmhISJ',
            _type: 'image',
            alt: 'Jungle Bush Tall',
            asset: {
              _ref: 'image-c60e293b70207020a2f177d9669d781d070bf423-1841x704-png',
              _type: 'reference',
            },
            description: 'Tall jungle bushes',
            heading: 'JungleBushTall',
            title: 'JungleBushTall',
          },
          {
            _key: '2zYbqV7Z',
            _type: 'image',
            alt: 'Jungle Bush S',
            asset: {
              _ref: 'image-3a3247d5d5f333b55714e1e0ca39f966192d5d08-1280x720-png',
              _type: 'reference',
            },
            description: 'Mix of medium sized blobs of bushes',
            heading: 'MBocage',
            title: 'MBocage',
          },
          {
            _key: '3OtPsg4v',
            _type: 'image',
            alt: 'Oak Bush M',
            asset: {
              _ref: 'image-ca185ce7a3a8c8cf065b3ef2793e10790e0d7cc4-1280x720-png',
              _type: 'reference',
            },
            description: 'Medium scatterings of oak bushes',
            heading: 'OakBushM',
            title: 'OakBushM',
          },
          {
            _key: '4cuGalkG',
            _type: 'image',
            alt: 'Oak Bush L',
            asset: {
              _ref: 'image-9ca0b93a371c9aed7232952f56cf0f62d8e123e9-1869x553-png',
              _type: 'reference',
            },
            description: 'Large scatterings of oak bushes',
            heading: 'OakBushL',
            title: 'OakBushL',
          },
          {
            _key: 'YnzOy4LO',
            _type: 'image',
            alt: 'Oak Bush Low',
            asset: {
              _ref: 'image-781b047551b1da8d809356fc1170b216f07ea714-1193x299-png',
              _type: 'reference',
            },
            description: 'Small oak bushes',
            heading: 'OakBushLow',
            title: 'OakBushLow',
          },
          {
            _key: '8lrgdvaD',
            _type: 'image',
            alt: 'Oak Bush S',
            asset: {
              _ref: 'image-cef557d30b32b4acc4c2d8577ea44e00c7f61e3d-1280x720-png',
              _type: 'reference',
            },
            description: 'Small scatterings of oak bushes',
            heading: 'OakBushS',
            title: 'OakBushS',
          },
          {
            _key: '6CU7wfB7',
            _type: 'image',
            alt: 'Oak Bush Tall',
            asset: {
              _ref: 'image-9289681e49c736185d538c2736a082f48b7c5cfe-1497x598-png',
              _type: 'reference',
            },
            description: 'Tall oak bushes',
            heading: 'OakBushTall',
            title: 'OakBushTall',
          },
          {
            _key: 'tXfCc1nD',
            _type: 'image',
            alt: 'Oak Shrub',
            asset: {
              _ref: 'image-a974f777d8dc7d6098cdbb0017b79838be2f6393-1280x720-png',
              _type: 'reference',
            },
            description: 'Small oak leaf shrubs',
            heading: 'OakShrub',
            title: 'OakShrub',
          },
          {
            _key: 'zi919T1E',
            _type: 'image',
            alt: 'S Bocage',
            asset: {
              _ref: 'image-d2d72a44a42b706659cacf1354c1b1dbdbb5b3f5-1280x720-png',
              _type: 'reference',
            },
            description: 'Small bocage',
            heading: 'SBocageSBocage',
            title: 'SBocageSBocage',
          },
          {
            _key: 'vDZ5mn9S',
            _type: 'image',
            alt: 'Vale Shrub S',
            asset: {
              _ref: 'image-d81e38a0b7f3b2db6e3da2f886c006481460d8ba-1146x461-png',
              _type: 'reference',
            },
            description: 'Small shrubs for mountains, mixed leaves',
            heading: 'ValeShrubS',
            title: 'ValeShrubS',
          },
          {
            _key: 'jKpf8ax9',
            _type: 'image',
            alt: 'Willow Bush',
            asset: {
              _ref: 'image-0d33b1d25940968d961167e080c03bca5fcc34df-1280x720-png',
              _type: 'reference',
            },
            description: 'Small shrubs for mountains, mixed leaves',
            heading: 'WillowBush',
            title: 'WillowBush',
          },
        ],
        metadata: '/schbr \u0026\u003cID\u003e',
        title: 'Bushes',
      },
      {
        _key: 'tHzJOsOw',
        _type: 'imageGallery',
        images: [
          {
            _key: 'd3dt1NVK',
            _type: 'image',
            alt: 'Bird Rock',
            asset: {
              _ref: 'image-d85521a903fc2d18a1753c15478ef78e0999d0bc-1303x558-png',
              _type: 'reference',
            },
            description: 'Blobs of iron blocks in varying sizes',
            heading: 'BirdRock',
            title: 'BirdRock',
          },
          {
            _key: 'GXJxefVL',
            _type: 'image',
            alt: 'Gen Rock S',
            asset: {
              _ref: 'image-e8834ca9977d1e79cfa74744ce84632e5127e08d-1034x391-png',
              _type: 'reference',
            },
            description:
              'Small blobs of ironore, after placing do a big replace to the right terrainset',
            heading: 'GenRockS',
            title: 'GenRockS',
          },
          {
            _key: '61HWWDzZ',
            _type: 'image',
            alt: 'Mist Rock L',
            asset: {
              _ref: 'image-68a5465bbaeae09c428a829210aec1cc63d9ef94-1280x720-png',
              _type: 'reference',
            },
            description: 'Large Mistwood rocks',
            heading: 'MistRockL',
            title: 'MistRockL',
          },
          {
            _key: 'S7tkzgvH',
            _type: 'image',
            alt: 'Mist Rock S',
            asset: {
              _ref: 'image-24fe0f341721f4508273977a70e4736593f5f337-1280x720-png',
              _type: 'reference',
            },
            description: 'Small Mistwood rocks',
            heading: 'MistRockS',
            title: 'MistRockS',
          },
          {
            _key: 'q16H5glk',
            _type: 'image',
            alt: 'Mist Rock S',
            asset: {
              _ref: 'image-24fe0f341721f4508273977a70e4736593f5f337-1280x720-png',
              _type: 'reference',
            },
            description: 'Mossy boulders',
            heading: 'MossyBoulder',
            title: 'MossyBoulder',
          },
          {
            _key: '1QVysORh',
            _type: 'image',
            alt: 'Northern Boulder',
            asset: {
              _ref: 'image-c8c70e7f23fb9243225a2acd712fbad1fe91de6b-1280x720-png',
              _type: 'reference',
            },
            description: 'Northern Terrain mix boulders',
            heading: 'NorthernBoulder',
            title: 'NorthernBoulder',
          },
          {
            _key: 'HJc7mPZl',
            _type: 'image',
            alt: 'Rock Taiga',
            asset: {
              _ref: 'image-29374b1a3738b80bbf81c2ce16804a96254c5bc3-1280x720-png',
              _type: 'reference',
            },
            description: 'Northern mix rock',
            heading: 'RockTaiga',
            title: 'RockTaiga',
          },
          {
            _key: '5tp47n5r',
            _type: 'image',
            alt: 'Rock Taiga Large',
            asset: {
              _ref: 'image-bfeb91a17ffcf6ffb1d4c72d9c37fdc5f0689304-1280x720-png',
              _type: 'reference',
            },
            description: 'Large Northern mix rock',
            heading: 'RockTaigaLarge',
            title: 'RockTaigaLarge',
          },
          {
            _key: 'vcZ3ivED',
            _type: 'image',
            alt: 'Torentine River Bank Rock',
            asset: {
              _ref: 'image-b72f0186eafa0756e5a495162d139171d05de9f2-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'TorentineRiverBankRock',
            title: 'TorentineRiverBankRock',
          },
          {
            _key: 'Pca7n0D6',
            _type: 'image',
            alt: 'Torentine River Banks',
            asset: {
              _ref: 'image-7061870fa948d21a48f93e89086cd639cf562fa4-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'TorentineRiverBanks',
            title: 'TorentineRiverBanks',
          },
          {
            _key: 'cBaBycRX',
            _type: 'image',
            alt: 'Torentine River Rock',
            asset: {
              _ref: 'image-d820e902f7b06ae2960b90eb33ddfb192d04f08c-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'TorentineRiverRock',
            title: 'TorentineRiverRock',
          },
        ],
        metadata: '/schbr \u0026\u003cID\u003e',
        title: 'Rocks',
      },
      {
        _key: 'KYlWMw4u',
        _type: 'imageGallery',
        images: [
          {
            _key: 'aGOhI7iL',
            _type: 'image',
            alt: 'Black Eyed Susan',
            asset: {
              _ref: 'image-3edf31c4f2a26fa0dc9c413514a685ae00218fc1-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'BlackEyedSusan',
            title: 'BlackEyedSusan',
          },
          {
            _key: 'iThuqAHz',
            _type: 'image',
            alt: 'Flower',
            description: null,
            heading: 'Cattails',
            title: 'Cattails',
          },
          {
            _key: 'tb3POFkE',
            _type: 'image',
            alt: 'Cosmos',
            asset: {
              _ref: 'image-76c9b19ea724ab33df3c3b0d014a2bfb226abbc2-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Cosmos',
            title: 'Cosmos',
          },
          {
            _key: 'jZiVeIxh',
            _type: 'image',
            alt: 'Crocus',
            asset: {
              _ref: 'image-9f3f6242f586e4e68ff8aaa2346967c4ddc818d6-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Crocus',
            title: 'Crocus',
          },
          {
            _key: 'MpDCbmJ4',
            _type: 'image',
            alt: 'Flowers',
            asset: {
              _ref: 'image-e1262f4bf3501781d04c6c76d8293bb99fa599c0-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Flowers',
            title: 'Flowers',
          },
          {
            _key: '8a2xCc90',
            _type: 'image',
            alt: 'Daffodils',
            asset: {
              _ref: 'image-76ae865b1f04125fdb35ac8118d9324a2360b3ae-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Daffodils',
            title: 'Daffodils',
          },
          {
            _key: 'onILAjV4',
            _type: 'image',
            alt: 'Dandelion',
            asset: {
              _ref: 'image-7c06f8d06402f8c3612c609995e61ebac1a9c855-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Dandelion',
            title: 'Dandelion',
          },
          {
            _key: 'H2dR3Alz',
            _type: 'image',
            alt: 'Daisies',
            asset: {
              _ref: 'image-e84a1f3fd5789d46ccfe449a33d04b274231e049-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Daisies',
            title: 'Daisies',
          },
          {
            _key: 'FomHphCh',
            _type: 'image',
            alt: 'Datura',
            asset: {
              _ref: 'image-7a20814ce8a2dd5e46445f1d9084ab768d789876-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Datura',
            title: 'Datura',
          },
          {
            _key: 's8DDMyBk',
            _type: 'image',
            alt: 'Desert Flowers',
            asset: {
              _ref: 'image-004df18b7bfbf95572cda62b7dc5075aa56493b9-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'DesertFlowers',
            title: 'DesertFlowers',
          },
          {
            _key: 'Ca1TFLVK',
            _type: 'image',
            alt: 'Forgetmenot',
            asset: {
              _ref: 'image-1ddbe10f76f3423ef3ae829c0d17d35e7fd3955d-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Forgetmenot',
            title: 'Forgetmenot',
          },
          {
            _key: 'GEnLMwtj',
            _type: 'image',
            alt: 'Iris',
            asset: {
              _ref: 'image-b1db66614f6f318047f581aad0cb6e35a21b76db-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Iris',
            title: 'Iris',
          },
          {
            _key: 'uTWKPpFP',
            _type: 'image',
            alt: 'Lavender',
            asset: {
              _ref: 'image-3dde56b9597ee9cdf14db065ad4b0e7afb3084be-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Lavender',
            title: 'Lavender',
          },
          {
            _key: 'exR30dXH',
            _type: 'image',
            alt: 'Marigolds',
            asset: {
              _ref: 'image-e6f7af3e135c0fc475767291454b0b435dd9fbef-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Marigolds',
            title: 'Marigolds',
          },
          {
            _key: 'm8gOVfqO',
            _type: 'image',
            alt: 'Nasturium',
            asset: {
              _ref: 'image-c536df24dc48886233989394a1b2c3b0e13a39b3-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'NasturiumNasturium',
            title: 'NasturiumNasturium',
          },
          {
            _key: 'dTRY6GPt',
            _type: 'image',
            alt: 'Nettle Flower',
            asset: {
              _ref: 'image-2c043fe2a862963754da8d4df3d1aef6a2d65226-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'NettleFlower',
            title: 'NettleFlower',
          },
          {
            _key: 'au2o5iw0',
            _type: 'image',
            alt: 'Pansies',
            asset: {
              _ref: 'image-69947b476c41c90b8af776799c8ed8c066f37465-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Pansies',
            title: 'Pansies',
          },
          {
            _key: 'pWb1Se7z',
            _type: 'image',
            alt: 'Poppy',
            asset: {
              _ref: 'image-f656e5b9931cfe377f26544f2ad0f45c99eb862c-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Poppy',
            title: 'Poppy',
          },
          {
            _key: '5m8XuvJZ',
            _type: 'image',
            alt: 'Ragweed',
            asset: {
              _ref: 'image-22ab565a6486831dd408c898ff62ce54aa97d631-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Ragweed',
            title: 'Ragweed',
          },
          {
            _key: 'uc13NNdK',
            _type: 'image',
            alt: 'Sweet Pea',
            asset: {
              _ref: 'image-7bdd368ade2a7277e36cd2407567976231a59852-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SweetPea',
            title: 'SweetPea',
          },
          {
            _key: 'hpuHI18f',
            _type: 'image',
            alt: 'S Golden Flowers',
            asset: {
              _ref: 'image-c26fd03a09e3f7ae31684b7c0db9db0bc034efb9-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'SGoldenFlowers',
            title: 'SGoldenFlowers',
          },
          {
            _key: 'Btij91GV',
            _type: 'image',
            alt: 'Tulips',
            asset: {
              _ref: 'image-f472fc633f251487c85ebc7ccc5b7b414ab82ef1-1280x720-png',
              _type: 'reference',
            },
            description: null,
            heading: 'Tulips',
            title: 'Tulips',
          },
        ],
        metadata: '/schbr \u0026\u003cID\u003e',
        title: 'Flowers',
      },
      {
        _key: 'ce2ah1Rh',
        _type: 'imageGallery',
        images: [
          {
            _key: 'UHykmgds',
            _type: 'image',
            alt: '',
            description: 'Medium size tree stumps',
            heading: 'BhStump',
            title: 'BhStump',
          },
          {
            _key: '7M3lvYbM',
            _type: 'image',
            alt: '',
            description: 'Clusters of bracken, to be used on its own or to create larger patches',
            heading: 'Bracken',
            title: 'Bracken',
          },
          {
            _key: 'T52C7sda',
            _type: 'image',
            alt: 'B Water',
            asset: {
              _ref: 'image-4448dc95bfaa4359156a771eee376eb490f01a70-1659x566-png',
              _type: 'reference',
            },
            description: 'Clusters of water vegetation. Place 1 lower than eventual water level',
            heading: 'BWater',
            title: 'BWater',
          },
          {
            _key: '733Q0x94',
            _type: 'image',
            alt: 'Carc Meadow',
            asset: {
              _ref: 'image-b1b99089f15c533a664359e0ff07f7f37ce3bb5a-1211x443-png',
              _type: 'reference',
            },
            description: 'Small bushes, rocks, and clusters of flowers for meadows',
            heading: 'CarcMeadow',
            title: 'CarcMeadow',
          },
          {
            _key: 'TAx7PUTX',
            _type: 'image',
            alt: 'Carc Meadow Flowers',
            asset: {
              _ref: 'image-b8fedba98116d26777d6c14667c77461704e360c-1045x382-png',
              _type: 'reference',
            },
            description: 'Clusters of flowers for meadows',
            heading: 'CarcMeadowFlowers',
            title: 'CarcMeadowFlowers',
          },
          {
            _key: '5T1sbzRd',
            _type: 'image',
            alt: 'Carc Stump',
            asset: {
              _ref: 'image-f153b57cdcb27a0e8d939dcae2653ebbc1e959a5-1073x316-png',
              _type: 'reference',
            },
            description: 'Small tree stumps',
            heading: 'CarcStump',
            title: 'CarcStump',
          },
          {
            _key: 'lPuC6R6i',
            _type: 'image',
            alt: 'Cart',
            asset: {
              _ref: 'image-f2d140256d43a4d66b34a7d116cf942a4dcb7581-1280x720-png',
              _type: 'reference',
            },
            description: 'Just a cart, pretty average, nothing special',
            heading: 'Cart',
            title: 'Cart',
          },
          {
            _key: 'q3Vi2mn5',
            _type: 'image',
            alt: 'Cow Parsley',
            asset: {
              _ref: 'image-d6610d369b9081fe133ea408e617b966d02e2174-1080x513-png',
              _type: 'reference',
            },
            description: 'Clusters of cow parsley, to be used on its own mostly',
            heading: 'CowParsley',
            title: 'CowParsley',
          },
          {
            _key: 'JtMsDqfT',
            _type: 'image',
            alt: 'Dead Bracken',
            asset: {
              _ref: 'image-8a4222b0f8c2f26af0a1c4c3ae130be614c666d5-1247x386-png',
              _type: 'reference',
            },
            description:
              'Clusters of dead bracken, to be used on its own or to create larger patches in the north',
            heading: 'DeadBracken',
            title: 'DeadBracken',
          },
          {
            _key: 'pBqQGWcq',
            _type: 'image',
            alt: '',
            description:
              'Clusters of fireweed, to be used on its own or to create larger patches, mostly in the north',
            heading: 'Fireweed',
            title: 'Fireweed',
          },
          {
            _key: 'YX1B6xGW',
            _type: 'image',
            alt: 'Ground Cover S',
            asset: {
              _ref: 'image-4c2ae09538aaa2a9b5ba617f0c068aab1f7d22e0-1098x348-png',
              _type: 'reference',
            },
            description: 'Mushrooms, rocks, tree stumps. For forest floors',
            heading: 'GroundCoverS',
            title: 'GroundCoverS',
          },
          {
            _key: 'rZZKcfDe',
            _type: 'image',
            alt: 'Jungle Tall Fern',
            asset: {
              _ref: 'image-be58c6ce9b153ff28b1087e83c753b523ff5c358-1406x527-png',
              _type: 'reference',
            },
            description: 'Clusters of ferns, to be used on its own or to create larger patches',
            heading: 'JungleTallFern',
            title: 'JungleTallFern',
          },
          {
            _key: 'ulzkG8DN',
            _type: 'image',
            alt: 'Jungle Tall Grass',
            asset: {
              _ref: 'image-a13aee754cb2ac86f7f8afed9b75dd38f7bad95b-1300x419-png',
              _type: 'reference',
            },
            description: 'Clusters of grass, to be used on its own or to create larger patches',
            heading: 'JungleTallGrass',
            title: 'JungleTallGrass',
          },
          {
            _key: 'S0dnyK4H',
            _type: 'image',
            alt: 'Nettles',
            asset: {
              _ref: 'image-98d28fd2922d13fb658cfc90f90e84cd9cebe45a-1404x420-png',
              _type: 'reference',
            },
            description: 'Clusters of nettles, to be used on its own or to create larger patches',
            heading: 'Nettles',
            title: 'Nettles',
          },
          {
            _key: 'byhtPzzH',
            _type: 'image',
            alt: '',
            description: 'Rocks and grass for river panks',
            heading: 'RiverBankDetails',
            title: 'RiverBankDetails',
          },
          {
            _key: 'EzKoH082',
            _type: 'image',
            alt: 'Savannah Tall Grass',
            asset: {
              _ref: 'image-ad9e3411560b6722f54fd454e2f2170e7ddc0b5a-1689x479-png',
              _type: 'reference',
            },
            description:
              'Clusters of savanna grass, to be used on its own or to create larger patches',
            heading: 'SavannaTallGrass',
            title: 'SavannaTallGrass',
          },
          {
            _key: 'n6vWxbAq',
            _type: 'image',
            alt: 'Torentine Fallen Tree',
            asset: {
              _ref: 'image-a1b55a85e624dc53b17ed4c96dcb1df6bc649ee3-1280x720-png',
              _type: 'reference',
            },
            description: 'Fallen tree',
            heading: 'TorentineFallenTree',
            title: 'TorentineFallenTree',
          },
          {
            _key: '9YVL2hvo',
            _type: 'image',
            alt: 'Torentine Groundcover',
            asset: {
              _ref: 'image-0fa55551a56037499457d3afbd34dbb36dbd6334-1280x720-png',
              _type: 'reference',
            },
            description: 'Misc ground cover',
            heading: 'TorentineGroundcover',
            title: 'TorentineGroundcover',
          },
          {
            _key: 'Zb0SFP4d',
            _type: 'image',
            alt: 'Wolfswood Detail',
            asset: {
              _ref: 'image-12c4e105f9ed941f182be9f8f91372f3ea4f3a40-1202x434-png',
              _type: 'reference',
            },
            description: 'Rocks and tree stumps, for northern forests',
            heading: 'WolfswoodDetail',
            title: 'WolfswoodDetail',
          },
          {
            _key: 'n6D5Rcp1',
            _type: 'image',
            alt: 'Wolfswood Log',
            asset: {
              _ref: 'image-db68d3a6071c613de1e73ca0e16c0b0a30c374fd-1037x323-png',
              _type: 'reference',
            },
            description: 'Larger fallen logs, for northern forests',
            heading: 'WolfswoodLog',
            title: 'WolfswoodLog',
          },
        ],
        metadata: '/schbr \u0026\u003cID\u003e',
        title: 'Miscellaneous',
      },
    ],
    slug: {
      _type: 'slug',
      current: 'schem-sets',
    },
    title: 'Schem Sets',
  },
  {
    _createdAt: '2021-01-23T19:14:23Z',
    _id: 'projects-orphanage',
    _rev: '9SW1xi54QyXoHspJF3Zay2',
    _type: 'guide',
    _updatedAt: '2022-07-16T18:27:32Z',
    body: [
      {
        _key: '3cd1de5c72e9',
        _type: 'block',
        children: [
          {
            _key: 'f5928175438d',
            _type: 'span',
            marks: [],
            text: 'The below list is of projects which have, sadly, become orphaned by their project leaders. Projects on the list have links to their original applications unless otherwise noted.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5151481d47fd',
        _type: 'block',
        children: [
          {
            _key: 'db06ffcd38ee',
            _type: 'span',
            marks: [],
            text: 'Projects can become abandoned in two ways:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9e3415abd0d8',
        _type: 'block',
        children: [
          {
            _key: '8601176d217c',
            _type: 'span',
            marks: [],
            text: '- The project leader announces that they have no intention of completing their project.\n- The project leader has become inactive (as decided by the moderating team).',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '4ddcff0e1809',
        _type: 'block',
        children: [
          {
            _key: 'c5d8ed2ce671',
            _type: 'span',
            marks: [],
            text: 'We hope some among you may find a place in your hearts to foster one of the below projects, many are very near to completion and just need a little attention.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5da2b8f161eb',
        _type: 'block',
        children: [
          {
            _key: '5da2e06a0a27',
            _type: 'span',
            marks: [],
            text: 'A foster project application should respect the original project leaders vision and not significantly alter any existing parts of the build. Fostering a project is essentially picking up where the previous leader left off. If you intend to remove or heavily update any existing part of the build, please consider instead appealing for a redo or an update. Refer to clause 1.c of the ',
          },
          {
            _key: 'ba058bff19bb',
            _type: 'span',
            marks: ['afd302eda6ef'],
            text: 'Official No-Redo Rule',
          },
          {
            _key: '0173d6af8512',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [
          {
            _key: 'afd302eda6ef',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/official-no-redo-rule',
          },
        ],
        style: 'normal',
      },
      {
        _key: '4a0ff86b6723',
        _type: 'block',
        children: [
          {
            _key: '9edec0624482',
            _type: 'span',
            marks: [],
            text: 'You do not need to make an appeal to apply for a foster project.\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9e318ce34ffa',
        _type: 'block',
        children: [
          {
            _key: '36911d5a0b5c',
            _type: 'span',
            marks: [],
            text: 'The North:\n',
          },
          {
            _key: '88561853a633',
            _type: 'span',
            marks: ['05dd8c479aea', 'strong'],
            text: 'Greywater Watch',
          },
          {
            _key: 'bf2ba52b244a',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '53113d9aea0c',
            _type: 'span',
            marks: ['strong', 'a28fa6fcb4c7'],
            text: 'Karhold',
          },
          {
            _key: '1f72f55af4a6',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '56df45b28329',
            _type: 'span',
            marks: ['strong'],
            text: 'Oldcastle ',
          },
          {
            _key: '0cd5bbe11953',
            _type: 'span',
            marks: [],
            text: '(original application unavailable)\n\nThe Riverlands:\n',
          },
          {
            _key: 'a4a49501586f',
            _type: 'span',
            marks: ['strong'],
            text: 'Atranta, ',
          },
          {
            _key: 'b22e2d88043e',
            _type: 'span',
            marks: [],
            text: 'formerly ',
          },
          {
            _key: '85cd31f95a14',
            _type: 'span',
            marks: ['strong', '8f6345ef371c'],
            text: "Wayfarer's Rest",
          },
          {
            _key: 'c0116ed214e9',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'f9e70670836b',
            _type: 'span',
            marks: ['strong', 'baf739793393'],
            text: 'Deddings',
          },
          {
            _key: '1df5dbffdc40',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '9e19ff9ab167',
            _type: 'span',
            marks: ['strong', 'c21fe13d2f68'],
            text: 'Grell',
          },
          {
            _key: 'ba83a5cceaf2',
            _type: 'span',
            marks: ['strong'],
            text: '\n',
          },
          {
            _key: '1f0e88d1535e',
            _type: 'span',
            marks: ['strong', 'e3fd2dc4fad1', 'strong'],
            text: 'Perryn',
          },
          {
            _key: 'e18c0caa1747',
            _type: 'span',
            marks: ['strong'],
            text: '\n',
          },
          {
            _key: 'f6afcb5ff31b',
            _type: 'span',
            marks: ['bcf3e11f996d', 'strong'],
            text: 'Rankenfell',
          },
          {
            _key: '08dcbc55b962',
            _type: 'span',
            marks: [],
            text: '\n\nThe Vale:\n',
          },
          {
            _key: 'd8dc4af1c1f7',
            _type: 'span',
            marks: ['ffb004461f16', 'strong'],
            text: 'Mountain Clans of the Vale',
          },
          {
            _key: '546bcdf50024',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '9ce181aa77fd',
            _type: 'span',
            marks: ['strong', 'strong', '0add1aa4fb36'],
            text: 'Newkeep',
          },
          {
            _key: '413723525391',
            _type: 'span',
            marks: ['strong', 'strong'],
            text: '\n',
          },
          {
            _key: '1d445439d964',
            _type: 'span',
            marks: ['strong', 'strong', '9f23a39c2f61'],
            text: 'Wydman',
          },
          {
            _key: 'ca54a76cc112',
            _type: 'span',
            marks: [],
            text: '\n\nThe Westerlands:\n',
          },
          {
            _key: 'b0d555dbc739',
            _type: 'span',
            marks: ['strong', 'strong', 'd761bdb51c0b'],
            text: 'Doggett',
          },
          {
            _key: 'f758b71ad348',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'b9496afb4115',
            _type: 'span',
            marks: ['strong', '9cee5505782d'],
            text: 'Myatt',
          },
          {
            _key: '7b9f61561734',
            _type: 'span',
            marks: [],
            text: '\n\nThe Stormlands:\n',
          },
          {
            _key: '937adf95c70a',
            _type: 'span',
            marks: ['strong', '19736a1bd415'],
            text: 'Bronzegate',
          },
          {
            _key: 'f77c29117a93',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'baa164da1931',
            _type: 'span',
            marks: ['strong', '1a6c63d68b38'],
            text: 'Greenstone',
          },
          {
            _key: 'f118b1211c69',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'c3390133f14f',
            _type: 'span',
            marks: ['strong', '11af18990417'],
            text: 'Weeping Town',
          },
          {
            _key: '0ee514311aa7',
            _type: 'span',
            marks: [],
            text: '\n\nThe Reach:\n',
          },
          {
            _key: '4b12b3c85038',
            _type: 'span',
            marks: ['strong', 'strong', 'strong', '2b50e5d310af'],
            text: 'Cockshaw',
          },
          {
            _key: '90c30a76b957',
            _type: 'span',
            marks: ['strong', 'strong', 'strong'],
            text: '\n',
          },
          {
            _key: '28f5f5d932b9',
            _type: 'span',
            marks: ['strong', 'strong', 'strong', '53765545c810'],
            text: 'House Grimm of Greyshield',
          },
          {
            _key: '0db33bcf07b8',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: 'c7835c749ea3',
            _type: 'span',
            marks: ['strong', 'bd9d765cc7dd'],
            text: 'Redding',
          },
          {
            _key: 'e82ab4a07e1a',
            _type: 'span',
            marks: ['strong'],
            text: '\n',
          },
          {
            _key: 'b24d92fdee62',
            _type: 'span',
            marks: ['6314906fbde5', 'strong'],
            text: 'Stackhouse',
          },
          {
            _key: 'a5b0329bf571',
            _type: 'span',
            marks: [],
            text: '\n\nDorne:\n',
          },
          {
            _key: '5e153ef4b1b2',
            _type: 'span',
            marks: ['strong', 'd5bd8a7eb967'],
            text: 'Bloodstone',
          },
          {
            _key: '17c1c4a8b217',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '529c3b0a3737',
            _type: 'span',
            marks: ['strong', 'd9235f181c4f'],
            text: 'Hellholt',
          },
        ],
        markDefs: [
          {
            _key: 'a28fa6fcb4c7',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-application-karhold-by-mrtxi-flemishguard.2240/',
          },
          {
            _key: 'baf739793393',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/house-deddings-rattlez.401/',
          },
          {
            _key: 'c21fe13d2f68',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-application-house-grell.2229/',
          },
          {
            _key: '0add1aa4fb36',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/house-hersy-of-newkeep.35/',
          },
          {
            _key: 'd761bdb51c0b',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/house-doggett-desmera.1774/',
          },
          {
            _key: '9cee5505782d',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-application-house-myatt-by-padrao1796.2242/',
          },
          {
            _key: '19736a1bd415',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-application-bronzegate.946/',
          },
          {
            _key: '1a6c63d68b38',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/foster-project-house-estermont-of-green-stone.1000/',
          },
          {
            _key: '2b50e5d310af',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-application-house-cockshaw-by-newenglandred09.2233/',
          },
          {
            _key: 'bd9d765cc7dd',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/redding-update.547/',
          },
          {
            _key: 'bcf3e11f996d',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/project-application-house-rankenfell.1456/',
          },
          {
            _key: '05dd8c479aea',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-application-graywater-watch.943/',
          },
          {
            _key: 'e3fd2dc4fad1',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-application-perryn.947/',
          },
          {
            _key: '8f6345ef371c',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-app-wayfarers-rest-by-barkus-smp.2230/',
          },
          {
            _key: 'ffb004461f16',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-application-mountain-clans-of-the-vale.942/',
          },
          {
            _key: '9f23a39c2f61',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/wydman-thread-now-open.415/#post-8270',
          },
          {
            _key: '6314906fbde5',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/project-application-stackhouse-by-cc.2910/',
          },
          {
            _key: 'd9235f181c4f',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/project-application-hellholt-by-majortom12466-_benja.50/',
          },
          {
            _key: '11af18990417',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/project-application-weeping-town.2004/',
          },
          {
            _key: 'd5bd8a7eb967',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/bloodstone-by-birdman7.1880/post-23280',
          },
          {
            _key: '53765545c810',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/old-project-application-greyshield.950/',
          },
        ],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: 'e1ac352f-1567-410a-ac16-d516ef533faf',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-70829d459bdb0d2c76d27eaa39da6ee14ad427d3-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'projects-orphanage',
    },
    title: 'Projects Orphanage',
  },
  {
    _createdAt: '2021-01-23T19:14:23Z',
    _id: 'server-rules',
    _rev: 'rBKxsTwIP0pH0h1YFs4REZ',
    _type: 'guide',
    _updatedAt: '2023-02-15T15:12:04Z',
    body: [
      {
        _key: '39aa4f1cdf08',
        _type: 'block',
        children: [
          {
            _key: '39aa4f1cdf080',
            _type: 'span',
            marks: ['strong'],
            text: 'Read this page carefully!',
          },
          {
            _key: '39aa4f1cdf081',
            _type: 'span',
            marks: [],
            text: '\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'cfcee10fd193',
        _type: 'block',
        children: [
          {
            _key: 'cfcee10fd1930',
            _type: 'span',
            marks: ['strong'],
            text: 'Breaking any of the rules below might result in a temporary or permanent ban of your account from either our forums or server or both!',
          },
          {
            _key: 'cfcee10fd1931',
            _type: 'span',
            marks: [],
            text: '\n',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '46ca6a51af94',
        _type: 'block',
        children: [
          {
            _key: '46ca6a51af940',
            _type: 'span',
            marks: [],
            text: 'The Golden Rule',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '6543fac1fd8d',
        _type: 'block',
        children: [
          {
            _key: '6543fac1fd8d0',
            _type: 'span',
            marks: [],
            text: "Don't be an asshat. This single rule covers it all. Treat others as you would like to be treated.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b2162f32e3d4',
        _type: 'block',
        children: [
          {
            _key: 'b2162f32e3d40',
            _type: 'span',
            marks: [],
            text: 'Rules for Gameplay',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '70ae2bcddc6e',
        _type: 'block',
        children: [
          {
            _key: '70ae2bcddc6e0',
            _type: 'span',
            marks: [],
            text: '1. ',
          },
          {
            _key: '70ae2bcddc6e1',
            _type: 'span',
            marks: ['strong'],
            text: 'No griefing.',
          },
          {
            _key: '70ae2bcddc6e2',
            _type: 'span',
            marks: [],
            text: ' Guests to the server do not have permission to build, but any attempts to grief the server will result in a ban. If you are a builder, we will consider griefing as a breach of trust, and will result in a ban. This includes altering or destroying the work of others without properly consulting them, or in their prolonged absence, the moderating team.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '18c6e324def9',
        _type: 'block',
        children: [
          {
            _key: '18c6e324def90',
            _type: 'span',
            marks: [],
            text: '2. ',
          },
          {
            _key: '18c6e324def91',
            _type: 'span',
            marks: ['strong'],
            text: 'No items.',
          },
          {
            _key: '18c6e324def92',
            _type: 'span',
            marks: [],
            text: " Things that create entities on our server (items, minecarts, boats, arrows, snowballs, etc.) can really add up and start causing lag. In the same vein, don't place large quantities of paintings, star charts, redstone or interactive blocks or similar, neither on the Westeros nor the test world.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '0874bdbf9cbb',
        _type: 'block',
        children: [
          {
            _key: '0874bdbf9cbb0',
            _type: 'span',
            marks: [],
            text: '3. ',
          },
          {
            _key: '0874bdbf9cbb1',
            _type: 'span',
            marks: ['strong'],
            text: 'Do not attempt to download our map',
          },
          {
            _key: '0874bdbf9cbb2',
            _type: 'span',
            marks: [],
            text: ' or parts of our map without our explicit permission. We are making an active effort to hamper world-downloading and will permanently ban you for doing so.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6e5bd70ef352',
        _type: 'block',
        children: [
          {
            _key: '6e5bd70ef3520',
            _type: 'span',
            marks: [],
            text: '4. ',
          },
          {
            _key: '6e5bd70ef3521',
            _type: 'span',
            marks: ['strong'],
            text: 'Do not abuse bugs',
          },
          {
            _key: '6e5bd70ef3522',
            _type: 'span',
            marks: [],
            text: ' you may find. Let a moderator or admin know. As for bugs with textures please report those to the ',
          },
          {
            _key: '6e5bd70ef3523',
            _type: 'span',
            marks: ['2aa4bc67d4d6'],
            text: 'Texturepack Megathread',
          },
          {
            _key: '6e5bd70ef3524',
            _type: 'span',
            marks: [],
            text: ', after checking back with others that it is not only a glitch on your end.',
          },
        ],
        markDefs: [
          {
            _key: '2aa4bc67d4d6',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/westeroscraft-texture-pack-megathread.34/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '2922d69c95fb',
        _type: 'block',
        children: [
          {
            _key: '2922d69c95fb0',
            _type: 'span',
            marks: [],
            text: '5. ',
          },
          {
            _key: '2922d69c95fb1',
            _type: 'span',
            marks: ['strong'],
            text: 'Do not impersonate',
          },
          {
            _key: '2922d69c95fb2',
            _type: 'span',
            marks: [],
            text: ' Admins, Mods or other Users. This is fraud and will not be tolerated. Breaking this rule is an instant ban, with a small chance of an appeal being approved.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'deec7f064926',
        _type: 'block',
        children: [
          {
            _key: 'deec7f0649260',
            _type: 'span',
            marks: [],
            text: '6. ',
          },
          {
            _key: 'deec7f0649261',
            _type: 'span',
            marks: ['strong'],
            text: 'Give constructive feedback',
          },
          {
            _key: 'deec7f0649262',
            _type: 'span',
            marks: [],
            text: '. Focus on how to improve the outcome, make suggestions, but accept that the other person might have their own view. Even negative feedback can be constructive if phrased appropriately. Refer to the Golden Rule.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '075d4323c447',
        _type: 'block',
        children: [
          {
            _key: '075d4323c4470',
            _type: 'span',
            marks: [],
            text: '7. ',
          },
          {
            _key: '075d4323c4471',
            _type: 'span',
            marks: ['strong'],
            text: 'Try to stay active and involved',
          },
          {
            _key: '075d4323c4472',
            _type: 'span',
            marks: [],
            text: ' with the community. Check the forums regularly in case anyone is trying to reach out to you! As a builder, if you have been absent for more than a year you may be asked to reapply for builder status.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '75d0bf306ae2',
        _type: 'block',
        children: [
          {
            _key: '75d0bf306ae20',
            _type: 'span',
            marks: [],
            text: 'Rules for In-Game Chat and Discord',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'f2aba39563ea',
        _type: 'block',
        children: [
          {
            _key: 'f2aba39563ea0',
            _type: 'span',
            marks: [],
            text: '1. ',
          },
          {
            _key: 'f2aba39563ea1',
            _type: 'span',
            marks: ['strong'],
            text: 'No racist, sexist, homophobic or any other prejudiced comments or insults',
          },
          {
            _key: 'f2aba39563ea2',
            _type: 'span',
            marks: [],
            text: ". If you think you probably shouldn't say something, then don't.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '57fbd22c9c46',
        _type: 'block',
        children: [
          {
            _key: '57fbd22c9c460',
            _type: 'span',
            marks: [],
            text: '2. ',
          },
          {
            _key: '57fbd22c9c461',
            _type: 'span',
            marks: ['strong'],
            text: 'Show and book spoilers are permitted in discussion',
          },
          {
            _key: '57fbd22c9c462',
            _type: 'span',
            marks: [],
            text: ". Press F1 to hide chat if you want to avoid spoilers. Intentionally spoiling someone's experience is a ban worthy offense.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ad62c1f1a880',
        _type: 'block',
        children: [
          {
            _key: 'ad62c1f1a8800',
            _type: 'span',
            marks: [],
            text: '3. ',
          },
          {
            _key: 'ad62c1f1a8801',
            _type: 'span',
            marks: ['strong'],
            text: 'No spamming the chat',
          },
          {
            _key: 'ad62c1f1a8802',
            _type: 'span',
            marks: [],
            text: '. This includes, but is not limited to: sending a lot of messages, talking in all caps, and spamming characters (i.e. AAAAAAAAAAAAA).No advertising other servers or trying to recruit players on our server.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '84225dd7dc2d',
        _type: 'block',
        children: [
          {
            _key: '84225dd7dc2d0',
            _type: 'span',
            marks: [],
            text: 'Consequences',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'c6df43ed536e',
        _type: 'block',
        children: [
          {
            _key: 'c6df43ed536e0',
            _type: 'span',
            marks: [],
            text: "Our rules are visible both on the wiki and in the spawn town. If you have any questions, please contact a moderator and they will help you out. Here's what could happen if you start breaking rules.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '8fc7a8794282',
        _type: 'block',
        children: [
          {
            _key: '8fc7a87942820',
            _type: 'span',
            marks: ['strong'],
            text: 'Warning',
          },
          {
            _key: '8fc7a87942821',
            _type: 'span',
            marks: [],
            text: '. A moderator may warn you to stop what you are doing. Depending on the severity of your actions, you may receive no prior warning at all.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ce61d0dc8715',
        _type: 'block',
        children: [
          {
            _key: 'ce61d0dc87150',
            _type: 'span',
            marks: ['strong'],
            text: 'Kick',
          },
          {
            _key: 'ce61d0dc87151',
            _type: 'span',
            marks: [],
            text: '. You will be kicked from the server. If the server is full, you may not be able to get back in for some time.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'c0a53299b857',
        _type: 'block',
        children: [
          {
            _key: 'c0a53299b8570',
            _type: 'span',
            marks: ['strong'],
            text: 'Mute',
          },
          {
            _key: 'c0a53299b8571',
            _type: 'span',
            marks: [],
            text: '. A mod can chose to mute your chat output for an extended amount of time, so that no one can read what you write.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '567f52b37698',
        _type: 'block',
        children: [
          {
            _key: '567f52b376980',
            _type: 'span',
            marks: ['strong'],
            text: 'Temporary Ban',
          },
          {
            _key: '567f52b376981',
            _type: 'span',
            marks: [],
            text: '. This is a ban with a certain time limit, frequently 24 or 48 hours. You have not followed the rules. You have not listened to the warnings and instructions. Take some time away and think about what it means to be a part of our community.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5bf6be59a4e5',
        _type: 'block',
        children: [
          {
            _key: '5bf6be59a4e50',
            _type: 'span',
            marks: ['strong'],
            text: 'Extended Ban',
          },
          {
            _key: '5bf6be59a4e51',
            _type: 'span',
            marks: [],
            text: '. This is a ban with an indefinite time period. After some time has passed, usually a few months or more, you are allowed to appeal your ban to show that you have changed and that you still belong on the server.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f3534b38675a',
        _type: 'block',
        children: [
          {
            _key: 'f3534b38675a0',
            _type: 'span',
            marks: ['strong'],
            text: 'Demotion',
          },
          {
            _key: 'f3534b38675a1',
            _type: 'span',
            marks: [],
            text: '. As a builder, you managed to break our trust by abusing the Builder rights that have been given to you. This includes but is not limited to, building unapproved easter eggs, altering other players builds without consent, starting a project without mod approval. All of these could also be considered as griefing depending on the situation or frequency which will lead to a Permanent Ban.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ade12ddd092d',
        _type: 'block',
        children: [
          {
            _key: 'ade12ddd092d0',
            _type: 'span',
            marks: ['strong'],
            text: 'Permanent Ban',
          },
          {
            _key: 'ade12ddd092d1',
            _type: 'span',
            marks: [],
            text: '. You have disrupted the server to the point that you will never be allowed to enter again. Ever. Do not bother asking.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '43b12d4ddfce',
        _type: 'block',
        children: [
          {
            _key: '43b12d4ddfce0',
            _type: 'span',
            marks: [],
            text: 'Our rules are about following the ',
          },
          {
            _key: '43b12d4ddfce1',
            _type: 'span',
            marks: ['d93d6647d944'],
            text: 'spirit of the law, not the letter',
          },
          {
            _key: '43b12d4ddfce2',
            _type: 'span',
            marks: [],
            text: '. For visiting Nobuilds there is a lower tolerance for offenses, often merely a single warning followed by a ban. Keep that in mind when visiting us.',
          },
        ],
        markDefs: [
          {
            _key: 'd93d6647d944',
            _type: 'link',
            href: 'http://en.wikipedia.org/wiki/Spirit_of_the_law',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'c7811b39ebd1',
        _type: 'block',
        children: [
          {
            _key: 'c7811b39ebd10',
            _type: 'span',
            marks: [],
            text: 'Appeals',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'd7d6828f62e5',
        _type: 'block',
        children: [
          {
            _key: 'd7d6828f62e50',
            _type: 'span',
            marks: [],
            text: 'If you wish to challenge a ban, mute or demotion, you may post an appeal on our ',
          },
          {
            _key: 'd7d6828f62e51',
            _type: 'span',
            marks: ['e5944c41e94d'],
            text: 'Appeal Subforum.',
          },
          {
            _key: 'd7d6828f62e52',
            _type: 'span',
            marks: [],
            text: '\n',
          },
        ],
        markDefs: [
          {
            _key: 'e5944c41e94d',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/forum/ban-mute-demotion-appeals.33/',
          },
        ],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '8837ee46-c394-4de7-93e7-cfcc140dac62',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-b895c22fc1c3037500484979423b88cbc5e6cfb8-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'server-rules',
    },
    title: 'Community Rules',
  },
  {
    _createdAt: '2021-01-23T16:56:42Z',
    _id: 'worldedit-basics',
    _rev: 'Bm7S0KZmajesdgpEXDZoS9',
    _type: 'guide',
    _updatedAt: '2022-07-16T16:58:22Z',
    body: [
      {
        _key: '3a73c2849669',
        _type: 'block',
        children: [
          {
            _key: '6e130c2c1800',
            _type: 'span',
            marks: [],
            text: "In this guide we'll go through the most useful basic WorldEdit concepts, tools and commands. For a complete list of WorldEdit commands and tools, click ",
          },
          {
            _key: 'e51f68660a07',
            _type: 'span',
            marks: ['dcd4472c26a7'],
            text: 'here',
          },
          {
            _key: '76b27250f125',
            _type: 'span',
            marks: [],
            text: '.\n',
          },
        ],
        markDefs: [
          {
            _key: 'dcd4472c26a7',
            _type: 'link',
            href: 'https://worldedit.enginehub.org/en/latest/commands/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '5a8e3325533f',
        _type: 'block',
        children: [
          {
            _key: 'c9d7119002db0',
            _type: 'span',
            marks: [],
            text: 'Block id:meta',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'b60a80ac2bad',
        _type: 'block',
        children: [
          {
            _key: 'a44199591edc0',
            _type: 'span',
            marks: [],
            text: 'Each block has a name and a number by which WE recognises them. For example, a dirt block is known as "dirt" and "3", a block of wool can be called either "wool" or "35", and so on.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '373f2546baca',
        _type: 'block',
        children: [
          {
            _key: 'cd88aa4f305b0',
            _type: 'span',
            marks: [],
            text: "Open your inventory and press f3 + h. Now, when you hover your mouse pointer over a block, you'll get a tooltip telling you the block name and id:meta of the block.",
          },
        ],
        markDefs: [],
        style: 'blockquote',
      },
      {
        _key: '819405e4b94f',
        _type: 'block',
        children: [
          {
            _key: '0c632103c5170',
            _type: 'span',
            marks: [],
            text: 'Meta is basically a variant of a certain block. For example, white wool can be "wool:white" or "35:0" (note: "wool:0" or "35:white" will also work), and orange wool is "wool:orange" or "35:1". If you don\'t specify the meta type you want, WE will use the value of 0. So, "//set wool" fills the selection with white wool. Also, if meta is not specified, WE will apply the given command to all metatypes of a block. For example "//replace wool dirt" will change wool of any colour within the selection into dirt.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd3d22a1332b9',
        _type: 'block',
        children: [
          {
            _key: '25b47ee58b6a0',
            _type: 'span',
            marks: [],
            text: 'All WE brushes, selection commands and masks will also accept multiple block types at once. For example, to fill your selection with an even mix of white and orange wool, type "//set wool:white,wool:orange" (or //set 35:0,35:1). You can use as many different block types you want.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7e13a1585587',
        _type: 'block',
        children: [
          {
            _key: '54e7fd8f90ff0',
            _type: 'span',
            marks: [],
            text: 'If you don\'t want an even mix, you can specify percentages for each block type. So, "//set 90%35:0,10%35:1" fills your selection with (approximately) 90% white and 10% orange wool. A good example of this is the basic grassland ground mix consisting of mostly grass, with some dirt (3) and gravel (13) scattered here and there: "//set 95%2,3%3,2%13"',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '05cb9dbb8acf',
        _type: 'block',
        children: [
          {
            _key: '21ea84ee3af90',
            _type: 'span',
            marks: [],
            text: 'Tools and brushes:',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'e6680c9a1565',
        _type: 'block',
        children: [
          {
            _key: '819d08426b9b0',
            _type: 'span',
            marks: [],
            text: 'Wand',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '2293c6b927d5',
        _type: 'block',
        children: [
          {
            _key: '733e5596e6010',
            _type: 'span',
            marks: [],
            text: 'With an empty hand, type ',
          },
          {
            _key: '733e5596e6011',
            _type: 'span',
            marks: ['strong'],
            text: '//wand',
          },
          {
            _key: '733e5596e6012',
            _type: 'span',
            marks: [],
            text: " and you'll be given a wooden axe. This'll be your standard tool for making WE selections.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f03d364bf6d2',
        _type: 'block',
        children: [
          {
            _key: 'b85a61f7b0320',
            _type: 'span',
            marks: [],
            text: 'Brushes',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: 'b14eb322dc57',
        _type: 'block',
        children: [
          {
            _key: 'fa864916bd6b0',
            _type: 'span',
            marks: [],
            text: 'Brushes can be bound to pretty much all tools, weapons and other non-placeable items (sticks, feathers, blaze rods etc). Note: you can also bind a WE tool (usually by accident) to empty hand, so make sure you\'re holding the item you want to use as a brush when typing the command. To get rid of the brush, just drop the item (or if you want to keep the item without a WE brush bound to it, type "//none")',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '86798cc07aec',
        _type: 'block',
        children: [
          {
            _key: '3125027452a40',
            _type: 'span',
            marks: ['strong'],
            text: 'Spherical brush: //br s [id:meta] [radius]',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '0cc6da262c70',
        _type: 'block',
        children: [
          {
            _key: '7cebd146cccc0',
            _type: 'span',
            marks: ['strong'],
            text: 'Cylinder brush: //br cyl [id:meta] [radius] [height]',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7898e61ee1b5',
        _type: 'block',
        children: [
          {
            _key: 'c1ab65cb72360',
            _type: 'span',
            marks: [],
            text: '\nSpherical brush will create a ball of blocks specified with [id:meta], of size defined with [radius]. As diameter is radius times two and the minimum diameter of a brush is 1, [radius] of 3 will give you a seven blocks wide ball. In addition to [radius], cylinder brush also accepts a height value (If you don\'t define a height, you\'ll get a one block thick disc). So, "//br cyl 35:0 3 4" will create a 7 blocks wide, 4 blocks tall cylinder of white wool, with the center of the bottom layer on the block where you click with the brush. Height value can also be negative; in that case the block you click with the brush will be the center of the top layer of the cylinder. Currently maximum radius/height for a WE brush is 10.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6c88a97d01ee',
        _type: 'block',
        children: [
          {
            _key: '0f88009157de0',
            _type: 'span',
            marks: [],
            text: 'Basic Commands',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '029dd3f471ac',
        _type: 'block',
        children: [
          {
            _key: '08ab4425a5e80',
            _type: 'span',
            marks: [],
            text: '//set [id:meta]',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '5b1990c51a6d',
        _type: 'block',
        children: [
          {
            _key: '8220bdbdd23f0',
            _type: 'span',
            marks: [],
            text: 'Fills the selection with specified block(s).',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'df1603c0a96a',
        _type: 'block',
        children: [
          {
            _key: '04b38342d1a70',
            _type: 'span',
            marks: [],
            text: 'Examples:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '3723b3bf835a',
        _type: 'block',
        children: [
          {
            _key: '6ecc23101e9b0',
            _type: 'span',
            marks: [],
            text: '//set 4 - fills the selection with cobblestone. //set 40%3,40%13,20%2034:0 - fills the selection with 40% dirt, 40% gravel and 20% mud.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '0de784b74f9f',
        _type: 'block',
        children: [
          {
            _key: '594976b54f130',
            _type: 'span',
            marks: [],
            text: '//replace [id:meta1] [id:meta2]',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'b88ef33a7e86',
        _type: 'block',
        children: [
          {
            _key: 'b55ab2aae1b90',
            _type: 'span',
            marks: [],
            text: 'Replaces [id:meta1] with [id:meta2].',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '94a1ade1ad61',
        _type: 'block',
        children: [
          {
            _key: 'd27d4c7fd35a0',
            _type: 'span',
            marks: [],
            text: 'Examples:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5ecd1e820d6a',
        _type: 'block',
        children: [
          {
            _key: '5358e2de36cb0',
            _type: 'span',
            marks: [],
            text: '//replace 41 3,13 - replaces gold blocks (41) within the selection with dirt and gravel. //replace 2,3,13 35:3 - replaces grass, dirt and gravel within the selection with light blue wool. //replace 103 - replaces all non-air blocks within the selection with melons (103).',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '64ec6ca811a1',
        _type: 'block',
        children: [
          {
            _key: '479c030f24360',
            _type: 'span',
            marks: [],
            text: '//copy',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'e095a563aa7f',
        _type: 'block',
        children: [
          {
            _key: 'afe33c7027790',
            _type: 'span',
            marks: [],
            text: 'Copies the selected blocks to clipboard (relative to your position).',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '13c9f8dadfaa',
        _type: 'block',
        children: [
          {
            _key: '8b5ca200d87f0',
            _type: 'span',
            marks: [],
            text: '//paste (-a)',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'eb3765e342f2',
        _type: 'block',
        children: [
          {
            _key: '47b4624540b70',
            _type: 'span',
            marks: [],
            text: "Pastes the clipboard (relative to your position). With -a you'll only paste non-air blocks, which is useful in tight spaces and generally makes pasting large selections much faster.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6ff3ae37a886',
        _type: 'block',
        children: [
          {
            _key: '391bcc6d4cd80',
            _type: 'span',
            marks: [],
            text: '//move [amount] [direction] [-s]',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '6bd89714e3b5',
        _type: 'block',
        children: [
          {
            _key: '52868850a9db0',
            _type: 'span',
            marks: [],
            text: 'Moves the selected blocks [amount] of blocks towards [direction]. Accepted parameters for direction are n, e, s, w, u and d (compass directions, up and down, independent of your position and orientation) and f, b, l and r (front, back, left, right; dependent of your position and orientation). If you add -s in the end, the command will also move the selection.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '185286de4554',
        _type: 'block',
        children: [
          {
            _key: '29ae8bca3a6f0',
            _type: 'span',
            marks: [],
            text: '//stack [repeats] [direction]',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '3bfed080f017',
        _type: 'block',
        children: [
          {
            _key: 'bb611dee6e470',
            _type: 'span',
            marks: [],
            text: 'Stacks the selected blocks [repeats] of times towards [direction].',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '3c1d12cba683',
        _type: 'block',
        children: [
          {
            _key: '4dbd579ddc690',
            _type: 'span',
            marks: [],
            text: '//rotate [degrees]',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '13a6e3ceeb86',
        _type: 'block',
        children: [
          {
            _key: 'ad1023f615b20',
            _type: 'span',
            marks: [],
            text: "Rotates the clipboard. Accepted parameters for [degrees] are 90,180 and 270 (clockwise) and -90, -180 and -270 (counterclockwise). Note: currently, custom stair blocks won't rotate properly.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9e8820ef407b',
        _type: 'block',
        children: [
          {
            _key: 'aeb5000cec420',
            _type: 'span',
            marks: [],
            text: '//flip [direction]',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '90c375504ecd',
        _type: 'block',
        children: [
          {
            _key: 'b870c83220080',
            _type: 'span',
            marks: [],
            text: 'Mirrors the clipboard according to axis defined with [direction]',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5d3aef2e17dd',
        _type: 'block',
        children: [
          {
            _key: '6570db0849b40',
            _type: 'span',
            marks: [],
            text: '//shift [amount] [direction]',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: 'c822d79c701c',
        _type: 'block',
        children: [
          {
            _key: 'db88be1ea07e0',
            _type: 'span',
            marks: [],
            text: 'Moves the selection (',
          },
          {
            _key: 'db88be1ea07e1',
            _type: 'span',
            marks: ['em'],
            text: 'note: just the selection, not the blocks inside it',
          },
          {
            _key: 'db88be1ea07e2',
            _type: 'span',
            marks: [],
            text: ') [amount] of blocks towards [direction].',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7d57c9113b96',
        _type: 'block',
        children: [
          {
            _key: '66ade3140b510',
            _type: 'span',
            marks: [],
            text: '//setbiome [biometype]',
          },
        ],
        markDefs: [],
        style: 'h4',
      },
      {
        _key: '5c0abbf267d9',
        _type: 'block',
        children: [
          {
            _key: '7039bd9b883d0',
            _type: 'span',
            marks: [],
            text: 'Changes the biome of the selection to [biometype]. For a list of available biome types and regions where they should be used, click here .',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6cfadc90f6ce',
        _type: 'block',
        children: [
          {
            _key: '931ae9d800640',
            _type: 'span',
            marks: [],
            text: 'Masks',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'c357cc1fda4d',
        _type: 'block',
        children: [
          {
            _key: '1cbd7690176b0',
            _type: 'span',
            marks: [],
            text: "Masks are one of the most useful features of WE. Without masking, WE brushes will create blocks on all blocks/spaces within the defined brush size, air included. If you only want to change certain blocks, you have to use a mask. You'll also be able to fine-tune your selection commands with masks.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a0cb256e0d2a',
        _type: 'block',
        children: [
          {
            _key: '722461f070a10',
            _type: 'span',
            marks: [],
            text: '\nWorldEdit has two different mask types:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f840da6b33fb',
        _type: 'block',
        children: [
          {
            _key: '690250715c250',
            _type: 'span',
            marks: ['strong'],
            text: '//mask [id:meta]',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '95c9fa74fa5d',
        _type: 'block',
        children: [
          {
            _key: '837335c0c0920',
            _type: 'span',
            marks: ['strong'],
            text: '//gmask [id:meta]',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '99a5897c583b',
        _type: 'block',
        children: [
          {
            _key: '952ff0c8d9e40',
            _type: 'span',
            marks: [],
            text: "Regular //mask will only work with brushes, //gmask (a.k.a. global mask) also works with selections. With brushes you can use either one or both at the same time. Example: Let's assume you got a build with dozens of different blocks and you want to only paint white wool blocks into an even mix of cobblestone and small stone bricks. In this case, you'd have to first define the brush:",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'c9e62aa5c8cf',
        _type: 'block',
        children: [
          {
            _key: '9996ba2b407a0',
            _type: 'span',
            marks: [],
            text: '//br s 4,2029:10 5',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b64c4f144b35',
        _type: 'block',
        children: [
          {
            _key: 'b54ab7c1051b0',
            _type: 'span',
            marks: [],
            text: '(4 is cobblestone, 2029:10 is small stone brick, 5 is the radius) and then define the mask (with the brush in your hand):',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '363abb3f94ef',
        _type: 'block',
        children: [
          {
            _key: '24d0d4e9a6020',
            _type: 'span',
            marks: [],
            text: '//mask 35:0',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '639d807934e0',
        _type: 'block',
        children: [
          {
            _key: 'b81e4084780b0',
            _type: 'span',
            marks: [],
            text: 'Now your brush will only replace white wool with cobble and small stone bricks. This is your basic "whitelist" mask.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '3f3b96db61e3',
        _type: 'block',
        children: [
          {
            _key: '1059560afb530',
            _type: 'span',
            marks: [],
            text: 'Note: As stated above in block:id section, masks may have multiple block types. For example with "//mask 35:0,95:2,2027:1" you\'ll only change white wool, magenta stained glass and mossy oak logs. In addition standard "whitelisting", you can use the following filters on masks:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '212fb44643f5',
        _type: 'block',
        children: [
          {
            _key: '6175d3487cd40',
            _type: 'span',
            marks: ['strong'],
            text: '//mask ![id:meta]',
          },
          {
            _key: '6175d3487cd41',
            _type: 'span',
            marks: [],
            text: ' - blacklist mask, paint on everything else but the blocks defined',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '059771aa269f',
        _type: 'block',
        children: [
          {
            _key: '93f7ff7748810',
            _type: 'span',
            marks: ['strong'],
            text: '//mask \u003e[id:meta]',
          },
          {
            _key: '93f7ff7748811',
            _type: 'span',
            marks: [],
            text: ' - only paint above defined blocks',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd9b840a5978e',
        _type: 'block',
        children: [
          {
            _key: '5ced8e2d91230',
            _type: 'span',
            marks: ['strong'],
            text: '//mask \u003c[id:meta]',
          },
          {
            _key: '5ced8e2d91231',
            _type: 'span',
            marks: [],
            text: ' - only paint below defined blocks',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6ad874e5dc21',
        _type: 'block',
        children: [
          {
            _key: 'e4e81ad06a6e0',
            _type: 'span',
            marks: ['strong'],
            text: '//mask #region',
          },
          {
            _key: 'e4e81ad06a6e1',
            _type: 'span',
            marks: [],
            text: ' - only paint within your current selection',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '6da8f6328562',
        _type: 'block',
        children: [
          {
            _key: 'd2bb23c427b20',
            _type: 'span',
            marks: [],
            text: "If you're using multiple WE brushes at the same time, you can set an individual //mask to each brush.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1129baa953f9',
        _type: 'block',
        children: [
          {
            _key: '6aa865aa05900',
            _type: 'span',
            marks: [],
            text: 'Global mask',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'b72438a66721',
        _type: 'block',
        children: [
          {
            _key: 'f4f4e68cb0340',
            _type: 'span',
            marks: [],
            text: 'Unlike regular //mask, ',
          },
          {
            _key: 'f4f4e68cb0341',
            _type: 'span',
            marks: ['strong'],
            text: '//gmask',
          },
          {
            _key: 'f4f4e68cb0342',
            _type: 'span',
            marks: [],
            text: ' also works with selection commands (//set, //replace etc). Also, you can have both //mask and //gmask defined at the same time to give you more control.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '20ec3634afcc',
        _type: 'block',
        children: [
          {
            _key: 'f31f934af5530',
            _type: 'span',
            marks: [],
            text: "A good example of this is tall grassing. Let's assume you have an area of ungrassed terrain, and you want to paint a layer of tall grass and fern (31:1,31:2) above grass (2) and dirt (3) blocks.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'dd545912ea5f',
        _type: 'block',
        children: [
          {
            _key: '1a78c46b60570',
            _type: 'span',
            marks: [],
            text: '\n',
          },
          {
            _key: '1a78c46b60571',
            _type: 'span',
            marks: ['strong'],
            text: 'Method one: brushing',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '60887f0fadfa',
        _type: 'block',
        children: [
          {
            _key: 'c5efde2ee9330',
            _type: 'span',
            marks: [],
            text: '//br s 31:1,31:2 10 (a large spherical brush of tall grass and fern) //mask 0 (only paint on air) //gmask \u003e2,3 (only paint above grass and dirt)',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a7cfaeaac5b6',
        _type: 'block',
        children: [
          {
            _key: '00ab490516390',
            _type: 'span',
            marks: ['strong'],
            text: 'Method two: selection',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7a332880eab2',
        _type: 'block',
        children: [
          {
            _key: '8465a1d1fe250',
            _type: 'span',
            marks: [],
            text: '(make a selection of the area you want to tall grass) //gmask \u003e2,3 (only change blocks above grass and dirt) //replace 0 31:1,31:2 (replace air with tall grass and fern)',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '65e9b03e8969',
        _type: 'block',
        children: [
          {
            _key: '6fd5dc46b3ba0',
            _type: 'span',
            marks: [],
            text: "In both methods, //gmask \u003e2,3 makes sure you'll end up with a nice one block thick layer of tall grass and fern, only above grass and dirt blocks.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f9355be8ea2b',
        _type: 'block',
        children: [
          {
            _key: 'fe1e3f5374d60',
            _type: 'span',
            marks: ['strong'],
            text: "Note: If you're using multiple WE brushes at the same time, a //gmask will affect all of them.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '667290a4dca2',
        _type: 'block',
        children: [
          {
            _key: '51b0e804b1080',
            _type: 'span',
            marks: [],
            text: 'To disable a mask/global mask, just type "//mask" or "//gmask"',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a46680d9aa06',
        _type: 'block',
        children: [
          {
            _key: '1b947255af040',
            _type: 'span',
            marks: [],
            text: 'Other useful tools',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '5f8666a2220b',
        _type: 'block',
        children: [
          {
            _key: '8fd7d4e1f67a0',
            _type: 'span',
            marks: ['strong'],
            text: '//info',
          },
          {
            _key: '8fd7d4e1f67a1',
            _type: 'span',
            marks: [],
            text: ' - shows you the name and id:meta of the block you right click with the tool.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7273ecf32446',
        _type: 'block',
        children: [
          {
            _key: 'c315895d117c0',
            _type: 'span',
            marks: ['strong'],
            text: '//repl [id:meta]',
          },
          {
            _key: 'c315895d117c1',
            _type: 'span',
            marks: [],
            text: ' - replaces the block you right click with [id:meta]',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '29192a0bb669',
        _type: 'block',
        children: [
          {
            _key: 'b83328b77be90',
            _type: 'span',
            marks: [],
            text: 'Selection options',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '4e124ba145cd',
        _type: 'block',
        children: [
          {
            _key: '7379c9fa99420',
            _type: 'span',
            marks: [],
            text: 'In addition to the default rectangular selection, WorldEdit has several other selection shapes available.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '94d37f7e74d6',
        _type: 'block',
        children: [
          {
            _key: 'f7f4c38b31b20',
            _type: 'span',
            marks: ['strong'],
            text: '//sel cuboid',
          },
          {
            _key: 'f7f4c38b31b21',
            _type: 'span',
            marks: [],
            text: ' - default, rectangular selection',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b970a633ebcd',
        _type: 'block',
        children: [
          {
            _key: '19dbbe3caf590',
            _type: 'span',
            marks: ['strong'],
            text: '//sel sphere',
          },
          {
            _key: '19dbbe3caf591',
            _type: 'span',
            marks: [],
            text: ' - spherical selection: left click for center, right click for radius.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'eb767e91a02f',
        _type: 'block',
        children: [
          {
            _key: '4abcf69e22030',
            _type: 'span',
            marks: ['strong'],
            text: '//sel cyl',
          },
          {
            _key: '4abcf69e22031',
            _type: 'span',
            marks: [],
            text: ' - cylindrical selection: left click for center, right click to extend.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'e19601b4594a',
        _type: 'block',
        children: [
          {
            _key: '86e940f96d9e0',
            _type: 'span',
            marks: ['strong'],
            text: '//sel poly',
          },
          {
            _key: '86e940f96d9e1',
            _type: 'span',
            marks: [],
            text: ' - polygonal selection: left/right click to add a point, 20 selection points maximum.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '27402cfa3446',
        _type: 'block',
        children: [
          {
            _key: 'c8b9ba0381290',
            _type: 'span',
            marks: ['strong'],
            text: '//sel ellipsoid',
          },
          {
            _key: 'c8b9ba0381291',
            _type: 'span',
            marks: [],
            text: ' - ellipsoid selection: left click for center, right click to extend.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '874e23465b80',
        _type: 'block',
        children: [
          {
            _key: 'a63267668cf60',
            _type: 'span',
            marks: ['strong'],
            text: '//sel convex',
          },
          {
            _key: 'a63267668cf61',
            _type: 'span',
            marks: [],
            text: ' - convex selection: left click for first vertex, right click for additional points.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '22823534b13d',
        _type: 'block',
        children: [
          {
            _key: '4dec3498ac1a0',
            _type: 'span',
            marks: [],
            text: 'Other',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: '95dd37283969',
        _type: 'block',
        children: [
          {
            _key: '59a505b00f0a0',
            _type: 'span',
            marks: ['strong'],
            text: '//replacenear [radius] [id:meta1] [id:meta2]',
          },
          {
            _key: '59a505b00f0a1',
            _type: 'span',
            marks: [],
            text: ' - replaces [id:meta1] with [id:meta2] within [radius] block around you (on all directions). Potentially very destructive, ',
          },
          {
            _key: '59a505b00f0a2',
            _type: 'span',
            marks: ['strong'],
            text: 'DO NOT USE',
          },
          {
            _key: '59a505b00f0a3',
            _type: 'span',
            marks: [],
            text: " unless you're 100% sure of what you're doing.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: '52a3451d-02e6-4cea-bcc4-e97b78a99e74',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-7e1f641532da987bdcd998ddc3f0b0c870e3311f-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'worldedit-basics',
    },
    title: 'WorldEdit Basics',
  },
  {
    _createdAt: '2021-01-23T16:56:42Z',
    _id: 'troubleshooting-guide',
    _rev: 'Bm7S0KZmajesdgpEXDxIIi',
    _type: 'guide',
    _updatedAt: '2022-07-16T20:47:39Z',
    body: [
      {
        _key: 'cb171cad9300',
        _type: 'block',
        children: [
          {
            _key: '3a8122e4f5d7',
            _type: 'span',
            marks: [],
            text: 'The following describes a number of common issues and the solutions to them. Following rules apply:\n',
          },
        ],
        markDefs: [],
        style: 'h3',
      },
      {
        _key: 'abfaf0164e33',
        _type: 'block',
        children: [
          {
            _key: '104632e7b7000',
            _type: 'span',
            marks: [],
            text: 'Read this page carefully and in its entirety before heading to the forums to ask for help.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '2c4538cf1be0',
        _type: 'block',
        children: [
          {
            _key: 'ae052b7a36460',
            _type: 'span',
            marks: [],
            text: 'This Troubleshooting Guide was originally made for the previous version of the WesterosCraft Launcher.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b8f2ad01d39e',
        _type: 'block',
        children: [
          {
            _key: 'f2c47389e15b0',
            _type: 'span',
            marks: [],
            text: 'A full breakdown of the new launcher can be found at ',
          },
          {
            _key: 'f2c47389e15b1',
            _type: 'span',
            marks: ['38d6a0c95d34'],
            text: 'WesterosCraft Launcher Wiki',
          },
          {
            _key: 'f2c47389e15b2',
            _type: 'span',
            marks: [],
            text: ' .',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '38d6a0c95d34',
            _type: 'link',
            href: 'https://github.com/WesterosCraftCode/ElectronLauncher/wiki',
          },
        ],
        style: 'normal',
      },
      {
        _key: '6a68e1c46b5d',
        _type: 'block',
        children: [
          {
            _key: '1615fa2b08b50',
            _type: 'span',
            marks: [],
            text: 'If you have to ask for help on the forums, use the ',
          },
          {
            _key: '1615fa2b08b51',
            _type: 'span',
            marks: ['d093d5400217'],
            text: 'Support Subforum',
          },
          {
            _key: '1615fa2b08b52',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: 'd093d5400217',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/forum/support.40/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '8867203afded',
        _type: 'block',
        children: [
          {
            _key: '29ae6714067a0',
            _type: 'span',
            marks: [],
            text: 'Always include as much information in your post as possible. Always include the launcher log using a ',
          },
          {
            _key: '29ae6714067a1',
            _type: 'span',
            marks: ['70126591af13'],
            text: 'pastebin',
          },
          {
            _key: '29ae6714067a2',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '70126591af13',
            _type: 'link',
            href: 'http://pastebin.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'e14b65fd9f8b',
        _type: 'block',
        children: [
          {
            _key: 'b011d1485c890',
            _type: 'span',
            marks: [],
            text: "See here if you're using the ",
          },
          {
            _key: 'b011d1485c891',
            _type: 'span',
            marks: ['c336ee443249'],
            text: 'Technic Launcher',
          },
          {
            _key: 'b011d1485c892',
            _type: 'span',
            marks: [],
            text: ' or the standard ',
          },
          {
            _key: 'b011d1485c893',
            _type: 'span',
            marks: ['022088c6561e'],
            text: 'Minecraft Launcher',
          },
          {
            _key: 'b011d1485c894',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: 'c336ee443249',
            _type: 'link',
            href: 'http://westeroscraft.com/forum/m/12700545/viewthread/10334646-westeroscraft-custom-client-as-technic-launcher-mod-pack/page/1',
          },
          {
            _key: '022088c6561e',
            _type: 'link',
            href: 'http://westeroscraft.com/forum/m/12700545/viewthread/19367215-manually-building-westeroscraft-custom-client-1710',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'dc4d1dce739c',
        _type: 'block',
        children: [
          {
            _key: 'b13a20426cf10',
            _type: 'span',
            marks: ['strong', 'strong', 'strong'],
            text: '"Why can I not connect to mc.westeroscraft.com?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '78c550ecac6a',
        _type: 'block',
        children: [
          {
            _key: '6390fb491d130',
            _type: 'span',
            marks: [],
            text: 'You cannot join the server using the normal Minecraft launcher. To enter you need to use our custom-built launcher, which allows us to implement a number of modifications to the game.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '06f1319e0c7a',
        _type: 'block',
        children: [
          {
            _key: '8a1154e7834b0',
            _type: 'span',
            marks: [],
            text: 'Simply download the ',
          },
          {
            _key: '8a1154e7834b1',
            _type: 'span',
            marks: ['c33bfb10df78'],
            text: 'Launcher',
          },
          {
            _key: '8a1154e7834b2',
            _type: 'span',
            marks: [],
            text: ' and follow the installation steps as described there. The launcher will automatically choose the appropriate minecraft version, texture pack etc., set everything up for you and directly connect you to the server.',
          },
        ],
        markDefs: [
          {
            _key: 'c33bfb10df78',
            _type: 'link',
            href: 'https://westeroscraft.com/launcher/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '98dfa7c73ba2',
        _type: 'block',
        children: [
          {
            _key: 'f8414369b81a0',
            _type: 'span',
            marks: ['strong'],
            text: '"I\'m using the latest WesterosCraft Launcher, but I still can\'t connect."',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: 'e02ce7ed2011',
        _type: 'block',
        children: [
          {
            _key: 'cff1c38728540',
            _type: 'span',
            marks: [],
            text: 'There are several fixes you can attempt in order to connect to the WesterosCraft Server through the custom launcher:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '79276001acf2',
        _type: 'block',
        children: [
          {
            _key: '522728e4b0c00',
            _type: 'span',
            marks: [],
            text: 'Ensure that you are using the most updated version of the WesterosCraft Launcher. Found at the ',
          },
          {
            _key: '522728e4b0c01',
            _type: 'span',
            marks: ['825025ca12c4'],
            text: 'WesterosCraft Launcher Download',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [
          {
            _key: '825025ca12c4',
            _type: 'link',
            href: 'http://www.westeroscraft.com/launcher',
          },
        ],
        style: 'normal',
      },
      {
        _key: '39a735c39906',
        _type: 'block',
        children: [
          {
            _key: '1fe7849bbbd70',
            _type: 'span',
            marks: [],
            text: 'Ensure that you have the WesterosCraft Production Server selected in the bottom right-hand corner of the launcher.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ecaa4e3e21ac',
        _type: 'block',
        children: [
          {
            _key: 'c5af37c784690',
            _type: 'span',
            marks: [],
            text: 'Ensure that you are have Java 8 installed on your computer. This can be accomplished by searching: "About Java" in Start.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '903d2bae9e9e',
        _type: 'block',
        children: [
          {
            _key: '2c0efd65fff40',
            _type: 'span',
            marks: [],
            text: 'Allow both Minecraft and WesterosCraft through your firewall in Security settings.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '661b7fc03f01',
        _type: 'block',
        children: [
          {
            _key: 'ffed26ea7b8c0',
            _type: 'span',
            marks: [],
            text: 'Attempt to generate a new client token by logging out of the Launcher (Settings\u003eAccount\u003eCursor over Selected Account\u003eLog Out) and then logging back in.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ce7279448136',
        _type: 'block',
        children: [
          {
            _key: '9086c6a989860',
            _type: 'span',
            marks: [],
            text: 'Attempt to generate a new client token by manually deleting the config.json file located in: C:\\Users\\[name]\\AppData\\Roaming\\.westeroscraft and then restarting the WesterosCraft Launcher.',
          },
        ],
        level: 1,
        listItem: 'bullet',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'da4030290e4a',
        _type: 'block',
        children: [
          {
            _key: '178d541cb8fb0',
            _type: 'span',
            marks: ['strong'],
            text: '"What do I do if the game is out of date?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: 'caea8fe7aa1d',
        _type: 'block',
        children: [
          {
            _key: '3a9191eb1fce0',
            _type: 'span',
            marks: [],
            text: 'Your version is not up to date with the server and you need to update the launcher. Simply hit the ',
          },
          {
            _key: '3a9191eb1fce1',
            _type: 'span',
            marks: ['em'],
            text: 'Update',
          },
          {
            _key: '3a9191eb1fce2',
            _type: 'span',
            marks: [],
            text: " button, wait for the update to finish and try launching again. Rarely, it doesn't update all files correctly and you need to go through the update process a couple times before it works.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'fa5317ae292e',
        _type: 'block',
        children: [
          {
            _key: 'ed4a1e0e4d180',
            _type: 'span',
            marks: ['strong'],
            text: '"How do I launch the game?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '8daae34dd2a2',
        _type: 'block',
        children: [
          {
            _key: 'a6092348c9190',
            _type: 'span',
            marks: [],
            text: 'On the lefthand side of the launcher select the W',
          },
          {
            _key: 'a6092348c9191',
            _type: 'span',
            marks: ['em'],
            text: 'esterosCraft Production Server',
          },
          {
            _key: 'a6092348c9192',
            _type: 'span',
            marks: [],
            text: ' When prompted, enter your MineCraft credentials, so the same e-mail address and password you use to log into regular Minecraft.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a735e858c031',
        _type: 'block',
        children: [
          {
            _key: '560e838b9f410',
            _type: 'span',
            marks: ['strong'],
            text: '"What do I do if the connection times out?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '71d9d901aa54',
        _type: 'block',
        children: [
          {
            _key: '70c7fdcb47f10',
            _type: 'span',
            marks: [],
            text: 'If you cannot reach the server, make sure you are connected to the internet and that Java is not blocked by your antivirus or firewall.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '687f9b8f5c0c',
        _type: 'block',
        children: [
          {
            _key: '48b69f54af9c0',
            _type: 'span',
            marks: [],
            text: 'As a server we depend on both the Minecraft infrastructure and our server hosts. Contact Mojang to see if the ',
          },
          {
            _key: '48b69f54af9c1',
            _type: 'span',
            marks: ['5b905247c302'],
            text: 'session and login servers',
          },
          {
            _key: '48b69f54af9c2',
            _type: 'span',
            marks: [],
            text: " are down. If the server is down due to maintainance on our or our server host's side we will inform you via the forums. In either way, be patient, we will be back as quickly as possible.",
          },
        ],
        markDefs: [
          {
            _key: '5b905247c302',
            _type: 'link',
            href: 'https://help.mojang.com/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'a927800430ec',
        _type: 'block',
        children: [
          {
            _key: '9a0bb381394b0',
            _type: 'span',
            marks: ['strong'],
            text: '"How do I get whitelisted on the server?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '0b60d3a2d14c',
        _type: 'block',
        children: [
          {
            _key: '408b35102ede0',
            _type: 'span',
            marks: [],
            text: 'You do not require to be whitelisted to join WesterosCraft, everyone is welcome to visit at any time, as long as you have a valid Minecraft account.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1af13abea250',
        _type: 'block',
        children: [
          {
            _key: '44bdc357b7620',
            _type: 'span',
            marks: [],
            text: 'Very rarely we have to whitelist for maintenance issues. If that is the case, refer to our ',
          },
          {
            _key: '44bdc357b7621',
            _type: 'span',
            marks: ['0832ad07d118'],
            text: 'Website',
          },
          {
            _key: '44bdc357b7622',
            _type: 'span',
            marks: [],
            text: ' and ',
          },
          {
            _key: '44bdc357b7623',
            _type: 'span',
            marks: ['98b2937f0e87'],
            text: 'Forums',
          },
          {
            _key: '44bdc357b7624',
            _type: 'span',
            marks: [],
            text: ' for status updates. And again, please be patient.',
          },
        ],
        markDefs: [
          {
            _key: '0832ad07d118',
            _type: 'link',
            href: 'http://www.westeroscraft.com/',
          },
          {
            _key: '98b2937f0e87',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/forum/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'c5d67addd511',
        _type: 'block',
        children: [
          {
            _key: 'c8f7cd0756e90',
            _type: 'span',
            marks: ['strong'],
            text: '"What if I can not start the launcher?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: 'afb75407bfb8',
        _type: 'block',
        children: [
          {
            _key: '9089b04c2aa90',
            _type: 'span',
            marks: [],
            text: "The launcher requires you to download the latest and correct version of the Java Runtime Environment in order to work correctly. If you can't even start the launcher, or if the launcher fails to start the game, you're most likely not using the correct version.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '02f610968941',
        _type: 'block',
        children: [
          {
            _key: '90aba7d4ce240',
            _type: 'span',
            marks: ['strong'],
            text: '"I can connect but I lag really badly, what can I do?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '681466a10ac4',
        _type: 'block',
        children: [
          {
            _key: 'd5484f4214d60',
            _type: 'span',
            marks: [],
            text: "Not using the correct version of Java may lead to performance issues. Make sure you're using the most recent, 64bit version of Java.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd4fff8ce2140',
        _type: 'block',
        children: [
          {
            _key: 'e56944da7ec50',
            _type: 'span',
            marks: [],
            text: "If you're using a Laptop you might accidentally use your built-in graphics card instead of the better, additional one. Make sure Java programs are set to use the better GPU by default. Refer to your graphics card's manual.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1bc75f29335f',
        _type: 'block',
        children: [
          {
            _key: 'e1570a89bf760',
            _type: 'span',
            marks: ['strong'],
            text: '"Why do I keep crashing from the server?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '2597e739efe6',
        _type: 'block',
        children: [
          {
            _key: 'f6bf056690cc0',
            _type: 'span',
            marks: [],
            text: "Not using the correct version of Java may lead to crashes. Make sure you're using the most recent, 64bit version of Java.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '711a0782d48b',
        _type: 'block',
        children: [
          {
            _key: 'df06bcef84510',
            _type: 'span',
            marks: [],
            text: "In rare cases, server issues may lead to crashes. If that is the case it's likely that we are already aware and working on resolving the issue as quickly as possible.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ecb4265c6ed7',
        _type: 'block',
        children: [
          {
            _key: '4706e7557c060',
            _type: 'span',
            marks: ['strong'],
            text: '"How do I know I\'m not using the correct version of Java?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '0d721d1bb4fa',
        _type: 'block',
        children: [
          {
            _key: '4235adbec2490',
            _type: 'span',
            marks: [],
            text: "Your launcher gives you a detailed overview of what it's doing under the ",
          },
          {
            _key: '4235adbec2491',
            _type: 'span',
            marks: ['em'],
            text: 'Log',
          },
          {
            _key: '4235adbec2492',
            _type: 'span',
            marks: [],
            text: ' tab. If something goes wrong this is the place to look first.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '798417d664e6',
        _type: 'block',
        children: [
          {
            _key: '63a65daf3f150',
            _type: 'span',
            marks: [],
            text: 'The easiest way to find out which Java version the launcher is using is to copy the log into a text file and to search for the "launch args".',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7465245d9a9c',
        _type: 'block',
        children: [
          {
            _key: 'a54a36609f8e0',
            _type: 'span',
            marks: [],
            text: 'If you are using a 32bit version of Java, you will find the following line:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f6e89758eca9',
        _type: 'block',
        children: [
          {
            _key: '387d44841bf50',
            _type: 'span',
            marks: ['em'],
            text: '"C:\\Program Files(x86)\\Java\\jre1.8.0_xxx\\bin\\javaw.exe"',
          },
          {
            _key: '387d44841bf51',
            _type: 'span',
            marks: [],
            text: ' ("',
          },
          {
            _key: '387d44841bf52',
            _type: 'span',
            marks: ['em'],
            text: 'xxx',
          },
          {
            _key: '387d44841bf53',
            _type: 'span',
            marks: [],
            text: '" = version numbers, e.g. 101)',
          },
        ],
        markDefs: [],
        style: 'blockquote',
      },
      {
        _key: '669ca40c6e44',
        _type: 'block',
        children: [
          {
            _key: '22fa0d21b48e0',
            _type: 'span',
            marks: [],
            text: 'In this case the game may not launch, or you may experience performance issues or crashes.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'b3300da90c0a',
        _type: 'block',
        children: [
          {
            _key: '1b2fcadd18a40',
            _type: 'span',
            marks: [],
            text: '\n64bit Windows systems are by default set to install 32bit software under ',
          },
          {
            _key: '1b2fcadd18a41',
            _type: 'span',
            marks: ['em'],
            text: 'C:\\Program Files',
          },
          {
            _key: '1b2fcadd18a42',
            _type: 'span',
            marks: ['em', 'strong'],
            text: '(x86)',
          },
          {
            _key: '1b2fcadd18a43',
            _type: 'span',
            marks: ['em'],
            text: '\\...',
          },
          {
            _key: '1b2fcadd18a44',
            _type: 'span',
            marks: [],
            text: ' while they install 64bit software at ',
          },
          {
            _key: '1b2fcadd18a45',
            _type: 'span',
            marks: ['em'],
            text: 'C:\\Program Files\\...',
          },
          {
            _key: '1b2fcadd18a46',
            _type: 'span',
            marks: [],
            text: " If you're using a Java version installed at the former location, it means that it is a 32bit program, which will most likely lead to issues with our launcher.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'a225a08465f4',
        _type: 'block',
        children: [
          {
            _key: '9eda71bdc3f40',
            _type: 'span',
            marks: ['strong'],
            text: '"Where do I get the correct version of Java from?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '27264b06cdff',
        _type: 'block',
        children: [
          {
            _key: 'f04af3c546ed0',
            _type: 'span',
            marks: [],
            text: 'The most recent Java download can be found on the ',
          },
          {
            _key: 'f04af3c546ed1',
            _type: 'span',
            marks: ['3cc5f3834bdb'],
            text: 'oracle website',
          },
          {
            _key: 'f04af3c546ed2',
            _type: 'span',
            marks: [],
            text: ' .',
          },
        ],
        markDefs: [
          {
            _key: '3cc5f3834bdb',
            _type: 'link',
            href: 'http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html',
          },
        ],
        style: 'normal',
      },
      {
        _key: '0ba55bff8c7d',
        _type: 'block',
        children: [
          {
            _key: '40470584c9840',
            _type: 'span',
            marks: [],
            text: 'The version you want to pick is ',
          },
          {
            _key: '40470584c9841',
            _type: 'span',
            marks: ['em'],
            text: 'Windows x64 Offline:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '63686f5ef0d6',
        _type: 'block',
        children: [
          {
            _key: '20da82776bc90',
            _type: 'span',
            marks: [],
            text: "If you're using a Mac, download the OSx version.\n",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7e146e773a29',
        _type: 'block',
        children: [
          {
            _key: 'd13a92f033af0',
            _type: 'span',
            marks: ['strong'],
            text: '"The game crashes and I found something about a heap size in the log, what do I do?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '3139855a615f',
        _type: 'block',
        children: [
          {
            _key: '3b064ae543e70',
            _type: 'span',
            marks: [],
            text: 'The error message reads:',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '2127487efe19',
        _type: 'block',
        children: [
          {
            _key: '18565b7b58cc0',
            _type: 'span',
            marks: ['em'],
            text: "'Error occurred during initialization of VM. Initial heap size set to a larger values than the maximum heap size'",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'f6e403d2bfde',
        _type: 'block',
        children: [
          {
            _key: '3fb069e6b9f20',
            _type: 'span',
            marks: [],
            text: 'This may occur when previous Java installations set environment variables which are no longer needed. Please check out ',
          },
          {
            _key: '3fb069e6b9f21',
            _type: 'span',
            marks: ['78583ff7b813'],
            text: 'this post',
          },
          {
            _key: '3fb069e6b9f22',
            _type: 'span',
            marks: [],
            text: ' for more information.',
          },
        ],
        markDefs: [
          {
            _key: '78583ff7b813',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/electron-launcher-tech-support-read-before-you-post.1511/',
          },
        ],
        style: 'normal',
      },
      {
        _key: '1d1744f7b23e',
        _type: 'block',
        children: [
          {
            _key: '1080479115bc0',
            _type: 'span',
            marks: ['strong'],
            text: '"I made sure Java is up to date, but it\'s still not working. Is there anything else I can do?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: 'a095f2576d99',
        _type: 'block',
        children: [
          {
            _key: 'f04d880446500',
            _type: 'span',
            marks: [],
            text: 'The launcher was probably not able to download and set up everything correctly. This may, for instance happen if you have a weak internet connection.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '66ff7588af9a',
        _type: 'block',
        children: [
          {
            _key: '93bd6a6889180',
            _type: 'span',
            marks: [],
            text: 'As a general approach a ',
          },
          {
            _key: '93bd6a6889181',
            _type: 'span',
            marks: ['em'],
            text: 'soft reset',
          },
          {
            _key: '93bd6a6889182',
            _type: 'span',
            marks: [],
            text: ' of the launcher can solve some common problems.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '166f7c6a0eb6',
        _type: 'block',
        children: [
          {
            _key: 'd8cff455b4690',
            _type: 'span',
            marks: [],
            text: 'Hitting the ',
          },
          {
            _key: 'd8cff455b4691',
            _type: 'span',
            marks: ['em'],
            text: 'Windows',
          },
          {
            _key: 'd8cff455b4692',
            _type: 'span',
            marks: [],
            text: '-',
          },
          {
            _key: 'd8cff455b4693',
            _type: 'span',
            marks: ['em'],
            text: 'button',
          },
          {
            _key: 'd8cff455b4694',
            _type: 'span',
            marks: [],
            text: ' (between ALT and CTRL) and ',
          },
          {
            _key: 'd8cff455b4695',
            _type: 'span',
            marks: ['em'],
            text: 'R',
          },
          {
            _key: 'd8cff455b4696',
            _type: 'span',
            marks: [],
            text: ' simultaneously prompts the execute tab',
          },
        ],
        level: 1,
        listItem: 'number',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '73550c78d366',
        _type: 'block',
        children: [
          {
            _key: 'd6d21c1b4fa40',
            _type: 'span',
            marks: [],
            text: 'Enter ',
          },
          {
            _key: 'd6d21c1b4fa41',
            _type: 'span',
            marks: ['em'],
            text: '%appdata%',
          },
          {
            _key: 'd6d21c1b4fa42',
            _type: 'span',
            marks: [],
            text: ' and hit ',
          },
          {
            _key: 'd6d21c1b4fa43',
            _type: 'span',
            marks: ['em'],
            text: 'enter',
          },
          {
            _key: 'd6d21c1b4fa44',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        level: 1,
        listItem: 'number',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '4e1735d05a17',
        _type: 'block',
        children: [
          {
            _key: 'e520b67bdcee0',
            _type: 'span',
            marks: [],
            text: 'Find the ',
          },
          {
            _key: 'e520b67bdcee1',
            _type: 'span',
            marks: ['em'],
            text: 'WesterosCraft',
          },
          {
            _key: 'e520b67bdcee2',
            _type: 'span',
            marks: [],
            text: ' folder',
          },
        ],
        level: 1,
        listItem: 'number',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '0b2a0adec4ea',
        _type: 'block',
        children: [
          {
            _key: 'e20ffd1ab72a0',
            _type: 'span',
            marks: [],
            text: 'Delete the ',
          },
          {
            _key: 'e20ffd1ab72a1',
            _type: 'span',
            marks: ['em'],
            text: 'WesterosCraft',
          },
          {
            _key: 'e20ffd1ab72a2',
            _type: 'span',
            marks: [],
            text: ' folder. ',
          },
          {
            _key: 'e20ffd1ab72a3',
            _type: 'span',
            marks: ['strong'],
            text: 'Make sure you made backups of screenshots and similar before doing this!',
          },
        ],
        level: 1,
        listItem: 'number',
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'cbab8a1bf8d5',
        _type: 'block',
        children: [
          {
            _key: '8f804472c8670',
            _type: 'span',
            marks: ['strong'],
            text: '"What do I do if I was banned from the server?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: 'caed8da7f90b',
        _type: 'block',
        children: [
          {
            _key: '2b01c153e08e0',
            _type: 'span',
            marks: [],
            text: "You've potentially broken one or more of our ",
          },
          {
            _key: '2b01c153e08e1',
            _type: 'span',
            marks: ['769d35c28cba'],
            text: 'Rules',
          },
          {
            _key: '2b01c153e08e2',
            _type: 'span',
            marks: [],
            text: '. You are potentially allowed to appeal via our ',
          },
          {
            _key: '2b01c153e08e3',
            _type: 'span',
            marks: ['027130ad3b78'],
            text: 'forums',
          },
          {
            _key: '2b01c153e08e4',
            _type: 'span',
            marks: [],
            text: '.',
          },
        ],
        markDefs: [
          {
            _key: '769d35c28cba',
            _type: 'link',
            href: 'https://westeroscraft.com/wiki/guides/server-rules',
          },
          {
            _key: '027130ad3b78',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/forum/ban-mute-demotion-appeals.33/',
          },
        ],
        style: 'normal',
      },
      {
        _key: 'c48c82c03ec9',
        _type: 'block',
        children: [
          {
            _key: '5915442b803b0',
            _type: 'span',
            marks: ['strong'],
            text: '"Do I need to purchase Minecraft in order to play WesterosCraft?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '1d29cf444b5d',
        _type: 'block',
        children: [
          {
            _key: '32165fed325d0',
            _type: 'span',
            marks: [],
            text: 'Yes.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '1a4d840817ba',
        _type: 'block',
        children: [
          {
            _key: 'cd8d4f5a781e0',
            _type: 'span',
            marks: ['strong'],
            text: '"What do I do if it\'s still not working?"',
          },
        ],
        markDefs: [],
        style: 'h5',
      },
      {
        _key: '1cf47561f878',
        _type: 'block',
        children: [
          {
            _key: '5a26e645f9b00',
            _type: 'span',
            marks: [],
            text: 'Post your problem on our ',
          },
          {
            _key: '5a26e645f9b01',
            _type: 'span',
            marks: ['4320be19cf40'],
            text: 'Support Forum',
          },
          {
            _key: '5a26e645f9b02',
            _type: 'span',
            marks: [],
            text: ', but read ',
          },
          {
            _key: '5a26e645f9b03',
            _type: 'span',
            marks: ['e9d05994e332'],
            text: 'the tech support guidelines',
          },
          {
            _key: '5a26e645f9b04',
            _type: 'span',
            marks: [],
            text: ' first.',
          },
        ],
        markDefs: [
          {
            _key: '4320be19cf40',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/forum/support.40/',
          },
          {
            _key: 'e9d05994e332',
            _type: 'link',
            href: 'https://forum.westeroscraft.com/threads/electron-launcher-tech-support-read-before-you-post.1511/',
          },
        ],
        style: 'normal',
      },
    ],
    guideCategory: {
      _ref: 'e1ac352f-1567-410a-ac16-d516ef533faf',
      _type: 'reference',
    },
    icon: {
      _type: 'image',
      asset: {
        _ref: 'image-6075b802562f45843922db2f4c2403b9f34fb622-240x240-png',
        _type: 'reference',
      },
    },
    pageBuilder: [],
    slug: {
      _type: 'slug',
      current: 'troubleshooting-guide',
    },
    title: 'Troubleshooting Guide',
  },
]

const categoryMap = (region: string) => {
  switch (region) {
    case '8837ee46-c394-4de7-93e7-cfcc140dac62':
      return 'rulesAndGuidelines'
    case '5f099069-f0ea-4077-b723-af85761811d6':
      return 'gettingStarted'
    case 'e1ac352f-1567-410a-ac16-d516ef533faf':
      return 'resources'
    case '52a3451d-02e6-4cea-bcc4-e97b78a99e74':
      return 'howTo'
  }
}

const uploadGuideData = async (data: any) => {
  const richText = await sanityRichTextToPayloadRichText(
    data.body,
    data?._id || data?.slug?.current,
  )

  const body: Guide = {
    guideName: data?.title,
    slug: data?.slug?.current || undefined,
    guideDetails: {
      information: {
        guideCategory: categoryMap(data.guideCategory._ref),
      },
    },
    layout: !data.body
      ? []
      : [
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
  }

  try {
    await payload.create({
      collection: 'guides',
      data: body,
    })
  } catch (error) {
    console.dir(error, { depth: null })
  }
}

;(async () => {
  await payload.init({
    secret: PAYLOAD_SECRET || '',
    mongoURL: MONGODB_URI || '',
    local: true,
  })

  console.log('🫵 ---------PAYLOAD STARTED--------🫵')

  try {
    data.forEach(async x => {
      // @ts-ignore
      const t = mergeListItems(x.body)

      await uploadGuideData({ ...x, body: t })
    })
  } catch (err) {
    console.log('🫵 -----------------🫵')
    console.log('🫵 : ; : err', err)
    console.log('🫵 -----------------🫵')
  } finally {
    console.log('🫵 -----------------🫵')
    console.log('DONE')
    console.log('🫵 -----------------🫵')
  }
})()
