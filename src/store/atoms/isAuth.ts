import { atom } from "recoil";
import { AtomKeys } from "../recoilKeys";

export const isAuthAtom = atom<boolean>({
    key: AtomKeys.AUTH_STATE,
    default: true
  })
