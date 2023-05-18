import { atom, atomFamily } from "recoil";
import { AtomKeys } from "../recoilKeys";

export const testAtom = atom<string>({
    key: 'test',
    default: ''
  })

export const testFamilyAtom = atomFamily<test|null,string>({
  key: 'test_family',
  default: null
})

type test = {
  id:string
  name:string
}

export const testFamilyIdAtom = atom<string[]>({
  key: 'test_family_id',
  default: []
})