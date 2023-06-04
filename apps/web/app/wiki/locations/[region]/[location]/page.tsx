import { RichText } from '@/components/rich-text/rich-text'
import { fetchLocationBySlug, fetchLocationsByRegion } from '@/lib/payload'
import { Location } from '@/types/payload-types'

interface Params {
  params: {
    region: string
    location: string
  }
}

export async function generateStaticParams({ params }: Params) {
  const { region } = params

  const locations = await fetchLocationsByRegion(region)

  return locations?.map((location: Location) => ({
    location: location.slug,
  }))
}

export default async function LocationPage({ params }: Params) {
  const { location } = params
  const data = await fetchLocationBySlug(location)

  return (
    <div>
      {data?.locationName && (
        <header className="mb-9 space-y-1">
          {data?.locationName && (
            <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
              {data?.locationName}
            </h1>
          )}
        </header>
      )}

      <RichText content={data.layout?.[0].columns?.[0].richText} />
    </div>
  )
}
