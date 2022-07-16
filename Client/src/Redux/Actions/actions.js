import { IS_AUTH } from "./action.type";

export const Authorization = (data) => ({
  type: IS_AUTH,
  payload: data,
});
