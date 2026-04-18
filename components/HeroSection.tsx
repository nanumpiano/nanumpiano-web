"use client"

import Link from "next/link"
import { PianoDemo } from "./PianoDemo"
import { CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[68vh] pt-22 lg:pt-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 lg:py-12">
          
          {/* Left Side - Brand & CTA (42%) */}
          <div className="w-full lg:w-[42%] text-center lg:text-left">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm text-amber-400 font-medium">AI 코칭 기반 피아노 학습</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
              악보를 몰라도
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                피아노를 배울 수 있습니다
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base lg:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0 text-pretty">
              나눔피아노는 음표가 건반을 직접 가리키는 직관적인 학습 시스템입니다. 
              출판형 악보, AI 코칭, 건반 채보, 멀티플레이까지 — 연주를 진정한 이해로 바꿔드립니다.
            </p>

            {/* Feature List */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>출판형 악보 지원</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>AI 실시간 코칭</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>멀티플레이어 지원</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#demo"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02]"
              >
                데모 체험하기
              </Link>
              <Link
                href="#videos"
                className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white border border-slate-600 rounded-xl hover:border-slate-500 hover:bg-white/5 transition-all"
              >
                강의 영상 보기
              </Link>
            </div>

            {/* Patent Notice */}
            <p className="mt-6 text-xs text-slate-500">
              나눔피아노의 핵심 학습 구조는 특허 기반으로 설계되었습니다.
            </p>
          </div>

          {/* Right Side - Piano Demo (58%) */}
          <div className="w-full lg:w-[58%] h-[420px] lg:h-[500px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900/40 backdrop-blur-sm border border-white/10 shadow-2xl shadow-amber-500/5">
              <PianoDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs">스크롤하여 더 보기</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-slate-500 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
