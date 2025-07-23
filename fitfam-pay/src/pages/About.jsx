// src/pages/About.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import FoundersCarousel from "../components/FoundersCarousel";
import AboutHero from "../components/AboutHero";
// eslint-disable-next-line
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Header />
      <AboutHero /> {/* 👈 Added new hero section */}
      
      <main className="p-8 bg-white text-gray-800 max-w-7xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">About FitfamPay</h1>
          <p className="text-lg leading-relaxed mb-10">
            FitfamPay is a digital solution created by four passionate co-founders — Vitalis, Kenzy, The Edoho, and Favour — to simplify payments within fitness and lifestyle communities.
            <br />
            <br />
            What started as a small idea between friends quickly grew into a platform built on innovation, teamwork, discipline and purpose. With backgrounds in frontend, backend, and design, our team is focused on creating seamless and smart tools that make everyday transactions easier and more efficient.
            <br />
            <br />
            We're not just building an app; we’re building a better experience for people who value wellness, speed, and simplicity. FitfamPay brings all people together and keeps things moving.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-6xl mx-auto mt-12"
        >
          <FoundersCarousel />
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default About;
