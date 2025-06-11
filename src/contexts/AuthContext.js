// import React, { createContext, useContext, useState, useEffect } from "react";

// // Create context
// const AuthContext = createContext();

// // Provider
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(() => sessionStorage.getItem("authToken"));
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(!!token);

//   // Fetch user profile using access token
//   const fetchUserProfile = async (accessToken) => {
//     try {
//       const response = await fetch("http://172.31.60.91:8000/api/me/", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) throw new Error("Failed to fetch profile");

//       const data = await response.json();
//       setUser(data);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//       logout();
//     }
//   };

//   // Login function
//   const login = async (email, password) => {
//     try {
//       const response = await fetch("http://172.31.60.91:8000/auth/login/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const accessToken = data.access_token;

//         sessionStorage.setItem("authToken", accessToken);
//         setToken(accessToken);
//         await fetchUserProfile(accessToken);

//         return { success: true };
//       } else {
//         return { success: false, error: data.message };
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       return { success: false, error: "Login failed" };
//     }
//   };

//   // Logout function
//   const logout = () => {
//     sessionStorage.removeItem("authToken");
//     setToken(null);
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   // On initial load, fetch user if token exists
//   useEffect(() => {
//     const init = async () => {
//       if (token) {
//         await fetchUserProfile(token);
//       }
//       setLoading(false);
//     };

//     init();
//   }, [token]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         token,
//         login,
//         logout,
//         isAuthenticated,
//         loading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside an AuthProvider");
//   }
//   return context;
// };
