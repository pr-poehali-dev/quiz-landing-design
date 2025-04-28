import { Check } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Полный бесплатный доступ",
    description: "На стадии бета-тестирования все функции доступны бесплатно"
  },
  {
    id: 2,
    title: "Неограниченное количество тестов",
    description: "Создавайте столько тестов, опросов и квизов, сколько вам нужно"
  },
  {
    id: 3,
    title: "Продвинутая аналитика",
    description: "Получайте детальную статистику по всем проведенным тестам и опросам"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Возможности платформы</h2>
          <p className="text-xl text-gray-600">
            askez.io — это новая интерактивная платформа для оценки знаний и дистанционного обучения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Влияйте на развитие платформы!</h3>
              <p className="text-purple-100 text-lg">
                Мы ценим вашу обратную связь для улучшения сервиса. Делитесь предложениями и помогайте сделать askez.io лучше для всех.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <a 
                href="#feedback" 
                className="block text-center w-full md:w-auto bg-white text-purple-700 font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Оставить отзыв
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
