import { LucideIcon } from 'lucide-react';

export type Lang = 'ar' | 'en';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  desc: string;
}

export interface PortfolioItem {
  category: string;
  title: string;
  icon: LucideIcon;
  desc: string;
  // Detailed view optional properties
  longDesc?: string;
  client?: string;
  year?: string;
  role?: string;
  link?: string;
  previewImage?: string;
}

export interface Skill {
  name: string;
  code: string;
  color: string;
  textColor: string;
}

export interface SectionContent {
  greeting?: string;
  headline?: string;
  headlineHighlight?: string;
  description?: string;
  btnPortfolio?: string;
  btnCV?: string;
  title?: string;
  addressLabel?: string;
  addressValue?: string;
  emailLabel?: string;
  emailValue?: string;
  phoneLabel?: string;
  phoneValue?: string;
  statusLabel?: string;
  statusValue?: string;
  items?: ExperienceItem[] | PortfolioItem[];
  moreBtn?: string;
  nameLabel?: string;
  messageLabel?: string;
  sendBtn?: string;
  successMsg?: string;
  rights?: string;
}

export interface Translation {
  name: string;
  title: string;
  nav: NavItem[];
  home: SectionContent;
  about: SectionContent;
  skills: SectionContent;
  experience: { title: string; items: ExperienceItem[] };
  portfolio: { title: string; items: PortfolioItem[]; moreBtn: string };
  contact: SectionContent;
  footer: SectionContent;
  cvPopup: { title: string };
}