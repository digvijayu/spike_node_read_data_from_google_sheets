import { defaultPalette } from './../constants/vars';

let defaultStyle = {};

let disabledButtonStyle = {};

const lightBorderButtonStyle = {};

const buttonTransparentStyle = {};

export let buttonStyle = theme => ({ ...defaultStyle, ...theme.button });
export let buttonDisabledStyle = theme => ({
  ...disabledButtonStyle,
  ...theme.buttonDisabled
});
export let buttonLightBorder = theme => ({
  ...defaultStyle,
  ...theme.button,
  ...lightBorderButtonStyle
});
export let buttonTransparent = theme => ({
  ...defaultStyle,
  ...theme.button,
  ...buttonTransparentStyle
});
