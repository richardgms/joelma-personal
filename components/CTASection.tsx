'use client'

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8">
          PRONTO PARA SUA
          <br />
          <span className="bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">TRANSFORMAÇÃO?</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 lg:mb-16 max-w-2xl mx-auto font-light">
          Não espere mais. Sua jornada de transformação começa hoje!
        </p>
        
        <a 
          href="https://wa.me/5583981238895?text=Ol%C3%A1%20Michael!%20Vim%20pelo%20site%20e%20quero%20começar%20minha%20transformação!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-primary-400 to-primary-700 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl"
        >
          💪 Começar Agora!
        </a>

        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-sm sm:max-w-md lg:max-w-lg mx-auto text-base sm:text-lg">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">📱</div>
            <p className="font-bold text-sm sm:text-base">Contato Direto</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">⚡</div>
            <p className="font-bold text-sm sm:text-base">Resultado Rápido</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">💪</div>
            <p className="font-bold text-sm sm:text-base">Resultado Real</p>
          </div>
        </div>
      </div>
    </section>
  )
} 