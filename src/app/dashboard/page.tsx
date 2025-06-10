// app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Dashboard.module.scss";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in (i.e., data in localStorage)
    if (!localStorage.getItem("user")) {
      // Redirect to login page if no user data
      router.push("/auth");
    }
  }, [router]);

  return (
    <div className={styles.dashboardPage}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
