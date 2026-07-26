export type HomeAssetImplementation = 'img' | 'background-image';

export type HomeAssetRole =
  | 'hero-visual'
  | 'capability-background'
  | 'closing-background';

export interface HomeAssetManifestItem {
  fileName: string;
  filePath: string;
  purpose: string;
  role: HomeAssetRole;
  implementation: HomeAssetImplementation;
  containsText: false;
  width: number;
  height: number;
  source: 'home-design-clean.png.png';
  status: 'extracted';
}

export const homeAssetManifest = [
  {
    fileName: 'home-hero-product-intelligence-system.png',
    filePath: 'src/assets/home/home-hero-product-intelligence-system.png',
    purpose: 'Home Hero right-side Product Intelligence System visual',
    role: 'hero-visual',
    implementation: 'img',
    containsText: false,
    width: 865,
    height: 430,
    source: 'home-design-clean.png.png',
    status: 'extracted',
  },
  {
    fileName: 'home-capability-panel-background.png',
    filePath: 'src/assets/home/home-capability-panel-background.png',
    purpose: 'Home Capability horizontal presentation panel background',
    role: 'capability-background',
    implementation: 'background-image',
    containsText: false,
    width: 1336,
    height: 138,
    source: 'home-design-clean.png.png',
    status: 'extracted',
  },
  {
    fileName: 'home-belief-closing-background.png',
    filePath: 'src/assets/home/home-belief-closing-background.png',
    purpose: 'Home My Belief and Footer closing background',
    role: 'closing-background',
    implementation: 'background-image',
    containsText: false,
    width: 1448,
    height: 396,
    source: 'home-design-clean.png.png',
    status: 'extracted',
  },
] as const satisfies readonly HomeAssetManifestItem[];
