import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { TypographyH1, TypographyH4 } from '@/components/typography'

export const Hero = () => {
  const container = cn(
    'h-[550px] sm:h-[600px] md:h-[750px] bg-primaryDark w-full flex justify-center flexWrap',
    'relative align-end lg:align-center',
    'auto-cols-fr gap-4 grid-cols-1 auto-rows-auto',
  )

  const textcontainer = cn(
    'flex flex-col justify-center items-center absolute left-auto top-auto right-0 bottom-14 sm:bottom-auto text-left',
    'bg-primaryLight',
    'h-auto lg:h-[400px] w-[95%] sm:w-[92%] lg:w-[43%]',
    'border-1 border-solid border-primaryDark',
    'p-5 sm:p-8 z-10',
  )
  return (
    <div className={container}>
      <div className={textcontainer}>
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
      {/* height={{ base: '50%', md: '75%', lg: 'auto' }} */}
      <div className="w-full lg:w-[75%] h-[50%] md:h-[75%] lg:h-auto">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://westeroscraft.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F1as7cn02%2Fproduction%2F96212570ca553daa71bd252bbd1d39069d21257b-3840x2160.jpg&w=828&q=100"
            alt="King's Landing"
            fill
            sizes="80vw"
            quality={100}
            priority
            className="object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  )
}

// className="hero-image"
//         position="absolute"
//         left="0"
//         top="0"
//         right="auto"
//         bottom="0"
//         width={{ base: '100%', lg: '75%' }}
//         height={{ base: '50%', md: '75%', lg: 'auto' }}
//         zIndex="5"
