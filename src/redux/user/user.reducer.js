import { UserActionTypes } from './user.types.js';

const INITIAL_STATE = {
  currentUser: null
};

/**
 *
 * @param  state redux passes this state
 * @param {*} action
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes:
      return {
        ...state,
        currentuser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
