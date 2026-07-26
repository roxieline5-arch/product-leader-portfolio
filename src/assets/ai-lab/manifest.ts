export type AiLabRenderType = 'img' | 'background-image'

export interface AiLabResponsiveRule {
  desktop: string
  mobile: string
  invariant: string
}

export interface AiLabAssetManifestItem {
  name: string
  purpose: string
  visualRole: string
  renderType: AiLabRenderType
  containsText: false
  responsiveRule: AiLabResponsiveRule
  fileName: string
  width: number
  height: number
  source: string
}

export const aiLabAssets = [
  {
    name: 'Hero AI Creation Intelligence Space',
    purpose: '用于 AI Lab Hero 右侧人机协同创造主视觉。',
    visualRole:
      '表达人类意图、AI 增强、产品创造与真实影响之间的连续创造关系。',
    renderType: 'img',
    containsText: false,
    responsiveRule: {
      desktop: '作为 Hero 独立视觉区域完整展示，React 标签单独定位。',
      mobile: '移动至文字内容下方并保持完整比例，不缩放整页设计。',
      invariant: '保持宽高比，不裁切、不拉伸，不包含标题、标签或描述。',
    },
    fileName: 'ai-lab-hero-creation-intelligence.png',
    width: 928,
    height: 467,
    source: 'ai-lab-design-clean.png.png',
  },
  {
    name: 'AI Product Creation Loop',
    purpose: '用于 AI Product Creation Framework 的连续创造循环背景。',
    visualRole:
      '以完整无限循环表达 Explore、Create、Build、Evolve 之间的连续创造过程。',
    renderType: 'background-image',
    containsText: false,
    responsiveRule: {
      desktop: '保持完整横向循环，四个阶段文字由 React 独立覆盖。',
      mobile: '背景保持完整，阶段文字重新排列，不拆分或裁切循环。',
      invariant: '禁止拆分四阶段；图片不得承担编号、阶段名称或说明语义。',
    },
    fileName: 'ai-lab-creation-loop.png',
    width: 1146,
    height: 300,
    source: 'ai-lab-design-clean.png.png',
  },
  {
    name: 'AI Workflow System Experiment',
    purpose: '用于 AI Experiments Archive 的 AI Workflow System 实验视觉。',
    visualRole: '展示档案视觉、AI 工作流路径、节点系统和连接光效。',
    renderType: 'img',
    containsText: false,
    responsiveRule: {
      desktop: '作为第一个实验独立展示，文字层叠加于预留档案区域。',
      mobile: '与其他实验纵向排列，图片独立缩放并保持比例。',
      invariant: '不包含实验编号、名称或描述。',
    },
    fileName: 'ai-lab-experiment-workflow-system.png',
    width: 362,
    height: 216,
    source: 'ai-lab-design-clean.png.png',
  },
  {
    name: 'AI Creation Engine Experiment',
    purpose: '用于 AI Experiments Archive 的 AI Creation Engine 实验视觉。',
    visualRole: '展示创造引擎、信息扩散节点和金色空间结构。',
    renderType: 'img',
    containsText: false,
    responsiveRule: {
      desktop: '作为第二个实验独立展示，文字层叠加于预留档案区域。',
      mobile: '与其他实验纵向排列，图片独立缩放并保持比例。',
      invariant: '不包含实验编号、名称或描述。',
    },
    fileName: 'ai-lab-experiment-creation-engine.png',
    width: 364,
    height: 216,
    source: 'ai-lab-design-clean.png.png',
  },
  {
    name: 'AI Product Studio Experiment',
    purpose: '用于 AI Experiments Archive 的 AI Product Studio 实验视觉。',
    visualRole: '展示产品创造空间、抽象工作界面和中心产品光源。',
    renderType: 'img',
    containsText: false,
    responsiveRule: {
      desktop: '作为第三个实验独立展示，文字层叠加于预留档案区域。',
      mobile: '与其他实验纵向排列，图片独立缩放并保持比例。',
      invariant: '不包含实验编号、名称或描述。',
    },
    fileName: 'ai-lab-experiment-product-studio.png',
    width: 372,
    height: 216,
    source: 'ai-lab-design-clean.png.png',
  },
  {
    name: 'AI Product Philosophy Background',
    purpose: '用于 AI Product Philosophy 页面收束区域背景。',
    visualRole: '提供黑金渐变、金色地平线、中央光源和长期创造氛围。',
    renderType: 'background-image',
    containsText: false,
    responsiveRule: {
      desktop: '完整铺设于 Philosophy 区域，理念文字由 React 居中渲染。',
      mobile: '背景保持独立，文字自然重排，不缩放整页设计。',
      invariant: '保持原始地平线与光效，不包含理念或 Footer 文字。',
    },
    fileName: 'ai-lab-philosophy-background.png',
    width: 1146,
    height: 234,
    source: 'ai-lab-design-clean.png.png',
  },
] as const satisfies readonly AiLabAssetManifestItem[]

export default aiLabAssets
