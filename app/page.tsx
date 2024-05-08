import About from "./components/about/About";
import CTA from "./components/cta/CTA";
import Feature from "./components/feature/Feature";
import Hero from "./components/hero/Hero";
import Recommendations from "./components/recomendations/Recommendations";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";

export default function Home() {
    return (
        <>
            <Hero />
            <Recommendations />
            <About />
            <Feature />
            <Services />
            <Testimonial />
            <CTA />
        </>
    );
}
