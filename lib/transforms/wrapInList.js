
/**
 * Wrap the block in a new list.
 *
 * @param  {PluginOptions} opts
 * @param  {Slate.Transform} transform
 * @param  {String} listType
 * @return {Transform} transform
 */
function wrapInList(opts, transform, listType) {
    return transform
        .wrapBlock(listType)
        .wrapBlock(opts.typeItem);
}

module.exports = wrapInList;
