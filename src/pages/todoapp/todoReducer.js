export const todoReducer = (state = [], action) => {
  switch (action.type) {

    case 'add':
      return [...state, action.payload];
    
    case 'delete':
      let filtered = state.filter( task => 
        task !== action.payload );
      return filtered
      

    case 'toggle':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });


    default:
      return state;
  }
};
