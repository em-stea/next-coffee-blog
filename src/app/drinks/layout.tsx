export default function DrinksLayout({
  children,
  dialog,
}: {
  children: React.ReactNode;
  dialog: React.ReactNode;
}) {
  return (
    <>
      {children}
      {dialog}
    </>
  );
}
