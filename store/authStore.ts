import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user: any) => set({ user }),
      accessToken: null,
      setAccessToken: (accessToken: any) => set({ accessToken }),
      refreshToken: null,
      setRefreshToken: (refreshToken: any) => set({ refreshToken }),
      auth_token: null,
      setAuth_token: (auth_token: any) => set({ auth_token }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useAuthStore };
