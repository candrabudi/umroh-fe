import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero/Hero";
import VisiMisi from "@/components/home/VisiMisi/VisiMisi";
import PromoCarousel from "@/components/home/PromoCarousel/PromoCarousel";
import Products from "@/components/home/Products/Products";
import Features from "@/components/home/Features/Features";
import WhyChooseUs from "@/components/home/WhyChooseUs/WhyChooseUs";
import SavingsProgram from "@/components/home/SavingsProgram/SavingsProgram";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import Gallery from "@/components/home/Gallery/Gallery";
import Branches from "@/components/home/Branches/Branches";
import Blog from "@/components/home/Blog/Blog";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <TopBar />
      <Header />
      <main className={styles.mainContent}>
        <Hero />
        <VisiMisi />
        <Features />
        <PromoCarousel />
        <Products />
        <WhyChooseUs />
        <SavingsProgram />
        <Testimonials />
        <Gallery />
        <Branches />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
