import { Code2, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8" />
              <span className="text-2xl font-bold">Luis Carlos Ballen</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Software Developer especializado en crear soluciones digitales excepcionales.
              Transformando ideas en realidad desde 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
              <li>
                <a
                  href="https://portfolio-next-js-sage-three.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Portfolio Completo
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'Docker', 'AWS', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full hover:bg-neutral-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm flex items-center gap-2">
              © {currentYear} Luis Carlos Ballen. Hecho con{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              {' '}y mucho código
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/LimonsitOwO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="mailto:luislm080304@gmail.com"
                className="text-neutral-400 hover:text-white transition-colors text-sm"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/luis-carlos-ballen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/573208249935"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
