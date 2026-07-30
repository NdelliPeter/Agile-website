import auditImg from "@/assets/service-audit.jpg";
import agroImg from "@/assets/service-agro.jpg";
import riskImg from "@/assets/service-risk.jpg";
import performanceImg from "@/assets/service-performance.jpg";
import heritageImg from "@/assets/service-heritage.jpg";
import humanImg from "@/assets/service-human.jpg";
import cemacAudit1 from "@/assets/cemac-audit-1.jpg";
import cemacAudit2 from "@/assets/cemac-audit-2.jpg";
import cemacAgro1 from "@/assets/cemac-agro-1.jpg";
import cemacAgro2 from "@/assets/cemac-agro-2.jpg";
import cemacRisk1 from "@/assets/cemac-risk-1.jpg";
import cemacRisk2 from "@/assets/cemac-risk-2.jpg";
import cemacPerf1 from "@/assets/cemac-performance-1.jpg";
import cemacPerf2 from "@/assets/cemac-performance-2.jpg";
import cemacHeritage1 from "@/assets/cemac-heritage-1.jpg";
import cemacHeritage2 from "@/assets/cemac-heritage-2.jpg";
import cemacHuman1 from "@/assets/cemac-human-1.jpg";
import cemacHuman2 from "@/assets/cemac-human-2.jpg";
import diligenceBusinessImg from "@/assets/office-meeting-discussion-stockcake.jpg";

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
  diligenceBusiness: [diligenceBusinessImg],
};

export const INDUSTRY_KEYS = [
  "banking",
  "insurance",
  "microfinance",
  "assetManagement",
  "managementCompanies",
  "agroIndustry",
  "diligenceBusiness",
] as const;

export type IndustryKey = (typeof INDUSTRY_KEYS)[number];
