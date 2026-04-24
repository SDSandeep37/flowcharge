import { createContext, useEffect, useState } from "react";

export const UserAuthContext = createContext();

export function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleApiCall();
  }, []);
  const handleApiCall = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/session`,
        {
          credentials: "include",
        },
      );

      if (response.ok) {
        const userDetials = await response.json();
        const userr = userDetials.user;
        setUser(userr);
      } else {
        setUser(null);
      }
      setLoading(false);
    } catch (error) {
      console.error("Auth Context error ", error);
      setLoading(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserAuthContext.Provider value={{ user, loading }}>
      {children}
    </UserAuthContext.Provider>
  );
}
