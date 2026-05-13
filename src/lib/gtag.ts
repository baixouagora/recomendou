declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

const CONVERSIONS = {
  amazon: 'AW-18160658048/Z9bzCKSlx6wcEIDN1tND',
  mercadolivre: 'AW-18160658048/dDTRCKelx6wcEIDN1tND',
} as const

export function reportConversion(store: keyof typeof CONVERSIONS) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'conversion', { send_to: CONVERSIONS[store] })
}
