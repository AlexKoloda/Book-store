import conf from "@/config";
import { cookies } from "next/headers";
import { ICart } from "../clientApi/cartApi";

export const getBookInCartApi = async () => {
  try {
    const cookiesValues = await cookies();
    const token = cookiesValues.get("access_token");
    if (!token?.value) {
      throw new Error("No token provided");
    }
    const res = await fetch(`${conf.url}/cart/get/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    const data: ICart[] = await res.json();
    if ( !data) {
      return [];
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
     console.log(error.message)
    }
    return [];
  }
};
