import { LayoutProps } from '@/.next/types/app/layout'

export async function generateStaticParams() {
  const regions = [
    'beyond-the-wall',
    'reach',
    'stormlands',
    'crownlands',
    'westerlands',
    'iron-islands',
    'vale',
    'north',
    'the-wall',
    'riverlands',
    'dorne',
  ]

  return regions?.map((region: string) => ({
    region,
  }))
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>
}
