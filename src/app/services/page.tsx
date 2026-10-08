import { Code, Video, Globe, Smartphone, Cloud, Cpu } from "lucide-react";

export default function Services() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto flex-1">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Services</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We offer a comprehensive suite of digital solutions to help your business thrive in the modern age.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Code className="w-8 h-8 text-purple-400" />, title: "SaaS Development", desc: "End-to-end development of scalable SaaS platforms." },
          { icon: <Video className="w-8 h-8 text-pink-400" />, title: "AI Video Generation", desc: "Automated and highly personalized AI video content creation." },
          { icon: <Globe className="w-8 h-8 text-red-400" />, title: "Web Applications", desc: "Custom web apps built with Next.js, React, and modern stacks." },
          { icon: <Smartphone className="w-8 h-8 text-blue-400" />, title: "Mobile Apps", desc: "Cross-platform mobile applications for iOS and Android." },
          { icon: <Cloud className="w-8 h-8 text-green-400" />, title: "Cloud Architecture", desc: "Robust and secure cloud infrastructure setup and maintenance." },
          { icon: <Cpu className="w-8 h-8 text-orange-400" />, title: "AI Integrations", desc: "Embedding intelligent AI agents and LLMs into your existing software." },
        ].map((s, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="mb-6">{s.icon}</div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
