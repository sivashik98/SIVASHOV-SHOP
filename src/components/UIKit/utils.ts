import { Typography, Spacings, Assets, Colors, BorderRadiuses } from 'react-native-ui-lib';

// Assets.loadAssetsGroup('lottie', {
//   icon1: require('icon1.png'),
//   icon2: require('icon2.png'),
//   icon3: require('icon3.png'),
// });
// Assets.loadAssetsGroup('jpg', {
//   icon1: require('icon1.png'),
//   icon2: require('icon2.png'),
//   icon3: require('icon3.png'),
// });

export const initUiTheme = () => {
  Spacings.loadSpacings({
    page: 20,
    header: 20,
    card: 10,
    textField: 10,
    paginator: 8,
    reviewCard: 14,
  });
  BorderRadiuses.loadBorders({
    br8: 8,
    br16: 16,
    br20: 20,
    br100: 100,
  });
  Colors.loadColors({
    white: '#fff',
    grey10: '#F7F8F9',
    grey20: 'rgba(0, 21, 47, 0.03)',
    grey30: 'rgba(0, 21, 47, 0.06)',
    grey40: '#D5D6D8',
    grey50: 'rgba(24, 24, 24, 0.22)',
    grey60: '#BFC1C4',
    grey70: '#A8AFB7',
    grey80: '#7D8287',
    grey90: '#333333',
    grey100: '#181818',
    grey110: '#121212',
    yellow10: '#fff7ee',
    red10: '#fff2f2',
    red70: '#ff4b4b',
    accent: '#9C73F8FF',
    //
    link: '#7C2EFEFF',
    error: '#F71D1D',
    success: '#26CA4E',
    warning: '#FDB818',
  });

  Typography.loadTypographies({
    h1: {
      paddingTop: 1,
      top: 1,
      fontSize: 24,
      lineHeight: 24,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Bold',
    },
    h2: {
      fontSize: 20,
      lineHeight: 24,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Bold',
    },
    h3: {
      fontSize: 16,
      lineHeight: 22,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Bold',
    },
    bodyB1: {
      fontSize: 18,
      lineHeight: 25,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Bold',
    },
    bodyM1: {
      fontSize: 18,
      lineHeight: 25,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Medium',
    },
    bodyL1: {
      fontSize: 18,
      lineHeight: 25,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Light',
    },
    bodyB2: {
      fontSize: 16,
      lineHeight: 22,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Bold',
    },
    bodyM2: {
      fontSize: 16,
      lineHeight: 22,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Medium',
    },
    bodyL2: {
      fontSize: 16,
      lineHeight: 22,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Light',
    },
    bodyB3: {
      fontSize: 14,
      lineHeight: 20,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Bold',
    },
    bodyM3: {
      fontSize: 14,
      lineHeight: 20,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeueCyr-Medium',
    },
    bodyL3: {
      fontSize: 14,
      lineHeight: 20,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Light',
    },
    bodyB4: {
      fontSize: 12,
      lineHeight: 20,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Bold',
    },
    bodyM4: {
      fontSize: 12,
      lineHeight: 17,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Medium',
    },
    bodyL4: {
      fontSize: 12,
      lineHeight: 17,
      color: Colors.grey100,
      fontFamily: 'HelveticaNeue-Light',
    },
  });

  // Typography.loadTypographies({
  //   h1: {
  //     paddingTop: 1,
  //     top: 1,
  //     fontSize: 24,
  //     lineHeight: 24,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Bold',
  //   },
  //   h2: {
  //     fontSize: 20,
  //     lineHeight: 24,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Bold',
  //   },
  //   h3: {
  //     fontSize: 16,
  //     lineHeight: 22,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Bold',
  //   },
  //   bodyB1: {
  //     fontSize: 18,
  //     lineHeight: 25,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Bold',
  //   },
  //   bodyM1: {
  //     fontSize: 18,
  //     lineHeight: 25,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Medium',
  //   },
  //   bodyL1: {
  //     fontSize: 18,
  //     lineHeight: 25,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Light',
  //   },
  //   bodyB2: {
  //     fontSize: 16,
  //     lineHeight: 22,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Bold',
  //   },
  //   bodyM2: {
  //     fontSize: 16,
  //     lineHeight: 22,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Medium',
  //   },
  //   bodyL2: {
  //     fontSize: 16,
  //     lineHeight: 22,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Light',
  //   },
  //   bodyB3: {
  //     fontSize: 14,
  //     lineHeight: 20,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Bold',
  //   },
  //   bodyM3: {
  //     fontSize: 14,
  //     lineHeight: 20,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Medium',
  //   },
  //   bodyL3: {
  //     fontSize: 14,
  //     lineHeight: 20,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Light',
  //   },
  //   bodyB4: {
  //     fontSize: 12,
  //     lineHeight: 20,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Bold',
  //   },
  //   bodyM4: {
  //     fontSize: 12,
  //     lineHeight: 17,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Medium',
  //   },
  //   bodyL4: {
  //     fontSize: 12,
  //     lineHeight: 17,
  //     color: Colors.grey100,
  //     fontFamily: 'Dimkin-Light',
  //   },
  // });
};
