import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Component from './main';

test('jest checking: testing @myscope/ui--component-1', () => {
  const { container } = render(<Component />);
  screen.debug(container);
  console.log('xxxxxxxxxx testing @myscope/ui--component-1');
  expect(1).toEqual(1);
});
