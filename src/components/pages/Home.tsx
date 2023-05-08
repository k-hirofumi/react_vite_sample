import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getUserSelector } from '../../store/selectors/userSelector';


export const Home = () => {

  const dispatch = useDispatch();
  const userName = useRecoilValue(getUserSelector);
  return (
    <>
      <p>home</p>
      <Link to="/second">Second</Link>
      <br />
      {/* <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{useSelector(getValue)}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <br />
      <p>userName: {useSelector(getUserName)}</p> */}
    </>
  );
};
