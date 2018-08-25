export default (state = {}, action) => {
   switch (action.type) {
      case 'LOGIN_USER':
         return {
            ...state,
            token: action.token
         }
      default:
         return state
   }
}
