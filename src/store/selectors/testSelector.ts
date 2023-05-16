import { selector } from "recoil";
import { SelectorKeys } from "../recoilKeys";
import { userState } from "../atoms/userAtom";
import axios from "axios";
import { testAtom } from "../atoms/test";

export const testSelector = selector({
    key: 'testSelector',
    get: async ({get}) => {
      console.log('testSelector')
      const response = await getTestInfo();
      return response;
    },
    set: ({set, reset}, newValue) => reset(testAtom), // atomに新しい値を設定する
  });


  export function getTestInfo() {
    return axios.get('https://2556245d-135e-4bcf-a3df-e334ea3cc1ba.mock.pstmn.io/test',)
        .then(response => {
          console.log('getTestInfo')
            return response.data
        }).catch((e) => {
            alert('エラー')
        }).finally(() => {
        })
    
}
