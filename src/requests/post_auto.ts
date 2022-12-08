import { instance } from "./axiosSettings";
import { IAuto } from "../interface/auto";

const post_auto = async (data: IAuto) => {
  try {
    const res = await instance.post<IAuto>("/", data);
    return res;
  } catch (error) {
    return error;
  }
};

export { post_auto };
