import { Home, FileText, BarChart3, BookOpen } from 'lucide-react';

interface MobileNavigationProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function MobileNavigation({ activeScreen, onNavigate }: MobileNavigationProps) {
  const navItems = [
    { id: 'home', label: '홈', icon: Home },
    { id: 'records', label: '기록', icon: FileText },
    { id: 'reports', label: '보고서', icon: BarChart3 },
    { id: 'education', label: '교육', icon: BookOpen },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#E8E4D8] shadow-lg z-50">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1 py-3 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-[#A8B5A1] text-white' 
                  : 'text-[#8B8680] hover:bg-[#F5F1E8]'
              }`}
            >
              <Icon className="w-7 h-7" strokeWidth={2.5} />
              <span className="text-sm font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
