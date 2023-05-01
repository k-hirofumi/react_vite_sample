import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { RootState } from '../../reducks/_Store';
// import { decrement, increment } from '../../reducks/CounterSlice';

export const Home = () => {
  const user = useSelector((state: any) => state.users.value);
  const dispatch = useDispatch();
  return (
    <>
      <p>home</p>
      <Link to="/second">Second</Link>
      <br />
      {console.log(user)}
      {/* <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button> */}
    </>
  );
};
