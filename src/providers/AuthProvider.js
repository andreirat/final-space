import React, { createContext, useState, useContext, useEffect } from 'react';
import { Token } from 'services';
import { Storage } from 'services';

const AuthContext = createContext({ token: null, email: null });

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

const AuthProvider = ({ children, navigation }) => {
  const [authData, setAuthData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    let userStoredData = await Token.get();
    if (userStoredData) {
      const isTokenExpired = Token.isExpired(userStoredData);
      if (isTokenExpired) {
        userStoredData = null;
        Token.remove();
      }
    }
    setAuthData(userStoredData);
    setLoading(false);
  }

  const signIn = response => {
    Token.store(response.token);
    setAuthData(response);
    setLoginError(null);
  };

  const signOut = async () => {
    await Storage.remove('userId');
    Token.remove();
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ authData, loading, signIn, signOut, loginError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
