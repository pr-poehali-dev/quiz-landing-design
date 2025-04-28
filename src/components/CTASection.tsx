import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-askez-light/80 to-white/20 -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-askez-purple/5 rounded-full"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-askez-blue/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-askez-light px-4 py-1 rounded-full text-askez-purple text-sm font-medium mb-6">
            Полностью бесплатно в период бета-тестирования 🚀
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Создайте первый тест <span className="gradient-text">прямо сейчас!</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу пользователей askez.io! 
            Здесь тесты, опросы и квизы делают взаимодействие увлекательным и продуктивным!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gradient" size="xl" className="group">
              Создать тест бесплатно
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              Демо-версия
            </Button>
          </div>
          
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-askez-purple mb-1">100+</div>
              <div className="text-gray-600">Активных пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-askez-purple mb-1">15+</div>
              <div className="text-gray-600">Шаблонов тестов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-askez-purple mb-1">500+</div>
              <div className="text-gray-600">Созданных тестов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
