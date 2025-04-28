import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold gradient-text">
            askez.io
          </a>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-gray-700 hover:text-askez-purple transition-colors">
            Возможности
          </a>
          <a href="#audience" className="text-gray-700 hover:text-askez-purple transition-colors">
            Для кого
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-askez-purple transition-colors">
            Как это работает
          </a>
          <a href="#resources" className="text-gray-700 hover:text-askez-purple transition-colors">
            Ресурсы
          </a>
          <Button variant="gradient" size="lg">
            Создать тест бесплатно
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-4">
          <a 
            href="#features" 
            className="text-gray-700 hover:text-askez-purple transition-colors py-2 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Возможности
          </a>
          <a 
            href="#audience" 
            className="text-gray-700 hover:text-askez-purple transition-colors py-2 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Для кого
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-700 hover:text-askez-purple transition-colors py-2 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Как это работает
          </a>
          <a 
            href="#resources" 
            className="text-gray-700 hover:text-askez-purple transition-colors py-2 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Ресурсы
          </a>
          <Button 
            variant="gradient" 
            className="w-full mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Создать тест бесплатно
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
