import { instance } from "./axiosSettings";
import { IAuto } from "../interface/auto";

const delete_auto = async (data?: string) => {
  try {
    const res = await instance.delete<IAuto>("/", { params: { id: data } });
    return res;
  } catch (error) {
    return error;
  }
};

export { delete_auto };
