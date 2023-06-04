import { fetchLocationsByRegion } from '@/lib/payload'
import { titleize } from '@/lib/utils'

interface Params {
  params: {
    region: string
  }
}

export default async function RegionPage({ params }: Params) {
  const { region } = params
  const locations = await fetchLocationsByRegion(region)

  return (
    <div>
      <h1>{titleize(region)}</h1>
      <ul>
        {locations.map(location => {
          return <li key={location.slug}>{location.locationName}</li>
        })}
      </ul>
    </div>
  )
}
