'use client';

import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint (FCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        });
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const firstInputEntry = entry as PerformanceEntry & { processingStart?: number };
          if (firstInputEntry.processingStart) {
            console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        });
        console.log('CLS:', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Track Time to First Byte (TTFB)
    const trackTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        console.log('TTFB:', ttfb);
      }
    };

    // Track resource loading
    const trackResourceLoading = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            console.log(`Resource loaded: ${resourceEntry.name} in ${resourceEntry.duration}ms`);
          }
        });
      }).observe({ entryTypes: ['resource'] });
    };

    // Initialize tracking
    trackWebVitals();
    trackTTFB();
    trackResourceLoading();

    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log('Page load time:', loadTime);
    });

  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;