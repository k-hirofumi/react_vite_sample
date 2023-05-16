import { Route, Routes } from 'react-router-dom';
// import { MainLayout } from "../layout/MainLayout"
import { Home } from '../components/pages/Home';
import { Second } from '../components/pages/Second';
import { useRecoilValue } from 'recoil';
import { isAuthAtom } from '../store/atoms/isAuth';
import { UnAuth } from '../components/pages/UnAuth';

export const Router = () => {
  const isAuth = useRecoilValue(isAuthAtom);
  return (
    <>
    {console.log('reRender')}
    {isAuth ?     
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/second" element={<Second />} />
        </Routes> 
      : <UnAuth />}
    </>
  );
};
