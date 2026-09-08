import { connection } from "next/server";

export async function YearDisplay() {
  await connection();
  const currentYear = new Date().getFullYear();
  return <>{currentYear}</>;
}
