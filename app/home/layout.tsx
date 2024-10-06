import BottomTabs from "@/components/home/bottom-tabs";
import Header from "@/components/home/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative pt-40 mx-auto">
      <Header />
      {children}
      <BottomTabs />
    </section>
  );
}
