const expect = require('expect');

module.exports = function(plugin, state) {
    const initialText = state.startBlock.text;
    const initialSelection = state.selection;

    state = plugin.transforms.wrapInList(state.transform(), "list_ol").apply();

    state = state.transform().undo().apply();

    // Back to previous cursor position
    expect(state.startBlock.text).toEqual(initialText);
    expect(state.selection.toJS()).toEqual(initialSelection.toJS());

    return state;
};
