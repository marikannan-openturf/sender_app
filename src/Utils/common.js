export function requestBodyData (data) {
    for (var propName in data) {
        if (!data[propName]) {
          delete data[propName];
        }
      }
      return data
  }