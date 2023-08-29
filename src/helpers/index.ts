export function buildURL(
  baseURL: string,
  params: { [key: string]: string } | any
): string {
  let url = baseURL + "?";
  let paramKeys = Object.keys(params);
  for (let i = 0; i < paramKeys.length; i++) {
    let key = paramKeys[i];
    url += key + "=" + params[key];
    if (i < paramKeys.length - 1) {
      url += "&";
    }
  }
  return url;
}
