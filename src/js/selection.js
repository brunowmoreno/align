let CURRENT_SELECTION = null;
let TEXT_RANGE = null;
let RANGE = null;

class Selection {
  set textRange(range) {
    if (!range) return;
    TEXT_RANGE = range;
  }

  get textRange() {
    return TEXT_RANGE;
  }

  set range(range) {
    if (!range) return;
    RANGE = range;
  }

  get range() {
    return RANGE;
  }

  set current(selection) {
    CURRENT_SELECTION = selection;
  }

  get current() {
    return CURRENT_SELECTION;
  }

  static selectTextRange(range = Selection.textRange) {
    if (!range) return;
    console.log(range)
    const sel = Selection.current = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  static updateSelectedRange() {
    const sel = Selection.current = window.getSelection();
    if (sel.rangeCount && sel.anchorNode.nodeType === 3) {
      Selection.textRange = sel.getRangeAt(0);
    }
    if (sel.rangeCount) {
      Selection.range = sel.getRangeAt(0);
    }
  }
}

export default Selection;
