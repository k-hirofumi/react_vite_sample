import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilRefresher_UNSTABLE, useSetRecoilState, useRecoilValue } from 'recoil';
import { testSelector } from '../../store/selectors/testSelector';
import { testSelectorFamily } from '../../store/selectors/testSelectorFamily';
import { testFamilyAtom, testFamilyIdAtom } from '../../store/atoms/test';


export const Third = () => {
  const testFamily = useSetRecoilState(testSelectorFamily(''))
  useEffect(()=> {
    const result = [
      {
        id:'111',
        name:'test1'
      },
      {
        id:'222',
        name:'test2'
      },
    ]
    result.map(data => testFamily(data))

  })
  
  return (
    <>
      <p>Third</p>
      <Link to="/">Home</Link>
      <Link to="/second">Second</Link>

      <Component />
    </>
  );
};


const Component = () => {
  const testId = useRecoilValue(testFamilyIdAtom)
  console.log(testId)
  const aaa = useRecoilValue(testFamilyAtom(testId[0]))
  console.log(aaa)
  // const testArray = testId.map((id) => useRecoilValue(testFamilyAtom(id)))
  // console.log(testArray)

  return(
    <></>
  )
}
