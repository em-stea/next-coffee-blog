import { DrinkDrawerShell } from "@/features/drinks/components/drawer/drink-drawer-shell";

export default function DrinkDialogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DrinkDrawerShell>{children}</DrinkDrawerShell>;
}
