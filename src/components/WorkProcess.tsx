import { CheckCircle2, Lightbulb, Code2, Rocket, HeadphonesIcon } from 'lucide-react';

export function WorkProcess() {
  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Descubrimiento',
      description: 'Entendemos tu visión, objetivos y necesidades específicas del proyecto.',
      details: [
        'Reunión inicial sin compromiso',
        'Análisis de requerimientos',
        'Definición de alcance',
        'Propuesta personalizada'
      ]
    },
    {
      number: '02',
      icon: Code2,
      title: 'Desarrollo',
      description: 'Construcción iterativa con actualizaciones constantes y feedback continuo.',
      details: [
        'Sprints de 4-8 semanas',
        'Demos regulares',
        'Código limpio y documentado',
        'Testing automatizado'
      ]
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Lanzamiento',
      description: 'Despliegue profesional y puesta en producción sin contratiempos.',
      details: [
        'Deploy en tu plataforma preferida',
        'Configuración de dominio',
        'Optimización de performance',
        'Documentación completa'
      ]
    },
    {
      number: '04',
      icon: HeadphonesIcon,
      title: 'Soporte',
      description: 'Acompañamiento post-lanzamiento para asegurar el éxito de tu proyecto.',
      details: [
        'Soporte técnico incluido',
        'Corrección de bugs',
        'Actualizaciones menores',
        'Consultoría continua'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.03),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6">
            Cómo Trabajo
            <span className="block text-neutral-600 mt-2">Contigo</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Un proceso transparente y colaborativo diseñado para el éxito de tu proyecto
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Connecting line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-neutral-300 to-transparent -z-10"></div>
                )}

                <div className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-black transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 h-full">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-neutral-200 mb-4 group-hover:text-neutral-300 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5 mr-2" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
