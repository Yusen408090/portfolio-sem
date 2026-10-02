const { useState } = React;

// --- Icons ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fullName = "Yuan Sen";
  const shortName = "Yuan";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary-light selection:text-foreground">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary-light/30">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 md:px-8 lg:px-12 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-primary">
            {shortName}.
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</a>
            <a href="#habilidades" className="hover:text-primary transition-colors">Habilidades</a>
            <a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a>
            <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
            
            <a href="./assets/CV_Yuan_Sen.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-sm shadow-primary/20 hover:shadow-md hover:-translate-y-0.5">
              <DownloadIcon />
              Ver Currículum
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir o cerrar menú" aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-primary-light/30 shadow-lg px-4 py-6 flex flex-col gap-4">
            <a href="#sobre-mi" className="px-4 py-2 font-medium hover:bg-background rounded-lg" onClick={() => setMobileMenuOpen(false)}>Sobre Mí</a>
            <a href="#habilidades" className="px-4 py-2 font-medium hover:bg-background rounded-lg" onClick={() => setMobileMenuOpen(false)}>Habilidades</a>
            <a href="#proyectos" className="px-4 py-2 font-medium hover:bg-background rounded-lg" onClick={() => setMobileMenuOpen(false)}>Proyectos</a>
            <a href="#blog" className="px-4 py-2 font-medium hover:bg-background rounded-lg" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <a href="./assets/CV_Yuan_Sen.pdf" download="CV_Yuan_Sen.pdf" className="mt-2 flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full font-medium" onClick={() => setMobileMenuOpen(false)}>
              <DownloadIcon />
              Descargar CV
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="sobre-mi" className="max-w-[1440px] mx-auto px-3 sm:px-5 md:px-8 lg:px-12 py-16 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex flex-col items-start gap-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light/40 text-primary text-xs font-semibold tracking-wide uppercase">
                Open to work
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Hola, soy <span className="text-primary">{shortName}</span> <br/>
                <span className="text-foreground/80">Estudiante de Ingeniería de 4.º Cuatrimestre</span>
              </h1>
              <p className="text-foreground/70 text-lg sm:text-xl max-w-lg leading-relaxed">
                Especializado en Diseño UI/UX y Desarrollo Frontend. Creo interfaces modernas, prototipos funcionales y experiencias web enfocadas en el usuario.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <a href="#proyectos" className="inline-flex items-center gap-2 bg-foreground text-surface px-6 py-3 rounded-full hover:bg-foreground/90 transition-all font-medium">
                  Ver Proyectos
                  <ArrowRightIcon />
                </a>
                <a href="https://github.com/Yusen408090" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-surface text-foreground border border-primary-light/50 px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all font-medium">
                  <GithubIcon />
                  GitHub
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-primary-light rounded-3xl rotate-6 opacity-50 scale-105"></div>
                <div className="absolute inset-0 bg-primary rounded-3xl -rotate-3 opacity-10"></div>
                <div className="relative w-full h-full bg-surface rounded-3xl border border-primary-light/40 overflow-hidden shadow-2xl flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&h=800&fit=crop')] bg-cover bg-center">
                   {/* Fallback pattern or photo */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="habilidades" className="bg-surface py-16 md:py-24 border-y border-primary-light/20">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-5 md:px-8 lg:px-12">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Qué sé hacer</h2>
              <p className="text-foreground/70 text-lg">Habilidades técnicas y herramientas principales en las que enfoco mi trabajo.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: 'UI/UX Design', desc: 'Figma, Wireframing, Prototipado interactivo, Sistemas de Diseño.' },
                { title: 'Front-end', desc: 'HTML5, CSS3, JavaScript, React, Tailwind CSS.' },
                { title: 'Bases de Datos', desc: 'Conceptos fundamentales, diseño relacional básico (MySQL, PostgreSQL).' },
                { title: 'Herramientas', desc: 'Git, GitHub, VS Code, Vercel, Metodologías Ágiles.' }
              ].map((skill, i) => (
                <div key={i} className="bg-background p-6 rounded-2xl border border-primary-light/30 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 bg-primary-light/30 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-surface transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="proyectos" className="py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-5 md:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Proyectos Destacados</h2>
                <p className="text-foreground/70 text-lg">Casos de estudio reales que demuestran mi proceso desde el diseño hasta el desarrollo.</p>
              </div>
              <a href="https://github.com/Yusen408090" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
                Ver todos en GitHub
                <ArrowRightIcon />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                { 
                  title: 'MechSync', 
                  desc: 'Plataforma de gestión y agendamiento para talleres automotrices especializados en transmisiones. Diseño de interfaz completa en Figma con panel técnico, cotizaciones y seguimiento en tiempo real.', 
                  img: './mechsync-transparent.png', 
                  tags: ['UI/UX', 'Figma', 'Web Platform'],
                  links: [
                    { label: 'Demo', url: '#', icon: <ExternalLinkIcon /> },
                    { label: 'Repositorio', url: 'https://github.com/Yusen408090', icon: <GithubIcon /> }
                  ]
                },
                { 
                  title: 'ContaCitas — Gestión de Citas con Contadores Públicos', 
                  desc: 'Diseño de identidad visual y landing page responsiva para agendamiento de citas con consultores financieros y contables.', 
                  img: './contacitas-transparent.png', 
                  tags: ['Branding', 'Figma', 'Responsive Design'],
                  links: [
                    { label: 'Case Study', url: '#', icon: <ExternalLinkIcon /> },
                    { label: 'Figma Prototype', url: '#', icon: <ExternalLinkIcon /> }
                  ]
                }
              ].map((project, i) => (
                <div key={i} className="group flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-transparent mb-6 flex items-center justify-center p-4">
                    <img src={project.img} alt={project.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
                  </div>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-surface border border-primary-light/50 rounded-md text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-foreground/70 mb-6 flex-grow">{project.desc}</p>
                  <div className="flex gap-4">
                    {project.links.map((link, j) => (
                      <a key={j} href={link.url} target={link.url.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                        {link.icon} {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG / KNOWLEDGE HUB */}
        <section id="blog" className="bg-surface py-16 md:py-24 border-y border-primary-light/20">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-5 md:px-8 lg:px-12">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Blog de Conocimientos</h2>
              <p className="text-foreground/70 text-lg">Guías oficiales de Figma, MDN y React que utilizo para aprender diseño y desarrollo web.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Cómo estructurar componentes en Figma', source: 'Figma Learn', language: 'Inglés', url: 'https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma' },
                { title: 'Conceptos básicos de HTML para principiantes', source: 'MDN Web Docs', language: 'Español', url: 'https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content' },
                { title: 'Entendiendo el estado en React (con ejemplos simples)', source: 'React', language: 'Español', url: 'https://es.react.dev/learn/state-a-components-memory' }
              ].map((article, i) => (
                <a key={i} href={article.url} target="_blank" rel="noopener noreferrer" className="flex flex-col p-6 bg-background rounded-2xl border border-primary-light/30 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all group">
                  <div className="text-xs text-foreground/50 font-medium mb-4 flex gap-3">
                    <span>{article.source}</span>
                    <span>•</span>
                    <span>{article.language}</span>
                  </div>
                  <h3 className="font-bold text-lg leading-tight mb-4 group-hover:text-primary transition-colors">{article.title}</h3>
                  <div className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Leer guía oficial <ExternalLinkIcon />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-background py-12 border-t border-primary-light/30">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-xl tracking-tight text-primary mb-2">{fullName}.</span>
            <p className="text-sm text-foreground/60 text-center md:text-left">
              Diseñado y desarrollado con dedicación. <br/>
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/Yusen408090" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface border border-primary-light/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-surface hover:border-primary transition-all">
              <GithubIcon />
            </a>
            {/* Contacto / Email Button */}
            <a href="mailto:yuan.sen998@gmail.com" className="w-10 h-10 rounded-full bg-surface border border-primary-light/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-surface hover:border-primary transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
            {/* LinkedIn Placeholder */}
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-primary-light/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-surface hover:border-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
