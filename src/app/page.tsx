"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Index({ params: { locale } }: any) {
  const router = useRouter();

  useEffect(() => {
    router.push(`/cv`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Welcome to my website</div>;
}
