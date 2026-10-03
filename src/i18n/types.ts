export interface UI {
  nav: {
    services: string;
    contact: string;
    cta: string;
    switchTo: string;
  };
  a11y: {
    skipToContent: string;
  };
  hero: {
    label: string;
    title: string;
    brand: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    label: string;
    heading: string;
    items: Array<{ emoji: string; title: string; description: string }>;
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    general: string;
    email: string;
  };
}
