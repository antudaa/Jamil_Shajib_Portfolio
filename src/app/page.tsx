import PageWrapper from "@/components/global/wrapper/PageWrapper";
import HeroSection from "@/components/global/landing/hero"

export default function Home() {
  return (
    <>
      <PageWrapper loadingTime={2000} />
      <HeroSection />
    </>
  );
}
