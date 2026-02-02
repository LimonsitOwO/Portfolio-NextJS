import { Code, Brain, Cloud, Database, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServicesProps {
  onServiceSelect: (service: string) => void;
}

const services = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables con React, Next.js, NestJS y más.',
    features: ['Frontend & Backend', 'APIs RESTful', 'Bases de datos', 'Arquitectura escalable'],
    gradient: 'from-neutral-100 to-neutral-200',
  },
  {
    id: 'ai-development',
    icon: Brain,
    title: 'Desarrollo IA',
    description: 'Automatización de procesos con IA, chatbots y extracción de datos.',
    features: ['OpenAI & ChatGPT', 'N8N (Flujos)', 'OCR', 'Automatización'],
    gradient: 'from-neutral-200 to-neutral-300',
  },
  {
    id: 'cloud-deployment',
    icon: Cloud,
    title: 'Despliegues Cloud',
    description: 'Infraestructura cloud, CI/CD, Docker y DevOps.',
    features: ['AWS/Azure/GCP', 'Docker', 'CI/CD Pipelines', 'Monitoreo'],
    gradient: 'from-neutral-100 to-neutral-200',
  },
  {
    id: 'database-design',
    icon: Database,
    title: 'Diseño de BD',
    description: 'Arquitectura y optimización de bases de datos relacionales y NoSQL.',
    features: ['PostgreSQL/MySQL', 'MongoDB', 'Optimización', 'Migraciones'],
    gradient: 'from-neutral-200 to-neutral-300',
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Desarrollo Móvil',
    description: 'Aplicaciones móviles nativas e híbridas.',
    features: ['Desarrollo nativo', 'Apps híbridas', 'UI/UX móvil', 'Integraciones'],
    gradient: 'from-neutral-100 to-neutral-200',
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'SEO y Optimización',
    description: 'Posicionamiento en Google y optimización web.',
    features: ['SEO On-Page', 'Google Search', 'Meta Tags', 'Analytics'],
    gradient: 'from-neutral-200 to-neutral-300',
  },
];

export function Services({ onServiceSelect }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6">
            Servicios
            <span className="block text-neutral-600 mt-2">Profesionales</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Soluciones tecnológicas completas adaptadas a tus necesidades específicas
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group cursor-pointer border-2 border-neutral-200 hover:border-black transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 bg-gradient-to-br overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onClick={() => {
                  onServiceSelect(service.id);
                  document.getElementById('service-selector')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-black group-hover:text-neutral-800 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mr-2 group-hover:scale-150 transition-transform"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-600">
            ¿No encuentras lo que buscas?{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-semibold text-black hover:underline underline-offset-4 decoration-2 transition-all"
            >
              Hablemos de tu proyecto
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
