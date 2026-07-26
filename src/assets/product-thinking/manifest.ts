export type ProductThinkingRenderType = 'img' | 'background-image'

export interface ProductThinkingResponsiveRule {
  desktop: string
  mobile: string
  invariant: string
}

export interface ProductThinkingAssetContract {
  fileName: string
  name: string
  purpose: string
  visualRole: string
  renderType: ProductThinkingRenderType
  containsText: false
  responsiveRule: ProductThinkingResponsiveRule
  width: number
  height: number
  source: string
}

export const productThinkingAssetContractRules = {
  pageRole: 'Executive Product Judgment Framework',
  visualLayerOwns: [
    '战略地图',
    '信息流',
    '判断路径',
    '光效',
    '空间氛围',
  ],
  reactI18nLayerOwns: [
    '所有文字',
    '所有语义',
    '所有中英文内容',
    '阶段标题',
    '阶段描述',
  ],
  decisionMapLayerRule:
    'Hero 必须表现战略判断空间，不得呈现为系统后台或 Dashboard。',
  prohibitedJourneyVisualLanguage: [
    '成长路径',
    '时间轴',
    '阶段演进',
    '中心球体模型',
    '四象限能力模型',
    '节点成长网络',
  ],
  typographyRule: {
    stylesheet: 'international-typography.css',
    zh: '使用设计稿字号。',
    en: 'Hero 标题相对中文缩小 20%-30%，正文允许增加行高，禁止英文单词逐行断裂。',
  },
} as const

export const productThinkingAssets = [
  {
    fileName: 'product-thinking-hero-decision-landscape.png',
    name: 'Hero Strategic Decision Landscape',
    purpose: '用于 Product Thinking Hero 右侧主视觉。',
    visualRole:
      '表达复杂环境中的信息输入与判断形成；包含信息汇聚、市场信号、用户洞察、商业目标、技术约束与产品策略方向的非文字视觉。',
    renderType: 'img',
    containsText: false,
    responsiveRule: {
      desktop: '保持完整战略地图视觉，并与左侧文字形成独立布局区域。',
      mobile: '文字可重新排列，视觉作为独立图片展示，不得整体缩放整页设计。',
      invariant: '保持宽高比，不裁切、不拉伸，不包含标签、标题、时间或节点名称。',
    },
    width: 966,
    height: 520,
    source: 'product-thinking-design-clean.png.png',
  },
  {
    fileName: 'product-thinking-judgment-process.png',
    name: 'Continuous Judgment Process Visual',
    purpose: '用于 Product Judgment Process 区域的连续判断过程背景。',
    visualRole:
      '以连续的金色信息流、判断路径和空间关系表现 Observe、Understand、Decide、Build 之间的完整判断过程。',
    renderType: 'background-image',
    containsText: false,
    responsiveRule: {
      desktop: '作为完整连续背景展示，不拆分四个阶段；React 文字独立叠加。',
      mobile: '保持过程背景的连续性，阶段文字独立排列，不强制缩放整页视觉。',
      invariant: '禁止拆分 Observe、Understand、Decide、Build；图片不得承担阶段语义。',
    },
    width: 1131,
    height: 376,
    source: 'product-thinking-design-clean.png.png',
  },
  {
    fileName: 'product-thinking-principles-background.png',
    name: 'Principles Closing Background',
    purpose: '用于页面底部 Product Principles 收束区域背景。',
    visualRole:
      '提供黑金空间、金色地平线、中央光源与长期主义氛围，不承载理念文字。',
    renderType: 'background-image',
    containsText: false,
    responsiveRule: {
      desktop: '背景完整铺设于 Closing 区域，理念文字由 React 居中渲染。',
      mobile: '背景保持独立铺设，允许文字自然重排，不使用整页截图缩放。',
      invariant: '保持地平线、光源与空间氛围，不包含标题、理念或 Footer 文字。',
    },
    width: 1131,
    height: 273,
    source: 'product-thinking-design-clean.png.png',
  },
] as const satisfies readonly ProductThinkingAssetContract[]

export default productThinkingAssets
