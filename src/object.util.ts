
const makeValueByData = (data: any, field: string, isDefaultData = true) => {
  if (data && field) {
    return data[field] ?? data;
  }
  if (isDefaultData) {
    return data;
  }
  return null;
}
const isFunction = (functionToCheck: any) => {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
const FixJson = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
}
export { makeValueByData, isFunction, FixJson };
