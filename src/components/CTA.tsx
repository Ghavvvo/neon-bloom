import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot } from "lucide-react";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
          {t.cta.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="neon-button"
          >
            <a
              href={siteConfig.telegram.channel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2" size={20} />
              {t.cta.button}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <a
              href={siteConfig.telegram.bot}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Bot className="mr-2" size={20} />
              {t.cta.botButton}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
