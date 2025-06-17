import { StyleSheet } from 'react-native';

export const createStyle = () => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    leadIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'GeologicaMedium',
    },
    badge: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
    },
    tailIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
