import {
  SET_PROFILE,
  CLEAR_PROFILE,
  FETCHING_PROFILE
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      }
    case FETCHING_PROFILE:
      return {
        ...state,
        fetchingProfile: true,
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      }
    default:
      return state
  }
}
