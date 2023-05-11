'use client'
import { container } from '@/constants/animation'
import { motion } from 'framer-motion'
import { TypographyP } from './typography'
import { QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    quote:
      'There’s a map of it in each book, but the scale is just mind-boggling. It’s 650 miles just from Castle Black to Winterfell, let alone all the way to King’s Landing (2110 miles). And they don’t even have cars!',
    author: 'Alex Wiltshire',
    position: 'Mojang Publishing Editor',
  },
  {
    quote:
      'There’s a map of it in each book, but the scale is just mind-boggling. It’s 650 miles just from Castle Black to Winterfell, let alone all the way to King’s Landing (2110 miles). And they don’t even have cars!',
    author: 'Alex Wiltshire',
    position: 'Mojang Publishing Editor',
  },
  {
    quote:
      'There’s a map of it in each book, but the scale is just mind-boggling. It’s 650 miles just from Castle Black to Winterfell, let alone all the way to King’s Landing (2110 miles). And they don’t even have cars!',
    author: 'Alex Wiltshire',
    position: 'Mojang Publishing Editor',
  },
]

export const Testimonials = () => {
  return (
    <div className="bg-primaryRed w-full relative bg-square-pattern">
      <div className="mx-auto py-10 md:py-12 px-2 md:px-4">
        <motion.div
          className="flex flex-col lg:flex-row w-full justify-between items-center divide-x"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3 }}
        >
          {testimonials.map(testi => (
            <motion.div
              key={testi.quote}
              className="flex mx-auto flex-col gap-6 lg:gap-10 text-white w-full max-w-xl px-6 py-4 relative items-center justify-center"
            >
              <div className="relative">
                <QuoteIcon className="rotate-180" />
                <TypographyP>{testi.quote}</TypographyP>
                <QuoteIcon className="ml-auto" />
              </div>
              <div className="text-center lg:text-right w-full">
                <TypographyP>{`- ${testi.author}`}</TypographyP>
                <TypographyP>{testi.position}</TypographyP>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
