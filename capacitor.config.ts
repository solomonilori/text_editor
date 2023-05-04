import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'text-editor',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
