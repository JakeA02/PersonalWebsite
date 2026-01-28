import Image from "next/image";
export default function CTA() {
    return (
        <div
        className="mt-10 sm:mt-18 mb-4"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl translate-y-1/2 -translate-x-1/4" />
          
          <div className="relative z-10">
            <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-3">
              What&apos;s Next?
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                together
              </span>
            </h3>
            <p className="mt-4 text-zinc-400 text-lg max-w-md mx-auto">
              Have an idea? A project? Or just want to chat? I&apos;d love to hear from you.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:jakeadler02@gmail.com"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white rounded-full transition-all duration-200 font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send me an email</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <p className="mt-2 text-zinc-400 text-sm">jakeadler02@gmail.com</p>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-zinc-700/50">
              <p className="text-zinc-500 text-sm mb-4">Or find me on</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <a
                  href="https://x.com/thejakeadler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-white transition-all duration-200"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-sm font-medium">@thejakeadler</span>
                </a>
                <a
                  href="https://linkedin.com/in/adlerjake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-[#0A66C2]/50 text-zinc-300 hover:text-[#0A66C2] transition-all duration-200"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-medium">@adler-jake</span>
                </a>
                <a
                  href="https://substack.com/@thejakeadler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-[#FF6719]/50 text-zinc-300 hover:text-[#FF6719] transition-all duration-200"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                  </svg>
                  <span className="text-sm font-medium">@thejakeadler</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
