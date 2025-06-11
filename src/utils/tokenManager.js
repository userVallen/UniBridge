// const ACCESS_TOKEN_KEY = "accessToken";
// const REFRESH_TOKEN_KEY = "refreshToken";

// export const tokenManager = {
//   setTokens: ({ accessToken, refreshToken }) => {
//     sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
//     sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
//   },
//   getAccessToken: () => sessionStorage.getItem(ACCESS_TOKEN_KEY),
//   getRefreshToken: () => sessionStorage.getItem(REFRESH_TOKEN_KEY),
//   removeTokens: () => {
//     sessionStorage.removeItem(ACCESS_TOKEN_KEY);
//     sessionStorage.removeItem(REFRESH_TOKEN_KEY);
//   },
//   isAccessTokenExpired: () => {
//     const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
//     if (!token) return true;

//     try {
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       return payload.exp < Date.now() / 1000;
//     } catch {
//       return true;
//     }
//   },
// };
