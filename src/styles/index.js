const getRandomColor = (light = 95) => {
  return `hsl(${Math.random() * 360}, 40%, ${light}%)`;
};

export default {
  wrapper: {
    minHeight: '100vh',
    paddingLeft: '18px',
    paddingRight: 'calc(100% - 100vw + 18px)',
    backgroundImage: `linear-gradient(to bottom right,
      ${getRandomColor(98)}, ${getRandomColor(96)})`,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    justifyItems: 'center',
    gridGap: 20,
  },
  wrapperNotes: {
    width: 718,
    padding: '20px 0',
  },
  wrapperForm: {
    height: 57,
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
  wrapperOptions: {
    width: 274,
    padding: '20px 20px 20px 0',
  },
  topOffset: {
    height: 26,
  },
  containerOptions: {
    position: 'sticky',
    top: 20,
  },
  wrapperMenu: {
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderStyle: 'none solid solid solid',
    borderWidth: 1,
    borderRadius: '0 0 5px 5px',
    boxShadow: '1px 1px 5px #9e9e9ee0',
  },
  textBold: {
    fontWeight: 'bold',
  },
  displayNone: {
    display: 'none',
  },
  wrapperCalendar: {
    marginTop: 20,
    width: 272,
    height: 320,
    backgroundColor: '#fff',
    borderRadius: 5,
    border: '1px solid #bbb',
    boxShadow: '1px 1px 5px #9e9e9ee0',
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

  hiddenOverflow: () => document.body.style.overflow = 'hidden',
  autoOverflow: () => document.body.style.overflow = 'auto',
};
