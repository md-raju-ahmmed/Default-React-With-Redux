const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatch", action);
  const result = next(action);
  console.log("New state of this request:", store.getState());
  return result;
};

export default loggerMiddleware;
