'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-400 to-primary-700 rounded-full text-white text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                ⭐ Personal Trainer Certificado
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left">
                MICHAEL
                <br />
                <span className="bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">MARTINS</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center lg:text-left">
                Personal Trainer especializado em transformação corporal. Expert em emagrecimento e ganho de massa muscular com metodologia científica comprovada.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-primary-400/30 hover:border-primary-400 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-400 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4">🧠</div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-white">Biomecânica</h3>
                <p className="text-sm sm:text-base text-gray-400">Ciência aplicada no movimento</p>
              </div>
              <div className="bg-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-primary-700/30 hover:border-primary-700 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-700 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4">📐</div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-white">Avaliação Física</h3>
                <p className="text-sm sm:text-base text-gray-400">Análise corporal completa</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="https://wa.me/5583981238895?text=Ol%C3%A1%20Michael!%20Quero%20conhecer%20sua%20metodologia!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-400 to-primary-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 text-center"
              >
                📚 Conhecer Metodologia
              </a>
              <a 
                href="#planos" 
                className="border-2 border-gray-600 hover:border-primary-400 text-white hover:text-primary-400 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 text-center"
              >
                Ver Planos
              </a>
            </div>
          </div>

          <div className="relative lg:ml-12 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative group">
              <div className="relative w-full h-80 sm:h-96 mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                <Image
                  src="/imagens/1.png"
                  alt="Retrato profissional do personal trainer Michael"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover rounded-2xl sm:rounded-3xl shadow-2xl border border-primary-400/30 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-primary-400 text-black p-3 sm:p-4 lg:p-6 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="font-bold text-center">
                  <div className="text-2xl sm:text-3xl">5+</div>
                  <div className="text-xs sm:text-sm">Anos</div>
                </div>
              </div>
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-primary-700 text-white p-3 sm:p-4 lg:p-6 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="font-bold text-center">
                  <div className="text-2xl sm:text-3xl">🏆</div>
                  <div className="text-xs sm:text-sm">Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 