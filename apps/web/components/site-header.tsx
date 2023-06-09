import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export function SiteHeader() {
  return (
    <header className="w-full border-b bg-primaryDark shadow-sm backdrop-blur z-50 px-4">
      <MainNav />
      <MobileNav />
    </header>
  )
}
