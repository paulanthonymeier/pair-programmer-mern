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
        // profileComplete: true
      }
    case FETCHING_PROFILE:
      return {
        ...state,
        fetchingProfile: true,
        // otherProfile: null
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        // profileComplete: null
      }
    default:
      return state
  }
}
