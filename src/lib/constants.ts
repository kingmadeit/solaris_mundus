
export const DEFAULT_LEFT_VAL = -50;
export const LAYOUT_PT_SM = 20;
export const LAYOUT_PT_MD = 46;
export const SPACING = 0.25;
export const PAGE_CONTENT_PT = `pt-${LAYOUT_PT_SM} md:pt-${LAYOUT_PT_MD}`;
export const FIXED_ASIDE = `mt-10 mb-8 md:mt-0 md:mb-0 w-full h-64 md:h-screen relative overflow-hidden`;


export const fadeInRightAnimation = {
  initial: { opacity: 1, x: DEFAULT_LEFT_VAL },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5}
};

export const fadeInLeftAnimation = {
  initial: { opacity: 1, x: -(DEFAULT_LEFT_VAL * 3) },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3}
};


export const fadeInUpAnimation = {
  initial: { opacity: 1, y: -(DEFAULT_LEFT_VAL * 3) },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeInDownAnimation = {
  initial: { opacity: 1, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
