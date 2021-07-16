export default {
  get(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const arrayCookies = decodedCookie.split(";");
    for (let i = 0; i < arrayCookies.length; i++) {
      let currentCookie = arrayCookies[i];
      while (currentCookie.charAt(0) === " ") {
        currentCookie = currentCookie.substring(1);
      }
      if (currentCookie.indexOf(name) === 0)
        return currentCookie.substring(name.length, currentCookie.length);
    }
    return "";
  },
  set(cookieName, value) {
    const date = new Date();
    date.setTime(date.getTime() + 1 * 3600 * 1000);
    document.cookie =
      cookieName + "=" + value + "; expires=" + date.toUTCString() + ";path=/";
  },
  delete(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  },
};
