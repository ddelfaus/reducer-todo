

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589

    }
]




export const todoReducer = (state, action) => {

    switch (action.type) {
        case "add":
          return { 
            ...state,
            item: action.payload,
            completed: false,
            id: Date.now()
        };
        // case "DECREASE":
        //   return { ...state, count: state.count - 1 };
        // case "SET_NAME":
        //   return { ...state, name: action.payload };
        default:
          throw new Error("No action matched!");
      }

      return state;
}



