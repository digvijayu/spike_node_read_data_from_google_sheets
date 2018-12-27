import { createTheming } from '@callstack/react-theme-provider';
import { defaultPalette, images } from './constants/vars';
import {
  buttonStyle,
  buttonDisabledStyle,
  buttonLightBorder,
  buttonTransparent
} from './components/button';
import { panelStyle, infoPanelStyle } from './components/panel';
import { pageStyle } from './pages/app-page';
import {
  textLightStyle,
  softErrorStyle,
  hardErrorStyle
} from './components/text';

export let emptyTheme = {
  button: {
    // backgroundColor: defaultPalette.accent,
    // borderColor: defaultPalette.accent,
    // color: defaultPalette.black
  },
  buttonDisabled: {},
  page: {
    // backgroundColor: defaultPalette.mainBlue,
    // color: defaultPalette.white
  },
  images: {
    // appLogo: '/images/lyk_my_account_logo.png',
    // lykCardImage: '/images/lyk-card.svg'
  },
  panel: {},
  textLightStyle: {}
};

export const generateTheme = (theme = emptyTheme) => {
  return {
    button: buttonStyle(theme),
    buttonDisabled: buttonDisabledStyle(theme),
    buttonLightBorder: buttonLightBorder(theme),
    buttonTransparent: buttonTransparent(theme),
    page: pageStyle(theme),
    panel: panelStyle(theme),
    textLight: textLightStyle(theme),
    infoPanel: infoPanelStyle(theme),
    softError: softErrorStyle(theme),
    hardError: hardErrorStyle(theme),
    images: { ...images, ...theme.images }
  };
};

const { ThemeProvider, withTheme } = createTheming(emptyTheme);
export { ThemeProvider, withTheme };
