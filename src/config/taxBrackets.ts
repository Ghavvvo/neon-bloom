// ============================================
// CONFIGURACIÓN DE TRAMOS DE IMPUESTOS
// Modifica estos valores según necesites
// ============================================

export interface TaxBracket {
  min: number;      // Límite inferior del tramo (incluido)
  max: number | null; // Límite superior del tramo (null = sin límite)
  rate: number;     // Porcentaje en decimal (0.15 = 15%)
}

// Tramos de ejemplo - MODIFICA AQUÍ
export const taxBrackets: TaxBracket[] = [
  { min: 0, max: 6000, rate: 0.19 },        // 0€ - 6.000€ → 19%
  { min: 6000, max: 50000, rate: 0.21 },    // 6.000€ - 50.000€ → 21%
  { min: 50000, max: 200000, rate: 0.23 },  // 50.000€ - 200.000€ → 23%
  { min: 200000, max: 300000, rate: 0.27 }, // 200.000€ - 300.000€ → 27%
  { min: 300000, max: null, rate: 0.28 },   // +300.000€ → 28%
];

// Función para calcular impuestos por tramos
export function calculateTax(amount: number): {
  brackets: Array<{
    min: number;
    max: number | null;
    rate: number;
    taxableAmount: number;
    tax: number;
  }>;
  totalTax: number;
  effectiveRate: number;
} {
  if (amount <= 0) {
    return { brackets: [], totalTax: 0, effectiveRate: 0 };
  }

  const result: Array<{
    min: number;
    max: number | null;
    rate: number;
    taxableAmount: number;
    tax: number;
  }> = [];

  let remainingAmount = amount;
  let totalTax = 0;

  for (const bracket of taxBrackets) {
    if (remainingAmount <= 0) break;

    const bracketSize = bracket.max !== null 
      ? bracket.max - bracket.min 
      : Infinity;
    
    const taxableInBracket = Math.min(remainingAmount, bracketSize);
    const taxForBracket = taxableInBracket * bracket.rate;

    if (taxableInBracket > 0) {
      result.push({
        min: bracket.min,
        max: bracket.max,
        rate: bracket.rate,
        taxableAmount: taxableInBracket,
        tax: taxForBracket,
      });

      totalTax += taxForBracket;
      remainingAmount -= taxableInBracket;
    }
  }

  const effectiveRate = amount > 0 ? (totalTax / amount) * 100 : 0;

  return {
    brackets: result,
    totalTax,
    effectiveRate,
  };
}
