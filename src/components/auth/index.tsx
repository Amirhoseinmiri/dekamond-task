// app/auth/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Auth.module.scss";
import { phoneNumberSchema } from "../../validation";
import Input from "../ui/input";
import Button from "../ui/button";
import { FormDataType } from "../../types";
import { getUserData } from "../../api/services";

// Define the Zod validation schema for phone number

const AuthPageView = () => {
  const router = useRouter();

  // Use React Hook Form with Zod schema validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(phoneNumberSchema),
  });

  const onSubmit = async () => {
    // Simulate fetching user data from API
    const response = await getUserData();

    // Store the user data in localStorage
    localStorage.setItem("user", JSON.stringify(response?.results[0]));

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        <Input
          label="Phone Number"
          type="text"
          placeholder="Enter Phone Number"
          {...register("phoneNumber")}
          errorMessage={errors.phoneNumber?.message}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default AuthPageView;
//
