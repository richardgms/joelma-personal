'use client'
import Image from 'next/image'
import { personalTrainerConfig } from '@/config/personal-trainer'
import { 
  Flame, 
  Dumbbell, 
  Smartphone, 
  Star, 
  Heart, 
  Phone, 
  MessageCircle, 
  Instagram, 
  ExternalLink,
  Calendar,
  Clock
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 border-t border-primary-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Image
                src={personalTrainerConfig.logos.complete}
                alt={`${personalTrainerConfig.fullName} ${personalTrainerConfig.title} Logo`}
                width={180}
                height={45}
                className="object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Transformando vidas através do fitness com metodologia científica e dedicação.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-primary-400 text-base sm:text-lg">
              Especialidades
            </h4>
            <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              {personalTrainerConfig.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center gap-2 hover:text-white transition-colors">
                  {index === 0 && <Flame className="w-4 h-4 text-primary-400" />}
                  {index === 1 && <Dumbbell className="w-4 h-4 text-primary-400" />}
                  {index === 2 && <Smartphone className="w-4 h-4 text-primary-400" />}
                  {index === 3 && <Star className="w-4 h-4 text-primary-400" />}
                  {index === 4 && <Heart className="w-4 h-4 text-primary-400" />}
                  {specialty}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-primary-700 text-base sm:text-lg">
              Contato
            </h4>
            <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary-700" />
                {personalTrainerConfig.phone}
              </div>
              <a 
                href={personalTrainerConfig.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary-700" />
                WhatsApp
              </a>
              <a 
                href={`https://instagram.com/${personalTrainerConfig.instagram}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary-700" />
                Instagram
              </a>
              <a 
                href={personalTrainerConfig.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-primary-700" />
                Website
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-primary-400 text-base sm:text-lg">
              Horários
            </h4>
            <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Calendar className="w-4 h-4 text-primary-400" />
                {personalTrainerConfig.schedule.weekdays}
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Calendar className="w-4 h-4 text-primary-400" />
                {personalTrainerConfig.schedule.saturday}
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Calendar className="w-4 h-4 text-primary-400" />
                {personalTrainerConfig.schedule.sunday}
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Clock className="w-4 h-4 text-primary-400" />
                {personalTrainerConfig.schedule.responseTime}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">
            &copy; 2024 {personalTrainerConfig.fullName} {personalTrainerConfig.title}. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 