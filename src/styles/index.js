const getRandomColor = (light = 95) => {
  return `hsl(${Math.random() * 360}, 40%, ${light}%)`;
};

export default {
  wrapper: {
    minHeight: '100vh',
    minWidth: 758,
    backgroundImage: `linear-gradient(to bottom right,
      ${getRandomColor(98)}, ${getRandomColor(96)})`,
    paddingLeft: 'calc(100vw - 100%)',
    paddingRight: 0,
  },
  wrapperGrid: {
    display: 'grid',
    justifyItems: 'center',
    padding: '20px 0 75px 0',
    minWidth: 718,
  },
  gridFormAndCalendar: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    backgroundColor: '#fff',
    padding: '25px 30px 0 30px',
    borderRadius: 5,
    border: '1px solid #bbb',
    boxShadow: '1px 1px 5px #9e9e9ee0',
  },
  wrapperList: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: '25px 30px 5px 30px',
    borderRadius: 5,
    border: '1px solid #bbb',
    boxShadow: '1px 1px 5px #9e9e9ee0',
  },
  topLine: {
    position: 'relative',
    top: -9,
    height: 1,
    backgroundColor: '#bbb',
    marginLeft: 75,
    width: 440,
  },
  gridRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    alignItems: 'start',
  },
  textFieldInput: {
    fontSize: 20,
    marginTop: -18,
  },
  textFieldLabel: {
    margin: '-18px 0 0 10px',
  },
  textFieldHelperText: {
    fontSize: 8,
  },
  displayNone: {
    display: 'none',
  },
  storageWrapper: {
    position: 'fixed',
    bottom: 10,
    left: 'calc(100vw - 370px)',
    width: 320,
    boxShadow: '1px 1px 15px #5e5e5ee0',
  },
  storage: {
    padding: 10,
    backgroundColor: '#cccccc',
    display: 'grid',
    width: 300,
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
  },

  buildVerticalGridItems: (min = 'auto', max = 'auto') => {
    if (min !== 'auto') min += 'px';
    if (max !== 'auto') max += 'px';
    return {
      display: 'grid',
      gridAutoRows: `minmax(${min}, ${max})`,
    }
  },

  buildTextField: isEdit => ({
    width: isEdit ? 380 : 444,
    padding: '0 10px',
  }),

  buildPaddingTop: paddingTop => ({
    paddingTop: paddingTop,
  }),

  buildRowText: (status, isHidden) => Object.assign(
    {
      fontSize: 20,
      width: 444,
      cursor: 'pointer',
      padding: '0 10px',
    },
    status ?
      {
        color: '#bbb',
        textDecorationLine: 'line-through',
      } :
      {},
    isHidden ?
      {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      } :
      {
        whiteSpace: 'pre-line',
        overflowWrap: 'break-word',
        padding: '0 10px 7px 10px',
      },
  ),

  buildCalendar: isShow => ({
    display: isShow ? 'block' : 'none',
    position: 'absolute',
    zIndex: 1,
    top: 95,
    left: 'calc(((100vw - 100%) / 2) + 50% + 50px)',
    backgroundImage: 'linear-gradient(to bottom, #fff 70%, #d2e9f5)',
    border: 'solid 1px grey',
    borderRadius: 5,
    boxShadow: '3px 3px 7px grey',
  }),

  hiddenOverflow: () => document.body.style.overflow = 'hidden',
  autoOverflow: () => document.body.style.overflow = 'auto',

  buildModal: isShow => ({
    display: isShow ? 'block' : 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#aaaaaabb',
  }),
};
