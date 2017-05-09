let knightPosition = [1, 7];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

module.exports = {
  observe(o){
    if(observer) {
      throw new Error('Multiple observers not implemented.');
    }

    observer = o;
    emitChange();
  },

  canMoveKnight(toX, toY){
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return  (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2);
  },

  moveKnight(toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
  }
}
