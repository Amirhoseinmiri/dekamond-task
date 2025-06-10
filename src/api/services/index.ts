import { UserDataResults } from "../../types";
import { apiInstance } from "../config";

export const getUserData = async (): Promise<UserDataResults | null> => {
  try {
    const res = await apiInstance.get("/api/?results=1&nat=us");
    return res.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
