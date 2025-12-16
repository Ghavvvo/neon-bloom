import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TaxCalculator } from "@/components/TaxCalculator";
import { useLanguage } from "@/contexts/LanguageContext";

const Calculator = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
                {t.calculator.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.calculator.subtitle}
              </p>
            </div>

            <TaxCalculator />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
