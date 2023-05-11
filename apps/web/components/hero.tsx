import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TypographyH1, TypographyH4 } from '@/components/typography'

export const Hero = () => {
  return (
    <div className="h-[550px] sm:h-[600px] md:h-[750px] relative w-full flex flex-col justify-center items-end lg:items-center pb-14 lg:pb-0 bg-primaryDark">
      <div className="flex flex-col z-10 items-center justify-center absolute left-auto top-auto right-0 bottom-[60px] sm:bottom-auto w-[95%] sm:w-[92%] lg:w-[43%] h-auto lg:h-[400px] bg-primaryLight p-5 sm:p-7">
        <TypographyH1>
          Explore the world of <span className="text-primaryRed">Westeros inside Minecraft</span>
        </TypographyH1>
        <hr className="border-primaryDark hidden sm:block mt-6 w-full" />
        <TypographyH4 className="mt-4 w-full">
          An open world, creative Minecraft server
        </TypographyH4>
        <div className="flex flex-row mt-4 sm:mt-8 gap-4">
          <Button>Join the Server</Button>
          <Button variant="outline">View the Wiki</Button>
        </div>
      </div>
      <div>
        <Image
          src="https://westeroscraft.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1as7cn02%2Fproduction%2F96212570ca553daa71bd252bbd1d39069d21257b-3840x2160.jpg&w=828&q=100"
          alt="King's Landing"
          fill
          sizes="80vw"
          quality={100}
          priority
          className="object-cover w-full lg:!w-[75%] h-[50%] md:h-[75%] lg:h-auto"
        />
      </div>

      {/* Border */}
      <div className="max-w-7xl absolute top-0 left-auto right-auto bottom-auto h-full px-2 md:px-5 w-full">
        <div className="w-full mx-auto h-full border-r-0 sm:border-r-[1.5px] border-primaryGold" />
      </div>
    </div>
  )
}
