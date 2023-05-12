import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getUserSelector } from '../../store/selectors/userSelector';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import Names from './Names';

export const Home = () => {
    const [isReset,setIsReset] = useState<boolean>(false)
  return (
    <>
      <p>home</p>
      <Link to="/second">Second</Link>
      <br />
      <Suspense fallback={<p>Loading...</p>}>
        <Names reset= {isReset}/>
      </Suspense>
      <button onClick={() => setIsReset((val) => !val)}>ボタン</button>

    </>
  );
};

