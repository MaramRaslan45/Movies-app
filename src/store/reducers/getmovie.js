const INITIAL_STATE = [];
export function getmoviereducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "Get_Movie":
      return action.payload;


    default:
      return state;
  }
}