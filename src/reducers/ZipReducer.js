
export default (state = {}, action) => {
 switch (action.type) {
   case 'ZIP':
    return {
     zipped: action.zipped
    }
  default:
   return state
 }
}
