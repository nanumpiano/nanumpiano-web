import { Play, Clock } from "lucide-react"
import Link from "next/link"

const videos = [
  {
    id: 1,
    title: "나눔피아노 시작하기",
    description: "처음 사용하시는 분들을 위한 기본 가이드입니다. 설치부터 첫 연주까지 안내합니다.",
    duration: "12:34",
    thumbnail: "from-amber-600 to-orange-700",
  },
  {
    id: 2,
    title: "AI 코칭 활용법",
    description: "AI 코칭 기능을 최대한 활용하는 방법을 알려드립니다. 실력 향상의 핵심입니다.",
    duration: "18:22",
    thumbnail: "from-blue-600 to-indigo-700",
  },
  {
    id: 3,
    title: "악보 Editor 사용법",
    description: "나만의 악보를 만들고 편집하는 방법을 상세히 설명합니다.",
    duration: "15:45",
    thumbnail: "from-purple-600 to-pink-700",
  },
]

export function VideosSection() {
  return (
    <section id="videos" className="py-20 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-amber-400 bg-amber-500/10 rounded-full mb-4">
            강의 영상
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            영상으로 쉽게 배우는
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              나눔피아노 활용법
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            초보자도 쉽게 따라할 수 있는 단계별 튜토리얼 영상을 제공합니다.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video) => (
            <Link
              key={video.id}
              href="#"
              className="group block rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className={`relative aspect-video bg-gradient-to-br ${video.thumbnail}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm flex items-center gap-1">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">{video.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-amber-400 border border-amber-500/30 rounded-lg hover:bg-amber-500/10 transition-all"
          >
            모든 강의 영상 보기
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
