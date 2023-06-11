import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.techfiddle.handsketch',
  appName: 'HandSketch',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
