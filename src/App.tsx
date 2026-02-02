import { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WorkProcess } from './components/WorkProcess';
import { ServiceSelector } from './components/ServiceSelector';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services onServiceSelect={setSelectedService} />
      <WorkProcess />
      <ServiceSelector
        selectedService={selectedService}
        onServiceChange={setSelectedService}
      />
      <ContactForm selectedService={selectedService} />
      <Footer />
    </div>
  );
}

export default App;
