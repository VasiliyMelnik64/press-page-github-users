import { combineReducers } from 'redux';
import { usersReducer as users } from '../modules/users/users-slice';
import { themesReducer as themes } from '../modules/themes/themes-slice';

export const rootReducer = combineReducers({
  users,
  themes,
});
