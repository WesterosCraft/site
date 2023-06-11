'use client'
import { ContainerBorder } from '@/components/bordered-container'
import { TypographyH1, TypographyH2, TypographyH4, TypographyP } from '@/components/typography'
import { Button } from '@/components/ui/button'
import NextImage from 'next/image'

const editions = [
  {
    title: 'Summer 2022',
    thumbnail: '',
    link: 'https://westeroscraft.com/',
  },
  {
    title: 'Summer 2022',
    thumbnail: '',
    link: 'https://westeroscraft.com/',
  },
  {
    title: 'Summer 2022',
    thumbnail: '',
    link: 'https://westeroscraft.com/',
  },
  {
    title: 'Summer 2022',
    thumbnail: '',
    link: 'https://westeroscraft.com/',
  },
  {
    title: 'Summer 2022',
    thumbnail: '',
    link: 'https://westeroscraft.com/',
  },
  {
    title: 'Summer 2022',
    thumbnail: '',
    link: 'https://westeroscraft.com/',
  },
  {
    title: 'Summer 2022',
    thumbnail: '',
    link: 'https://westeroscraft.com/',
  },
  {
    title: 'Summer 2022',
    thumbnail: '',
    link: 'https://westeroscraft.com/',
  },
  {
    title: 'Summer 2022',
    thumbnail: '',
    link: 'https://westeroscraft.com/',
  },
]

export default function RookeryPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-primaryDark">
        {/* py={{ base: '16', sm: '20' }} */}
        <ContainerBorder variant="dark" borderBottom className="py-16 sm:py-20 px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 text-white justify-center">
            {/* <img /> */}
            <div className="max-w-2xl text-center">
              <TypographyH1>The Rookery</TypographyH1>
              <TypographyH4 className="mt-6 max-w-3xl font-normal">
                The Rookery is a community created magazine that details all the latest happenings
                in the realm of WesterosCraft. Check in to keep up to date with the server! Sent
                once a quarter.
              </TypographyH4>
            </div>
          </div>
        </ContainerBorder>
        <ContainerBorder variant="dark" className="py-24 sm:py-32 px-4">
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
              <NextImage
                src="https://picsum.photos/512/650"
                width={512}
                height={650}
                alt="Rookery"
              />
              <div className="flex flex-col gap-10 justify-center items-center text-white">
                <div className="text-center">
                  <TypographyH2>Latest Edition</TypographyH2>
                  <TypographyH4 className="mt-2">Winter 2022</TypographyH4>
                </div>
                <div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primaryDark font-semibold rounded-none text-md hover:bg-primaryRed hover:text-white"
                  >
                    <a href="" target="_blank" rel="noreferrer">
                      Read It
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ContainerBorder>
      </div>
      <ContainerBorder className="pt-14 pb-8 px-4" borderBottom>
        <div className="flex justify-center items-center">
          <TypographyH1>Past Editions</TypographyH1>
        </div>
      </ContainerBorder>
      <ContainerBorder className="py-16 sm:py-20 px-4">
        <div className="grid gap-y-12 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {editions.map(edi => (
            <div key={edi.title} className="flex flex-col justify-center items-center gap-3">
              <NextImage
                width={336}
                height={435}
                src="https://picsum.photos/336/435"
                // src={urlForImage(edition.thumbnail).url()}
                // placeholder="blur"
                // blurDataURL={edition?.thumbnail?.metadata?.lqip}
                alt={'Rookery edition'}
              />
              <div className="flex max-w-[336px] flex-row w-full justify-between">
                <TypographyP className="font-medium">{edi.title}</TypographyP>
                <Button
                  variant="link"
                  className="p-0 h-auto underline decoration-primaryRed underline-offset-[3px] text-md"
                  asChild
                >
                  <a href={edi.link} target="_blank">
                    Read Edition
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ContainerBorder>
    </div>
  )
}
