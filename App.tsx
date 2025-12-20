
import React from 'react';
import { USE_CASES, CORE_SUBDOMAINS, GITHUB_REPOS } from './constants';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-egyptian-blue text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-pharaoh-gold p-1 rounded">
                 <span className="text-2xl font-bold">T</span>
              </div>
              <span className="text-xl font-cinzel font-bold tracking-widest hidden sm:block">TEOS EGYPT</span>
            </div>
            <div className="hidden md:flex space-x-8 font-medium text-sm">
              <a href="#about" className="hover:text-pharaoh-gold transition-colors">ABOUT</a>
              <a href="#use-cases" className="hover:text-pharaoh-gold transition-colors">USE CASES</a>
              <a href="#ecosystem" className="hover:text-pharaoh-gold transition-colors">ECOSYSTEM</a>
              <a href="#contact" className="hover:text-pharaoh-gold transition-colors">CONTACT</a>
            </div>
            <a href="https://whitepaper.teosegypt.com/" target="_blank" className="bg-pharaoh-gold text-slate-900 px-6 py-2 rounded-full font-bold text-xs tracking-widest hover:bg-yellow-500 transition-all">
              WHITEPAPER
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 bg-egyptian-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale')`, backgroundSize: 'cover' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-7xl font-cinzel font-bold text-pharaoh-gold mb-6 leading-tight">
            TRANSFORMING GOVERNANCE
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            A Civic-First Blockchain Framework for Sovereign Digital Infrastructure. 
            Modular, Compliance-Ready, and Deployable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-pharaoh-gold text-slate-900 px-10 py-4 rounded-lg font-bold hover:scale-105 transition-transform">
              EXPLORE SOLUTIONS
            </button>
            <button className="border-2 border-pharaoh-gold text-pharaoh-gold px-10 py-4 rounded-lg font-bold hover:bg-pharaoh-gold hover:text-slate-900 transition-all">
              VIEW GITHUB
            </button>
          </div>
        </div>
      </header>

      {/* Intro section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-cinzel font-bold text-egyptian-blue mb-6">FROM THEORY TO DEPLOYMENT</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  In today's rapidly digitizing world, governments face unprecedented challenges in building secure, transparent, and efficient digital infrastructure. TEOS Egypt offers a groundbreaking solution: a deployable civic blockchain framework designed specifically for government and institutional use.
                </p>
                <p>
                  TEOS is not just another blockchain platform—it's a comprehensive solution designed to be used, not merely adopted. Each use case is modular, compliance-ready, and sovereignty-preserving.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-pharaoh-gold">
                  <h4 className="font-bold text-egyptian-blue">Civic-First</h4>
                  <p className="text-sm">Built for citizens and institutions.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-pharaoh-gold">
                  <h4 className="font-bold text-egyptian-blue">Sovereign</h4>
                  <p className="text-sm">Full state control preserved.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/teos/800/600" 
                alt="Infrastructure" 
                className="rounded-2xl shadow-2xl border-8 border-slate-100"
              />
              <div className="absolute -bottom-10 -left-10 bg-pharaoh-gold p-8 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-slate-900 font-cinzel font-bold text-2xl">EST. 2024</p>
                <p className="text-slate-800 text-sm font-medium">Digital Renaissance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cinzel font-bold text-egyptian-blue mb-4">CORE USE CASES</h2>
            <div className="w-24 h-1 bg-pharaoh-gold mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              TEOS provides modular solutions for critical national infrastructure, solving complex challenges with decentralized trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {USE_CASES.map(uc => (
              <div key={uc.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-pharaoh-gold transition-colors">
                  {uc.icon}
                </div>
                <h3 className="text-xl font-bold text-egyptian-blue mb-4">{uc.title}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-pharaoh-gold tracking-widest uppercase">The Problem</span>
                    <p className="text-sm text-slate-600">{uc.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-pharaoh-gold tracking-widest uppercase">TEOS Solution</span>
                    <p className="text-sm text-slate-800 font-medium">{uc.solution}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  {uc.components.map(comp => (
                    <span key={comp} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-1 rounded font-bold">{comp}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TEOS / Values */}
      <section className="py-20 bg-egyptian-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-cinzel font-bold text-pharaoh-gold mb-12">WHY GOVERNMENTS CHOOSE TEOS</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Sovereignty Preservation", desc: "No loss of national control over infrastructure." },
              { title: "Compliance Readiness", desc: "Built to meet regulatory standards from day one." },
              { title: "Non-Speculative", desc: "No volatile token mechanics or hype cycles." },
              { title: "Modular & Flexible", desc: "Adaptable to existing legacy systems." }
            ].map((v, i) => (
              <div key={i} className="p-6 glassmorphism rounded-2xl">
                <div className="text-pharaoh-gold text-2xl mb-4">⭐</div>
                <h4 className="font-bold mb-2">{v.title}</h4>
                <p className="text-slate-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Links */}
      <section id="ecosystem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-cinzel font-bold text-egyptian-blue mb-8">CORE ECOSYSTEM</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_SUBDOMAINS.map(link => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    className="flex items-center p-4 border rounded-xl hover:border-pharaoh-gold hover:bg-slate-50 transition-all group"
                  >
                    <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-xs group-hover:bg-pharaoh-gold mr-3">🔗</div>
                    <span className="font-semibold text-slate-700">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-cinzel font-bold text-egyptian-blue mb-8">DEVELOPER REPOS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GITHUB_REPOS.map(link => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    className="flex items-center p-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all"
                  >
                    <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center text-xs mr-3">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="font-semibold">{link.name}</span>
                  </a>
                ))}
              </div>
              <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
                <p className="text-slate-500 font-medium mb-2">View all 50+ repositories on GitHub Org</p>
                <a href="https://github.com/orgs/Elmahrosa/repositories" target="_blank" className="text-egyptian-blue font-bold hover:underline">
                  Go to Elmahrosa GitHub &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-cinzel font-bold text-pharaoh-gold mb-6">TEOS EGYPT</h2>
              <p className="text-slate-400 mb-6 max-w-md">
                Elmahrosa International – TEOS Egypt is dedicated to modernizing national infrastructure through civic-first, sovereign blockchain solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                   <span className="text-pharaoh-gold font-bold">CEO:</span> <span>Ayman Ahmed Seif</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                   <span className="text-pharaoh-gold">📩</span> <a href="mailto:ayman@teosegypt.com" className="hover:text-pharaoh-gold">ayman@teosegypt.com</a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                   <span className="text-pharaoh-gold">📩</span> <a href="mailto:legal@teosegypt.com" className="hover:text-pharaoh-gold">legal@teosegypt.com</a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-pharaoh-gold">Resources</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Developer Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deployment Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-pharaoh-gold">Network</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="https://bank.teosegypt.com/" target="_blank" className="hover:text-white transition-colors">TEOS Bank</a></li>
                <li><a href="https://dex.teosegypt.com/" target="_blank" className="hover:text-white transition-colors">Nilex DEX</a></li>
                <li><a href="https://smartcity.teosegypt.com/" target="_blank" className="hover:text-white transition-colors">Smart City</a></li>
                <li><a href="https://mine.teosegypt.com/" target="_blank" className="hover:text-white transition-colors">Mining Portal</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; 2024 Elmahrosa International. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Legal Information</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Floating Tool */}
      <AIAssistant />
    </div>
  );
};

export default App;
