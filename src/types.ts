export interface ServiceType {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  features: string[];
  forms: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  year?: string;
  link?: string;
}