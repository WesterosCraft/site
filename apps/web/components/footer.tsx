import Image from 'next/image'
import Link from 'next/link'
import { TypographyP } from './typography'
import { Separator } from './ui/separator'

export const Footer = () => {
  return (
    <footer className="bg-primaryDark py-12 px-4 md:px-8 text-white">
      <div className="flex flex-col max-w-7xl mx-auto gap-10 divide-solid">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-28">
          <div className="flex flex-col align-start gap-4">
            <Image
              src="/westeroscraft.svg"
              alt="WesterosCraft Logo"
              width={176}
              height={24}
              priority
            />
            <a href="mailto:westeroscraft@gmail.com">westeroscraft@gmail.com</a>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <LinkGrid />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <TypographyP>
            WesterosCraft is a free, volunteer fan project not affiliated in any way with GRRM,
            Mojang, or HBO.
          </TypographyP>
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  )
}

const LinkGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3">
    <div className="min-w-[130px]">
      <TypographyP className="mb-3">About</TypographyP>
      <div className="flex flex-col gap-2">
        <Link href="/about">About Us</Link>
        <Link href="/progress">Progress</Link>
        <Link href="/rookery">The Rookery</Link>
      </div>
    </div>
    <div className="min-w-[130px]">
      <TypographyP className="mb-3">Community</TypographyP>
      <div className="flex flex-col gap-2">
        <a target="_blank" href="https://forum.westeroscraft.com/forum/">
          Forums
        </a>
        <a
          target="_blank"
          href="https://forum.westeroscraft.com/form/builder-application-form.3/select"
        >
          Apply
        </a>
        <a target="_blank" href="https://discord.com/invite/pBS5TH4">
          Discord
        </a>
      </div>
    </div>
    <div className="min-w-[130px]">
      <TypographyP className="mb-3">Resources</TypographyP>
      <div className="flex flex-col gap-2">
        <Link href="/wiki">Wiki</Link>
        <a target="_blank" href="http://mc.westeroscraft.com/">
          Map
        </a>
        <a target="_blank" href="https://ko-fi.com/westeroscraft">
          Donate
        </a>
      </div>
    </div>
  </div>
)

const SocialMediaLinks = () => (
  <div className="flex flex-row gap-2">
    <a target="_blank" href="https://discord.gg/pBS5TH4" aria-label="Discord">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 192 192"
        fill="none"
      >
        <path
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="12"
          d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"
        />
        <ellipse cx="71" cy="101" fill="#ffffff" rx="13" ry="15" />
        <ellipse cx="121" cy="101" fill="#ffffff" rx="13" ry="15" />
      </svg>
    </a>
    <a target="_blank" href="https://twitter.com/westeroscraft" aria-label="Twitter">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    </a>
    <a target="_blank" href="https://www.instagram.com/westeroscraft" aria-label="Instagram">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    </a>
    <a target="_blank" href="https://www.youtube.com/user/WesterosCraft" aria-label="Youtube">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
      </svg>
    </a>
  </div>
)
