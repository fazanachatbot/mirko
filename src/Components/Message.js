import React from 'react';

export default ({ sentByUser, children }) => (
   <>
      <div className={`message message${sentByUser ? 'User' : 'Bot'}`}>
         {children}
      </div>
   </>
);
