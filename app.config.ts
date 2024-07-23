import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  owner: 'sivashik98',
  name: 'Sivashov Shop',
  slug: 'sivashov-shop',
  scheme: 'sivashov-shop',
  githubUrl: 'https://github.com/sivashik98/SIVASHOV-SHOP',
  description: 'A short description of my app is and it is great.',
  privacy: 'public',
  version: '1.0.0',
  backgroundColor: '#9C73F8',
  primaryColor: '#9C73F8',
  orientation: 'portrait',
  jsEngine: 'hermes',
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  userInterfaceStyle: 'automatic',
  platforms: ['ios', 'android'],
  splash: {
    image: './assets/splash-light.png',
    resizeMode: 'cover',
    backgroundColor: '#9C73F8',
  },
  ios: {
    bundleIdentifier: 'com.sivashik98.sivashov.shop',
    associatedDomains: ['applinks:sivashov.shop'],
    buildNumber: '1.0.0',
    supportsTablet: true,
    bitcode: false,
    infoPlist: {
      LSApplicationQueriesSchemes: ['tel', 'tg'],
      // NSCameraUsageDescription: "This app uses the camera to scan barcodes on event tickets."
    },
    config: {
      usesNonExemptEncryption: false,
    },
    splash: {
      dark: {
        image: './assets/splash-dark.png',
        resizeMode: 'cover',
        backgroundColor: '#6239b6',
      },
    },
    icon: './assets/ios-icon.png',
  },
  android: {
    package: 'com.sivashik98.sivashov.shop',
    // permissions: ['android.permission.ACCESS_NETWORK_STATE', 'android.permission.INTERNET', 'android.permission.SYSTEM_ALERT_WINDOW'],
    blockedPermissions: [],
    softwareKeyboardLayoutMode: 'resize',
    allowBackup: true,
    versionCode: 1.0,
    adaptiveIcon: {
      foregroundImage: './assets/android-icon.png',
      backgroundColor: '#9C73F8',
    },
    splash: {
      dark: {
        image: './assets/splash-dark.png',
        resizeMode: 'cover',
        backgroundColor: '#6239b6',
      },
    },
  },
  plugins: [
    'expo-secure-store',
    [
      'expo-build-properties',
      {
        android: {
          networkInspector: true,
          usesCleartextTraffic: true,
        },
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/HelveticaNeue/HelveticaNeue-Bold.otf',
          './assets/fonts/HelveticaNeue/HelveticaNeue-Medium.otf',
          './assets/fonts/HelveticaNeue/HelveticaNeue-Light.otf',
          './assets/fonts/Dimkin/Dimkin-Bold.ttf',
          './assets/fonts/Dimkin/Dimkin-Medium.ttf',
          './assets/fonts/Dimkin/Dimkin-Light.ttf',
        ],
      },
    ],
  ],
  extra: {
    eas: {
      projectId: '9164b956-c37a-4346-9e30-54d66455dd53',
    },
  },
  experiments: {
    // turboModules:true,
  },
};

export default config;
