/* @flow */
import React from 'react';
import Box from 'grommet/components/Box';
import ColorTypeList from '../Shared/ColorTypeList';

export default function Component(props: {
  color: {
    name: string,
    hex: string
  }
}) {
  const { color } = props;
  return (
    <Box>
      <Box
        style={{ backgroundColor: color.hex }}
        size={{ height: 'xsmall', width: 'small' }}
      />
      <ColorTypeList
        color={color}
      />
    </Box>
  );
}

