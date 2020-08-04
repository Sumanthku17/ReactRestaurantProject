import { createStore,combineReducers,applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from'./dishes';
import { Comments } from'./comments';
import { Promotions } from'./promotions';
import { Leaders } from'./leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Feedback } from './forms';
//form dont need reducers creators
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: Feedback
            }),
        }),
        applyMiddleware(thunk,logger)
    );
    
    return store;
}