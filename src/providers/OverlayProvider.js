import React, { createContext, useState, useContext } from 'react';
import { Animated } from 'react-native';
import RootAnimation from 'screens/RootAnimation';
import { animations } from 'assets';

const OverlayContext = createContext({});

export function useOverlay() {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }

  return context;
}

const checkAnimationType = animation => {
  if (!(animation in animations)) {
    throw new Error(
      `Animation value is invalid. Should be one of: ${Object.keys(
        animations,
      )}`,
    );
  }
};

const OverlayProvider = ({ children, navigation }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [animation, setAnimation] = useState('success');
  const [fadeIn] = useState(new Animated.Value(0));

  const show = animationType => {
    checkAnimationType(animationType);
    setAnimation(animationType);
    setShowOverlay(true);
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const hide = () => {
    //Default animation should be success
    setAnimation('success');
    Animated.timing(fadeIn, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setShowOverlay(false));
  };

  const toggle = (timeout = 1900, animationType = 'success') => {
    show(animationType);
    setTimeout(() => {
      hide();
    }, timeout);
  };

  return (
    <OverlayContext.Provider value={{ show, toggle, hide }}>
      {children}
      <RootAnimation
        opacity={fadeIn}
        show={showOverlay}
        animation={animation}
      />
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
