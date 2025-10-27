"use client"

import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-800 bg-gradient-to-t from-black  to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-purple-200">
            © {currentYear} Alejandro Molinero. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
