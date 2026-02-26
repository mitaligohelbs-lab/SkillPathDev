import SetupHeader from "@/components/Header/SetupHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="fixed left-0 right-0 top-0 bg-[#101319] z-10">
          <SetupHeader />
        </div>
        <div className="grow overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
