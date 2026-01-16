import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";
import { 
  ArrowUpRight, 
  Phone, 
  Search, 
  Check, 
  Play, 
  Award, 
  Shield, 
  Flag, 
  Heart, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Leaf,
  Menu,
  X,
  MessageCircle,
  Send,
  Loader2,
  Bot,
  Coins,
  Clock,
  TrendingUp,
  Target,
  Umbrella,
  Smile,
  BarChart,
  Brain,
  Users,
  Scale
} from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-brand-lime">
             <Leaf className="w-6 h-6 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-brand-dark leading-none">RUDRA</span>
            <span className="text-[0.6rem] tracking-widest text-gray-400 uppercase">Agencia de Negocios</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-brand-dark transition-colors">Inicio</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Nosotros</a>
          <a href="#" className="text-brand-dark font-semibold relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-brand-lime after:-bottom-1 after:left-0">Servicios</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Casos</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Portafolio</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Blog</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Contacto</a>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full hover:border-brand-lime transition-colors group">
            <span className="text-sm font-medium">Contáctanos</span>
            <ArrowUpRight className="w-4 h-4 group-hover:text-brand-lime transition-colors" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Soporte 24/7</span>
              <span className="text-sm font-bold text-brand-dark">(+597) 678 09876</span>
            </div>
          </div>

          <button className="text-gray-400 hover:text-brand-dark">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 py-4 px-6 flex flex-col gap-4 shadow-lg">
          <a href="#" className="text-gray-600 font-medium">Inicio</a>
          <a href="#" className="text-gray-600 font-medium">Nosotros</a>
          <a href="#" className="text-brand-dark font-bold">Servicios</a>
          <a href="#" className="text-gray-600 font-medium">Contacto</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
          alt="Reunión de negocios" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-dark/40"></div>
        
        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl md:text-7xl font-sans font-bold text-white mb-4">Servicios</h1>
        </div>

        {/* Breadcrumb Positioned Absolute */}
        <div className="absolute bottom-8 right-8 md:right-20 bg-white/90 backdrop-blur px-6 py-2 rounded-full text-sm font-medium text-gray-600">
          Inicio <span className="text-brand-lime mx-2">→</span> <span className="text-brand-dark">Servicios</span>
        </div>
      </div>
      
      {/* Curved Bottom Mask */}
      <div className="absolute -bottom-1 left-0 w-full h-16 md:h-24 bg-white rounded-t-[50%] md:rounded-t-[100%] scale-x-110"></div>
    </section>
  );
};

const Intro = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Col */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-4">
            <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
            Lo que hacemos
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-brand-dark leading-[1.2]">
            Empoderándote para <br className="hidden md:block" />
            Vivir tu Mejor Vida y <br className="hidden md:block" />
            Lograr una Transformación <br className="hidden md:block" />
            Personal <br className="hidden md:block" />
            Duradera
          </h2>
        </div>

        {/* Right Col */}
        <div className="flex flex-col gap-8 pt-4">
          <p className="text-gray-600 leading-relaxed">
            En Rudra, creemos que la verdadera transformación comienza con claridad y acción. 
            Nuestros servicios de coaching están diseñados para brindar apoyo personalizado, 
            estrategias accionables y herramientas de empoderamiento para ayudarte a desbloquear tu potencial.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ya sea que busques mejorar tu carrera, relaciones o crecimiento personal, 
            estamos aquí para guiarte en cada paso del camino.
          </p>
          
          <div className="mt-4">
            <h4 className="font-bold text-brand-dark mb-4">Áreas Clave en las que nos Enfocamos</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              {[
                "Crecimiento Personal y Maestría Mental",
                "Transformación de Relaciones",
                "Coaching de Salud y Bienestar",
                "Desarrollo Profesional y Éxito",
                "Establecimiento y Logro de Objetivos"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-brand-lime"><Check className="w-4 h-4" /></span>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Coaching Experto Certificado",
      desc: "Trabaja con un coach profesionalmente certificado comprometido con tu éxito de crecimiento personal."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Historias de Éxito Probadas",
      desc: "Únete a cientos que han desbloqueado su potencial y transformado sus vidas."
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: "Planes de Acción Personalizados",
      desc: "Obtén coaching adaptado a tus objetivos únicos, con pasos claros para avanzar con confianza."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Espacio de Apoyo Sin Juicios",
      desc: "Recibe orientación adaptada a tus metas únicas, con pasos claros para avanzar."
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-4">
                <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
                ¿Por qué Elegirnos?
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-medium text-brand-dark leading-tight mb-8">
                ¿Por qué Elegirnos para <br/> tu Viaje de Transformación <br/> Personal?
              </h2>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2000&auto=format&fit=crop" 
                alt="Hombre sonriendo" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 text-brand-dark fill-brand-dark ml-1" />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-6 pt-12">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center shrink-0 group-hover:bg-brand-dark transition-colors duration-300">
                  <div className="text-brand-dark group-hover:text-brand-lime transition-colors">
                    {f.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  type: 'text' | 'image' | 'green-text';
  desc?: string;
  image?: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, type, desc, image, icon }: ServiceCardProps) => {
  if (type === 'green-text') {
    return (
      <div className="bg-brand-lime p-8 rounded-3xl h-[300px] flex flex-col justify-between relative group cursor-pointer transition-transform hover:-translate-y-1">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-sans font-medium text-brand-dark max-w-[80%]">{title}</h3>
          <div className="bg-brand-dark p-2 rounded-full text-white">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        <div>
          <p className="text-brand-dark/80 text-sm mt-4">{desc || "Minimiza pasivos y maximiza retornos."}</p>
          <div className="w-8 h-8 bg-brand-dark/10 rounded-full flex items-center justify-center mt-4 text-brand-dark">
             {icon || <Flag className="w-4 h-4" />}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'image') {
    return (
      <div className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
        <div className="absolute bottom-6 left-6 w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center text-brand-dark">
          {icon || <Leaf className="w-5 h-5" />}
        </div>
      </div>
    );
  }

  // default white text card
  return (
    <div className="bg-white p-8 rounded-3xl h-[300px] flex flex-col justify-between shadow-sm relative group cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-sans font-medium text-brand-dark max-w-[70%]">{title}</h3>
        <div className="bg-gray-100 p-2 rounded-full text-gray-600 group-hover:bg-brand-lime group-hover:text-brand-dark transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <div>
        <p className="text-gray-500 text-sm mt-2">{desc || "Estrategias a medida para construir y preservar."}</p>
        <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center mt-6 text-brand-dark">
          {icon || <div className="w-2 h-2 bg-brand-dark rounded-full"></div>}
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  // Columns data structure based on the masonry layout in the design
  const column1 = [
    { type: 'text', title: 'Planificación Patrimonial', desc: 'Estrategias a medida para construir y preservar.', icon: <Coins className="w-4 h-4" /> },
    { type: 'image', title: 'Patrimonio', image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1000&auto=format&fit=crop', icon: <Coins className="w-5 h-5" /> },
    { type: 'text', title: 'Equilibrio de Vida y Tiempo', desc: 'Consejos personalizados para crecer tu portafolio.', icon: <Scale className="w-4 h-4" /> },
    { type: 'image', title: 'Equilibrio', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop', icon: <Clock className="w-5 h-5" /> },
  ];

  const column2 = [
    { type: 'green-text', title: 'Optimización Fiscal', desc: 'Minimiza pasivos y maximiza retornos.', icon: <TrendingUp className="w-4 h-4" /> },
    { type: 'image', title: 'Reunión', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop', icon: <Users className="w-5 h-5" /> },
    { type: 'text', title: 'Logro de Objetivos', desc: 'Estrategias a medida para construir y preservar.', icon: <Target className="w-4 h-4" /> },
    { type: 'image', title: 'Metas', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop', icon: <Target className="w-5 h-5" /> },
  ];

  const column3 = [
    { type: 'text', title: 'Planificación de Jubilación', desc: 'Prepárate para el futuro con confianza.', icon: <Umbrella className="w-4 h-4" /> },
    { type: 'image', title: 'Jubilación', image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=1000&auto=format&fit=crop', icon: <Umbrella className="w-5 h-5" /> },
    { type: 'text', title: 'Construcción de Autoestima', desc: 'Consejos personalizados para crecer tu portafolio.', icon: <Smile className="w-4 h-4" /> },
    { type: 'image', title: 'Confianza', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop', icon: <Smile className="w-5 h-5" /> },
  ];

  const column4 = [
    { type: 'text', title: 'Orientación de Inversiones', desc: 'Consejos personalizados para crecer tu portafolio.', icon: <BarChart className="w-4 h-4" /> },
    { type: 'image', title: 'Análisis', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop', icon: <BarChart className="w-5 h-5" /> },
    { type: 'text', title: 'Gestión del Estrés', desc: 'Consejos personalizados para crecer tu portafolio.', icon: <Brain className="w-4 h-4" /> },
    { type: 'image', title: 'Equipo', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop', icon: <Brain className="w-5 h-5" /> },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-4">
            <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-brand-dark">
            Servicios a Medida para Crecer y <br /> Proteger tu Patrimonio
          </h2>
        </div>

        {/* Responsive Grid - 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          
          <div className="space-y-6">
            {column1.map((item, i) => (
              <ServiceCard key={i} {...item as any} />
            ))}
          </div>

          <div className="space-y-6">
            {column2.map((item, i) => (
              <ServiceCard key={i} {...item as any} />
            ))}
          </div>

          <div className="space-y-6">
            {column3.map((item, i) => (
              <ServiceCard key={i} {...item as any} />
            ))}
          </div>

          <div className="space-y-6">
            {column4.map((item, i) => (
              <ServiceCard key={i} {...item as any} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div>
             <div className="flex items-center gap-2 mb-6">
                <Leaf className="w-6 h-6 text-brand-lime" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-widest leading-none">RUDRA</span>
                  <span className="text-[0.6rem] tracking-widest text-gray-400 uppercase">Agencia de Consultoría</span>
                </div>
             </div>
             <div className="text-gray-400 text-sm">© 2025 Rudra, Inc.</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center text-brand-dark hover:opacity-90 cursor-pointer">
              <Facebook className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-dark transition-colors cursor-pointer">
              <span className="font-bold text-sm">X</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-dark transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-dark transition-colors cursor-pointer">
              <span className="font-bold text-lg">P</span>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-16"></div>

        {/* Middle Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h4 className="font-medium mb-6">Suscríbete para actualizaciones</h4>
            <div className="flex p-1 bg-white rounded-full max-w-sm">
              <input 
                type="email" 
                placeholder="Escribe tu correo" 
                className="flex-1 bg-transparent px-4 text-gray-900 text-sm outline-none placeholder:text-gray-400"
              />
              <button className="bg-brand-lime text-brand-dark px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-opacity-90 transition-opacity">
                Registro ↗
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          <div>
             <h4 className="font-medium mb-4">Oficina en New York</h4>
             <p className="text-gray-400 text-sm leading-relaxed">
               123 Madison Avenue, Suite 600<br/>
               New York, NY 10016, USA
             </p>
          </div>

          <div>
             <h4 className="font-medium mb-4">Oficina en Londres</h4>
             <p className="text-gray-400 text-sm leading-relaxed">
               45 King's Road, 3rd Floor<br/>
               Chelsea, London SW3 5EP, UK
             </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 text-xs text-gray-400 uppercase tracking-wider font-medium">
          <a href="#" className="hover:text-brand-lime transition-colors">Nosotros ↗</a>
          <a href="#" className="hover:text-brand-lime transition-colors">Servicios ↗</a>
          <a href="#" className="hover:text-brand-lime transition-colors">Equipo ↗</a>
          <a href="#" className="hover:text-brand-lime transition-colors">Premios ↗</a>
          <a href="#" className="hover:text-brand-lime transition-colors">Contacto ↗</a>
        </div>

      </div>
    </footer>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: '¡Hola! Soy el Asistente IA de Rudra. ¿Cómo puedo ayudarte con nuestros servicios hoy?' }
  ]);
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Create history for context
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        history: history,
        config: {
          systemInstruction: "Eres un asistente de IA útil, profesional y amigable para 'Rudra Business Agency'. Tu objetivo es ayudar a clientes potenciales con información sobre nuestros servicios, que incluyen: Planificación Patrimonial, Equilibrio de Vida y Gestión del Tiempo, Optimización Fiscal, Establecimiento y Logro de Objetivos, Planificación de Jubilación, Construcción de Autoestima, Orientación de Inversiones y Gestión del Estrés. Nos enfocamos en la transformación personal, el desarrollo profesional y el crecimiento financiero. Mantén las respuestas concisas y orientadas a los negocios. Si te preguntan sobre precios o citas específicas, anímalos a usar el botón 'Contáctanos' o llamar al (+597) 678 09876. Responde siempre en español.",
        }
      });

      const resultStream = await chat.sendMessageStream({ message: userMessage });
      
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      for await (const chunk of resultStream) {
        const text = chunk.text;
        if (text) {
          fullResponse += text;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = fullResponse;
            return newMessages;
          });
        }
      }

    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, tengo problemas para conectar con el servidor en este momento. Por favor, inténtalo de nuevo más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50 transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-gray-200 text-gray-800' : 'bg-brand-lime text-brand-dark'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-40 border border-gray-100 animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-brand-dark p-4 flex items-center gap-3 shadow-md">
            <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center">
              <Bot className="w-5 h-5 text-brand-dark" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Asistente Rudra</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-brand-lime text-xs">En línea</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-lime text-brand-dark rounded-tr-none font-medium' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-brand-lime transition-colors">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre nuestros servicios..."
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder:text-gray-400"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="text-brand-dark hover:text-brand-lime transition-colors disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400">Powered by Gemini AI</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark">
      <Header />
      <Hero />
      <Intro />
      <WhyChooseUs />
      <ServicesGrid />
      <Footer />
      <ChatWidget />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
