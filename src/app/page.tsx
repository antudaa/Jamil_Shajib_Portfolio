import PageWrapper from "@/components/global/wrapper/PageWrapper";
import HeroSection from "@/components/global/landing/hero"
import { Overview } from "@/components/global/landing/overview/Overview";

export default function Home() {
  return (
    <>
      <PageWrapper loadingTime={2000} />
      <HeroSection />
      <Overview />
    </>
  );
}
