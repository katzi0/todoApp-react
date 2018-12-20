import {ADD_TODO, TOGGLE_TODO} from "../actionTypes";

const initalState = {
    allIds: [],
    byIds: {}
}

export default function (state = initalState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const {id, content} = action.payload;

            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {content, isCompleted: false}
                }
            }
        }
        case TOGGLE_TODO: {
            const {id} = action.payload;
            return {
                ...state,
                byIds: {
                    [id]: {...state.byIds[id], isCompleted:!state.byIds[id].isCompleted}
                }
            }
        }
        default:
            return state
    }
}
