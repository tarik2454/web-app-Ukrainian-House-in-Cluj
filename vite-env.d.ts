/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // можно добавить и другие переменные окружения, если они у вас есть
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
