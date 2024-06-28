import Image from "next/image";
import Hero from "./component/hero";
import UpcomingsEvents from "./component/upcomingsEvents";
import PastEvents from "./component/pastEvents";


export default function Home() {
  return (
    <main className="overflow-hidden">

  {/* body */}
    <section>
    <Hero />
      <div className="container mx-auto pb-4  h-screen" >
      <div class="grid lg:grid-cols-3 gap-4 md:grid-cols-1 sm:grid-cols-1 ">
  <div class="  col-span-1 md:col-span-2">
    <UpcomingsEvents />
  </div>
  <div class="">
    <PastEvents/>
  </div>
</div>
      </div>
    </section>
    </main>
  );
}
