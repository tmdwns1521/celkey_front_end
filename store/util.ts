import useUserInfoStore from "./useUserInfoStore";
import base64 from "base-64";

export const setUserInfoFromToken = (token: string) => {
  const setUserInfo = useUserInfoStore.getState().setUserInfo;
  const payload = token.split('.')[1];
  const decodingInfo = base64.decode(payload);
  const userInfo = JSON.parse(decodingInfo);
  setUserInfo(userInfo);
};

export const clearUserInfo = () => {
  const setUserInfo = useUserInfoStore.getState().setUserInfo;
  setUserInfo(null);
};