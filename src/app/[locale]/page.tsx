"use client";

import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return <h1 className="text-blue-600">{t("title")}</h1>;
}
