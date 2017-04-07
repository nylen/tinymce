/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*eslint no-console:0 */

define(
  'tinymce.themes.mobile.demo.Demo',
  [
    'tinymce.core.EditorManager',
    'tinymce.plugins.advlist.Plugin',
    'tinymce.plugins.lists.Plugin',
    'tinymce.themes.mobile.Theme'
  ],
  function (EditorManager, AdvListPlugin, ListsPlugin, Theme) {
    return function () {
      Theme();
      AdvListPlugin;
      ListsPlugin;

      EditorManager.init({
        selector: '.tiny-text',
        theme: 'mobile',
        plugins: 'advlist lists',
        plugins_url: '../../../../../js/plugins/',
        content_css_url: '../../main/css',
        skin_url: '../../../../../skins/lightgray/dist/lightgray'
      });
    };
  }
);
