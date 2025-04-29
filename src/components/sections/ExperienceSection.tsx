
import React from 'react';
import { motion } from 'framer-motion';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { AssistantSettings } from '@/components/chat/AssistantSettings';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExperienceSectionProps {
  maxTokens: number;
  temperature: number;
  onMaxTokensChange: (value: number) => void;
  onTemperatureChange: (value: number) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  maxTokens,
  temperature,
  onMaxTokensChange,
  onTemperatureChange
}) => {
  const { t } = useLanguage();
  
  return (
    <section id="experience-section" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('exp.title')}</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            {t('exp.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="w-full">
            <ChatInterface maxTokens={maxTokens} temperature={temperature} />
          </div>
          <div className="w-full">
            <AssistantSettings
              maxTokens={maxTokens}
              temperature={temperature}
              onMaxTokensChange={onMaxTokensChange}
              onTemperatureChange={onTemperatureChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
