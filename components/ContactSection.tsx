import { Mail, MessageSquare, Building2, GraduationCap } from "lucide-react"
import Link from "next/link"

const contactOptions = [
  {
    icon: MessageSquare,
    title: "일반 문의",
    description: "서비스 이용 관련 궁금한 점을 문의해 주세요.",
    action: "문의하기",
    href: "#",
  },
  {
    icon: Mail,
    title: "이메일 상담",
    description: "자세한 상담이 필요하시면 이메일로 연락주세요.",
    action: "support@nanumpiano.com",
    href: "mailto:support@nanumpiano.com",
  },
  {
    icon: Building2,
    title: "기관 도입 문의",
    description: "학교, 학원 등 기관 도입을 원하시면 연락주세요.",
    action: "도입 상담 신청",
    href: "#",
  },
  {
    icon: GraduationCap,
    title: "교사용 문의",
    description: "교사 및 강사를 위한 특별 프로그램을 안내드립니다.",
    action: "교사 프로그램 안내",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-amber-400 bg-amber-500/10 rounded-full mb-4">
            문의 및 상담
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            궁금한 점이 있으신가요?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              언제든 연락주세요
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            나눔피아노 팀이 친절하게 안내해 드리겠습니다.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-5 group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all">
                <option.icon className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                {option.description}
              </p>
              <span className="text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors">
                {option.action}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
