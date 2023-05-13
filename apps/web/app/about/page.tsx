'use client'
import { ContainerBorder } from '@/components/bordered-container'
import { TypographyH1, TypographyH2, TypographyH4, TypographyP } from '@/components/typography'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import NextImage from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-primaryDark">
        <ContainerBorder variant="dark" borderBottom className="py-16 sm:py-20 px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 text-white justify-center">
            {/* <img /> */}
            <div className="max-w-2xl text-center">
              <TypographyH1>The story behind WesterosCraft</TypographyH1>
              <TypographyH4 className="mt-6 max-w-3xl font-normal">
                Our goal is to recreate the universe imagined by author George R. R. Martin in his
                fantasy series, A Song of Ice and Fire. Here's a bit about how the project took off.
              </TypographyH4>
            </div>
          </div>
        </ContainerBorder>
      </div>

      <div className="w-full bg-primaryDark">
        <ContainerBorder variant="dark" className="items-center pt-20 sm:pt-24 pb-24 sm:pb-32 px-4">
          <div className="prose lg:prose-lg prose-invert">
            <h2>The Founding</h2>
            <p>
              Minecraft's core design is that the whole world is made of blocks, and players can
              place or break any block they want, which in turn means they can create any structure
              they can imagine. WESTEROSCRAFT WAS FOUNDED by PizzaInACup aka geeberry, in November
              2011. Pizza, as he’s affectionately known by, had long been a fan of the ASOIAF series
              and was hooked on the Game of Thrones by the end of the first episode. Pizza was also
              a bit of a coder, and while the first season of the HBO series was airing, and
              Westeros fever was sweeping the planet, he was dabbling in the beta of a then
              little-known game called Minecraft.
            </p>
            <p>
              Building castles was all the rage in the early days of Minecraft and Game of Thrones
              had no shortage of inspiration. What started as a simple idea to see if one could
              build the Red Keep in the game, quickly snowballed. If you have the Red Keep, wouldn’t
              it make sense to have the Dragon Pit, and the Sept of Baelor, and a few houses on the
              streets connecting them as well.
            </p>
          </div>
        </ContainerBorder>
      </div>

      <div className="w-full">
        <ContainerBorder className="items-center pt-20 sm:pt-24 pb-24 sm:pb-32 px-4" borderBottom>
          <div className="prose lg:prose-lg">
            <h2>King’s Landing</h2>
            <p>
              King’s Landing was the very first project undertaken by the newly created
              WesterosCraft team. Of course, WesterosCraft being WesterosCraft, the server soon
              decided to redo the whole project, building a new version in 2012 under the leadership
              of Dutchguard, Marken4, Contra, NickShaiB, Whitefireneo, FlemishGuard, IwandeLarch,
              Feasting, and Sn0wst0rm.
            </p>
            <p>
              The build was scheduled to last for two months, but took closer to half a year to
              complete. All of the houses were built and furnished by hand and the rough estimate is
              around 4,000 structures. The version currently on our map was started in 2014 and
              completed in 2017. The city counts with an incredible number of 5201 unique houses,
              with 877 of those being located in the sprawl area.
            </p>
            <NextImage src="https://picsum.photos/750/422" width={750} height={422} alt="test" />
            <p>
              Again, in keeping with tradition, we’re currently working on a remaster of the current
              version in our test world.
            </p>
          </div>
        </ContainerBorder>
      </div>

      <ContainerBorder>
        <div className="max-w-2xl mx-auto px-6 lg:px-8 py-16 sm:py-20 text-center">
          <TypographyH2>Ready to Explore?</TypographyH2>
          <TypographyP className="mt-2 font-lg">
            Westeros is home to over 500 cities, castles, and landmarks. Our goal is to construct
            them all. With over 300 completed so far, our community is well on our way to having a
            fully explorable map.
          </TypographyP>
          <Button
            asChild
            className="mt-8 bg-primaryRed hover:bg-red-900 text-white rounded-none text-lg"
            size="lg"
          >
            <NextLink href="/join">Join the Server</NextLink>
          </Button>
        </div>
      </ContainerBorder>
    </div>
  )
}

// export default function AboutPage({ pageData }: { pageData: AboutPageData }) {
//   return (
//     <>
//       <Seo title={pageData?.seo?.title || pageData?.title} />

//       <Flex flexDir="column" w="full">
//         <ContainerBorder
//           variant="light"
//           as={VStack}
//           w="full"
//           mx="auto"
//           py={{ base: '16', sm: '20' }}
//           px="4"
//         >
//           <Stack direction={{ base: 'column', md: 'row' }} align="center" spacing={12}>
//             <Img
//               width={{ base: '100px', md: '120px' }}
//               alt="Banner"
//               src={urlForImage(pageData?.heroImage).url()}
//             />
//             <Box maxW="2xl" textAlign={{ base: 'center', sm: 'left' }}>
//               <Heading size={{ base: '2xl', sm: '3xl', lg: '4xl' }}>{pageData?.heading}</Heading>
//               <Text fontSize={{ base: 'xl', sm: '2xl' }} maxW="3xl" mt="6">
//                 {pageData?.subheading}
//               </Text>
//             </Box>
//           </Stack>
//         </ContainerBorder>
//         <Box w="full" bg="primaryDark">
//           <ContainerBorder variant="dark" pt="14" pb="8" px="4" borderBottomWidth="1px">
//             <Center>
//               <Heading color="white" size="2xl">
//                 Our story
//               </Heading>
//             </Center>
//           </ContainerBorder>
//         </Box>
//         {pageData?.copy?.map((item: any) => (
//           <Box
//             key={item?._key}
//             width="full"
//             bg={item?.variant === 'dark' ? 'primaryDark' : undefined}
//           >
//             <ContainerBorder
//               variant={item?.variant === 'dark' ? 'dark' : 'light'}
//               color={item?.variant === 'dark' ? 'white' : 'primaryDark'}
//               borderTop={
//                 item?.topBorder
//                   ? `1px solid ${item?.variant === 'dark' ? 'white' : 'black'}`
//                   : undefined
//               }
//               pt={['20', '24']}
//               pb={['24', '32']}
//               px="4"
//             >
//               <Box maxW="3xl" mx="auto" textAlign="center">
//                 <PortableText
//                   value={item?.content}
//                   components={{
//                     block: {
//                       // Ex. 1: customizing common block types
//                       title: ({ children }) => (
//                         <Text fontSize="xl" mb="6">
//                           {children}
//                         </Text>
//                       ),
//                       normal: ({ children }) => (
//                         <Text mb="6" fontSize={{ base: 'md', sm: 'lg' }}>
//                           {children}
//                         </Text>
//                       ),
//                       h3: ({ children }) => (
//                         <Heading
//                           mb="6"
//                           color={item?.variant === 'dark' ? 'primaryGold' : 'primaryDark'}
//                           fontSize={{ base: '3xl', sm: '4xl' }}
//                         >
//                           {children}
//                         </Heading>
//                       ),
//                     },
//                     marks: {
//                       textCenter: ({ children }) => (
//                         <chakra.span textAlign="center">{children}</chakra.span>
//                       ),
//                       dropcap: ({ children }) => <Dropcap>{children}</Dropcap>,
//                     },
//                     types: {
//                       figure: ({ value }) => {
//                         return (
//                           <Center
//                             flexDirection="column"
//                             my="6"
//                             // width={value?.width || 500}
//                             // height={value?.height || 350}
//                             mx="auto"
//                           >
//                             <NextImage
//                               alt={value?.alt}
//                               src={urlForImage(value?.image?.asset).url()}
//                               width={value?.width || 'auto'}
//                               height={value?.height || 'auto'}
//                               // style={{ maxWidth: '100%', height: 'auto' }}
//                             />
//                             {value?.caption && (
//                               <Text mt="2" textAlign="center" fontSize="xs">
//                                 {value.caption}
//                               </Text>
//                             )}
//                           </Center>
//                         );
//                       },
//                     },
//                   }}
//                 />
//               </Box>
//             </ContainerBorder>
//           </Box>
//         ))}
//         <ContainerBorder>
//           <Box as="section">
//             <Box
//               maxW="2xl"
//               mx="auto"
//               px={{ base: '6', lg: '8' }}
//               py={{ base: '16', sm: '20' }}
//               textAlign="center"
//             >
//               <Heading as="h2" size="2xl" fontWeight="extrabold">
//                 Ready to Explore?
//               </Heading>
//               <Text mt="4" fontSize="lg">
//                 Westeros is home to over 500 cities, castles, and landmarks. Our goal is to
//                 construct them all. With over 300 completed so far, our community is well on our way
//                 to having a fully explorable map.
//               </Text>
//               <NextLink href="/join">
//                 <Button
//                   mt="8"
//                   size="lg"
//                   bg="primaryRed"
//                   _hover={{ bg: 'red.800' }}
//                   color="white"
//                   height="14"
//                   px="8"
//                   fontSize="md"
//                 >
//                   Join the Server
//                 </Button>
//               </NextLink>
//             </Box>
//           </Box>
//         </ContainerBorder>
//       </Flex>
//     </>
//   );
// }
