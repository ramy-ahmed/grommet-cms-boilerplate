/* @flow */
import React from 'react';
import FooterComponent from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';

export default function Footer(props: {
  logo: HTMLElement | React$Element<any>,
  contact: {
    copyright: string,
    email: string
  }
}) {
  const { logo, contact } = props;
  return (
    <FooterComponent primary colorIndex="brand">
      <Box direction="row" pad="large" full="horizontal">
        <Box justify="center">
          {logo}
        </Box>
        <Box flex justify="center">
          <Heading align="center" tag="h3">{contact.copyright}</Heading>
        </Box>
        <Box justify="center">
          <Anchor align="center" href={`mailto:${contact.email}`}>{contact.email}</Anchor>
        </Box>
      </Box>
    </FooterComponent>
  );
}
