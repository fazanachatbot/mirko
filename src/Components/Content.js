import React from 'react';

const Content = ({ styles }) => {
  const dummyPost = {
    title: `Here's a blog post title`,
    summary:
      'Laborum nostrud laboris reprehenderit anim excepteur adipisicing amet non ex ipsum excepteur velit. Labore ex consectetur ullamco ipsum ut ullamco sunt exercitation. Pariatur Lorem cillum qui enim proident veniam fugiat tempor esse Lorem pariatur officia. Labore sit cupidatat cupidatat id cillum duis deserunt labore enim ea voluptate ut magna ullamco. Mollit quis sit enim consectetur minim enim nulla Lorem eu. Occaecat commodo fugiat irure dolore enim minim consectetur officia ut non commodo.',
  };

  const posts = Array(20).fill(dummyPost);

  const contentStyle = {
    paddingTop: styles.showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: styles.showSidebar ? styles.sidebarWidth + 20 : 20,
  };

  return (
    <div style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
