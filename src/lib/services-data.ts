import auditImg from "@/assets/corporate-team-meeting-stockcake.jpg";
import agroImg from "@/assets/IMG_7742.jpg";
import riskImg from "@/assets/Albums&Aventures_AMN_9721_Venise.jpg";
import performanceImg from "@/assets/images (1).jpg";
import heritageImg from "@/assets/C00B033B-DC9B-4B32-8AF0-FDE065F54EF6.jpg";
import humanImg from "@/assets/Albums&Aventures_AF1A4657_Bresil.jpg";
import cemacAudit1 from "@/assets/audit meeting.jpg";
import cemacAudit2 from "@/assets/Audit Clock.jpg";
import cemacAgro1 from "@/assets/Alex_PCT 1.jpg";
import cemacAgro2 from "@/assets/73caffdb-bcfc-437c-ad81-7bb5b8a32b36.jpg";
import cemacRisk1 from "@/assets/positive-business-team.jpg";
import cemacRisk2 from "@/assets/Alex_PCT 3.jpg";
import cemacPerf1 from "@/assets/IMG_6677.jpg";
import cemacPerf2 from "@/assets/IMG_7520.jpg";
import cemacHeritage1 from "@/assets/Albums&Aventures_AF1A9107_Maison champetre.jpg";
import cemacHeritage2 from "@/assets/Albums&Aventures_DSCF3834_Japon1.jpg";
import cemacHuman1 from "@/assets/short-hero.jpg";
import cemacHuman2 from "@/assets/Albums&Aventures_AF1A7460_The.jpg";
import cemacDiligence1 from "@/assets/Diligence1.jpg";
import cemacDiligence2 from "@/assets/Diligence2.jpg";
import diligenceBusinessImg from "@/assets/Diligence main.jpg";

export const SERVICE_KEYS = [
  "audit",
  "agro",
  "risk",
  "performance",
  "heritage",
  "humanCapital",
  "diligenceBusiness",
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const SERVICE_IMAGES: Record<ServiceKey, string> = {
  audit: auditImg,
  agro: agroImg,
  risk: riskImg,
  performance: performanceImg,
  heritage: heritageImg,
  humanCapital: humanImg,
  diligenceBusiness: diligenceBusinessImg,
};

export const SERVICE_GALLERY: Record<ServiceKey, string[]> = {
  audit: [auditImg, cemacAudit1, cemacAudit2],
  agro: [agroImg, cemacAgro1, cemacAgro2],
  risk: [riskImg, cemacRisk1, cemacRisk2],
  performance: [performanceImg, cemacPerf1, cemacPerf2],
  heritage: [heritageImg, cemacHeritage1, cemacHeritage2],
  humanCapital: [humanImg, cemacHuman1, cemacHuman2],
  diligenceBusiness: [diligenceBusinessImg, cemacDiligence1, cemacDiligence2],
};

export const INDUSTRY_KEYS = [
  "banking",
  "insurance",
  "microfinance",
  "assetManagement",
  "managementCompanies",
  "agroIndustry",
  // "diligenceBusiness",
] as const;

export type IndustryKey = (typeof INDUSTRY_KEYS)[number];
