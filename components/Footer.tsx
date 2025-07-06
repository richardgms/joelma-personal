'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 border-t border-primary-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo/logocompleta.png"
                alt="Michael Martins Personal Trainer Logo"
                width={180}
                height={45}
                className="object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400">Transformando vidas através do fitness com metodologia científica e dedicação.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-primary-400 text-base sm:text-lg">Serviços</h4>
            <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <p className="flex items-center gap-2">📱 Consultoria Online</p>
              <p className="flex items-center gap-2">💪 Personal Training</p>
              <p className="flex items-center gap-2">📐 Avaliação Postural</p>
              <p className="flex items-center gap-2">🧠 Biomecânica</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-primary-700 text-base sm:text-lg">Contato</h4>
            <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <p className="flex items-center gap-2">📱 (83) 98123-8895</p>
              <p className="flex items-center gap-2">📍 Santa Rita/João Pessoa - PB</p>
              <p className="flex items-center gap-2">🌐 Online para todo Brasil</p>
              <p className="flex items-center gap-2">💬 WhatsApp</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-primary-400 text-base sm:text-lg">Horários</h4>
            <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <p className="flex items-center gap-2">📅 Segunda a Sexta: 6h às 22h</p>
              <p className="flex items-center gap-2">📅 Sábado: 8h às 18h</p>
              <p className="flex items-center gap-2">📅 Domingo: Plantão</p>
              <p className="flex items-center gap-2">⚡ Resposta rápida no WhatsApp</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2024 Michael Martins Personal Trainer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 