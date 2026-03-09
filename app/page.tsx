// File: src/app/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Sufiyan Raza | CEO, Architect & Visionary',
  description: 'The digital portfolio of Sufiyan Raza - Co-Founder & CEO of Exorbis Tech Labs. Exploring the intersection of cinematic design and scalable code.',
}

export default function PortfolioFull() {
  return (
    <main className="min-h-screen bg-[#020202] text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans overflow-x-hidden">
      
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Ultra-Minimal Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all">
        <div className="text-xl font-extrabold tracking-tighter text-white">
          SR<span className="text-cyan-400">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-zinc-500">
          <Link href="#genesis" className="hover:text-cyan-400 transition-colors">The Genesis</Link>
          <Link href="#exorbis" className="hover:text-cyan-400 transition-colors">Exorbis Vision</Link>
          <Link href="#arsenal" className="hover:text-cyan-400 transition-colors">Tech Arsenal</Link>
          <Link href="#academics" className="hover:text-cyan-400 transition-colors">Academics</Link>
        </div>
        <a href="mailto:sufiyan@exorbistech.online" className="px-6 py-2.5 text-xs font-bold text-white bg-cyan-600/20 border border-cyan-500/50 rounded-full hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          Initiate Contact
        </a>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Operating globally from India
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold text-white mb-6 tracking-tighter leading-[1.05]">
            I architect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
              digital empires.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-10 font-light">
            Hi, I'm <strong className="text-white font-bold">Sufiyan Raza</strong>. CEO & Lead Software Architect at Exorbis Tech Labs. Blending high-performance code with cinematic user experiences to build the next generation of SaaS and enterprise ecosystems.
          </p>

          {/* Social Links Network */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="https://linkedin.com/in/sufiyanraza-exorbistech" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-[#0077b5]/10 text-zinc-400 hover:text-[#0077b5] transition-all group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span className="text-sm font-bold tracking-wide">LinkedIn</span>
            </a>
            <a href="https://github.com/raza9404" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/10 text-zinc-400 hover:text-white transition-all group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span className="text-sm font-bold tracking-wide">GitHub</span>
            </a>
            <a href="https://instagram.com/musicbysufiyan" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-gradient-to-tr hover:from-yellow-500/10 hover:via-pink-500/10 hover:to-purple-500/10 text-zinc-400 hover:text-pink-400 transition-all group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span className="text-sm font-bold tracking-wide">Music Studio</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE GENESIS (Origin Story) */}
      <section id="genesis" className="py-24 border-t border-white/5 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-xs font-bold tracking-[0.25em] text-cyan-500 uppercase mb-4">The Origin</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Born in Nagpur. <br/>Engineered for the World.</h3>
            <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
              Born on December 7th in the geographic center of India—Nagpur, Maharashtra. My journey wasn't about following traditional paths; it was about hacking them. From the very beginning, I was obsessed with how logic constructs reality and how design influences human psychology.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              This obsession led to a dual-core identity: a hardcore software architect by day, and a cinematic storyteller/musical artist by night. I don't just write code; I orchestrate it.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square md:aspect-[4/3] bg-[#111] group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              {/* Optional: Add an abstract image or your photo here later */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-800 text-6xl font-black tracking-tighter mix-blend-overlay">DEC 07</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE EXORBIS VISION (Startup Journey) */}
      <section id="exorbis" className="py-32 border-t border-white/5 relative bg-[#020202]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-900/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase mb-4">The Empire</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight">The Inception of <br/>Exorbis Tech Labs.</h3>
          
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 md:p-14 text-left shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <p className="text-xl text-zinc-300 leading-relaxed mb-8 font-medium">
              August 2025 wasn't just a month on the calendar; it was a paradigm shift. Along with my visionary co-founders, <strong className="text-cyan-400">Arya Bhagat</strong> and <strong className="text-cyan-400">Sachin Chaturvedi</strong>, we established Exorbis Tech Labs.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              We disrupted the local ecosystem by becoming one of the <strong className="text-white">youngest founding partner teams</strong> in Nagpur to helm a highly scalable IT startup. We didn't want to be an agency; we built an innovation laboratory. Today, Exorbis stands as a testament to what young, hyper-focused engineering minds can achieve—creating everything from cinematic web experiences to hardcore IoT solutions like <em>Safe Park</em> and high-concurrency platforms like <em>MiyoKart</em>.
            </p>
            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-widest">Role</p>
                <p className="text-zinc-500">Co-Founder & CEO</p>
              </div>
              <a href="https://exorbistech.online" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-widest text-xs transition-colors">
                Visit Headquarters <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECH ARSENAL & CREATIVE SYNERGY */}
      <section id="arsenal" className="py-24 border-t border-white/5 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">The Synergy of<br/>Code & Cinema.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Developer Side */}
            <div className="bg-[#0a0a0a] rounded-3xl p-10 border border-white/5 hover:border-blue-500/30 transition-all duration-500">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8 border border-blue-500/20">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Hardcore Engineering</h4>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Mastery over 10+ distinct programming paradigms. I don't just use frameworks; I understand the underlying architecture to build zero-latency systems.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Next.js / React', 'Flutter & Dart', 'JavaScript / TypeScript', 'Swift (iOS)', 'Kotlin (Android)', 'HTML5 / CSS3 Arch'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-[#111] border border-white/5 text-zinc-300 rounded-lg text-sm font-medium">{tech}</span>
                ))}
              </div>
            </div>

            {/* The Creative Side */}
            <div className="bg-[#0a0a0a] rounded-3xl p-10 border border-white/5 hover:border-purple-500/30 transition-all duration-500">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-8 border border-purple-500/20">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Cinematic Direction</h4>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Holding 2 Major Diplomas from IFTI in Screenwriting and Direction of Photography. This unique background allows me to direct UI/UX like a movie scene—guiding the user's eye flawlessly.
              </p>
              <div className="flex flex-wrap gap-3">
                {['UI/UX Choreography', 'Visual Storytelling', 'Cinematography', 'Screenwriting Logic', 'Sound/Music Production'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-[#111] border border-white/5 text-zinc-300 rounded-lg text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACADEMICS & QUALIFICATIONS */}
      <section id="academics" className="py-24 border-t border-white/5 relative bg-[#020202]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold tracking-[0.25em] text-cyan-500 uppercase mb-12 text-center">Academic Foundation</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 items-start">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <span className="text-cyan-400 font-bold text-xl">🎓</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-zinc-400 font-medium mb-3">St. Francis De Sales College, Nagpur</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-4">Affiliated to R.T.M. Nagpur University</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Currently pursuing advanced studies in computer applications, balancing rigorous academic algorithms with practical, enterprise-level startup operations.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 items-start">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <span className="text-blue-400 font-bold text-xl">📜</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">SSC & HSC (Science/Tech)</h4>
                <p className="text-zinc-400 font-medium mb-3">Maharashtra State Board of Higher and Secondary Education</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Built the foundational logic blocks here, executing top-tier academic performances before transitioning fully into the tech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER / CONTACT */}
      <footer className="py-16 bg-black border-t border-white/10 text-center relative z-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tighter">Ready to architect something massive?</h2>
          <a href="mailto:ceo@exorbistech.online" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold tracking-wide hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition-all duration-300 mb-12">
            Email Me Directly
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
          
          <p className="text-zinc-500 text-sm font-bold tracking-widest uppercase">
            &copy; 2026 Sufiyan Raza. Engineered at Exorbis Tech Labs.
          </p>
        </div>
      </footer>

    </main>
  );
}
