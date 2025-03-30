import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TabsEskeleton } from "@/components/products/skeleton";
import { ProductsTab } from "@/components/products/tab";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header />
      <div className="mx-3">
        <Suspense fallback={<TabsEskeleton />}>
          <ProductsTab />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
