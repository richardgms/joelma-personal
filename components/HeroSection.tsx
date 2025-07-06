'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-16 sm:pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-[#0a0a14] to-[#131620] flex relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary-400/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-primary-700/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left mt-6 lg:mt-0">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-black/40 backdrop-blur-md rounded-full text-primary-400 text-xs sm:text-sm font-bold border border-primary-400/30 shadow-lg">
                ⭐ Transformação em 30 dias
              </div>
              <h1 className="text-6xl lg:text-8xl font-extrabold leading-none text-white tracking-tight">
                TRANSFORME
                <br />
                <span className="bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent drop-shadow-md">SEU CORPO</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Transformação completa com metodologia científica. Perca gordura, ganhe músculos e mude sua vida!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/5583981238895?text=Ol%C3%A1%20Michael!%20Quero%20começar%20minha%20transformação!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-400 to-primary-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-400/20"
              >
                💪 Começar Agora
              </a>
              <a 
                href="#resultados" 
                className="bg-black/40 border border-primary-400/30 hover:border-primary-400/70 backdrop-blur-sm text-white hover:bg-black/60 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary-400/10"
              >
                Ver Transformações
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10">
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl py-3 sm:py-4 px-1 sm:px-2 border border-white/5">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">500+</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1 leading-tight">Corpos<br className="sm:hidden" /> Transformados</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl py-3 sm:py-4 px-1 sm:px-2 border border-white/5">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">5+</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1 leading-tight">Anos de<br className="sm:hidden" /> Experiência</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl py-3 sm:py-4 px-1 sm:px-2 border border-white/5">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">98%</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-12 group mx-4 sm:mx-8 lg:mx-0 mb-6 lg:mb-0">
            <div className="relative transform transition-all duration-700 group-hover:scale-[1.02]">
              <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                <Image
                  src="/imagens/2.png"
                  alt="Michael demonstrando exercício"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover shadow-xl border border-primary-400/20 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-primary-400 to-primary-400/90 rounded-2xl sm:rounded-3xl shadow-lg backdrop-blur-sm flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                <div className="text-black font-bold text-center drop-shadow-sm">
                  <div className="text-xl sm:text-2xl lg:text-3xl">🏆</div>
                  <div className="text-xs sm:text-sm">Expert</div>
                </div>
              </div>
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-700 to-primary-600 rounded-2xl sm:rounded-3xl shadow-lg backdrop-blur-sm flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                <div className="text-white font-bold text-center drop-shadow-sm">
                  <div className="text-lg sm:text-xl lg:text-2xl">💪</div>
                  <div className="text-xs">Pro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 