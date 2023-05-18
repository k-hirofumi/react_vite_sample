import { selector, selectorFamily } from "recoil";
import { SelectorKeys } from "../recoilKeys";
import { userState } from "../atoms/userAtom";
import axios from "axios";
import { getUserInfo } from "../interfaces/userInterface";
import { testFamilyAtom, testFamilyIdAtom } from "../atoms/test";

export const testSelectorFamily = selectorFamily({
    key: 'test_selector_family',
    get: (arg:string) => ({get}) => {
      return get(testFamilyAtom(arg));
    },
    set: () => ({set}, newValue:any) => {
      set(testFamilyIdAtom, prev => [...prev, newValue.id]);
      console.log(newValue)
      console.log(newValue.id)
      set(testFamilyAtom(newValue.id), newValue);
    },
  });


export const getUserSelector = selector({
    key: SelectorKeys.GET_USER_SELECTOR,
    get: async ({get}) => {
        const userID: number = get(userState).id; // Add request ID as a dependency
        return await getUserInfo(userID);
      },
  });

