//import Head from "next/head";
"use-clint"
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Head from '@/components/Header/Header'
import SimpleBottomNavigation from "@/components/MainNav";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      {/* <Head>
      <span className="header">🎬 Entertainment Hub 🎥</span>
      </Head> */}


      <div
      >
         <Head/>
         <SimpleBottomNavigation/>
      </div>

    </>
  );
}
