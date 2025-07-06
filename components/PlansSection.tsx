'use client'

export default function PlansSection() {
  return (
    <section id="planos" className="py-16 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            ESCOLHA SEU
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">PLANO</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Planos personalizados para seus objetivos. Transformação garantida com acompanhamento profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Online Plan */}
          <div className="flex">
            <div className="bg-gray-900 border-2 border-primary-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-primary-400 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-400/30 relative overflow-hidden h-full flex flex-col w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                      📱 ONLINE
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">Treine de qualquer lugar</p>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl">
                    📱
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1">
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-700 transition-colors">
                    <span className="font-semibold text-white text-sm sm:text-base">Mensal</span>
                    <span className="text-xl sm:text-2xl font-bold text-primary-400">R$ 80,00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-700 transition-colors">
                    <span className="font-semibold text-white text-sm sm:text-base">Trimestral</span>
                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold text-primary-400">R$ 210,00</span>
                      <p className="text-xs text-gray-400">3x no cartão</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-700 transition-colors">
                    <span className="font-semibold text-white text-sm sm:text-base">Semestral</span>
                     <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold text-primary-400">R$ 360,00</span>
                      <p className="text-xs text-gray-400">6x no cartão</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-700 transition-colors">
                    <span className="font-semibold text-white text-sm sm:text-base">Anual</span>
                     <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold text-primary-400">R$ 660,00</span>
                      <p className="text-xs text-gray-400">12x no cartão</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5583981238895?text=Ol%C3%A1%20Michael!%20Quero%20o%20plano%20ONLINE!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-primary-400 to-primary-700 text-white text-center py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105"
                >
                  📱 Começar Online
                </a>
              </div>
            </div>
          </div>

          {/* Presencial Plan */}
          <div className="flex">
            <div className="bg-gray-900 border-2 border-primary-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-primary-700 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-700/30 relative overflow-hidden h-full flex flex-col w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-700/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                      🏋️ PRESENCIAL
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">Acompanhamento direto em PB</p>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-700 to-primary-400 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl">
                    🏋️
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-700 transition-colors">
                    <div>
                      <span className="font-semibold text-white text-sm sm:text-base">Acompanhamento Híbrido</span>
                      <p className="text-xs text-gray-400">3x Presencial + 2x Online</p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-xl sm:text-2xl font-bold text-primary-600">R$ 300,00</span>
                      <p className="text-xs text-gray-400">mensal</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-700 transition-colors">
                    <div>
                      <span className="font-semibold text-white text-sm sm:text-base">Acompanhamento Presencial</span>
                      <p className="text-xs text-gray-400">4x por semana</p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-xl sm:text-2xl font-bold text-primary-600">R$ 400,00</span>
                      <p className="text-xs text-gray-400">mensal</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-700 transition-colors">
                    <div>
                        <span className="font-semibold text-white text-sm sm:text-base">Acompanhamento Presencial</span>
                        <p className="text-xs text-gray-400">5x por semana</p>
                      </div>
                      <div className="text-left sm:text-right mt-2 sm:mt-0">
                        <span className="text-xl sm:text-2xl font-bold text-primary-600">R$ 500,00</span>
                        <p className="text-xs text-gray-400">mensal</p>
                      </div>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5583981238895?text=Ol%C3%A1%20Michael!%20Quero%20saber%20mais%20sobre%20os%20planos%20presenciais!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-primary-700 to-primary-400 text-white text-center py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105"
                >
                  🏋️ Quero Treinar Presencial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 