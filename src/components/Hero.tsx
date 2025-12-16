import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text animate-fade-in">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in delay-100">
          {t.hero.subtitle}
        </p>
        <Button
          asChild
          size="lg"
          className="neon-button animate-fade-in delay-200"
        >
          <a
            href={siteConfig.telegram.channel}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.cta}
            <ArrowRight className="ml-2" size={20} />
          </a>
        </Button>
      </div>
    </section>
  );
}
