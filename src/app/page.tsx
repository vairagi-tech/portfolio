import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';


export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Certificates />
      <Achievements />
      <Projects />
    
      <Contact />
      <Footer />
    </Layout>
  );
}
