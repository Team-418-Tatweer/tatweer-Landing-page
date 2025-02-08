import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MainFeatures from "@/components/MainFeatures";
import Pricing from "@/components/pricing";
import Reviews from "@/components/reviews";
import Titles from "@/components/titles";

export default function Home() {
  return (
    <main>
      <section id="home"><Hero /></section>
      <section id="vision"><MainFeatures /></section>
      <section id="solutions"><Titles /></section>
      <section id="pricing"><Pricing /></section>
      <section id="contact"><Reviews /></section>
      <Footer />
    </main>
  );
}
