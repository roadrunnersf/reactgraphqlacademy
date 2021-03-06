import React from 'react'
import { H2 } from 'src/components/text'
import Box from '../layout/Box'
import PostCard from './PostCard'
import { LinkButton } from '../buttons'

const LearningResources = ({ posts = [], type = '' }) => {
  return (
    <React.Fragment>
      <H2>Latest {type} Blogs</H2>
      <Box mt={5}>
        {posts.slice(0, 3).map(post => (
          <PostCard
            post={post}
            imageProps={{
              objectFit: 'cover',
              width: '100%',
              maxHeight: '8rem',
            }}
          />
        ))}
      </Box>
      <LinkButton to="/blog">Read blog</LinkButton>
    </React.Fragment>
  )
}

export default LearningResources
