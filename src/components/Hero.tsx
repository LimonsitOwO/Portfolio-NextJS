import { ArrowDown, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-neutral-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-neutral-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-neutral-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles className="w-4 h-4 text-black" />
          <span className="text-sm font-medium text-black">Software Developer</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-black mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          Luis Carlos
          <br />
          <span className="bg-gradient-to-r from-neutral-600 via-neutral-800 to-black bg-clip-text text-transparent">
            Ballen
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Transformo ideas en{' '}
          <span className="font-semibold text-black">soluciones digitales</span> excepcionales.
          <br />
          Desarrollo web, IA y despliegues de clase mundial.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-black hover:bg-neutral-800 text-white shadow-2xl hover:shadow-black/50 transition-all duration-300 hover:scale-105 group"
            onClick={scrollToServices}
          >
            <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Explorar Servicios
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contactar Ahora
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-neutral-400" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
    </section>
  );
}
