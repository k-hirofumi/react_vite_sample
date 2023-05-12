// wrapPromise.js
/**
 * Wraps a promise so it can be used with React Suspense
 * @param {Promise} promise The promise to process
 * @returns {Object} A response object compatible with Suspense
 */
function wrapPromise(promise:any) {
    let status = 'pending';
    let response: any;
  
    const suspender:any = promise.then(
        (      res: any) => {
        status = 'success';
        response = res;
      },
        (      err: any) => {
        status = 'error';
        response = err;
      },
    );
  
    const handler:any = {
      pending: () => {
        throw suspender;
      },
      error: () => {
        throw response;
      },
      default: () => response,
    };
  
    const read = () => {
      const result = handler[status] ? handler[status]() : handler.default();
      console.log(status)
    //   status = 'pending';
      return result;
    };
  
    return { read };
  }
  
  export default wrapPromise;