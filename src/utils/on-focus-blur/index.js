export default (onBlurCallback) => {
  let timeOut = null;

  return {
    onFocus: () => {
      clearTimeout(timeOut);
    },

    onBlur: () => {
      timeOut = setTimeout(() => {
        onBlurCallback();
      });
    },
  };
};
