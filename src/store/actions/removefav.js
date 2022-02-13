export const RemFav = (payload) => {
  console.log('deleted')
    return {
      type: "REM_FAVORITE",
      payload,
    };
  };
  