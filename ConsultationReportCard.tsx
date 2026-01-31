import { CheckCircle, XCircle, Droplet, Activity, Shield, BadgeCheck } from 'lucide-react';

export function ConsultationReportCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl relative">
      {/* Ready to Share Badge */}
      <div className="absolute -top-3 -right-3">
        <div className="bg-gradient-to-br from-[#A8B5A1] to-[#8FA899] text-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
          <BadgeCheck className="w-5 h-5" strokeWidth={2.5} />
          <span style={{ fontSize: '0.889rem', fontWeight: 700 }}>공유 중</span>
        </div>
      </div>

      {/* Patient Info */}
      <div className="mb-6 pb-5 border-b-2 border-[#F5F1E8]">
        <h2 className="text-[#2C2C2C] mb-1" style={{ fontSize: '1.778rem', fontWeight: 700 }}>
          김필수 환자님
        </h2>
        <p className="text-[#8B8680]" style={{ fontSize: '1.111rem', fontWeight: 600 }}>
          2026년 1월 29일
        </p>
      </div>

      {/* Today's Dialysis Volume */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-[#A8B5A1] to-[#8FA899] rounded-2xl p-6 text-center">
          <p className="text-white/90 mb-2" style={{ fontSize: '1.222rem', fontWeight: 600 }}>
            오늘의 투석량
          </p>
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-white" style={{ fontSize: '3.556rem', fontWeight: 700 }}>
              2,000
            </span>
            <span className="text-white/90" style={{ fontSize: '1.778rem', fontWeight: 600 }}>
              cc
            </span>
          </div>
        </div>
      </div>

      {/* Summary Grid */}
      <div className="space-y-4 mb-6">
        {/* Section: Key Metrics */}
        <div>
          <h3 className="text-[#2C2C2C] mb-3 flex items-center gap-2" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
            <Droplet className="w-6 h-6 text-[#A3C4D9]" strokeWidth={2.5} />
            주요 수치
          </h3>
          <div className="bg-[#F5F1E8] rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#2C2C2C]" style={{ fontSize: '1.222rem', fontWeight: 600 }}>
                혈압
              </span>
              <span className="text-[#2C2C2C]" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                120/80 mmHg
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#2C2C2C]" style={{ fontSize: '1.222rem', fontWeight: 600 }}>
                체중
              </span>
              <span className="text-[#2C2C2C]" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                65.2 kg
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#2C2C2C]" style={{ fontSize: '1.222rem', fontWeight: 600 }}>
                소변량
              </span>
              <span className="text-[#2C2C2C]" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                800 ml/일
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#2C2C2C]" style={{ fontSize: '1.222rem', fontWeight: 600 }}>
                주입 속도
              </span>
              <span className="text-[#2C2C2C]" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                10분 (적정)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#2C2C2C]" style={{ fontSize: '1.222rem', fontWeight: 600 }}>
                배액 탁도
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#2C2C2C]" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
                  맑음
                </span>
                <CheckCircle className="w-6 h-6 text-[#A8B5A1]" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Procedure Compliance */}
        <div>
          <h3 className="text-[#2C2C2C] mb-3 flex items-center gap-2" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
            <Shield className="w-6 h-6 text-[#A8B5A1]" strokeWidth={2.5} />
            투석 준비 준수
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <ComplianceItem label="손 씻기" status="yes" />
            <ComplianceItem label="마스크 착용" status="yes" />
            <ComplianceItem label="소독 완료" status="yes" />
            <ComplianceItem label="환경 정리" status="yes" />
          </div>
        </div>

        {/* Section: Daily Symptoms */}
        <div>
          <h3 className="text-[#2C2C2C] mb-3 flex items-center gap-2" style={{ fontSize: '1.333rem', fontWeight: 700 }}>
            <Activity className="w-6 h-6 text-[#F4A261]" strokeWidth={2.5} />
            증상 체크
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <SymptomItem label="복통" status="yes" />
            <SymptomItem label="부종" status="yes" />
            <SymptomItem label="어지러움" status="no" />
            <SymptomItem label="열" status="no" />
            <SymptomItem label="출구부위 이상" status="no" />
            <SymptomItem label="가려움증" status="no" />
            <SymptomItem label="속 울렁거림" status="no" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ComplianceItem({ label, status }: { label: string; status: 'yes' | 'no' }) {
  const isCompliant = status === 'yes';
  
  return (
    <div className={`rounded-xl p-4 ${isCompliant ? 'bg-[#4CAF50]/10' : 'bg-[#E07A7A]/10'}`}>
      <div className="flex items-center justify-between">
        <span className="text-[#2C2C2C]" style={{ fontSize: '1.111rem', fontWeight: 600 }}>
          {label}
        </span>
        {isCompliant ? (
          <CheckCircle className="w-7 h-7 text-[#4CAF50]" strokeWidth={2.5} />
        ) : (
          <XCircle className="w-7 h-7 text-[#E07A7A]" strokeWidth={2.5} />
        )}
      </div>
    </div>
  );
}

function SymptomItem({ label, status }: { label: string; status: 'yes' | 'no' }) {
  const hasSymptom = status === 'yes';
  
  return (
    <div className={`rounded-xl p-4 ${hasSymptom ? 'bg-[#E07A7A]/10' : 'bg-[#A8B5A1]/10'}`}>
      <div className="flex items-center justify-between">
        <span className="text-[#2C2C2C]" style={{ fontSize: '1.111rem', fontWeight: 600 }}>
          {label}
        </span>
        {hasSymptom ? (
          <CheckCircle className="w-7 h-7 text-[#E07A7A]" strokeWidth={2.5} />
        ) : (
          <CheckCircle className="w-7 h-7 text-[#A8B5A1]" strokeWidth={2.5} />
        )}
      </div>
    </div>
  );
}