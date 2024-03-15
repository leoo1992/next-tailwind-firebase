"use client";
import "@/styles/globals.css";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <main
      className={`animated-background flex h-screen flex-col items-center justify-start pt-5
      bg-gradient-to-tr from-purple-300 to-sky-300 opacity-90 overflow-x-auto overflow-y-auto
      transition-all duration-1000 ease-in-out
      `}
    >
      <MainContent />
    </main>
  );
}
