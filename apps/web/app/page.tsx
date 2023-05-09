import { Banner } from '@/components/banner'
import { BannerGrid } from '@/components/banner-grid'
import { ContainerBorder } from '@/components/bordered-container'
import { Hero } from '@/components/hero'
import { LocationFeature } from '@/components/location-feature'
import { TypographyH1, TypographyP } from '@/components/typography'
import { Video } from '@/components/video'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Banner />
      <div className="w-full bg-primaryDark">
        <StartYourJourney />
        <WesterosCraftDescription />
        <BannerGrid />
        <TenYearsWesterosCraft />
        <Video />
      </div>
      <div className="w-full">
        <ExploreTheRealm />
        <LocationFeature />
      </div>
    </main>
  )
}

function StartYourJourney() {
  return (
    <ContainerBorder variant="dark" className="pt-14 pb-8 px-4" borderBottom>
      <div className="flex justify-center items-center">
        <TypographyH1 className="text-white">Start Your Journey</TypographyH1>
      </div>
    </ContainerBorder>
  )
}

function ExploreTheRealm() {
  return (
    <ContainerBorder className="pt-14 pb-8 px-4" borderBottom>
      <div className="flex justify-center items-center">
        <TypographyH1>Explore The Realm</TypographyH1>
      </div>
    </ContainerBorder>
  )
}

function WesterosCraftDescription() {
  return (
    <ContainerBorder variant="dark" className="pt-20 sm:pt-24  px-4">
      <div className="text-center max-w-2xl mx-auto mb-24 px-4">
        <TypographyP className="text-white className='text-lg'">
          <span color="primaryGold">WesterosCraft</span> is a modded server where visitors can
          explore the entire continent of Westeros and are free to join the community of builders
          bringing it to life. Wander the streets of King’s Landing or the fields of Highgarden.
          Take a flight through the deadly Moon Door, or even retrace the steps of your favorite
          character.
        </TypographyP>
      </div>
    </ContainerBorder>
  )
}

function TenYearsWesterosCraft() {
  return (
    <ContainerBorder variant="dark" className="pt-14 pb-8 px-4">
      <div className="text-white text-center lg:max-w-xl mx-auto">
        <TypographyH1 className="text-primaryGold">10 years of WesterosCraft</TypographyH1>
        <TypographyP className="text-lg">
          From simple cobblestone shacks in 2011 to ornate cities in 2021, we have come a long way
          from our humble beginnings. Our goal is to create one of the largest and most detailed
          Minecraft worlds ever built.
        </TypographyP>
      </div>
    </ContainerBorder>
  )
}
