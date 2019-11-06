

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id:  Date.now()

    }
]




export const todoReducer = (state, action) => {

    switch (action.type) {
        case "add":
            console.log(action.payload, 'pay')
          return [
            ...state,
            {item: action.payload, completed: false, id: Date.now()}
    ]   
        case "toggle":
                return (
                state.map(event => {
                   
                    if (event.id === action.payload) {
                        console.log(event.completed, "toggle")
                        return {
                            ...event,
                            completed: !event.completed
                        }
                    } else {
                        return event;
                    }
                })
            )
              
    
                case "clear" :
                return state.filter(todo => !todo.completed)

      
      
      }

      return state;
}



