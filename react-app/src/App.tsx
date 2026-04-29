import React, { useState, FormEvent } from 'react';
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Palette,
  Wrench,
  Briefcase,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

// --- Types ---
type Page = 'inicio' | 'portfolio' | 'presupuesto' | 'contacto';

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  info: string;
  politicaAceptada: boolean;
}

// --- Components ---

const Navbar: React.FC<{ currentPage: Page; setCurrentPage: (p: Page) => void }> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'presupuesto', label: 'Presupuesto' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-wider cursor-pointer" onClick={() => setCurrentPage('inicio')}>
            HENRIQUE <span className="font-light text-slate-400">DESIGN</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === link.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-white text-lg font-bold mb-4">Henrique da Costa Gomes</h3>
        <p className="text-sm">Diseño de Interiores & Mobiliario a Medida.</p>
        <p className="text-sm mt-2 flex items-center gap-2">
          <MapPin size={16} /> Sueca, Valencia, España
        </p>
      </div>
      <div className="flex flex-col items-start md:items-center">
        <h3 className="text-white text-lg font-bold mb-4">Redes Sociales</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/henrique_interior_designer/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/henrique-da-costa-gomes-553706331"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/henriqueda.costagomes"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end">
        <h3 className="text-white text-lg font-bold mb-4">Aviso Legal</h3>
        <a href="#" className="text-sm hover:text-white transition-colors mb-2">
          Política de Privacidad
        </a>
        <a href="#" className="text-sm hover:text-white transition-colors mb-2">
          Términos y Condiciones
        </a>
        <a href="#" className="text-sm hover:text-white transition-colors">
          Uso de Cookies
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-800 text-center text-sm">
      &copy; {new Date().getFullYear()} Henrique Design. Todos los derechos reservados.
    </div>
  </footer>
);

const Inicio: React.FC = () => (
  <div className="animate-in fade-in duration-500">
    <section className="relative h-[80vh] flex items-center justify-center bg-slate-800 text-white overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Diseño que Transforma Espacios</h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-slate-200">
          Especialista en interiores funcionales y mobiliario a medida.
        </p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre Mí</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Soy Henrique da Costa Gomes, profesional del diseño con amplia experiencia en el desarrollo integral de proyectos de interiores y mobiliario, desde la conceptualización hasta la entrega final.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Apasionado por la creación de espacios funcionales y estéticamente atractivos, con un sólido dominio de la interpretación de planos arquitectónicos y experiencia en la gestión de proyectos.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-square w-full max-w-md mx-auto bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Henrique da Costa Gomes"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Mis Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <Palette className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Diseño de Interiores</h3>
            <p className="text-slate-600">Conceptualización, desarrollo de propuestas, selección de materiales y acabados, distribución de espacios.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <Wrench className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Diseño de Mobiliario</h3>
            <p className="text-slate-600">Creación y personalización de muebles a medida, interpretación de planos técnicos y manufacturación.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <Briefcase className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Gestión de Proyectos</h3>
            <p className="text-slate-600">Planificación, ejecución, supervisión de equipos de trabajo y entrega final de proyectos unifamiliares o negocios.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Portfolio: React.FC = () => {
  const projects = [
    { id: 1, img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80', title: 'Cocina Industrial Steel' },
    { id: 2, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80', title: 'Mobiliario Compac' },
    { id: 3, img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80', title: 'Diseño Residencial' },
    { id: 4, img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80', title: 'Muebles a Medida' },
    { id: 5, img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80', title: 'Concepto Acuarela 3D' },
    { id: 6, img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80', title: 'Interiores Comerciales' },
  ];

  return (
    <div className="py-20 bg-white min-h-screen animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Portfolio</h1>
        <p className="text-slate-600 mb-12 max-w-2xl">
          Explora algunos de mis trabajos recientes en diseño de interiores, manufacturación de muebles a medida y gestión de proyectos arquitectónicos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Presupuesto: React.FC = () => {
  const [form, setForm] = useState<FormState>({ nombre: '', email: '', telefono: '', info: '', politicaAceptada: false });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.nombre || !form.email || !form.telefono || !form.info || !form.politicaAceptada) {
      setError('Por favor, complete todos los campos y acepte la política de privacidad.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Por favor, introduzca un email válido.');
      return;
    }

    setSuccess(true);
    setForm({ nombre: '', email: '', telefono: '', info: '', politicaAceptada: false });
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen flex items-center animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Solicitar Presupuesto</h1>
            <p className="text-slate-600 mb-8">Cuéntame sobre tu proyecto y te contactaré a la brevedad.</p>

            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">¡Solicitud enviada!</h3>
                <p>Gracias por contactar. Revisaré tu información y te responderé muy pronto.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Solicite más información</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    value={form.info}
                    onChange={(e) => setForm({ ...form, info: e.target.value })}
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="politica"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-600"
                      checked={form.politicaAceptada}
                      onChange={(e) => setForm({ ...form, politicaAceptada: e.target.checked })}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="politica" className="font-medium text-slate-700">
                      Acepto la <a href="#" className="text-blue-600 hover:underline">política de privacidad</a>.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-600/20 outline-none"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contacto: React.FC = () => (
  <div className="py-20 bg-white min-h-screen animate-in fade-in duration-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">Contacto</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Datos de la Empresa</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Ubicación</h3>
                  <p className="text-slate-600">Sueca, Comunidad Valenciana<br />España</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Teléfono</h3>
                  <p className="text-slate-600">+34 604 21 80 89</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">henriquedac.gomes@gmail.com</p>
                  <p className="text-slate-600">costagomeshj@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49416.71186716949!2d-0.34586524963378906!3d39.20177240356592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048d085ed06fb%3A0xc6657988cdcc8d80!2sSueca%2C%20Valencia!5e0!3m2!1sen!2ses!4v1714238512345!5m2!1sen!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la empresa"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio />;
      case 'portfolio':
        return <Portfolio />;
      case 'presupuesto':
        return <Presupuesto />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow"> {renderPage()} </main>
      <Footer />
    </div>
  );
}
