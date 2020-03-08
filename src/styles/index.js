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
  wrapperForm: {
    backgroundColor: '#fff',
    padding: '25px 94px 5px 30px',
    borderRadius: 5,
    border: '1px solid #bbb',
  },
  wrapperList: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: '25px 30px 5px 30px',
    borderRadius: 5,
    border: '1px solid #bbb',
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

  // buildColorSVG: ({ disabled, status }) => {
  //   return status ?
  //     (disabled ? 'darkgreen' : 'green') :
  //     (disabled ? 'grey' : 'black');
  // },
};
