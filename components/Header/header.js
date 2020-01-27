import React from 'react';
import styled from 'styled-components';

import './header.scss';

const SampleHeader = styled.h2`
  color: hotpink;
  font-weight: bold;
  font-size: 2rem;
`;

const Header = () => (
  <header>
    <SampleHeader>Custom Header Component</SampleHeader>
  </header>
);

export default Header;
