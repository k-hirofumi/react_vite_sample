import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment } from '../../store/counter/Slice';
import { RootState } from '../../store/storeConfig.ts';
import { getValue } from '../../store/counter/selector.ts';
import { getUserName } from '../../store/auth/selector.ts';
// import { RootState } from '../../reducks/Store';
// import { decrement, increment } from '../../reducks/CounterSlice';

export const Home = () => {
//   const count: number = useSelector((state: RootState) => state.counter.value)
  const userName: string = useSelector((state: RootState) => state.auth.userName)
  const dispatch = useDispatch()

  return (
    <>
      <p>home</p>
      <Link to="/second">Second</Link>
      <br />
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      {/* <span>{count}</span> */}
      <span>{useSelector(getValue)}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <br />
      {/* <p>userName: {userName}</p> */}
      <p>userName: {useSelector(getUserName)}</p>
    </>
  );
};
