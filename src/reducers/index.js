export default (state = {}, action) => {
   switch (action.type) {
      case 'GET_TOKEN':
         return {
            ...state,
            token: action.token
         }
      default:
         return state
   }
}
