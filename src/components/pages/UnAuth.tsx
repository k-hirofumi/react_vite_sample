import { useRecoilState } from "recoil";
import { isAuthAtom } from "../../store/atoms/isAuth";

export const UnAuth = () => {
    const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);
    return(
        <>
            <h1>UnAuth</h1>
            <button onClick={() => setIsAuth(true)}>Login</button>
        </>
    )
}