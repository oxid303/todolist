export default {
  wrapper: {
    minHeight: '100vh',
    minWidth: 758,
    backgroundImage: 'linear-gradient(to bottom right, #f6f9fa, #e0f2f1)',
    // backgroundImage: 'linear-gradient(to bottom right, #e0e9f2, #e0f2f1)',
    // backgroundImage: 'linear-gradient(to bottom right, #e0f2f1, #e0e9f2)',
    marginLeft: 'calc(100vw - 100%)',
    marginRight: 0,
  },
  wrapperGrid: {
    padding: '20px 0',
    minWidth: 718,
    display: 'grid',
    justifyItems: 'center',
  },
  grid92: {
    display: 'grid',
    justifyItems: 'left',
    gridAutoRows: 'minmax(92px, auto)',
  },
  wrapperFormAndCalendar: {
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
  grid52: {
    display: 'grid',
    gridAutoRows: 'minmax(52px, auto)',
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

  buildTextField: (isEdit) => ({
    width: isEdit ? 380 : 444,
    padding: '0 10px',
  }),

  buildPaddingTop: (paddingTop) => ({
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

  buildModal: (isShow) => ({
    display: isShow ? 'block' : 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: '#ffffff00', /* Fallback color */
    backgroundColor: '#aaaaaabb', /* Black w/ opacity */
  }),

  // buildColorSVG: ({ disabled, status }) => {
  //   return status ?
  //     (disabled ? 'darkgreen' : 'green') :
  //     (disabled ? 'grey' : 'black');
  // },
};
