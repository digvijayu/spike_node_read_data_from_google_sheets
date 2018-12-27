import { defaultPalette } from './../constants/vars';

let defaultStyle = {
  backgroundColor: defaultPalette.mainBlue,
  color: defaultPalette.white,
  fontFamily: defaultPalette.appFontLight,
  padding: '1.125rem',
  height: '100%',
  overflow: 'scroll'
};

export let pageStyle = theme => ({
  ...defaultStyle,
  ...theme.page
});
