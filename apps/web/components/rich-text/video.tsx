import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import { YouTubePlayer } from './youtube'

export const Video: React.FC<{
  platform?: 'youtube'
  id?: string
}> = props => {
  const { platform = 'vimeo', id } = props

  return (
    <div>
      <AspectRatio ratio={16 / 9}>
        {platform === 'youtube' && <YouTubePlayer videoID={id} />}
      </AspectRatio>
    </div>
  )
}
