import React from 'react';
import { createRoot } from 'react-dom/client';
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
  X
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
            <span className="text-[0.6rem] tracking-widest text-gray-400 uppercase">Business Agency</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-brand-dark transition-colors">Home</a>
          <a href="#" className="hover:text-brand-dark transition-colors">About us</a>
          <a href="#" className="text-brand-dark font-semibold relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-brand-lime after:-bottom-1 after:left-0">Services</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Case</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Portfolio</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Blog</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Contact</a>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full hover:border-brand-lime transition-colors group">
            <span className="text-sm font-medium">Contact Us</span>
            <ArrowUpRight className="w-4 h-4 group-hover:text-brand-lime transition-colors" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">24/7 Support</span>
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
          <a href="#" className="text-gray-600 font-medium">Home</a>
          <a href="#" className="text-gray-600 font-medium">About us</a>
          <a href="#" className="text-brand-dark font-bold">Services</a>
          <a href="#" className="text-gray-600 font-medium">Contact</a>
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
          alt="Meeting" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-dark/40"></div>
        
        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl md:text-7xl font-sans font-bold text-white mb-4">Services</h1>
        </div>

        {/* Breadcrumb Positioned Absolute */}
        <div className="absolute bottom-8 right-8 md:right-20 bg-white/90 backdrop-blur px-6 py-2 rounded-full text-sm font-medium text-gray-600">
          Home <span className="text-brand-lime mx-2">→</span> <span className="text-brand-dark">Services</span>
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
            What we do
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-brand-dark leading-[1.2]">
            Empowering You to <br className="hidden md:block" />
            Live Your Best Life & <br className="hidden md:block" />
            Achieve Lasting <br className="hidden md:block" />
            Personal <br className="hidden md:block" />
            Transformation
          </h2>
        </div>

        {/* Right Col */}
        <div className="flex flex-col gap-8 pt-4">
          <p className="text-gray-600 leading-relaxed">
            At Rudra, we believe that true transformation starts with clarity and action. 
            Our coaching services are designed to provide personalized support, 
            actionable strategies, and empowering tools to help you unlock your potential.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're looking to improve your career, relationships, or personal growth, 
            we're here to guide you every step of the way.
          </p>
          
          <div className="mt-4">
            <h4 className="font-bold text-brand-dark mb-4">Key Areas We Focus On</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              {[
                "Personal Growth & Mindset Mastery",
                "Relationship Transformation",
                "Health & Wellness Coaching",
                "Career Development & Success",
                "Goal Setting & Achievement"
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
      title: "Certified Expert Coaching",
      desc: "Work with a professionally certified coach committed to your personal growth success."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proven Success Stories",
      desc: "Join hundreds who have unlocked their potential, transformed their lives."
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: "Customized Action Plans",
      desc: "Get coaching tailored to your unique goals — with clear steps to move you forward with confidence."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Supportive, Judgment-Free Space",
      desc: "Get coaching tailored to your unique goals — with clear steps to move you forward."
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
                Why Choose Us?
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-medium text-brand-dark leading-tight mb-8">
                Why Choose Us for Your <br/> Personal Transformation <br/> Journey?
              </h2>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2000&auto=format&fit=crop" 
                alt="Man smiling" 
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
}

const ServiceCard = ({ title, type, desc, image }: ServiceCardProps) => {
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
          <p className="text-brand-dark/80 text-sm mt-4">{desc || "Minimize liabilities & maximize returns."}</p>
          <div className="w-8 h-8 bg-brand-dark/10 rounded-full flex items-center justify-center mt-4">
             <Flag className="w-4 h-4 text-brand-dark" />
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
        <div className="absolute bottom-6 left-6 w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center">
          <Leaf className="w-5 h-5 text-brand-dark" />
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
        <p className="text-gray-500 text-sm mt-2">{desc || "Tailored strategies to build preserve"}</p>
        <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center mt-6 text-brand-dark">
          <div className="w-2 h-2 bg-brand-dark rounded-full"></div> 
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  // Columns data structure based on the masonry layout in the design
  const column1 = [
    { type: 'text', title: 'Wealth Planning', desc: 'Tailored strategies to build preserve.' },
    { type: 'image', title: 'Wealth', image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1000&auto=format&fit=crop' },
    { type: 'text', title: 'Life Balance & Time Management', desc: 'Personalized advice to grow your portfolio' },
    { type: 'image', title: 'Balance', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop' },
  ];

  const column2 = [
    { type: 'green-text', title: 'Newly Tax Optimization', desc: 'Minimize liabilities & maximize returns.' },
    { type: 'image', title: 'Meeting', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop' },
    { type: 'text', title: 'Goal Setting & Achievement', desc: 'Tailored strategies to build preserve' },
    { type: 'image', title: 'Goals', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop' },
  ];

  const column3 = [
    { type: 'text', title: 'Retirement Planning', desc: 'Prepare for the future with confidence' },
    { type: 'image', title: 'Retirement', image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=1000&auto=format&fit=crop' },
    { type: 'text', title: 'Self-Esteem Building', desc: 'Personalized advice to grow your portfolio' },
    { type: 'image', title: 'Confidence', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop' },
  ];

  const column4 = [
    { type: 'text', title: 'Investment Guidance', desc: 'Personalized advice to grow your portfolio' },
    { type: 'image', title: 'Analysis', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop' },
    { type: 'text', title: 'Stress Management', desc: 'Personalized advice to grow your portfolio' },
    { type: 'image', title: 'Team', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-4">
            <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-brand-dark">
            Tailored Services to Grow & <br /> Protect Your Wealth
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
                  <span className="text-[0.6rem] tracking-widest text-gray-400 uppercase">Consulting Agency</span>
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
            <h4 className="font-medium mb-6">Subscribe for the latest event updates</h4>
            <div className="flex p-1 bg-white rounded-full max-w-sm">
              <input 
                type="email" 
                placeholder="Type your Email address" 
                className="flex-1 bg-transparent px-4 text-gray-900 text-sm outline-none placeholder:text-gray-400"
              />
              <button className="bg-brand-lime text-brand-dark px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-opacity-90 transition-opacity">
                Sign Up ↗
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          <div>
             <h4 className="font-medium mb-4">New York Office</h4>
             <p className="text-gray-400 text-sm leading-relaxed">
               123 Madison Avenue, Suite 600<br/>
               New York, NY 10016, USA
             </p>
          </div>

          <div>
             <h4 className="font-medium mb-4">London Office</h4>
             <p className="text-gray-400 text-sm leading-relaxed">
               45 King's Road, 3rd Floor<br/>
               Chelsea, London SW3 5EP, UK
             </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 text-xs text-gray-400 uppercase tracking-wider font-medium">
          <a href="#" className="hover:text-brand-lime transition-colors">About ↗</a>
          <a href="#" className="hover:text-brand-lime transition-colors">Our services ↗</a>
          <a href="#" className="hover:text-brand-lime transition-colors">Team ↗</a>
          <a href="#" className="hover:text-brand-lime transition-colors">Awards ↗</a>
          <a href="#" className="hover:text-brand-lime transition-colors">Contact ↗</a>
        </div>

      </div>
    </footer>
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
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
