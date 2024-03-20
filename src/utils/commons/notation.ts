export const snakeToCamel = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map(snakeToCamel);
  } else if (data !== null && typeof data === 'object') {
    const result: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const newKey = key.replace(/_(\w)/gi, (_, c) => c.toUpperCase());
        result[newKey] = snakeToCamel(data[key]);
      }
    }
    return result;
  }
  return data;
};
