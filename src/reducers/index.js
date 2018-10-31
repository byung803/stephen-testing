import { combineReducers } from 'redux';

const comments = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_COMMENT':
            return [
                ...state,
                action.comment
            ]
        default:
            return state;
    }
}

const reducer = combineReducers({
    comments
})

export default reducer;