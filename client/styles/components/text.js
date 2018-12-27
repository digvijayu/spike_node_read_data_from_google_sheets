import { defaultPalette } from './../constants/vars';

let defaultTextLight = {};

let defaultSoftError = {};

let defaultHardError = {};

export let textLightStyle = theme => ({
  ...defaultTextLight,
  ...theme.textLight
});

export let softErrorStyle = theme => ({
  ...defaultSoftError,
  ...theme.softError
});

export let hardErrorStyle = theme => ({
  ...defaultHardError,
  ...theme.hardError
});
