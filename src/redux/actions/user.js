import { userApi } from "../../core/api";
import {core} from "../../core";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),

  getMe: (idUser) => async (dispatch) => {
    try{
      const data = await userApi.getMe(idUser);
      dispatch(Actions.setUserData(data))
      core.SetUser(data.id)
      return data;
    }catch (error){
      console.error(error);
    }
  },
  
  getInfo: (data) => async (dispatch) => {
    const info = {
      name: data.name,
      lastname: data.lastname
    }
    dispatch(Actions.setUserData(info))
  } 
};

export default Actions;