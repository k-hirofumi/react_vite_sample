import { selector } from "recoil";
import { SelectorKeys } from "../recoilKeys";
import { userState } from "../atoms/userAtom";
import axios from "axios";
import { getUserInfo } from "../interfaces/userInterface";

export const userSelector = selector({
    key: SelectorKeys.USER_SELECTOR,
    get: ({get}) => get(userState), //atomの値を取得して２倍して返す
    set: ({set}, newValue) => set(userState, newValue) // atomに新しい値を設定する
  });


export const getUserSelector = selector({
    key: SelectorKeys.GET_USER_SELECTOR,
    get: async ({get}) => {
        const userID: number = get(userState).id; // Add request ID as a dependency
        return await getUserInfo(userID);
      },
  });

