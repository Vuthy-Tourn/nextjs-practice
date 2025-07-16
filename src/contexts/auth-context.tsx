"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import secureLocalStorage from "react-secure-storage";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Context Provider State : state management for authentication
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth data on mount
    const initAuth = async () => {
      try {
        // 1. Try to get stored token and user data
        const storedToken = secureLocalStorage.getItem("auth_token") as string;
        const storedUser = secureLocalStorage.getItem("auth_user") as string;

        if (storedToken && storedUser) {
          // 2. Verify token is still valid with server
          const response = await fetch("/api/auth/verify", {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            // 3. Token valid - restore auth state
            const data = await response.json();
            setToken(storedToken);
            setUser(data.user);
          } else {
            // 4. Token invalid - clear storage
            secureLocalStorage.removeItem("auth_token");
            secureLocalStorage.removeItem("auth_user");
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        // Clear potentially corrupted data
        secureLocalStorage.removeItem("auth_token");
        secureLocalStorage.removeItem("auth_user");
      } finally {
        setLoading(false); // Always set loading to false after checking (stop loading)
      }
    };

    initAuth();
  }, []);

  const login = async (newToken: string, newUser: User) => {
    try {
      // Store in secure storage
      secureLocalStorage.setItem("auth_token", newToken);
      secureLocalStorage.setItem("auth_user", JSON.stringify(newUser));

      setToken(newToken);
      setUser(newUser);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("Failed to store authentication data");
    }
  };

  const logout = () => {
    // Clear all auth data
    secureLocalStorage.removeItem("auth_token");
    secureLocalStorage.removeItem("auth_user");
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
