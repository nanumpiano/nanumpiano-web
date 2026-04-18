"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/40 transition-shadow">
              <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8 text-slate-950" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="10" width="3" height="10" rx="0.5" fill="currentColor"/>
                <rect x="7" y="8" width="3" height="12" rx="0.5" fill="currentColor"/>
                <rect x="11" y="6" width="3" height="14" rx="0.5" fill="currentColor"/>
                <rect x="15" y="8" width="3" height="12" rx="0.5" fill="currentColor"/>
                <rect x="19" y="10" width="2" height="10" rx="0.5" fill="currentColor"/>
                <circle cx="12" cy="4" r="2" fill="currentColor"/>
                <line x1="12" y1="4" x2="12" y2="6" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-white tracking-tight">나눔피아노</span>
              <span className="text-xs lg:text-sm text-amber-400 font-semibold -mt-0.5 tracking-wide">Nanum Piano</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="#features" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
              서비스 소개
            </Link>
            <Link href="#functions" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
              기능
            </Link>
            <Link href="#videos" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
              강의 영상
            </Link>
            <Link href="#contact" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
              문의하기
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#login" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
              로그인
            </Link>
            <Link href="#signup" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors border border-slate-700 rounded-lg hover:border-slate-500">
              회원가입
            </Link>
            <Link 
              href="#demo" 
              className="px-6 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02]"
            >
              데모 체험하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/5">
            <nav className="flex flex-col gap-2">
              <Link href="#features" className="px-4 py-2 text-sm text-slate-300 hover:text-white">서비스 소개</Link>
              <Link href="#functions" className="px-4 py-2 text-sm text-slate-300 hover:text-white">기능</Link>
              <Link href="#videos" className="px-4 py-2 text-sm text-slate-300 hover:text-white">강의 영상</Link>
              <Link href="#contact" className="px-4 py-2 text-sm text-slate-300 hover:text-white">문의하기</Link>
              <div className="pt-4 mt-2 border-t border-white/5 flex flex-col gap-2">
                <Link href="#login" className="px-4 py-2 text-sm text-slate-300">로그인</Link>
                <Link href="#signup" className="px-4 py-2 text-sm text-slate-300">회원가입</Link>
                <Link href="#demo" className="mx-4 py-2.5 text-sm font-medium text-center text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg">
                  데모 체험하기
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
