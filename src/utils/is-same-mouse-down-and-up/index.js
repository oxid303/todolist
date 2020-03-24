export default () => {
  let mouseDownX = 0;
  let mouseDownY = 0;
  let mouseUpX = 0;
  let mouseUpY = 0;

  return (e) => {

    if (e.type === 'mousedown' && e.button === 0) {
      mouseDownX = e.nativeEvent.x;
      mouseDownY = e.nativeEvent.y;
    }
    if (e.type === 'mouseup' && e.button === 0) {
      mouseUpX = e.nativeEvent.x;
      mouseUpY = e.nativeEvent.y;

      if (mouseDownX === mouseUpX && mouseDownY === mouseUpY) {
        return true;
      }
    }
  }
};
