import { UserActionTypes } from './user.types.js';

export const setCurrentUser = user => ({
  type: UserActionTypes, // same as reducer type
  payload: user
});
