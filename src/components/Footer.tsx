import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-bold gradient-text">
              askez.io
            </a>
            <p className="mt-4 text-gray-600 max-w-md">
              Профессиональная платформа для создания тестов, опросов и квизов 
              с мгновенной аналитикой. Присоединяйтесь к нам!
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-askez-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-askez-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-askez-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-askez-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Страницы</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-askez-purple transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#audience" className="text-gray-600 hover:text-askez-purple transition-colors">
                  Для кого
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-askez-purple transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-askez-purple transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                support@askez.io
              </li>
              <li className="text-gray-600">
                Служба поддержки: 9:00 - 18:00
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-askez-purple transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-askez-purple transition-colors">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} askez.io. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
