"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Index({ params: { locale } }: any) {
  const router = useRouter();

  console.log(locale);

  useEffect(() => {
    router.push(`${locale}/cv`);
  }, []);
  return <div>Welcome to my website</div>;
}
