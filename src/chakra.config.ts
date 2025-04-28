import { extendTheme } from '@chakra-ui/react';
import { defaultExtension, radioTheme, switchTheme, checkboxTheme } from './chakra-core.config';

const mwTheme = extendTheme(defaultExtension, {
  components: { Switch: switchTheme, Radio: radioTheme, Checkbox: checkboxTheme },
});

export default mwTheme;
