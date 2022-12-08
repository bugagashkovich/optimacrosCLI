import { instance } from "./axiosSettings";
import { IAuto } from "../interface/auto";

const put_auto = async (data) => {
  try {
    const res = await instance.put<IAuto>("/", data);
    return res;
  } catch (error) {
    return error;
  }
};

export { put_auto };
