// /** @jsx jsx */
// import { jsx } from 'theme-ui';
// import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

// import Header from '../header';
// import Footer from '../Main/Footer';
// import './global.css';

// interface LayoutProps {
//   children?: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);

//   return (
//     <React.Fragment>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <main>{children}</main>
//       <Footer />
//     </React.Fragment>
//   );
// };

// export default Layout;
