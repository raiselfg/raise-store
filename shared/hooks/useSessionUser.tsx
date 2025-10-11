import { User } from "@/app/generated/prisma";
import { useState, useEffect } from "react";
import { api } from "../lib/axios";

interface UseSessionResult {
  user: User | null;
  authenticated: boolean;
  loading: boolean;
  refresh: () => Promise<void>;
}

export function useSessionUser(): UseSessionResult {
  const [user, setUser] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  async function fetchSession() {
    try {
      setLoading(true);
      const data = (await api.get("/auth/session")).data;
      setAuthenticated(data.authenticated);
      setUser(data.user);
    } catch (error) {
      console.error("Ошибка при получении сессии:", error);
      setAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSession();
  }, []);

  return { user, authenticated, loading, refresh: fetchSession };
}
