import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Code, Brain, Cloud, Database, Smartphone, Zap, Sparkles } from 'lucide-react';

interface ServiceSelectorProps {
  selectedService: string | null;
  onServiceChange: (service: string) => void;
}

const serviceDetails = {
  'web-development': {
    icon: Code,
    title: 'Desarrollo Web Full Stack',
    description: 'Aplicaciones web modernas que impulsan tu negocio',
    mainTechnologies: [
      'React & Next.js',
      'Node.js & NestJS',
      'TypeScript',
      'PostgreSQL / MongoDB',
      'Tailwind CSS',
      'REST & GraphQL APIs'
    ],
    clientBenefits: [
      'Interfaz intuitiva y fácil de usar',
      'Carga ultra-rápida (< 2 segundos)',
      'Funciona en todos los dispositivos',
      'Fácil de actualizar y mantener',
      'SEO optimizado para Google',
      'Seguridad de nivel empresarial'
    ],
    idealFor: [
      'E-commerce y tiendas online',
      'Plataformas SaaS',
      'Dashboards administrativos',
      'Portales corporativos',
      'Aplicaciones web complejas'
    ],
    timeline: '4-12 semanas según complejidad'
  },
  'ai-development': {
    icon: Brain,
    title: 'Desarrollo de IA y Automatización',
    description: 'Automatiza procesos y conecta tus herramientas',
    mainTechnologies: [
      'OpenAI & ChatGPT',
      'N8N (Automatización de flujos)',
      'OCR (Reconocimiento de texto)',
      'APIs de IA',
      'Webhooks e integraciones',
      'Python para automatización'
    ],
    clientBenefits: [
      'Automatización de tareas repetitivas',
      'Chatbots inteligentes 24/7',
      'Extracción de datos de documentos',
      'Integración entre plataformas',
      'Procesamiento de documentos PDF',
      'Reducción de costos operativos'
    ],
    idealFor: [
      'Chatbots de atención al cliente',
      'Automatización de workflows',
      'Extracción de datos de facturas',
      'Integración de herramientas',
      'Asistentes virtuales'
    ],
    timeline: '6-16 semanas según complejidad'
  },
  'cloud-deployment': {
    icon: Cloud,
    title: 'Despliegue y DevOps',
    description: 'Tu aplicación en la nube, siempre disponible',
    mainTechnologies: [
      'AWS / Azure / Google Cloud',
      'Docker',
      'CI/CD automatizado',
      'Vercel / Netlify',
      'Monitoreo 24/7',
      'Backups automáticos'
    ],
    clientBenefits: [
      'Disponibilidad 99.9% garantizada',
      'Escalabilidad automática',
      'Costos optimizados',
      'Actualizaciones sin downtime',
      'Respaldos diarios automáticos',
      'Recuperación ante desastres'
    ],
    idealFor: [
      'Aplicaciones en producción',
      'Migración a la nube',
      'Infraestructura escalable',
      'Ambientes de desarrollo',
      'Aplicaciones críticas'
    ],
    timeline: '3-8 semanas según infraestructura'
  },
  'database-design': {
    icon: Database,
    title: 'Diseño y Optimización de Bases de Datos',
    description: 'Datos organizados, seguros y de acceso rápido',
    mainTechnologies: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis (caché)',
      'Prisma ORM',
      'Optimización de consultas'
    ],
    clientBenefits: [
      'Consultas ultra-rápidas',
      'Datos seguros y encriptados',
      'Fácil de escalar',
      'Respaldos automáticos',
      'Integridad de datos garantizada',
      'Reportes y analytics eficientes'
    ],
    idealFor: [
      'Sistemas con muchos usuarios',
      'Aplicaciones con big data',
      'E-commerce con inventario',
      'CRM y ERP',
      'Plataformas de contenido'
    ],
    timeline: '2-6 semanas según complejidad'
  },
  'mobile-development': {
    icon: Smartphone,
    title: 'Desarrollo de Aplicaciones Móviles',
    description: 'Tu negocio en el bolsillo de tus clientes',
    mainTechnologies: [
      'Desarrollo nativo',
      'Aplicaciones híbridas',
      'Firebase',
      'Notificaciones push',
      'Integración con APIs',
      'App Store & Play Store'
    ],
    clientBenefits: [
      'Aplicaciones para iOS y Android',
      'Funciona sin internet (offline)',
      'Notificaciones en tiempo real',
      'Integración con cámara y GPS',
      'Pagos in-app seguros',
      'Actualizaciones instantáneas'
    ],
    idealFor: [
      'Apps de delivery',
      'Redes sociales',
      'Fitness y salud',
      'Educación online',
      'Servicios a domicilio'
    ],
    timeline: '6-14 semanas según funcionalidades'
  },
  'performance': {
    icon: Zap,
    title: 'SEO y Optimización',
    description: 'Posicionamiento y velocidad para tu sitio web',
    mainTechnologies: [
      'SEO On-Page',
      'Google Search Console',
      'Meta Tags & Schema',
      'Optimización de imágenes (opcional)',
      'Performance básico (opcional)',
      'Analytics & Tracking'
    ],
    clientBenefits: [
      'Mejor posicionamiento en Google',
      'Más tráfico orgánico',
      'Menos rebote de usuarios',
      'Más conversiones',
      'Sitio más rápido (opcional)',
      'Mejor experiencia móvil'
    ],
    idealFor: [
      'Sitios web nuevos',
      'E-commerce',
      'Blogs y medios',
      'Landing pages',
      'Negocios locales'
    ],
    timeline: '2-4 semanas'
  },
};

export function ServiceSelector({ selectedService, onServiceChange }: ServiceSelectorProps) {
  const defaultService = selectedService || 'web-development';
  const service = serviceDetails[defaultService as keyof typeof serviceDetails];
  const Icon = service.icon;

  return (
    <section id="service-selector" className="py-24 bg-gradient-to-b from-neutral-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Explora Cada Servicio
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Descubre qué puedo hacer por tu proyecto y cómo te beneficiará
          </p>
        </div>

        <Tabs
          value={defaultService}
          onValueChange={onServiceChange}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto p-0 mb-8">
            {Object.entries(serviceDetails).map(([key, details]) => {
              const TabIcon = details.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-black data-[state=active]:text-white bg-white border-2 border-neutral-200 data-[state=active]:border-black rounded-lg transition-all duration-300 hover:border-neutral-400"
                >
                  <TabIcon className="w-5 h-5" />
                  <span className="text-xs font-medium text-center leading-tight">
                    {details.title.split(' ')[0]}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(serviceDetails).map(([key, details]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Card className="border-2 border-neutral-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-neutral-50 to-white border-b-2 border-neutral-200">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl font-bold text-black mb-2">
                        {details.title}
                      </CardTitle>
                      <CardDescription className="text-base text-neutral-600">
                        {details.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Tecnologías
                      </h3>
                      <div className="space-y-2">
                        {details.mainTechnologies.map((tech, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-neutral-700 bg-neutral-50 px-3 py-2 rounded-lg">
                            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Benefits */}
                    <div>
                      <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Beneficios para Ti
                      </h3>
                      <ul className="space-y-3">
                        {details.clientBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                            <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div>
                      <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Ideal Para
                      </h3>
                      <ul className="space-y-3">
                        {details.idealFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0 mt-1.5"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Timeline */}
                      <div className="mt-6 p-4 bg-black text-white rounded-xl">
                        <p className="text-neutral-400 text-xs mb-1">Tiempo estimado</p>
                        <p className="text-sm font-bold">{details.timeline}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-xl border-2 border-neutral-200">
                    <p className="text-center text-neutral-700">
                      ¿Te interesa este servicio?{' '}
                      <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="font-bold text-black hover:underline underline-offset-4 decoration-2"
                      >
                        Solicita una cotización personalizada →
                      </button>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
