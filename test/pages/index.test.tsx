import React from 'react';
import { render } from '../testUtils';
import Home from '../../pages/index';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: { en: 'en', 'zh-HK': 'zh-hk' },
}));

describe('Home page', () => {
  it('matches snapshot', async () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
