import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { getUserSelector } from '../../store/selectors/userSelector';
import { Suspense, memo, useEffect, useState } from 'react';
import axios from 'axios';
import Names from './Names';
import { userState } from '../../store/atoms/userAtom';
import { isAuthAtom } from '../../store/atoms/isAuth';

export const Home = () => {
    const [isReset,setIsReset] = useState<boolean>(false)
    const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);
    const [isChange,setIsChange] = useState<boolean>(false)
    
  return (
    <>
      {console.log('Home')}
      <p>home</p>
      <Link to="/second">Second</Link>
      <Link to="/third">Third</Link>
      <br />
      <Suspense fallback={<p>Loading...</p>}>
        <Names reset= {isReset}/>
      </Suspense>
      <button onClick={() => setIsReset((val) => !val)}>ボタン</button>

      <button onClick={() => setIsAuth(false)}>Logout</button>

      {isChange ? <ChildComponent1 /> : <ChildComponent2 />}
      
      <button onClick={() => setIsChange((val) => !val)}>変更</button>
    </>
  );
};

const ChildComponent1 = memo(() => {
    return(
        <>
            {console.log('childComponent1')}
            <h2>childComponent1</h2>
        </>
    )
})

const ChildComponent2 = memo(() => {
    return(
        <>
            {console.log('childComponent2')}
            <h2>childComponent2</h2>
        </>
    )
})