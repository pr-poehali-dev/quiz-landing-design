import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="relative p-8 md:p-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Создайте первый тест сейчас!
              </h2>
              <p className="text-xl text-purple-100 mb-10">
                Присоединяйтесь к сообществу пользователей askez.io! Здесь тесты, опросы и квизы делают взаимодействие увлекательным и продуктивным!
              </p>
              <Button 
                size="xl" 
                className="bg-white text-purple-700 hover:bg-gray-100 shadow-lg"
              >
                Начать бесплатно
              </Button>
              <p className="mt-6 text-purple-200 text-sm">
                Полный доступ в период бета-тестирования. Без кредитной карты.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
