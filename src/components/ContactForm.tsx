import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Send, Mail, Phone, MapPin, CheckCircle2, Linkedin } from 'lucide-react';

interface ContactFormProps {
  selectedService: string | null;
}

const serviceNames: Record<string, string> = {
  'web-development': 'Desarrollo Web',
  'ai-development': 'Desarrollo IA',
  'cloud-deployment': 'Despliegues Cloud',
  'database-design': 'Diseño de BD',
  'mobile-development': 'Desarrollo Móvil',
  'performance': 'SEO y Optimización',
};

export function ContactForm({ selectedService }: ContactFormProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    selectedService ? [selectedService] : []
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sync with selectedService prop changes
  useState(() => {
    if (selectedService && !selectedServices.includes(selectedService)) {
      setSelectedServices(prev => [...prev, selectedService]);
    }
  });

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      alert('Por favor selecciona al menos un servicio.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: selectedServices.map(id => serviceNames[id] || id)
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        setSelectedServices([]);
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('No se pudo conectar con el servidor de correo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Hablemos de
              <span className="block text-neutral-400 mt-2">Tu Proyecto</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
              Estoy listo para convertir tu visión en realidad. Selecciona los servicios que te interesan y cuéntame sobre tu proyecto.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <p className="text-lg font-medium">luislm080304@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Teléfono</p>
                  <p className="text-lg font-medium">+57 320 8249935</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Ubicación</p>
                  <p className="text-lg font-medium">Colombia</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/LimonsitOwO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/luis-carlos-ballen/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <Card className="border-2 border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Solicitar Servicio
              </CardTitle>
              <CardDescription className="text-neutral-400">
                Completa el formulario y te contactaré pronto
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-neutral-400">Te contactaré pronto para discutir tu proyecto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection Tags */}
                  <div>
                    <label className="text-sm font-medium text-neutral-300 mb-3 block">
                      ¿En qué servicios estás interesado? *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(serviceNames).map(([id, name]) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggleService(id)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border-2 ${selectedServices.includes(id)
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600'
                            }`}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-neutral-300 mb-2 block">
                        Nombre *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-white"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-neutral-300 mb-2 block">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-neutral-300 mb-2 block">
                        Teléfono
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-white"
                        placeholder="+57 123 456 7890"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-neutral-300 mb-2 block">
                        Empresa
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-white"
                        placeholder="Tu empresa"
                      />
                    </div>
                  </div>

                  {selectedService && (
                    <div>
                      <label className="text-sm font-medium text-neutral-300 mb-2 block">
                        Servicio Seleccionado
                      </label>
                      <Badge className="bg-white text-black text-base px-4 py-2 hover:bg-neutral-100">
                        {serviceNames[selectedService]}
                      </Badge>
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium text-neutral-300 mb-2 block">
                      Cuéntame sobre tu proyecto *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-white resize-none"
                      placeholder="Describe tu proyecto, objetivos, timeline, presupuesto estimado..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-white text-black hover:bg-neutral-200 text-lg py-6 group disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Enviar Solicitud
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


