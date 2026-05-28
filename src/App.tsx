import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Venue from './components/Venue';
import Accommodation from './components/Accommodation';
import Timeline from './components/Timeline';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-base relative selection:bg-dark-bg selection:text-base">
      <Header />
      <Hero />
      <Intro />
      <Venue />
      <Accommodation />
      <Timeline />
      <Gifts />
      <RSVP />
      <FAQ />
      <Footer />
    </main>
  );
}

