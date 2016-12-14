/**
 * @param {PluginOptions} opts Plugin options
 * @param {Node} node
 * @return {Boolean} true if the node is a UL or OL
 */
function isList(opts, node) {
  return (node.type in opts.listTypes);
}

module.exports = isList;
