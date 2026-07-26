export type JourneyAssetImplementation = 'img' | 'background-image';

export type JourneyAssetRole =
  | 'hero-visual'
  | 'decorative-timeline-spine'
  | 'stage-visual'
  | 'background-layer';

export type JourneyAssetStatus = 'generated';

export interface JourneyAssetManifestItem {
  fileName: string;
  filePath: string;
  purpose: string;
  role: JourneyAssetRole;
  implementation: JourneyAssetImplementation;
  containsText: false;
  width: number;
  height: number;
  status: JourneyAssetStatus;
  layoutBehavior: string;
}

export const journeyAssetManifest = [
  {
    fileName: 'journey-hero-evolution-archive.png',
    filePath: 'src/assets/journey/journey-hero-evolution-archive.png',
    purpose: 'Journey Hero 领导力进化轨迹空间视觉',
    role: 'hero-visual',
    implementation: 'img',
    containsText: false,
    width: 824,
    height: 383,
    status: 'generated',
    layoutBehavior:
      '只承载光轨、节点与空间视觉；编号、阶段名称及说明由 React + i18n 独立叠加，图片保持比例且不得裁切。',
  },
  {
    fileName: 'journey-leadership-timeline.png',
    filePath: 'src/assets/journey/journey-leadership-timeline.png',
    purpose: 'Leadership Journey 纵向装饰轨迹',
    role: 'decorative-timeline-spine',
    implementation: 'img',
    containsText: false,
    width: 105,
    height: 548,
    status: 'generated',
    layoutBehavior:
      'Decorative Timeline Spine，仅作为绝对定位装饰层；不能决定容器、阶段或页面高度，也不能因内容变长而拉伸。',
  },
  {
    fileName: 'journey-stage01-technical-foundation.png',
    filePath: 'src/assets/journey/journey-stage01-technical-foundation.png',
    purpose: 'Stage 01 技术基础能力视觉',
    role: 'stage-visual',
    implementation: 'img',
    containsText: false,
    width: 325,
    height: 167,
    status: 'generated',
    layoutBehavior:
      '独立视觉资产；Stage 高度由 React 标题、时间、描述及能力内容自然决定，图片使用 object-fit: contain。',
  },
  {
    fileName: 'journey-stage02-product-practice.png',
    filePath: 'src/assets/journey/journey-stage02-product-practice.png',
    purpose: 'Stage 02 产品实践能力视觉',
    role: 'stage-visual',
    implementation: 'img',
    containsText: false,
    width: 325,
    height: 131,
    status: 'generated',
    layoutBehavior:
      '独立视觉资产；Stage 高度由 React 标题、时间、描述及能力内容自然决定，图片使用 object-fit: contain。',
  },
  {
    fileName: 'journey-stage03-digital-innovation.png',
    filePath: 'src/assets/journey/journey-stage03-digital-innovation.png',
    purpose: 'Stage 03 数字创新能力视觉',
    role: 'stage-visual',
    implementation: 'img',
    containsText: false,
    width: 325,
    height: 129,
    status: 'generated',
    layoutBehavior:
      '独立视觉资产；Stage 高度由 React 标题、时间、描述及能力内容自然决定，图片使用 object-fit: contain。',
  },
  {
    fileName: 'journey-stage04-product-leadership.png',
    filePath: 'src/assets/journey/journey-stage04-product-leadership.png',
    purpose: 'Stage 04 产品领导力能力视觉',
    role: 'stage-visual',
    implementation: 'img',
    containsText: false,
    width: 325,
    height: 128,
    status: 'generated',
    layoutBehavior:
      '独立视觉资产；Stage 高度由 React 标题、时间、描述及能力内容自然决定，图片使用 object-fit: contain。',
  },
  {
    fileName: 'journey-philosophy-background.png',
    filePath: 'src/assets/journey/journey-philosophy-background.png',
    purpose: 'Product Leadership Philosophy 全宽背景',
    role: 'background-layer',
    implementation: 'background-image',
    containsText: false,
    width: 1329,
    height: 163,
    status: 'generated',
    layoutBehavior:
      '作为独立 background layer 定位于 section 底部；不能决定或限制 Philosophy Section 高度，文字由 React + i18n 渲染。',
  },
] as const satisfies readonly JourneyAssetManifestItem[];

export const journeyStageAssets = journeyAssetManifest.filter(
  (asset) => asset.role === 'stage-visual',
);
