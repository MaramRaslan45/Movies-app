const INITIAL_STATE = [];
export function addfavoritereducer(state = INITIAL_STATE, action) {
 
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];

    case "REM_FAVORITE":
      return [...state.filter((movie) => movie.id !== action.payload)];

    default:
      return state;
  }
}
