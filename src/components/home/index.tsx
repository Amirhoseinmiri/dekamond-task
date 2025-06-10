"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./MainPage.module.scss";
import Link from "next/link";

const MainPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      router.push("/dashboard");
    } else {
      setLoading(false);
    }
  }, [router]);

  return (
    <div className={styles.mainPage}>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.content}>
          <h1>Welcome to the Main Page</h1>
          <p>Please log in to continue.</p>
          <Link href="/auth" className={styles.loginLink}>
            Go to Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainPage;
