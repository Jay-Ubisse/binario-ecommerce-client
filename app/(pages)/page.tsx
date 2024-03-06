import { Advantages } from "@/components/advantages";
import { CarouselPlugin } from "@/components/slideshow-carousel";
import { SearchBar } from "@/components/search-bar";
import { ProductsCarousel } from "@/components/products-carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-slate-100">
      <section>
        <CarouselPlugin />
      </section>
      <section className="max-w-[80%] mx-auto relative -top-4">
        <SearchBar />
      </section>
      <section className="bg-white mx-2 rounded-xl p-5">
        <Advantages />
      </section>
      <section className="bg-white my-4 p-1">
        <h1 className="my-4 text-xl text-slate-800 text-center font-semibold">
          Mais Vendidos
        </h1>
        <ProductsCarousel />

        <div className="w-fit mx-auto mt-4">
          <Link href="#">
            <Button>Ver Todos</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
