import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native';

import Badges from '.';

test('should render badges with correct background color and type when type prop is passed', async () => {
  const type = 'normal';
  const bgColor = '#B5B9C4';
  const { getByTestId, getByText } = render(<Badges type={type} />);

  const badgesComponent = getByTestId('badge');
  expect(badgesComponent.props.style).toContainEqual({
    backgroundColor: bgColor,
  });
  expect(getByText(type)).toBeTruthy();
});
