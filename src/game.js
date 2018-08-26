/**
 * 这个 game 文件主要放置一些状态和逻辑代码。
 * 比如 knightPosition 存储 knight 的位置
 * observe 用于设置observer 也就是组件实例，并且调用 emitChange 来触发重新渲染。
 * emitChange 主要是调用 react的渲染方法，根据存储的状态重新渲染组件。
 * moveKnight 用于改变 knight 的状态。
 */

/*
// 雏形，随机生成马的位置
export function observe(receive) {
  setInterval(
    () =>
      receive([Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)]),
    500
  );
}
*/

let knightPosition = [1, 7];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
  if (observer) {
    emitChange();
  } else {
    observer = o;
    emitChange();
  }
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 1 && Math.abs(dy) === 2) ||
    (Math.abs(dx) === 2 && Math.abs(dy) === 1)
  );
}
