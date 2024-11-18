const initialBloodState = {
    records: [],
  };
  
  const bloodReducer = (state = initialBloodState, action) => {
    switch (action.type) {
      case "ADD_BLOOD_RECORD":
        return {
          ...state,
          records: [...state.records, action.payload],
        };
      default:
        return state;
    }
  };
  
  export { bloodReducer };
  