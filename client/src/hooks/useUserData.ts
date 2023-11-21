import { useAuthContext } from "../contexts/useAuthContext";

import { useEffect, useState } from "react";

const useUserData = () => {
  const { user, getUser } = useAuthContext();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetch = async () => {
      const userData = await getUser();

      setIsAdmin(userData.isAdmin);
      setIsAuthenticated(!!userData.email);
      setIsLoading(false);
    }
    
    fetch();    
  }, [user]);

  return {
    isAuthenticated,
    isAdmin,
    isLoading
  }
}

export default useUserData;
