"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";

const DashboardPageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/auth");
    }
  }, [router]);

  return (
    <div className={styles.dashboardPage}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
};

export default DashboardPageView;
