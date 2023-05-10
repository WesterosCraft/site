import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
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

// export const Hero = ({
//   copy,
//   // subheading,
//   heading1,
//   heading2,
//   outlineButton,
//   solidButton,
//   heroImageSlider,
// }: HeroProps) => {
//   return (
//     <Flex
//       height={{ base: 550, sm: 600, md: 750 }}
//       position="relative"
//       width="full"
//       justify="center"
//       flexWrap="wrap"
//       align={{ base: 'flex-end', lg: 'center' }}
//       gridAutoColumns="1fr"
//       gridColumnGap="4"
//       gridRowGap="4"
//       gridTemplateColumns="1fr 1fr"
//       gridTemplateRows="auto auto"
//       pb={{ base: '60px', lg: 'none' }}
//       bg="primaryDark"
//     >
//       <Flex
//         className="text-container"
//         justifyContent="center"
//         alignItems="center"
//         position="absolute"
//         left="auto"
//         top="auto"
//         right="0"
//         bottom={['60px', 'auto']}
//         zIndex="9"
//         width={{ base: '95%', sm: '92%', lg: '43%' }}
//         height={{ base: 'auto', lg: '400px' }}
//         bgColor="primary"
//         border="1px solid"
//         borderColor="primaryDark"
//         borderRightWidth="0"
//         padding={{ base: '20px', sm: '30px' }}
//       >
//         <Box display={{ base: 'flex', lg: 'none' }} flexWrap="wrap" className="mobile-content">
//           <MotionBox
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             // @ts-ignore
//             transition={{ delay: 0.3 }}
//             maxW="lg"
//             lineHeight="1.1"
//           >
//             <Heading
//               as="h1"
//               size="2xl"
//               lineHeight="1.1"
//               fontWeight="extrabold"
//               letterSpacing="tight"
//             >
//               {heading1}
//               {'  '}{' '}
//               <Box lineHeight="1.1" as="mark" color="primaryRed" bg="transparent">
//                 {heading2}
//               </Box>
//             </Heading>
//             <Divider borderColor="primaryDark" display={{ base: 'none', sm: 'block' }} mt="6" />
//           </MotionBox>
//           <MotionBox
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             // @ts-ignore
//             transition={{ delay: 0.5 }}
//           >
//             <Text
//               mt={4}
//               fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
//               fontWeight="medium"
//               color="gray.600"
//             >
//               {copy}
//             </Text>
//             <Stack direction={{ base: 'row' }} spacing="4" mt={{ base: '4', sm: '8' }}>
//               <NextLink href={solidButton?.internal?.slug?.current}>
//                 <Button size="md" bg="black" _hover={{ bg: 'blackAlpha.700' }} color="white">
//                   {solidButton?.linkText ?? ''}
//                 </Button>
//               </NextLink>
//               <NextLink href={outlineButton?.internal?.slug?.current} passHref>
//                 <Button
//                   variant="outline"
//                   size="md"
//                   bg="transparent"
//                   color="gray.800"
//                   borderColor="black"
//                   _hover={{
//                     backgroundColor: 'black',
//                     color: 'white',
//                   }}
//                   shadow="base"
//                 >
//                   {outlineButton?.linkText ?? ''}
//                 </Button>
//               </NextLink>
//             </Stack>
//           </MotionBox>
//         </Box>
//       </Flex>
//       <Box
//         className="hero-image"
//         position="absolute"
//         left="0"
//         top="0"
//         right="auto"
//         bottom="0"
//         width={{ base: '100%', lg: '75%' }}
//         height={{ base: '50%', md: '75%', lg: 'auto' }}
//         zIndex="5"
//       >
//         <HeroCarousel slides={heroImageSlider} />
//       </Box>

//       <Flex
//         justify="flex-end"
//         align="center"
//         zIndex="9"
//         width="85%"
//         maxWidth="1350px"
//         py={['0px', null, null, '52px']}
//       >
//         <Box display={{ base: 'none', lg: 'block' }} width="36%">
//           <MotionBox
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             // @ts-ignore
//             transition={{ delay: 0.3 }}
//             lineHeight="1.1"
//           >
//             <Heading
//               as="h1"
//               size={{ base: 'xl', xl: '2xl' }}
//               lineHeight="1.1"
//               fontWeight="extrabold"
//               letterSpacing="tight"
//             >
//               {heading1}
//               {'  '}{' '}
//               <Box lineHeight="1.1" as="mark" color="primaryRed" bg="transparent">
//                 {heading2}
//               </Box>
//             </Heading>
//             <Divider mt="6" borderColor="primaryDark" />
//           </MotionBox>

//           <MotionBox
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             // @ts-ignore
//             transition={{ delay: 0.5 }}
//           >
//             <Text mt={4} fontSize={{ base: 'lg', sm: 'xl' }} fontWeight="medium" color="gray.600">
//               {copy}
//             </Text>
//             <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
//               <NextLink href={solidButton?.internal?.slug?.current}>
//                 <Button
//                   size="lg"
//                   bg="black"
//                   _hover={{ bg: 'blackAlpha.700' }}
//                   color="white"
//                   px="8"
//                   fontSize="md"
//                 >
//                   {solidButton?.linkText ?? ''}
//                 </Button>
//               </NextLink>
//               <NextLink href={outlineButton?.internal?.slug?.current} passHref>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   bg="transparent"
//                   color="gray.800"
//                   borderColor="black"
//                   _hover={{
//                     backgroundColor: 'black',
//                     color: 'white',
//                   }}
//                   px="8"
//                   shadow="base"
//                   fontSize="md"
//                 >
//                   {outlineButton?.linkText ?? ''}
//                 </Button>
//               </NextLink>
//             </Stack>
//           </MotionBox>
//         </Box>
//       </Flex>
//       <Box
//         maxW="7xl"
//         position="absolute"
//         top="0"
//         left="auto"
//         right="auto"
//         bottom="auto"
//         h="full"
//         px={[2, null, 5]}
//         w="full"
//       >
//         <Box
//           w="full"
//           mx="auto"
//           h="full"
//           className="border"
//           borderRightWidth={{ base: '0', sm: '1.5px' }}
//           // borderTop="1.5px solid"
//           borderColor="primaryGold"
//         />
//       </Box>

//       {/* <Box
//         className="texture"
//         position="absolute"
//         height={{ base: '50%', lg: '100%' }}
//         left={{ base: '0', lg: 'auto' }}
//         right={{ base: '0' }}
//         bottom={{ base: '0' }}
//         width={{ base: 'full', lg: '25%' }}
//         top={{ base: 'auto' }}
//         backgroundColor="primaryDark"
//         borderTop="1px solid"
//         borderColor="primaryDarkGlare2"
//         // opacity=".1"
//         // pb={['0', null, null, '5']}
//       /> */}
//       {/* <Box
//           width="full"
//           height="full"
//           backgroundColor="#000000"
//           backgroundImage={`url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");`}
//         /> */}
//       {/* <WesterosOutline
//           preserveAspectRatio={isMobile ? 'xMidYMin slice' : 'xMidYMin'}
//           width="full"
//           height="full"
//         /> */}
//     </Flex>
//   );
// };

// function HeroCarousel({ slides }: { slides: HeroImageSlider[] }) {
//   const [viewportRef, embla] = useEmblaCarousel({
//     skipSnaps: false,
//     loop: true,
//     containScroll: 'trimSnaps',
//   });
//   const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

//   const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

//   const onSelect = useCallback(() => {
//     if (!embla) return;
//     setNextBtnEnabled(embla.canScrollNext());
//   }, [embla]);

//   useEffect(() => {
//     if (!embla) return;
//     onSelect();
//     embla.on('select', onSelect);
//   }, [embla, onSelect]);

//   return (
//     <>
//       <Box className="embla" position="relative" mx="auto" height="full">
//         <Box
//           className="embla__viewport"
//           ref={viewportRef}
//           overflow="hidden"
//           width="full"
//           height="full"
//         >
//           <Box
//             className="embla__container"
//             display="flex"
//             userSelect="none"
//             height="full"
//             marginLeft="-10px"
//             sx={{
//               KhtmlUserSelect: 'none',
//               WebkitTapHighlightColor: 'transparent',
//             }}
//           >
//             {slides?.map((slide, i) => (
//               <Box className="embla__slide" key={slide._key} position="relative" minWidth="full">
//                 <Box
//                   className="embla__slide__inner"
//                   position="relative"
//                   overflow="hidden"
//                   height="full"
//                 >
//                   <NextImage
//                     className="embla__slide__img"
//                     priority={i === 0}
//                     placeholder="blur"
//                     blurDataURL={slide?.slideImage?.metadata?.lqip}
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     src={urlForImage(slide?.slideImage).url()}
//                     alt={slide?.location?.title ?? 'Westeros Location'}
//                     sizes="80vw"
//                     quality={100}
//                   />
//                   <Heading
//                     display={['none', null, null, 'flex']}
//                     size="lg"
//                     color={slide?.textColor === 'dark' ? 'primaryDark' : 'white'}
//                     position="absolute"
//                     bottom="5"
//                     right="20"
//                   >
//                     {slide?.location?.title ?? ''}
//                   </Heading>
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         <IconButton
//           display={['none', null, null, 'flex']}
//           icon={<ChevronRightIcon fill="white" />}
//           borderRadius="full"
//           colorScheme="whiteAlpha"
//           aria-label="Next slide"
//           onClick={scrollNext}
//           isDisabled={!nextBtnEnabled}
//           position="absolute"
//           bottom="4"
//           right="4"
//         />
//       </Box>
//     </>
//   );
// }
