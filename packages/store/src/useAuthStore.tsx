import { create } from "zustand"

interface MemberData {
  id: number
  userName: string
}

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  memberData?: MemberData | null
  setAccessToken: (accessToken: string) => void
  setRefreshToken: (refreshToken: string) => void
  setMemberData: (memberData: MemberData) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken:
    typeof window !== "undefined" && localStorage.getItem("accessToken")
      ? JSON.parse(localStorage.getItem("accessToken") as string)
      : null,
  refreshToken:
    typeof window !== "undefined" && localStorage.getItem("refreshToken")
      ? JSON.parse(localStorage.getItem("refreshToken") as string)
      : null,
  memberData: undefined,
  setAccessToken: (accessToken) => set({ accessToken:accessToken }),
  setRefreshToken: (refreshToken) => set({ refreshToken:refreshToken }),
  setMemberData: (memberData) => set({ memberData: memberData})
}))