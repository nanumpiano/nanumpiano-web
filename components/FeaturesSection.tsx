import { Brain, Music, Keyboard, Users, GraduationCap, Layers } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI 코칭",
    description: "실시간으로 연주를 분석하고 개인화된 피드백을 제공합니다. 마치 옆에 선생님이 있는 것처럼.",
  },
  {
    icon: Music,
    title: "출판형 악보",
    description: "기존 악보의 형태를 그대로 유지하면서 학습 기능을 더했습니다. 익숙함과 혁신의 조화.",
  },
  {
    icon: Keyboard,
    title: "건반 채보",
    description: "음표에서 건반으로 이어지는 지시선이 어떤 키를 눌러야 하는지 직관적으로 안내합니다.",
  },
  {
    icon: Users,
    title: "멀티플레이",
    description: "친구, 가족, 선생님과 함께 연주하고 배울 수 있습니다. 음악은 함께할 때 더 즐겁습니다.",
  },
  {
    icon: GraduationCap,
    title: "교사-학생 연결",
    description: "교육 기관과 개인 레슨에 최적화된 관리 시스템으로 효율적인 학습 환경을 제공합니다.",
  },
  {
    icon: Layers,
    title: "단계별 학습",
    description: "초보자부터 중급자까지, 체계적인 커리큘럼으로 실력 향상을 도와드립니다.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-amber-400 bg-amber-500/10 rounded-full mb-4">
            핵심 기능
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            피아노 학습의 모든 것을
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              하나의 플랫폼에서
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            나눔피아노는 단순한 학습 도구가 아닙니다. 음악을 진정으로 이해하고 즐길 수 있도록 설계된 통합 학습 시스템입니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 hover:bg-slate-900/80"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-5 group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all">
                <feature.icon className="w-6 h-6 text-amber-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
