import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {siteConfig.year} {siteConfig.name}. {t.footer.rights}.
        </p>
      </div>
    </footer>
  );
}
