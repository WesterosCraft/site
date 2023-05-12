'use client'
import { ContainerBorder } from '@/components/bordered-container'
import { TypographyH1, TypographyH2, TypographyH4 } from '@/components/typography'
import { Button } from '@/components/ui/button'

const editions = [
  {
    title: '',
    thumbnail: '',
    link: '',
  },
]

export default function RookeryPage() {
  return (
    <div className="flex flex-col w-full">
      <ContainerBorder>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* <img /> */}
          <div className="max-w-2xl text-center sm:text-left">
            <TypographyH1>The Rookery</TypographyH1>
            <TypographyH4>
              The Rookery is a community created magazine that details all the latest happenings in
              the realm of WesterosCraft. Check in to keep up to date with the server! Sent once a
              quarter.
            </TypographyH4>
          </div>
        </div>
      </ContainerBorder>
      <div className="w-full bg-primaryDark">
        <ContainerBorder variant="dark" className="py-24 sm:py-32 px-4">
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
              {/* <img /> */}
              <div className="flex flex-col gap-10 justify-center items-center text-white">
                <div className="text-center">
                  <TypographyH2>
                    Latest Edition
                    <p>title</p>
                  </TypographyH2>
                </div>
                <div>
                  <Button asChild>
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
        <TypographyH2>Past Editions</TypographyH2>
      </ContainerBorder>
      <ContainerBorder className="py-16 sm:py-20 px-4">
        <div className="grid gap-y-12 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {editions.map(edi => (
            <div key={edi.title} className="flex flex-col gap-3">
              {/* <img /> */}
              <div className="flex max-w-[336px] flex-row w-full justify-between">
                <p>{edi.title}</p>
                <a>Read Edition</a>
              </div>
            </div>
          ))}
        </div>
      </ContainerBorder>
    </div>
  )
}

//  <Flex flexDir="column" w="full">
//       <ContainerBorder
//         variant="light"
//         as={VStack}
//         w="full"
//         mx="auto"
//         py={{ base: '16', sm: '20' }}
//         px="4"
//       >
//         <Stack direction={{ base: 'column', md: 'row' }} align="center" spacing={12}>
//           <Img width={{ base: '100px', md: '120px' }} alt="Raven" src={Raven.src} />
//           <Box maxW="2xl" textAlign={{ base: 'center', sm: 'left' }}>
//             <Heading size={{ base: '2xl', sm: '3xl', lg: '4xl' }}>{pageData?.title}</Heading>
//             <Text fontSize={{ base: 'xl', sm: '2xl' }} maxW="3xl" mt="6">
//               {pageData?.subheading}
//             </Text>
//           </Box>
//         </Stack>
//       </ContainerBorder>
//       <Box w="full" bg="primaryDark">
//         <ContainerBorder variant="dark" py={{ base: '24', sm: '32' }} px="4">
//           <Center w="full" maxW="5xl" mx="auto">
//             <SimpleGrid columns={{ base: 1, md: 2 }} spacingY={{ base: '12', md: undefined }}>
//               <NextImage
//                 priority
//                 width={512}
//                 height={650}
//                 src={urlForImage(pageData?.latestEdition?.thumbnail).url()}
//                 placeholder="blur"
//                 blurDataURL={pageData?.latestEdition?.thumbnail?.metadata?.lqip}
//                 alt={pageData?.latestEdition?.title ?? 'Rookery'}
//               />
//               <VStack spacing="10" justify="center" align="center" color="white">
//                 <Box textAlign="center">
//                   <Heading size="2xl">Latest Edition</Heading>
//                   <Text fontSize="xl" mt="4">
//                     {pageData?.latestEdition?.title}
//                   </Text>
//                 </Box>
//                 <Box>
//                   <a href={pageData?.latestEdition?.link} target="_blank" rel="noreferrer">
//                     <Button size="lg" colorScheme="whiteAlpha">
//                       Read It
//                     </Button>
//                   </a>
//                 </Box>
//               </VStack>
//             </SimpleGrid>
//           </Center>
//         </ContainerBorder>
//       </Box>
//       <ContainerBorder pt="14" pb="8" px="4" borderBottom="1px">
//         <Center>
//           <Heading size="2xl">Past Editions</Heading>
//         </Center>
//       </ContainerBorder>
//       <Box>
//         <ContainerBorder py={{ base: '16', sm: '20' }} px="4">
//           <SimpleGrid spacingY="12" spacingX="6" columns={{ base: 1, md: 2, lg: 3 }}>
//             {pageData?.editions.slice(1).map(edition => (
//               <VStack key={edition.title} spacing="3">
//                 <NextImage
//                   width={336}
//                   height={435}
//                   src={urlForImage(edition.thumbnail).url()}
//                   placeholder="blur"
//                   blurDataURL={edition?.thumbnail?.metadata?.lqip}
//                   alt={edition?.title ?? 'Rookery edition'}
//                 />
//                 <Flex maxW={336} flexDir="row" w="full" justify="space-between">
//                   <Text fontSize="lg" fontWeight="medium">
//                     {edition?.title}
//                   </Text>
//                   <Link
//                     fontWeight="md"
//                     textDecor="underline"
//                     textDecorationColor="primaryRed"
//                     textUnderlineOffset="3px"
//                     href={edition?.link}
//                     isExternal
//                   >
//                     Read Edition
//                   </Link>
//                 </Flex>
//               </VStack>
//             ))}
//           </SimpleGrid>
//         </ContainerBorder>
//       </Box>
//     </Flex>
