import { Sparkles, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto flex-1">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Us</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          AkalloverServices is driven by innovation. We exist to empower creators, brands, and businesses with next-generation digital tools.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-400">To be the global leader in AI video generation and SaaS solutions, redefining how digital content is created and monetized.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
          <Target className="w-12 h-12 text-pink-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-400">Delivering highly scalable, automated, and intelligent software solutions that save time and increase earnings for our users.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
          <Users className="w-12 h-12 text-red-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Our Team</h3>
          <p className="text-gray-400">A group of passionate engineers, designers, and AI specialists dedicated to building the future of the internet.</p>
        </div>
      </div>
    </div>
  );
}
