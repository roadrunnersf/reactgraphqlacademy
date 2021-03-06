import React from 'react'
import Box from '../layout/Box'
const Blockquote = ({ children, ...rest }) => <Box {...rest}>"{children}"</Box>

Blockquote.defaultProps = {
  fontStyle: 'italic',
  box: 'span',
  lineHeight: 4,
}

export default Blockquote
