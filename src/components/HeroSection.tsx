import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute top-80 -left-10 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block bg-purple-100 text-askez-purple px-4 py-1 rounded-full text-sm font-medium mb-2 animate-pulse-light">
              Бета-тестирование 🚀 Полный бесплатный доступ!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Создавайте квизы и тесты <span className="gradient-text">за минуты</span>
            </h1>
            <p className="text-xl text-gray-600">
              Профессиональная платформа для создания тестов, опросов и квизов с мгновенной аналитикой. Бесплатно в период бета-тестирования!
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-askez-purple">✓</span>
                <span>Полный доступ ко всем функциям</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-askez-purple">✓</span>
                <span>Неограниченное количество тестов</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-askez-purple">✓</span>
                <span>Аналитические инструменты без подписки</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="gradient" size="xl">
                Создать первый тест
              </Button>
              <Button variant="outline" size="xl">
                Узнать больше
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <img 
                      src={`https://source.unsplash.com/random/100x100?face&${i}`} 
                      alt="Аватар пользователя" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-medium">100+</span> пользователей уже создают тесты
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="animate-float rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
              <div className="gradient-bg h-3"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl">Тест по маркетингу</h3>
                  <span className="text-sm text-gray-500">10 вопросов</span>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-gray-50">
                    <h4 className="font-medium mb-4">Какой из каналов наиболее эффективен для B2B?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-gray-300 flex-shrink-0"></div>
                        <span>Социальные сети</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-askez-purple bg-askez-purple flex-shrink-0"></div>
                        <span className="font-medium">LinkedIn и Email-маркетинг</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-gray-300 flex-shrink-0"></div>
                        <span>Наружная реклама</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-bg">Следующий вопрос</Button>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full filter blur-2xl opacity-60 -z-10"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-200 rounded-full filter blur-2xl opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
