import { ContainerBorder } from './bordered-container'
import { TypographyH2, TypographyP } from './typography'

const links = [
  {
    heading: 'Locations',
    description: 'View a single comprehensive list of every build we have to offer.',
    linkText: 'Read More',
    link: '',
  },
  {
    heading: 'Guides',
    description: 'View a single comprehensive list of every build we have to offer.',
    linkText: 'Read More',
    link: '',
  },
  {
    heading: 'Blocks',
    description: 'View a single comprehensive list of every build we have to offer.',
    linkText: 'Read More',
    link: '',
  },
]

const images = [
  {
    src: 'https://cdn.sanity.io/images/1as7cn02/production/71588b25aec5b038d5da477bdf1a17698c6157c1-1920x1017.png?w=384&h=355&q=100&fit=crop&crop=center',
  },
  {
    src: 'https://cdn.sanity.io/images/1as7cn02/production/71588b25aec5b038d5da477bdf1a17698c6157c1-1920x1017.png?w=384&h=355&q=100&fit=crop&crop=center',
  },
  {
    src: 'https://cdn.sanity.io/images/1as7cn02/production/71588b25aec5b038d5da477bdf1a17698c6157c1-1920x1017.png?w=384&h=355&q=100&fit=crop&crop=center',
  },
  {
    src: 'https://cdn.sanity.io/images/1as7cn02/production/71588b25aec5b038d5da477bdf1a17698c6157c1-1920x1017.png?w=384&h=355&q=100&fit=crop&crop=center',
  },
]

export const LocationFeature = () => {
  return (
    <ContainerBorder className="flex-col py-24 sm:py-32 px-4 md:px-10 lg:flex-row items-center justify-center gap-y-16 gap-x-8">
      <div>
        <TypographyH2>
          Over <span className="text-primaryRed">400 locations</span> to discover
        </TypographyH2>
        <TypographyP>
          Our community is well on our way to having a fully explorable map. You can keep up with
          our progress in game anytime, or start exploring our expansive Wiki.
        </TypographyP>
      </div>
      <div></div>
    </ContainerBorder>
  )
}
