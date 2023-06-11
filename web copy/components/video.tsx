'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })
import { ContainerBorder } from './bordered-container'
import NextImage from 'next/image'
import { AspectRatio } from './ui/aspect-ratio'
import { Play } from 'lucide-react'

export const Video = ({ url }: any) => {
  const [isPlaying, setPlaying] = useState(false)
  return (
    <ContainerBorder variant="dark" className="pb-24 px-4">
      <div className="flex h-full w-full overflow-hidden mx-auto max-w-3xl">
        <div className="w-full relative">
          <AspectRatio ratio={16 / 9}>
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              playing={isPlaying}
              url={url ?? 'https://www.youtube.com/watch?v=fO_eKusKH60'}
              className="youtubeContainer"
            />
          </AspectRatio>
          <div
            onClick={() => setPlaying(!isPlaying)}
            className={`${
              isPlaying ? 'hidden' : 'flex'
            } justify-center items-center rounded-full bg-white opacity-80 hover:opacity-100 inset-center mx-auto z-20 w-20 h-20 cursor-pointer transition-all 150ms linear 0s`}
          >
            <Play className="transition-all 150ms linear 0s" />
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full z-10 ${isPlaying ? 'hidden' : 'block'}`}
          >
            <AspectRatio ratio={16 / 9} className="max-h-[480px]">
              <NextImage
                src="https://cdn.sanity.io/images/1as7cn02/production/62c70d2b5aac288ea1f7dd3f5eb9818ed4f14773-1280x720.jpg?h=480&w=828&q=75"
                //  loader={thumbnailLoader}
                width={768}
                height={432}
                //  src={thumbnailUrl}
                // placeholder="blur"
                //  blurDataURL={thumbnailBlur}
                alt="Youtube Video"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </ContainerBorder>
  )
}

//   const YoutubePlayer = ({ url, thumbnailUrl, thumbnailBlur }: YoutubePlayerProps) => {
//     const [isPlaying, setPlaying] = useState(false);

//     const thumbnailLoader = ({ src, width = 768 }: { src: string; width: number | string }) => {
//       return `${src}?h=480&w=${width}&q=75`;
//     };

//     return (
//       <Box className="youtube-player" width="full" position="relative">
//         <AspectRatio ratio={16 / 9}>
//           <ReactPlayer
//             width="100%"
//             height="100%"
//             controls={true}
//             playing={isPlaying}
//             url={url ?? 'https://www.youtube.com/watch?v=fO_eKusKH60'}
//             className="youtubeContainer"
//           />
//         </AspectRatio>
//         <Center
//           className="play-button"
//           borderRadius="full"
//           bg="whiteAlpha.800"
//           position="absolute"
//           top="50%"
//           transform="translateY(-50%)"
//           mx="auto"
//           left={0}
//           right={0}
//           bottom={0}
//           zIndex="dropdown"
//           width={88}
//           height={88}
//           display={isPlaying ? 'none' : 'flex'}
//           onClick={() => setPlaying(!isPlaying)}
//           cursor="pointer"
//           transition="all 150ms linear 0s"
//           _hover={{
//             bg: 'white',
//             '.thumbnail-icon': {
//               color: 'blackAlpha.900',
//             },
//           }}
//         >
//           <PlayIcon boxSize="28px" color="blackAlpha.700" transition="all 150ms linear 0s" />
//         </Center>
//         <Box
//           display={isPlaying ? 'none' : 'block'}
//           position="absolute"
//           top={0}
//           left={0}
//           width="100%"
//           height="100%"
//           zIndex="base"
//         >
//           <AspectRatio ratio={16 / 9} maxH={480}>
//             <NextImage
//               loader={thumbnailLoader}
//               width={768}
//               height={432}
//               src={thumbnailUrl}
//               placeholder="blur"
//               blurDataURL={thumbnailBlur}
//               alt="Youtube Video"
//             />
//           </AspectRatio>
//         </Box>
//       </Box>
//     );
//   };
