import { defaultPalette } from './../constants/vars';

let defaultStyle = {};

let infoPanelDefaultStyle = {};

export let panelStyle = theme => ({ ...defaultStyle, ...theme.panel });
export let infoPanelStyle = theme => ({
  ...infoPanelDefaultStyle,
  ...theme.infoPanel
});
