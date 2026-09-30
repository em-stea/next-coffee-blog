export async function YearDisplay() {
  const currentYear = new Date().getFullYear();
  return <>{currentYear}</>;
}
