import PreparationHeader from "@/components/Header/PreparationHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="fixed left-0 right-0 top-0 bg-[#101319] z-10">
        <PreparationHeader />
      </div>
      <div className="grow overflow-y-auto">{children}</div>
    </div>
  );
}
