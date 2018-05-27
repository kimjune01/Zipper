

export const zip = (isZipped) => dispatch => {
  dispatch({
   type: 'ZIP',
   zipped: isZipped
  })
}
