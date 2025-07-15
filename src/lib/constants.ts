export const defaultLeftVal = -50;

export const fadeInRightAnimation = {
  initial: { opacity: 0, x: defaultLeftVal },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

export const fadeInLeftAnimation = {
  initial: { opacity: 0, x: -(defaultLeftVal * 3) },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3}
};


export const fadeInUpAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeInDownAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
