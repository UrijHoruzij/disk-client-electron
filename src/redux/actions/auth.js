import { authApi } from "../../core/api";
import {core} from "../../core";
import {userActions} from "./";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  setIsAuth: (bool) => ({
    type: "USER:SET_IS_AUTH",
    payload: bool,
  }),

  fetchUserLogin: (postData) => async (dispatch) => {
    try {
      const data = await authApi.signIn({...postData});
      dispatch(Actions.setIsAuth(true));
      dispatch(userActions.getInfo(data));
      dispatch(userActions.getMe(core.GetAuthUser()));
      return data;
    } catch (error){
      console.error(error);
    }
  },

  fetchUserRegister: (postData) => async () => {
    try {
      const data = await authApi.signUp({...postData});
      return data;
    } catch (error){
      console.error(error);
    }
  },

  refresh: () => async (dispatch)=>{
    try{
      const data = await authApi.refresh();
      dispatch(Actions.setIsAuth(true));
      dispatch(userActions.getInfo(data));
      dispatch(userActions.getMe(core.GetAuthUser()));
      return data;
    }catch (error){
      console.error(error);
    }
  },

  logout: () => async (dispatch) => {
    try {
      const data = await authApi.logout();
      core.SetAccessToken('');
      dispatch(Actions.setIsAuth(false))
      return data;
    } catch (error){
      console.error(error);
    }
  }
};

export default Actions;