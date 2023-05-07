import { Banner } from '@/components/banner'
import { ContainerBorder } from '@/components/bordered-container'
import { Hero } from '@/components/hero'
import { TypographyH1 } from '@/components/typography'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Banner />
      <div className="w-full bg-primaryDark">
        <ContainerBorder variant="dark" className="pt-14 pb-8 px-4" borderBottom>
          <div className="flex justify-center items-center">
            <TypographyH1 className="text-white">Start Your Journey</TypographyH1>
          </div>
        </ContainerBorder>
        <ContainerBorder variant="dark" className="pt-20 sm:pt-24 pb-24 sm:pb-32 px-4">
          <div className="text-center max-w-2xl mx-auto mb-24 px-4">
            <p className="text-white">
              <span color="primaryGold">WesterosCraft</span> is a modded server where visitors can
              explore the entire continent of Westeros and are free to join the community of
              builders bringing it to life. Wander the streets of King’s Landing or the fields of
              Highgarden. Take a flight through the deadly Moon Door, or even retrace the steps of
              your favorite character.
            </p>
          </div>
        </ContainerBorder>
      </div>
    </main>
  )
}

// pt="14" pb="8" px="4" borderBottomWidth="1px"
