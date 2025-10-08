import { create } from "zustand";
import axiosInstance from "../lib/axiosInstance";

type Role = "user" | "vendor" | "admin";

type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  profileImg?: string;
  isBlocked?: boolean;
  isDeleted?: boolean;
  address?: Address;
  phone?: number;
  countryCode?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface AuthState {
  message: string | null;
  loading: boolean;
  user: User | null;

  sendSignupCode: (email: string) => Promise<void>;
  verifyCode: (email: string, code: number) => Promise<void>;
  signUp: (formData: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => Promise<void>;

  login: (formData: { email: string; password: string }) => Promise<void>;
  profile: () => Promise<void>;

  updatePassword: (oldPass: string, newPass: string) => Promise<void>;
  forgetPasswordCode: (email: string) => Promise<{ success: boolean }>;
  forgetPassword: (
    email: string,
    verificationCode: number,
    newPassword: string
  ) => Promise<{ success: boolean }>;
  resetMessage: () => Promise<void>;
}

export const userStore = create((set): AuthState => {
  return {
    user: null,
    message: "",
    loading: false,

    sendSignupCode: async (email: string) => {
      try {
        const res = await axiosInstance.post("/auth/sendcode", { email });
        if (!res.data.success) {
          throw new Error("Failed to send to ");
        }
        set({ message: res?.data?.message });
      } catch (error: any) {
        set({ message: error?.response?.data?.message || error.message });
      }
    },

    verifyCode: async (email: string, code: number) => {
      try {
        const res = await axiosInstance.post("/auth/verifySignupCode", {
          email,
          code,
        });

        if (!res.data.success) {
          throw new Error("Code verification failed");
        }
        set({ message: res?.data?.message });
      } catch (error: any) {
        set({ message: error?.response?.data.message || error.message });
      }
    },

    signUp: async (formData: {
      name: string;
      email: string;
      password: string;
      role: string;
    }) => {
      try {
        const res = await axiosInstance.post("/auth/register", formData);
        if (res.data.success !== true) {
          throw new Error("User Creation failed");
        }
        set({ message: res.data.message, user: res.data.user });
      } catch (error: any) {
        set({
          message:
            error?.response?.data?.message ||
            error.message ||
            "Something went wrong",
          loading: false,
        });
      }
    },
    login: async (formData: { email: string; password: string }) => {
      try {
        const res = await axiosInstance.post("/auth/login", formData);
        if (res.data.success !== true) {
          throw new Error("Login failed");
        }
        set({ message: res.data.message, user: res.data.user });
      } catch (error: any) {
        set({ message: error?.response?.data.message || error.message });
      }
    },

    profile: async () => {
      try {
        const res = await axiosInstance.post("/auth/profile");
        if (res.data.success !== true) {
          throw new Error("User data fetching failed");
        }
        set({ message: res.data.message, user: res.data.user });
      } catch (error: any) {
        set({ message: error?.response?.data.message || error.message });
      }
    },

    updatePassword: async (oldPass: string, newPass: string) => {
      set({ loading: true });
      try {
        const res = await axiosInstance.put("/user/updatePassword", {
          oldPass,
          newPass,
        });
        set({ message: res.data.message, loading: false });
      } catch (error: any) {
        set({
          message: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },

    forgetPasswordCode: async (email: string) => {
      set({ loading: true });

      try {
        const res = await axiosInstance.post("/user/sendForgetPassCode", {
          email,
        });
        set({ message: res.data.message, loading: false });
        return { success: true };
      } catch (error: any) {
        set({
          message: error.response?.data?.message || error.message,
          loading: false,
        });
        return { success: false };
      }
    },

    forgetPassword: async (
      email: string,
      verificationCode: number,
      newPassword: string
    ) => {
      set({ loading: true });
      try {
        const res = await axiosInstance.post("/user/forgetPassword", {
          email,
          verificationCode,
          newPassword,
        });
        set({ message: res.data.message, loading: false });
        return { success: true };
      } catch (error: any) {
        set({
          message: error.response?.data?.message || error.message,
          loading: false,
        });
        return { success: false };
      }
    },

    resetMessage: async () => {
      set({ message: "" });
    },
  };
});
