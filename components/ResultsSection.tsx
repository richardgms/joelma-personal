'use client'

import Image from 'next/image'

export default function ResultsSection() {
  return (
    <section id="resultados" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-[#131620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            TRANSFORMAÇÕES
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">REAIS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Resultados reais de alunos que mudaram suas vidas. Veja o que a dedicação e metodologia conseguem fazer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {[
            { name: 'João Silva', result: '–22 kg em 6 meses', badge: 'TOP', color: 'primary-400', img: '/prova-social/joaosilva.png', depo: 'O treino com Michael foi adaptado ao meu dia corrido. Hoje estou magro, me sinto forte e não tenho mais dores ao dirigir. Recomendo muito!' },
            { name: 'Maria Santos', result: '–14 kg em 4 meses', badge: 'PRO', color: 'primary-600', img: '/prova-social/mariasantos.png', depo: 'Nunca achei que emagrecer fosse possível nessa idade. O Michael me ensinou a treinar em casa mesmo, de forma simples e segura. Mudou minha vida!' },
            { name: 'Ana Oliveira', result: '–12 kg em 3 meses', badge: 'EXPERT', color: 'primary-400', img: '/prova-social/anaoliveira.png', depo: 'O acompanhamento do Michael fez toda a diferença. Ele sempre esteve presente, dando orientações práticas. Finalmente estou feliz com meu corpo!' }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="group h-full flex transform hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className={`bg-black/60 backdrop-blur-md border border-${testimonial.color}-500/20 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-${testimonial.color}-500/20 transition-all duration-500 hover:border-${testimonial.color}-500/60 flex flex-col h-full w-full`}>
                <div className="relative overflow-hidden aspect-square sm:aspect-auto sm:h-72 lg:h-80">
                  <Image
                    src={testimonial.img}
                    alt={`Foto de ${testimonial.name}`}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-${testimonial.color}-500 to-${testimonial.color === 'primary-400' ? 'primary-600' : 'primary-400'} backdrop-blur-md text-white px-2 sm:px-3 py-1 rounded-lg text-xs font-bold shadow-md`}>{testimonial.badge}</div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-white tracking-wide">{testimonial.name}</h3>
                  <p className={`text-${testimonial.color} font-medium text-base sm:text-lg mb-3`}>{testimonial.result}</p>
                  <div className="flex text-primary-400 text-base sm:text-lg mb-3 sm:mb-4">⭐⭐⭐⭐⭐</div>
                  <p className={`text-gray-300 text-sm sm:text-sm leading-relaxed italic flex-1`}>
                    "{testimonial.depo}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://wa.me/5583981238895?text=Ol%C3%A1%20Michael!%20Quero%20ver%20mais%20transformações!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black/40 border border-primary-400/30 hover:border-primary-400/70 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-400/20 backdrop-blur-sm"
          >
            📸 Ver Mais Transformações
          </a>
        </div>
      </div>
    </section>
  )
} 