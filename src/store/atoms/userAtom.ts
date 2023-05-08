import { atom } from "recoil";
import { AtomKeys } from "../recoilKeys";

export const userState = atom<User>({
    key: AtomKeys.USER_STATE,
    default: <User>{}
  })

export type User = {
    id: number;
    userName: String;
    email: String;
}