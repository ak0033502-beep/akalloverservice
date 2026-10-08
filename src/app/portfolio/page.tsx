export default function Portfolio() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto flex-1">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Portfolio</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Explore our successful SaaS products and digital platforms.
        </p>
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
  );
}
