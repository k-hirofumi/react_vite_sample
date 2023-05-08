import axios from "axios";

export type UserInfoModel = {
    id: number;
    name: string;
    email: string;
    address: string;
    company: string;
    department: string;
}


export function getUserInfo(userID: number) {
    axios.get('https://api',)
        .then(response => {
            return response.data as UserInfoModel
        }).catch((e) => {
            alert('エラー')
        }).finally(() => {
        })
    
}