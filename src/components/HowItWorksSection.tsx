import { CircleCheck, ClipboardList, Share, PieChart } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <ClipboardList className="w-8 h-8 text-white" />,
    title: "Выберите шаблон",
    description: "Используйте готовый шаблон или создайте тест с нуля по вашим требованиям"
  },
  {
    id: 2,
    icon: <CircleCheck className="w-8 h-8 text-white" />,
    title: "Настройте параметры",
    description: "Настройте дизайн, типы вопросов и другие параметры теста"
  },
  {
    id: 3,
    icon: <Share className="w-8 h-8 text-white" />,
    title: "Поделитесь ссылкой",
    description: "Опубликуйте и поделитесь ссылкой с участниками через любой канал"
  },
  {
    id: 4,
    icon: <PieChart className="w-8 h-8 text-white" />,
    title: "Анализируйте результаты",
    description: "Получайте подробную аналитику и отчеты в личном кабинете"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Как это работает?</h2>
          <p className="text-xl text-gray-600">
            90% пользователей создают первый тест за 15 минут
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-purple-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:gap-8`}>
                  {/* Timeline dot */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center z-10 mb-4 md:mb-0">
                    {step.icon}
                  </div>
                  
                  <div className={`md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl shadow-sm border border-gray-100 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-3">
                      Шаг {step.id}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 bg-white border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Библиотека тестов и опросов</h3>
            <p className="text-lg text-gray-600 mb-8">
              Библиотека охватывает широкий спектр тем - от образовательных до развлекательных. Найдите материалы для проверки знаний и расширения кругозора. Созданные тесты могут быть публичными или доступными для ограниченного круга лиц.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Образование", "Маркетинг", "IT", "Психология", "HR", "Развлечения"].map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
