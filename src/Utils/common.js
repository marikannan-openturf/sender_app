export function requestBodyData (data) {
    return JSON.parse(JSON.stringify(data, (key, value) => {
      return (value === '' ? undefined : value);
    }));
  }