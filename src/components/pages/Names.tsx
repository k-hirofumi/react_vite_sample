import React from 'react';
import fetchData from './FetchData';

export const resource = fetchData('https://2556245d-135e-4bcf-a3df-e334ea3cc1ba.mock.pstmn.io/test');


const Names = (reset:any) => {
  const result = resource.read();
  console.log('render')
  console.log(result.id)
  console.log(reset)
//   const [result, setResult] = useState('')
//   useEffect(() => {
//     setResult(resource.read())
//   })

  return (
    <div>
      <h2>List of names</h2>
      <ul>
        {result.id}
      </ul>
    </div>
  );
};

export default Names;