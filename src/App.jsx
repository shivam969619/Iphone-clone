import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { ErrorBoundary } from '@sentry/react';


import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  </ErrorBoundary>
  )
}

export default Sentry.withProfiler(App);
