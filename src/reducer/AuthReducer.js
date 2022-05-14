export default function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.encodedToken,
      };
    case "SIGNIN":
      return {
        ...state,
        isLoggedIn: false,
        token: action.payload.encodedToken,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    default:
      return {
        state,
      };
  }
}
