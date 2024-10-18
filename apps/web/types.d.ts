import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      showMessage: (message: string) => void;
    };
  }
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
