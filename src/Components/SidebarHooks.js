import React from 'react';
import logo from '../Images/logo_transparent.png';

const SidebarHooks = ({ globalSettings }) => {
  const sidebarStyle = {
    height: '100vh',
    width: globalSettings.sidebarWidth,
    position: 'fixed',
    background: globalSettings.lightOlive(0.75),
  };

  const menuItemStyle = {
    display: 'flex',
    justifyContent: globalSettings.sidebarCollapsed ? 'center' : 'flex-start',
    alignItems: 'center',
    padding: `4px ${globalSettings.sidebarCollapsed ? 0 : 20}px`,
    color: '#fff',
  };

  const iconStyle = {
    fontSize: 26,
    marginRight: globalSettings.sidebarCollapsed ? 0 : 10,
  };

  return (
    <div style={sidebarStyle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: true,
          justifyContent: 'flex-end',
          backgroundColor: globalSettings.cottonTurquoise(0.5),
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          color: '#fff',
          padding: '10px 0px',
          marginBottom: 20,
        }}
        title="Language selection"
        alt="Language selection"
      >
        {globalSettings.languageItems.map((item, i) => {
          return (
            <span
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              <span style={{ fontSize: 20 }} alt={item.text} title={item.text}>
                {item.emoji}
              </span>
              {!globalSettings.sidebarCollapsed && item.text}
            </span>
          );
        })}
      </div>
      <img
        style={{
          width: '100%',
          objectFit: 'contain',
          marginBottom: 25,
        }}
        src={logo}
        alt="Logo"
        title="Logo"
      />
      {globalSettings.navigationItems.map((item, i) => (
        <div key={i} style={menuItemStyle}>
          <span style={iconStyle}>{item.emoji}</span>
          {!globalSettings.sidebarCollapsed && item.text}
        </div>
      ))}
    </div>
  );
};

export default SidebarHooks;
