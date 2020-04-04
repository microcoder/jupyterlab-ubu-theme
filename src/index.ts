import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for jupyterlab-ubu-theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-ubu-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = 'jupyterlab-ubu-theme/index.css';

    manager.register({
      name: 'jupyterlab-ubu-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
