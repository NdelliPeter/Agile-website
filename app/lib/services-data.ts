// Images now live under /public/assets and are referenced by URL — Next.js
// serves them statically instead of through bundler asset imports.
const auditImg = "/assets/Audit%20Clock.jpg";
const agroImg = "/assets/IMG_7742.jpg";
const riskImg = "/assets/Albums&Aventures_AMN_9721_Venise.jpg";
const performanceImg = "/assets/IMG_7520.jpg";
const heritageImg = "/assets/C00B033B-DC9B-4B32-8AF0-FDE065F54EF6.jpg";
const humanImg = "/assets/Albums&Aventures_AF1A4657_Bresil.jpg";
const cemacAudit1 = "/assets/Coco_5.jpg";
const cemacAudit2 = "/assets/corporate-team-meeting-stockcake.jpg";
const cemacAgro1 = "/assets/Marigold_Yogam.jpeg";
const cemacAgro2 = "/assets/73caffdb-bcfc-437c-ad81-7bb5b8a32b36.jpg";
const cemacRisk1 = "/assets/positive-business-team.jpg";
const cemacRisk2 = "/assets/Alex_PCT%203.jpg";
const cemacPerf1 = "/assets/IMG_6677.jpg";
const cemacPerf2 = "/assets/images%20(1).jpg";
const cemacHeritage1 = "/assets/Albums&Aventures_AF1A9107_Maison%20champetre.jpg";
const cemacHeritage2 = "/assets/Albums&Aventures_DSCF3834_Japon1.jpg";
const cemacHuman1 = "/assets/short-hero.jpg";
const cemacHuman2 = "/assets/Albums&Aventures_AF1A7460_The.jpg";
const cemacDiligence1 = "/assets/Diligence1.jpg";
const cemacDiligence2 = "/assets/Diligence2.jpg";
const diligenceBusinessImg = "/assets/Diligence%20main.jpg";

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
] as const;

export type IndustryKey = (typeof INDUSTRY_KEYS)[number];
