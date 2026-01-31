import { Check, HandMetal, Shield, Thermometer, Droplet, Wind, Activity, ArrowLeft, Save } from 'lucide-react';
import { useState } from 'react';

interface DailyHealthDiaryScreenProps {
  onNavigate: (screen: string) => void;
}

interface ChecklistItem {
  id: string;
  label: string;
  icon: any;
  checked: boolean;
  category: 'compliance' | 'symptoms';
}

export function DailyHealthDiaryScreen({ onNavigate }: DailyHealthDiaryScreenProps) {
  const [items, setItems] = useState<ChecklistItem[]>([
    // Procedure Compliance
    { id: 'handwash', label: '손 씻기 완료', icon: HandMetal, checked: false, category: 'compliance' },
    { id: 'mask', label: '마스크 착용', icon: Shield, checked: false, category: 'compliance' },
    { id: 'disinfect', label: '소독 완료', icon: Activity, checked: false, category: 'compliance' },
    { id: 'environment', label: '환경 정리 (문닫기, 에어컨끄기)', icon: Wind, checked: false, category: 'compliance' },
    
    // Daily Symptoms (inverse - checked means NO symptom)
    { id: 'pain', label: '통증 없음', icon: Thermometer, checked: false, category: 'symptoms' },
    { id: 'swelling', label: '부종 없음', icon: Droplet, checked: false, category: 'symptoms' },
    { id: 'dizziness', label: '어지러움 없음', icon: Wind, checked: false, category: 'symptoms' },
    { id: 'fever', label: '열 없음', icon: Thermometer, checked: false, category: 'symptoms' },
  ]);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleSave = () => {
    // In a real app, this would save to database
    onNavigate('home');
  };

  const complianceItems = items.filter(item => item.category === 'compliance');
  const symptomItems = items.filter(item => item.category === 'symptoms');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5EB] to-[#FFEEDD] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F4A261] to-[#E89855] px-5 py-6 shadow-md">
        <button 
          onClick={() => onNavigate('home')}
          className="mb-4 text-white"
        >
          <ArrowLeft className="w-8 h-8" strokeWidth={2.5} />
        </button>
        <h1 className="text-white mb-2" style={{ fontSize: '2.222rem', fontWeight: 700 }}>
          오늘의 건강 체크
        </h1>
        <p className="text-white/90" style={{ fontSize: '1.222rem', fontWeight: 600 }}>
          편안하게 체크해 주세요
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6">
        {/* Procedure Compliance Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-gradient-to-br from-[#A8B5A1] to-[#8FA899] rounded-2xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-[#2C2C2C]" style={{ fontSize: '1.778rem', fontWeight: 700 }}>
              투석 준비 사항
            </h2>
          </div>

          <div className="space-y-3">
            {complianceItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`w-full rounded-3xl p-6 shadow-md transition-all active:scale-[0.98] ${
                    item.checked 
                      ? 'bg-gradient-to-r from-[#A8B5A1] to-[#8FA899]' 
                      : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        item.checked 
                          ? 'bg-white/20' 
                          : 'bg-[#F5F1E8]'
                      }`}>
                        <Icon 
                          className={`w-8 h-8 ${item.checked ? 'text-white' : 'text-[#8B8680]'}`} 
                          strokeWidth={2.5} 
                        />
                      </div>
                      <span 
                        className={item.checked ? 'text-white' : 'text-[#2C2C2C]'}
                        style={{ fontSize: '1.556rem', fontWeight: 700 }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
                      item.checked 
                        ? 'bg-white border-white' 
                        : 'bg-transparent border-[#E8E4D8]'
                    }`}>
                      {item.checked && (
                        <Check className="w-7 h-7 text-[#A8B5A1]" strokeWidth={3} />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Daily Symptoms Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F4A261] to-[#E89855] rounded-2xl flex items-center justify-center">
              <Activity className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-[#2C2C2C]" style={{ fontSize: '1.778rem', fontWeight: 700 }}>
              오늘의 증상
            </h2>
          </div>

          <div className="space-y-3">
            {symptomItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`w-full rounded-3xl p-6 shadow-md transition-all active:scale-[0.98] ${
                    item.checked 
                      ? 'bg-gradient-to-r from-[#A8B5A1] to-[#8FA899]' 
                      : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        item.checked 
                          ? 'bg-white/20' 
                          : 'bg-[#F5F1E8]'
                      }`}>
                        <Icon 
                          className={`w-8 h-8 ${item.checked ? 'text-white' : 'text-[#8B8680]'}`} 
                          strokeWidth={2.5} 
                        />
                      </div>
                      <span 
                        className={item.checked ? 'text-white' : 'text-[#2C2C2C]'}
                        style={{ fontSize: '1.556rem', fontWeight: 700 }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
                      item.checked 
                        ? 'bg-white border-white' 
                        : 'bg-transparent border-[#E8E4D8]'
                    }`}>
                      {item.checked && (
                        <Check className="w-7 h-7 text-[#A8B5A1]" strokeWidth={3} />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="bg-gradient-to-b from-transparent to-[#FFF5EB] px-5 py-6">
        <button 
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-[#F4A261] to-[#E89855] text-white rounded-3xl py-6 shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-4"
        >
          <Save className="w-7 h-7" strokeWidth={2.5} />
          <span style={{ fontSize: '1.778rem', fontWeight: 700 }}>
            저장하기
          </span>
        </button>
      </div>
    </div>
  );
}
