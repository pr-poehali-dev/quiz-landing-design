import { FileSpreadsheet, Settings, Share2, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FileSpreadsheet className="w-6 h-6" />,
      title: "Выберите шаблон или создайте с нуля",
      description: "Начните с готового шаблона или создайте свой уникальный тест с различными типами вопросов."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Настройте дизайн и параметры",
      description: "Персонализируйте внешний вид и поведение теста под ваши цели и брендинг."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Опубликуйте и поделитесь ссылкой",
      description: "Мгновенно опубликуйте готовый тест и поделитесь уникальной ссылкой с участниками."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Анализируйте результаты",
      description: "Получайте подробную аналитику и статистику по ответам в реальном времени."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4">Как это работает?</h2>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">90% пользователей создают первый тест за 15 минут</span>. 
            Процесс создания и управления тестами прост и интуитивно понятен.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="gradient-card text-center">
              <div className="mx-auto mb-4 feature-icon">{step.icon}</div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-askez-purple text-white font-semibold text-sm mb-3">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="gradient-card overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">Ресурсы пространства</h3>
                <p className="text-gray-600 mb-6">
                  Библиотека тестов и опросов охватывает широкий спектр тем - от образовательных до развлекательных. 
                  Найдите материалы для проверки знаний и расширения кругозора.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-askez-purple text-lg">•</span>
                    <p>Созданные тесты могут быть публичными или доступными для ограниченного круга лиц.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-askez-purple text-lg">•</span>
                    <p>Проводите анонимные опросы, получайте искренние мнения и идеи.</p>
                  </div>
                </div>
                <Button variant="gradient" className="mt-8">
                  Исследовать библиотеку
                </Button>
              </div>
              <div className="md:w-1/2 bg-askez-light p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="w-full h-32 rounded bg-gradient-to-tr from-purple-100 to-blue-50 mb-3"></div>
                        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-askez-purple/10 to-transparent rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-askez-blue/10 to-transparent rounded-full -ml-32 -mb-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
