import React from 'react'
import styled from 'styled-components'
import withLazyLoad from './withLazyLoad'

const IframeWrapper = styled.div`
  > iframe {
    border: 0;
    ${props => `height: ${props.height}px;`}
  }
  > div {
    margin-top: -15px;
    margin-bottom: 20px;
  }
`

const Video = ({ youtubeId, time, description, height = '390' }) => (
  <IframeWrapper height={height}>
    <iframe
      title={description}
      width="100%"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&showinfo=0&wmode=opaque${
        time ? `&start=${time}` : ''
      }`}
    />
    {description ? <div>{description}</div> : null}
  </IframeWrapper>
)

export default withLazyLoad()(Video)
