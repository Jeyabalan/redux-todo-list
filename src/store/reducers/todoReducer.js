import { initialState } from "../state";

export const toDoReducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.payload,
                    completed: false,
                }
            ];
        case 'DONE_DOTO':
            return state.map(list => list.id === action.payload ? { ...list, completed: true } : list);
        default:
            return state;
    }
}