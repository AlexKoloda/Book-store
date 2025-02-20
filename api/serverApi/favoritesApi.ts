import { IBookFavorite } from "@/app/lib/definitions";
import { cookies } from "next/headers";
import conf from "@/config";
import { parseError } from "@/app/lib/util/parseError";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export interface IFavoriteItems {
  id: number;
  dateAdded: string;
  book: IBookFavorite;
}

export const getBookFavoritesApi = async () => {
  try {
    const cookiesValues = await cookies();
    const token = cookiesValues.get("access_token");
    if (!token?.value) {
      return [];
    }
    const res = await fetch(`${conf.url}/favorites/get`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    const books: IFavoriteItems[] = await res.json();
    if (!books) {
      return [];
    }
    return books;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(parseError(error));
    }
    return [];
  }
};
