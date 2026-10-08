import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto flex-1">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Us</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Ready to start your next big project? Let's talk about how we can help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email Us</p>
                <a href="mailto:akshay@akalloverservice.online" className="text-lg font-medium hover:text-purple-400 transition-colors">akshay@akalloverservice.online</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-lg font-medium">India</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input type="text" className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white" placeholder="Tell us about your project..."></textarea>
          </div>
          <button type="button" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
