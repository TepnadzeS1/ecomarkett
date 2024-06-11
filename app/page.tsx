'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { CustomButton } from "@/app/components/CustomButton";
import Button from "./components/Button/Button";

export default function Home() {

  const userLogedIn = false;

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {userLogedIn 
        ? <Button mode='outline' title = 'გამოსვლა' />
        : <Button mode='outline' title = 'ავტორიზაცია'/> }
      </div>
    </main>
  );
}