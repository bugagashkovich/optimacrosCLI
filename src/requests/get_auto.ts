import { instance } from "./axiosSettings";
import { IAuto } from "../interface/auto";

const get_auto = async (data?: string) => {
  try {
    const res = await instance.get<IAuto>("/", { params: { id: data } });
    return res;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export { get_auto };
