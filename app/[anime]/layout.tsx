export default function animeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">{children}</main>
  );
}
