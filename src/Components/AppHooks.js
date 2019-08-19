import React, { useState, useEffect } from 'react';
import HomeHooks from './HomeHooks';
import SidebarHooks from './SidebarHooks';
import FooterHooks from './FooterHooks';

const AppHooks = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.maxHeight = '100vh';
    const updateWindowWidth = () => {
      let windowWidth = typeof window !== undefined ? window.innerWidth : 0;

      setWindowWidth(windowWidth);
    };

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);
  const sidebarCollapsed = windowWidth < 1100;
  const globalSettings = {
    darkBlue: (opacity = 1) => `rgba(56, 99, 121, ${opacity})`,
    darkBrown: (opacity = 1) => `rgba(56, 99, 121, ${opacity})`,
    tangerine: (opacity = 1) => `rgba(212, 133, 59, ${opacity})`,
    orange: (opacity = 1) => `rgba(242, 108, 42, ${opacity})`,
    lightOlive: (opacity = 1) => `rgba(64, 128, 119, ${opacity})`,
    cottonTurquoise: (opacity = 1) => `rgba(53, 110, 98, ${opacity})`,
    footerHeight: 50,
    showFooterMenuText: windowWidth > 500,
    showSidebar: windowWidth > 768,
    sidebarCollapsed,
    sidebarWidth: sidebarCollapsed ? 50 : 150,
    navigationItems: [
      { emoji: '🌊', text: 'Home' },
      { emoji: '❔', text: 'About' },
      { emoji: '📣', text: 'Feedback' },
    ],
    languageItems: [{ emoji: '🇬🇧', text: 'EN' }, { emoji: '🇩🇪', text: 'DE' }],
  };
  return (
    <>
      {globalSettings.showSidebar ? (
        <SidebarHooks globalSettings={globalSettings} />
      ) : (
        <FooterHooks globalSettings={globalSettings} />
      )}
    </>
  );
};

// ♻️🧠🇭🇷💚📢👂🧜🤳
export default AppHooks;
