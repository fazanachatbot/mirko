import React from 'react';

const FooterHooks = ({ globalSettings }) => {
  return (
    <footer
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        width: '100%',
        height: globalSettings.footerHeight,
        backgroundColor: globalSettings.lightOlive(0.75),
        color: '#fff',
        position: 'fixed',
        bottom: 0,
      }}
    >
      {globalSettings.navigationItems.map((item, i) => {
        return (
          <div
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
            {globalSettings.showFooterMenuText && item.text}
          </div>
        );
      })}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: true,
          justifyContent: 'flex-end',
          backgroundColor: globalSettings.cottonTurquoise(0.5),
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
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
              {globalSettings.showFooterMenuText && item.text}
            </span>
          );
        })}
      </div>
    </footer>
  );
};

export default FooterHooks;
