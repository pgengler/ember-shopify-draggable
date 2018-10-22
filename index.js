'use strict';
var path = require('path');
var map = require("broccoli-stew").map;
var Funnel = require("broccoli-funnel");
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-shopify-draggable',

  treeForVendor(defaultTree) {
    var path = path.dirname(require.resolve('@shopify/draggable/lib/draggable.bundle.js'));
    var browserVendorLib = new Funnel(path, {
      files: ['draggable.bundle.js'],
      destDir: 'draggable'
    });

    browserVendorLib = map(browserVendorLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new mergeTrees([defaultTree, browserVendorLib]);
  },

  included(app) {
    app.import('vendor/draggable/draggable.bundle.js');
  }
};
