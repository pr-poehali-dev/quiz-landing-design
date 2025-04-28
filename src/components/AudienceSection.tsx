import { Users, GraduationCap, Briefcase, Brain, BarChart3, User } from "lucide-react";

const AudienceSection = () => {
  const audienceGroups = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Организаторы мероприятий",
      features: [
        "Создавайте интерактивные квизы и опросы",
        "Вовлекайте участников, делайте мероприятия незабываемыми",
        "Получайте обратную связь в реальном времени"
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Учителя и преподаватели",
      features: [
        "Используйте платформу как образовательный портал",
        "Оценивайте уровень знаний учеников",
        "Создайте онлайн-тест за 15 минут"
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Работодатели",
      features: [
        "Оценивайте навыки кандидатов",
        "Создавайте тренажёры для подготовки сотрудников",
        "Проводите анонимные социологические опросы"
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Коучи и тренеры",
      features: [
        "Разрабатывайте индивидуализированные тренинги",
        "Проводите квизы для повышения вовлеченности",
        "Используйте аналитику для отслеживания прогресса"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Аналитики и исследователи",
      features: [
        "Мощные инструменты для обработки данных",
        "Получайте аналитику по результатам опросов",
        "Используйте результаты для принятия решений"
      ]
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Ученики",
      features: [
        "Присоединяйтесь к тестам и квизам",
        "Учитесь в интерактивной форме",
        "Проверяйте знания, готовьтесь к экзаменам"
      ]
    }
  ];

  return (
    <section id="audience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4">Для кого подходит платформа?</h2>
          <p className="text-lg text-gray-600">
            askez.io создан для широкого круга пользователей, которые хотят эффективно 
            оценивать знания, получать обратную связь и вовлекать аудиторию.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceGroups.map((group, index) => (
            <div key={index} className="gradient-card hover:translate-y-[-5px] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon">{group.icon}</div>
                <h3 className="text-xl font-semibold">{group.title}</h3>
              </div>
              <ul className="space-y-2">
                {group.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-askez-purple mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
