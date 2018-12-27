import test from 'ava';
import { generateTheme } from './../../styles/Theme';

test('should return the default theme', t => {
  let expected = generateTheme();
  t.deepEqual(expected, {
    button: {},
    buttonDisabled: {},
    buttonLightBorder: {},
    buttonTransparent: {},
    page: {
      backgroundColor: '#009ace',
      color: '#ffffff',
      fontFamily: '"Source Sans Pro-normal", "Trebuchet MS", sans-serif',
      height: '100%',
      overflow: 'scroll',
      padding: '1.125rem'
    },
    panel: {},
    textLight: {},
    infoPanel: {},
    softError: {},
    hardError: {},
    images: {
      appLogo: '/images/lyk_my_account_logo.png',
      lykCardImage: '/images/lyk-card.svg',
      plusIconImage: '/images/lyk_my_account_plus_black.svg'
    }
  });
});

test('should return custom theme', t => {
  let expected = generateTheme({
    button: {
      backgroundColor: '#ffffff'
    }
  });
  t.deepEqual(expected, {
    button: {
      backgroundColor: '#ffffff'
    },
    buttonDisabled: {},
    buttonLightBorder: {
      backgroundColor: '#ffffff'
    },
    buttonTransparent: {
      backgroundColor: '#ffffff'
    },
    page: {
      backgroundColor: '#009ace',
      color: '#ffffff',
      fontFamily: '"Source Sans Pro-normal", "Trebuchet MS", sans-serif',
      height: '100%',
      overflow: 'scroll',
      padding: '1.125rem'
    },
    panel: {},
    textLight: {},
    infoPanel: {},
    softError: {},
    hardError: {},
    images: {
      appLogo: '/images/lyk_my_account_logo.png',
      lykCardImage: '/images/lyk-card.svg',
      plusIconImage: '/images/lyk_my_account_plus_black.svg'
    }
  });
});
