import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { calculateTax, taxBrackets } from "@/config/taxBrackets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

export function TaxCalculator() {
  const { t } = useLanguage();
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateTax> | null>(null);

  const handleCalculate = () => {
    const amount = parseFloat(inputValue.replace(",", "."));
    if (!isNaN(amount) && amount >= 0) {
      setResult(calculateTax(amount));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers, comma, and dot with max 2 decimals
    if (/^[\d]*[.,]?[\d]{0,2}$/.test(value) || value === "") {
      setInputValue(value);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };

  const formatBracketRange = (min: number, max: number | null) => {
    if (max === null) {
      return `${formatCurrency(min)}+`;
    }
    return `${formatCurrency(min)} - ${formatCurrency(max)}`;
  };

  return (
    <div className="space-y-8">
      {/* Calculator Input */}
      <div className="neon-card p-6 md:p-8 rounded-xl">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              {t.calculator.inputLabel}
            </label>
            <Input
              type="text"
              inputMode="decimal"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={t.calculator.inputPlaceholder}
              className="bg-background/50 border-primary/30 focus:border-primary text-lg"
            />
          </div>
          <div className="flex items-end">
            <Button
              onClick={handleCalculate}
              className="neon-button w-full sm:w-auto"
              disabled={!inputValue}
            >
              <Calculator className="mr-2" size={18} />
              {t.calculator.calculate}
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      {result && result.brackets.length > 0 && (
        <div className="neon-card p-6 md:p-8 rounded-xl animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 text-primary">
            {t.calculator.results.title}
          </h3>

          <div className="space-y-4 mb-8">
            {result.brackets.map((bracket, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background/50 rounded-lg border border-primary/20"
              >
                <div className="mb-2 sm:mb-0">
                  <span className="text-sm text-muted-foreground">
                    {t.calculator.results.bracket} {index + 1}:
                  </span>
                  <span className="ml-2 text-foreground">
                    {formatBracketRange(bracket.min, bracket.max)}
                  </span>
                  <span className="ml-2 text-primary font-medium">
                    ({(bracket.rate * 100).toFixed(0)}%)
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">
                    {formatCurrency(bracket.taxableAmount)}
                  </span>
                  <span className="text-primary font-semibold">
                    → {formatCurrency(bracket.tax)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-primary/20">
            <div className="p-4 bg-primary/10 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">
                {t.calculator.results.total}
              </p>
              <p className="text-2xl font-bold text-primary neon-text">
                {formatCurrency(result.totalTax)}
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">
                {t.calculator.results.effectiveRate}
              </p>
              <p className="text-2xl font-bold text-primary neon-text">
                {result.effectiveRate.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Brackets Reference Table */}
      <div className="neon-card p-6 md:p-8 rounded-xl">
        <h3 className="text-xl font-semibold mb-6 text-primary">
          {t.calculator.bracketsTable.title}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-primary/20">
                <th className="text-left py-3 px-2 text-muted-foreground font-medium">
                  {t.calculator.bracketsTable.from}
                </th>
                <th className="text-left py-3 px-2 text-muted-foreground font-medium">
                  {t.calculator.bracketsTable.to}
                </th>
                <th className="text-right py-3 px-2 text-muted-foreground font-medium">
                  {t.calculator.bracketsTable.rate}
                </th>
              </tr>
            </thead>
            <tbody>
              {taxBrackets.map((bracket, index) => (
                <tr
                  key={index}
                  className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
                >
                  <td className="py-3 px-2 text-foreground">
                    {formatCurrency(bracket.min)}
                  </td>
                  <td className="py-3 px-2 text-foreground">
                    {bracket.max !== null
                      ? formatCurrency(bracket.max)
                      : t.calculator.bracketsTable.unlimited}
                  </td>
                  <td className="py-3 px-2 text-right text-primary font-medium">
                    {(bracket.rate * 100).toFixed(0)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
