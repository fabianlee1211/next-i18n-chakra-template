import { extendTheme } from '@chakra-ui/react';

const breakpoints = ['40em', '52em', '64em'];

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  breakpoints,
});

export default theme;
