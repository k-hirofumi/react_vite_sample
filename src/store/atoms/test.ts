import { atom } from "recoil";
import { AtomKeys } from "../recoilKeys";

export const testAtom = atom<string>({
    key: 'test',
    default: ''
  })
