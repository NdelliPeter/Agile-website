import auditImg from "@/assets/service-audit.jpg";
import agroImg from "@/assets/service-agro.jpg";
import riskImg from "@/assets/service-risk.jpg";
import performanceImg from "@/assets/service-performance.jpg";
import heritageImg from "@/assets/service-heritage.jpg";
import humanImg from "@/assets/service-human.jpg";

export const SERVICE_KEYS = [
  "audit",
  "agro",
  "risk",
  "performance",
  "heritage",
  "humanCapital",
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const SERVICE_IMAGES: Record<ServiceKey, string> = {
  audit: auditImg,
  agro: agroImg,
  risk: riskImg,
  performance: performanceImg,
  heritage: heritageImg,
  humanCapital: humanImg,
};

export const INDUSTRY_KEYS = [
  "banking",
  "insurance",
  "microfinance",
  "assetManagement",
  "managementCompanies",
  "agroIndustry",
] as const;

export type IndustryKey = (typeof INDUSTRY_KEYS)[number];
