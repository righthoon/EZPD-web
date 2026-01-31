import { ArrowLeft, Droplet, Heart, Weight, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

interface HealthMetricsScreenProps {
  onNavigate: (screen: string) => void;
}

type HealthStatus = 'good' | 'caution' | 'alert';

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  status: HealthStatus;
  icon: React.ReactNode;
  progress?: number;
  subtitle?: string;
}

function MetricCard({ title, value, unit, status, icon, progress, subtitle }: MetricCardProps) {
  const statusConfig = {
    good: {
      bg: 'from-[#A8B5A1] to-[#8FA899]',
      text: '양호',
      textColor: 'text-[#A8B5A1]',
      barBg: 'bg-[#A8B5A1]',
      iconBg: 'bg-gradient-to-br from-[#A8B5A1] to-[#8FA899]',
    },
    caution: {
      bg: 'from-[#F4A261] to-[#E89855]',
      text: '주의',
      textColor: 'text-[#F4A261]',
      barBg: 'bg-[#F4A261]',
      iconBg: 'bg-gradient-to-br from-[#F4A261] to-[#E89855]',
    },
    alert: {
      bg: 'from-[#E07A7A] to-[#D86A6A]',
      text: '경고',
      textColor: 'text-[#E07A7A]',
      barBg: 'bg-[#E07A7A]',
      iconBg: 'bg-gradient-to-br from-[#E07A7A] to-[#D86A6A]',
    },
  };

  const config = statusConfig[status];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-16 h-16 ${config.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-[#2C2C2C] mb-1" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-[#8B8680]" style={{ fontSize: '0.889rem' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-[#2C2C2C]" style={{ fontSize: '3rem', fontWeight: 700 }}>
          {value}
        </span>
        {unit && (
          <span className="text-[#8B8680]" style={{ fontSize: '1.556rem', fontWeight: 600 }}>
            {unit}
          </span>
        )}
      </div>

      {/* Progress Bar */}
      {progress !== undefined && (
        <div className="mb-4">
          <div className="w-full bg-[#F5F1E8] rounded-full h-4 overflow-hidden">
            <div 
              className={`${config.barBg} h-full rounded-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Status Badge */}
      <div className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r ${config.bg}`}>
        {status === 'good' && <CheckCircle className="w-6 h-6 text-white" strokeWidth={2.5} />}
        {status === 'caution' && <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />}
        {status === 'alert' && <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />}
        <span className="text-white" style={{ fontSize: '1.222rem', fontWeight: 700 }}>
          {config.text}
        </span>
      </div>
    </div>
  );
}

export function HealthMetricsScreen({ onNavigate }: HealthMetricsScreenProps) {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-4 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="p-3 bg-[#F5F1E8] rounded-2xl"
          >
            <ArrowLeft className="w-6 h-6 text-[#2C2C2C]" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 style={{ fontSize: '1.778rem', fontWeight: 700, color: '#2C2C2C' }}>
              건강 지표
            </h1>
            <p style={{ fontSize: '1rem', color: '#8B8680' }}>
              나의 건강 상태를 확인하세요
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 py-6 pb-24 space-y-5">
        {/* Today's Condition Summary */}
        <div className="bg-gradient-to-br from-[#A8B5A1] to-[#8FA899] rounded-3xl p-6 shadow-lg">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#A8B5A1]" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-white" style={{ fontSize: '1.778rem', fontWeight: 700 }}>
                오늘의 컨디션
              </h2>
              <p className="text-white/90" style={{ fontSize: '1.111rem' }}>
                전반적으로 양호합니다
              </p>
            </div>
          </div>
        </div>

        {/* Fluid Quality Card */}
        <MetricCard
          title="배액 품질"
          value="정상"
          status="good"
          subtitle="오늘 배출된 투석액 상태"
          icon={<Droplet className="w-9 h-9 text-white" strokeWidth={2.5} />}
          progress={100}
        />

        {/* Blood Pressure Card */}
        <MetricCard
          title="혈압"
          value="120/80"
          status="good"
          subtitle="최근 측정 기록"
          icon={<Heart className="w-9 h-9 text-white" strokeWidth={2.5} />}
          progress={75}
        />

        {/* Weight Card */}
        <MetricCard
          title="체중 변화"
          value="68.5"
          unit="kg"
          status="good"
          subtitle="어제 대비 0.2kg 감소"
          icon={<Weight className="w-9 h-9 text-white" strokeWidth={2.5} />}
          progress={85}
        />

        {/* Fluid Intake (Caution Example) */}
        <MetricCard
          title="오늘 수분 섭취"
          value="1,200"
          unit="ml"
          status="caution"
          subtitle="권장량: 1,000ml"
          icon={<Droplet className="w-9 h-9 text-white" strokeWidth={2.5} />}
          progress={120}
        />

        {/* Weekly Progress Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-16 h-16 bg-gradient-to-br from-[#A3C4D9] to-[#7FA8C7] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
              <TrendingUp className="w-9 h-9 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-[#2C2C2C] mb-1" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                주간 투석 달성률
              </h3>
              <p className="text-[#8B8680]" style={{ fontSize: '0.889rem' }}>
                이번 주 7일 중 6일 완료
              </p>
            </div>
          </div>

          {/* Weekly Progress Bars */}
          <div className="space-y-3">
            {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => {
              const completed = index < 6;
              return (
                <div key={day} className="flex items-center gap-3">
                  <span className="text-[#8B8680] w-8" style={{ fontSize: '1rem', fontWeight: 600 }}>
                    {day}
                  </span>
                  <div className="flex-1 bg-[#F5F1E8] rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        completed ? 'bg-[#A8B5A1]' : 'bg-[#E8E4D8]'
                      }`}
                      style={{ width: completed ? '100%' : '0%' }}
                    />
                  </div>
                  <span className={completed ? 'text-[#A8B5A1]' : 'text-[#E8E4D8]'} style={{ fontSize: '1rem', fontWeight: 700 }}>
                    {completed ? '✓' : '○'}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-5 border-t-2 border-[#F5F1E8]">
            <div className="flex items-center justify-between">
              <span className="text-[#8B8680]" style={{ fontSize: '1.111rem', fontWeight: 600 }}>
                달성률
              </span>
              <span className="text-[#A8B5A1]" style={{ fontSize: '2rem', fontWeight: 700 }}>
                86%
              </span>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="bg-gradient-to-b from-[#FFF9E5] to-white rounded-2xl p-5 border-2 border-[#F4A261]/30">
          <p className="text-[#8B8680] text-center leading-relaxed" style={{ fontSize: '1rem' }}>
            💡 <span className="font-semibold">건강 지표에 대해 궁금한 점이 있으신가요?</span><br />
            담당 간호사에게 문의하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
