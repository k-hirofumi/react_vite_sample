import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilRefresher_UNSTABLE } from 'recoil';
import { testSelector } from '../../store/selectors/testSelector';


export const Second = () => {
  const [reset, setReset] = useState(false)
  const refresh = useRecoilRefresher_UNSTABLE(testSelector)//キャッシュ削除
  const onReset = () => {
    setReset((val) => !val);
    refresh()

  }
  return (
    <>
      <p>second</p>
      <Link to="/">Home</Link>
      <Link to="/third">Third</Link>
      
      <ErrorBoundary fallback={<h2>Error!!!!</h2>}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Component reset/>
        </Suspense>
      </ErrorBoundary>

      <button onClick={onReset }>reset</button>
    </>
  );
};


const Component = (props: any) => {
    const [test,setTest] = useRecoilState(testSelector)
    setTest({})
    console.log(test)
    return (
        <>
            {console.log(test)}
            <p>{test.id}</p>
        </>
    )
}