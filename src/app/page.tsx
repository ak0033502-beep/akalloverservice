import { ArrowRight, Code, Video, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans selection:bg-purple-500/30">

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Pioneering SaaS & AI Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Building the next generation of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Digital Experiences
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            AkalloverServices is a premier technology company specializing in innovative SaaS products, cutting-edge AI video generation, and bespoke web solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              View Our Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 border border-white/10 transition-all w-full sm:w-auto justify-center flex items-center">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Delivering end-to-end digital solutions powered by modern technology and artificial intelligence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">SaaS Development</h3>
              <p className="text-gray-400 leading-relaxed">
                We build scalable, reliable, and user-centric Software as a Service platforms tailored to solve complex business problems.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-colors group">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Video Generation</h3>
              <p className="text-gray-400 leading-relaxed">
                Harnessing the power of generative AI to create high-quality, engaging video content at scale for creators and brands.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors group">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Web Solutions</h3>
              <p className="text-gray-400 leading-relaxed">
                Designing and developing stunning portfolio websites and web applications with cutting-edge web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products & Portfolio</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A glimpse into the digital experiences we've crafted.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://creatorearningstrack.in" target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 hover:border-purple-500/50 transition-colors h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black"></div>
              <img 
                src="/creatorearnings-logo.png" 
                alt="CreatorEarningsTrack Logo" 
                className="absolute inset-0 w-full h-full object-contain object-center scale-50 opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[0.55]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors drop-shadow-lg">CreatorEarningsTrack.in</h3>
                <p className="text-gray-200 drop-shadow-md font-medium">A powerful tool helping creators track, analyze, and optimize their revenue streams across platforms.</p>
              </div>
            </a>
            
            <a href="https://birthdaywisher.in" target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 hover:border-pink-500/50 transition-colors h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 to-black"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-pink-500/50 group-hover:text-pink-500/80 transition-colors group-hover:scale-110 duration-500">🎉</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition-colors drop-shadow-lg">BirthdayWisher.in</h3>
                <p className="text-gray-200 drop-shadow-md font-medium">An innovative platform for creating and sending personalized, memorable birthday wishes and digital cards.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start your next project?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Whether you need a custom SaaS solution, AI video integration, or a stunning new website, our team is ready to bring your vision to life.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-transform hover:scale-105">
            Contact Us Today
          </Link>
        </div>
      </section>

    </div>
  );
}
