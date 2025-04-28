import { Users, BookOpen, Briefcase, Activity, BarChart3, GraduationCap } from "lucide-react";

const audiences = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: "Организаторы мероприятий",
    items: [
      "Создавайте интерактивные квизы и опросы",
      "Вовлекайте участников, делайте мероприятия незабываемыми",
      "Получайте обратную связь в реальном времени"
    ]
  },
  {
    id: 2,
    icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    title: "Учителя и преподаватели",
    items: [
      "Используйте готовые шаблоны вопросов",
      "Оценивайте уровень знаний учеников",
      "Создайте онлайн-тест за 15 минут"
    ]
  },
  {
    id: 3,
    icon: <Briefcase className="w-8 h-8 text-purple-600" />,
    title: "Работодатели",
    items: [
      "Оценивайте навыки кандидатов",
      "Создавайте тренажёры для сотрудников",
      "Проводите анонимные социологические опросы"
    ]
  },
  {
    id: 4,
    icon: <Activity className="w-8 h-8 text-purple-600" />,
    title: "Коучи и тренеры",
    items: [
      "Разрабатывайте индивидуализированные тренинги",
      "Проводите квизы для повышения вовлеченности",
      "Используйте аналитику для отслеживания прогресса"
    ]
  },
  {
    id: 5,
    icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
    title: "Аналитики и исследователи",
    items: [
      "Используйте мощные инструменты обработки данных",
      "Получайте аналитику по результатам опросов",
      "Принимайте обоснованные решения на основе данных"
    ]
  },
  {
    id: 6,
    icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
    title: "Ученики",
    items: [
      "Присоединяйтесь к тестам и квизам",
      "Учитесь в интерактивной форме",
      "Проверяйте знания, готовьтесь к экзаменам"
    ]
  }
];

const AudienceSection = () => {
  return (
    <section id="for-whom" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Для кого подходит платформа?</h2>
          <p className="text-xl text-gray-600">
            Наше решение помогает различным специалистам и организациям провести тестирование и получить необходимые данные
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div 
              key={audience.id} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-8">
                <div className="mb-6">{audience.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{audience.title}</h3>
                <ul className="space-y-3">
                  {audience.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-purple-600" />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default AudienceSection;
