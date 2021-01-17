import React, {useReducer, useContext} from 'react';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import { 
    SET_PROFILE, 
    CLEAR_PROFILE
} from '../types';

import request from '../../utils/axios-config';

// get the auth context
import AuthContext from '../auth/authContext';

const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}

const ProfileState = props => {
  const initialState = {
    profile: null,
    fetchingProfile: true,
  };

  const [ state, dispatch ] = useReducer(profileReducer, initialState);

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const makeProfile = async (formData) => {
    const response = await request.post('/api/profiles/create', formData, config)
    console.log('This is the created profile:', response.data)
    dispatch({
      type: SET_PROFILE,
      payload: response.data
    });
  }

  const getMyProfile = async () => {
    const response = await request.get(`/api/profiles/me`);
    dispatch({
      type: SET_PROFILE,
      payload: response.data
    })
  }

  const clearProfile = async () => {
    // this will be a dispatch to clear the profile state out
    dispatch({
      type: CLEAR_PROFILE
    })
  }

  // this will be a mix of the getProfile method and the loadUser method
  const loadMyUserAndProfile = async() => {
    await loadUser();
    const res = await request.get('/api/profiles/myprofile');
    dispatch({
      type: SET_PROFILE,
      payload: res.data
    })
  }

  return(
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        fetchingProfile: state.fetchingProfile,
        makeProfile,
        getMyProfile,
        clearProfile,
        loadMyUserAndProfile,
      }}>
        { props.children }
    </ProfileContext.Provider>
  )
}

export default ProfileState;