import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-950" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                  <circle cx="12" cy="11" r="3"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">나눔피아노</span>
                <span className="text-xs text-amber-400/80 font-medium -mt-1">Nanum Piano</span>
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              악보를 몰라도 배울 수 있는 직관형 피아노 학습 시스템
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">서비스</h4>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">서비스 소개</Link></li>
              <li><Link href="#functions" className="text-sm text-slate-400 hover:text-white transition-colors">기능</Link></li>
              <li><Link href="#videos" className="text-sm text-slate-400 hover:text-white transition-colors">강의 영상</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">요금제</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">지원</h4>
            <ul className="space-y-3">
              <li><Link href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">문의하기</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">자주 묻는 질문</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">사용 가이드</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">기관 도입</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">회사</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">회사 소개</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">채용</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">블로그</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">뉴스</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2024 Nanum Piano. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">이용약관</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">쿠키 설정</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
