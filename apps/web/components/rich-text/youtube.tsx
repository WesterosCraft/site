import React from 'react'
import ReactPlayer from 'react-player'

export const YouTubePlayer: React.FC<{
  videoID?: string
}> = ({ videoID }) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/embed/${videoID}`}
      width="100%"
      height="100%"
      controls={true}
      className="youtubeContainer"
    />
  )
}
