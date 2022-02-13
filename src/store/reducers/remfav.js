export function removefavoritereducer(state = [], action) {
  console.log("red deleted")
  switch (action.type) {
    case "REM_FAVORITE":
      return   state.filter((movie)=> movie.Id!==action.payload.id)
      
     
    default:
        return state;
        
     
    }
  }
  

