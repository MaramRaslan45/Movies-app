
export function getpagereducer(state = 1, action) {
  switch (action.type) {
    case "Inc_Page":
      return state+1;

    case "Dec_Page":
      return state - 1;

    default:
      return state;
  }
}
