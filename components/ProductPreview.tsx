"use client"

import { useState } from "react"
import { Play, Monitor, Music2, Edit3, BarChart3 } from "lucide-react"

const previews = [
  {
    id: "play",
    icon: Play,
    title: "연주 화면",
    description: "실시간 악보 연동과 건반 지시로 직관적인 연주 경험을 제공합니다.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "compose",
    icon: Music2,
    title: "건반작곡",
    description: "건반을 눌러 작곡하고, 자동으로 악보로 변환됩니다.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "editor",
    icon: Edit3,
    title: "악보 Editor",
    description: "전문가 수준의 악보 편집 기능으로 나만의 악보를 만들 수 있습니다.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "result",
    icon: BarChart3,
    title: "학습 결과",
    description: "AI가 분석한 연주 결과와 개선점을 확인할 수 있습니다.",
    gradient: "from-emerald-500 to-teal-600",
  },
]

export function ProductPreview() {
  const [activePreview, setActivePreview] = useState(previews[0])

  return (
    <section id="functions" className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-amber-400 bg-amber-500/10 rounded-full mb-4">
            제품 미리보기
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            강력한 기능,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              직관적인 인터페이스
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Preview Display */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl order-2 lg:order-1">
            {/* Monitor frame */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className={`w-full h-full rounded-xl bg-gradient-to-br ${activePreview.gradient} opacity-20`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <activePreview.icon className={`w-20 h-20 mb-6 text-transparent bg-clip-text bg-gradient-to-br ${activePreview.gradient}`} style={{ stroke: "url(#iconGradient)" }} />
                <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${activePreview.gradient} flex items-center justify-center`}>
                  <activePreview.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{activePreview.title}</h3>
                <p className="text-slate-400 max-w-sm">{activePreview.description}</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* Preview Tabs */}
          <div className="space-y-4 order-1 lg:order-2">
            {previews.map((preview) => (
              <button
                key={preview.id}
                onClick={() => setActivePreview(preview)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                  activePreview.id === preview.id
                    ? "bg-slate-800/80 border-amber-500/50 shadow-lg shadow-amber-500/10"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${preview.gradient} flex items-center justify-center flex-shrink-0`}>
                    <preview.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{preview.title}</h4>
                    <p className="text-sm text-slate-400">{preview.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
