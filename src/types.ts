export interface Project {
  id: string;
  title: string;
  tagline: string;
  themeColor: string; // e.g., 'blue', 'purple', 'emerald'
  outcome: {
    title: string;
    metrics: string;
    tags: string[];
  };
  how: {
    description: string;
    points: {
      title: string;
      description: string;
      icon: string;
    }[];
    screenshots: {
      title: string;
      caption: string;
      uiType: "mobile" | "dashboard" | "form";
      primaryColor: string;
      elements: {
        type: "header" | "button" | "input" | "card" | "chart" | "list" | "table" | "face_overlay";
        label?: string;
        value?: string;
      }[];
    }[];
  };
  challenges: {
    title: string;
    description: string;
    items: {
      label: string;
      content: string;
    }[];
  };
  whatILearned: string;
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: string;
  tech: string[];
}

export interface AdditionalWork {
  id: string;
  title: string;
  category: string;
  description: string;
  visualType: "chart" | "badge" | "iconset" | "slides" | "bubbles";
  cta?: string;
}
