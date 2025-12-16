export const translations = {
  es: {
    nav: {
      home: "Inicio",
      calculator: "Calculadora",
    },
    hero: {
      title: "Trading Inteligente",
      subtitle: "Potencia tus inversiones con herramientas profesionales y señales precisas",
      cta: "Únete a Telegram",
    },
    features: {
      title: "¿Por qué elegirnos?",
      items: [
        {
          title: "Señales Precisas",
          description: "Análisis técnico avanzado con alta tasa de acierto",
        },
        {
          title: "Soporte 24/7",
          description: "Comunidad activa y asistencia personalizada",
        },
        {
          title: "Educación Continua",
          description: "Aprende estrategias probadas de trading",
        },
        {
          title: "Resultados Reales",
          description: "Historial transparente de operaciones",
        },
      ],
    },
    cta: {
      title: "Empieza Hoy",
      subtitle: "Únete a nuestra comunidad y transforma tu forma de operar",
      button: "Contactar en Telegram",
      botButton: "Acceder al Bot",
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
    calculator: {
      title: "Calculadora de Impuestos",
      subtitle: "Calcula cuánto pagarás según los tramos progresivos",
      inputLabel: "Beneficios (€)",
      inputPlaceholder: "Introduce tus beneficios",
      calculate: "Calcular",
      results: {
        title: "Desglose por Tramos",
        bracket: "Tramo",
        amount: "Cantidad",
        rate: "Tipo",
        tax: "Impuesto",
        total: "Total a Pagar",
        effectiveRate: "Tipo Efectivo",
      },
      bracketsTable: {
        title: "Tramos de Impuestos",
        from: "Desde",
        to: "Hasta",
        rate: "Tipo",
        unlimited: "Sin límite",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      calculator: "Calculator",
    },
    hero: {
      title: "Smart Trading",
      subtitle: "Boost your investments with professional tools and precise signals",
      cta: "Join Telegram",
    },
    features: {
      title: "Why Choose Us?",
      items: [
        {
          title: "Precise Signals",
          description: "Advanced technical analysis with high accuracy",
        },
        {
          title: "24/7 Support",
          description: "Active community and personalized assistance",
        },
        {
          title: "Continuous Education",
          description: "Learn proven trading strategies",
        },
        {
          title: "Real Results",
          description: "Transparent trading history",
        },
      ],
    },
    cta: {
      title: "Start Today",
      subtitle: "Join our community and transform the way you trade",
      button: "Contact on Telegram",
      botButton: "Access the Bot",
    },
    footer: {
      rights: "All rights reserved",
    },
    calculator: {
      title: "Tax Calculator",
      subtitle: "Calculate how much you'll pay based on progressive brackets",
      inputLabel: "Profits (€)",
      inputPlaceholder: "Enter your profits",
      calculate: "Calculate",
      results: {
        title: "Breakdown by Brackets",
        bracket: "Bracket",
        amount: "Amount",
        rate: "Rate",
        tax: "Tax",
        total: "Total to Pay",
        effectiveRate: "Effective Rate",
      },
      bracketsTable: {
        title: "Tax Brackets",
        from: "From",
        to: "To",
        rate: "Rate",
        unlimited: "Unlimited",
      },
    },
  },
};

export type Language = "es" | "en";
export type Translations = typeof translations;
