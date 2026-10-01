"use client";

export function YearDisplay() {
  const currentYear = new Date().getFullYear();
  return <>{currentYear}</>;
}
