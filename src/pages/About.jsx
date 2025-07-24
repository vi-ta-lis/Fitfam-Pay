// src/pages/About.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import FoundersCarousel from "../components/FoundersCarousel";
import AboutHero from "../components/AboutHero";
import { motion } from "framer-motion";
import "../About.css"; 


const About = () => {
  return (
    <>
      <Header />
      <AboutHero />
        <h1>About FitfamPay</h1>
      {/* Services Boxes Section */}
      <section className="services-section">
        <div className="service-box large-box">
        <h3>Seamless Payments</h3>
<p>Pay for gym sessions, classes, or memberships instantly with just a tap. FitfamPay handles all your transactions securely in one place.</p>
        </div>
        <div className="service-box large-box">
         <h3>Active Member Tracking</h3>
<p>Monitor who’s using your gym and when, with real-time attendance logs. Know your most loyal members and their activity trends.</p>         
        </div>
        <div className="service-box small-box">
         <h3>Digital Passes</h3>
<p>Members get digital QR codes for fast and secure entry into any gym. No cards, no paperwork — just scan and go.</p>
        </div>
        <div className="service-box small-box">
          <h3>Member Insights</h3>
<p>Understand your community with smart analytics on visits, renewals, and habits. Make better business decisions using real gym data.</p>
        </div>
      </section>

      <main className="about-main">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-text-section"
        >
  
          <p>
            FitfamPay is a digital solution created by four passionate co-founders —
            Vitalis, Kenzy, The Edoho, and Favour — to simplify payments within fitness
            and lifestyle communities.
            <br /><br />
            What started as a small idea between friends quickly grew into a platform
            built on innovation, teamwork, discipline and purpose...
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FoundersCarousel />
        </motion.section>
      </main>

      <Footer />
    </>
  );
};

export default About;
