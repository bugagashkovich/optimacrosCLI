import { instance } from "./axiosSettings";
import { IAuto } from "../interface/auto";

const get_allAuto = async (data?: string) => {
  try {
    const res = await await instance.get<IAuto>("/all", {
      params: { sort: data },
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { get_allAuto };
