export type CasesAssetImplementation = 'img' | 'background-image';

export interface CasesAssetManifestItem {
  fileName: string;
  purpose: string;
  width: number;
  height: number;
  implementation: CasesAssetImplementation;
}

export const casesAssetManifest = [
  {
    fileName: 'cases-hero-leadership-archive.png',
    purpose: 'Cases Hero 产品领导力档案主视觉',
    width: 680,
    height: 301,
    implementation: 'img',
  },
  {
    fileName: 'case01-business-digitalization.png',
    purpose: 'Case 01 传统业务数字化平台视觉',
    width: 585,
    height: 222,
    implementation: 'img',
  },
  {
    fileName: 'case02-digital-asset-ecosystem.png',
    purpose: 'Case 02 数字资产生态平台视觉',
    width: 600,
    height: 198,
    implementation: 'img',
  },
  {
    fileName: 'case03-financial-infrastructure.png',
    purpose: 'Case 03 金融基础设施视觉',
    width: 615,
    height: 215,
    implementation: 'img',
  },
  {
    fileName: 'cases-philosophy-background.png',
    purpose: '产品领导力哲学与页面底部背景',
    width: 1199,
    height: 229,
    implementation: 'background-image',
  },
] as const satisfies readonly CasesAssetManifestItem[];
