import { BarChart2, Zap, MousePointerClick, LineChart } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4">Преимущества нашей платформы</h2>
          <p className="text-lg text-gray-600">
            askez.io предлагает уникальные возможности для создания и управления тестами,
            опросами и квизами с интуитивно понятным интерфейсом и мощной аналитикой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="gradient-card">
            <div className="feature-icon mb-5">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Быстрое создание</h3>
            <p className="text-gray-600">
              90% пользователей создают свой первый тест всего за 15 минут благодаря интуитивному интерфейсу и готовым шаблонам.
            </p>
          </div>

          <div className="gradient-card">
            <div className="feature-icon mb-5">
              <BarChart2 size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Мгновенная аналитика</h3>
            <p className="text-gray-600">
              Получайте подробные отчеты и визуализацию результатов в реальном времени для принятия обоснованных решений.
            </p>
          </div>

          <div className="gradient-card">
            <div className="feature-icon mb-5">
              <MousePointerClick size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Простой доступ</h3>
            <p className="text-gray-600">
              Создавайте тесты и опросы, доступные через уникальную ссылку на любом устройстве без установки дополнительного ПО.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="p-6 rounded-2xl bg-askez-light inline-block">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-askez-purple">
              <LineChart className="h-5 w-5" />
              <span>Все аналитические инструменты доступны бесплатно в период бета-тестирования</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
