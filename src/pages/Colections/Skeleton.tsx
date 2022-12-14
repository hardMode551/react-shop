import React from 'react';

import ContentLoader from 'react-content-loader';
import '../Scss/_Skeleton.scss';

const Skeleton: React.FC = (props) => (
  <ContentLoader
    style={{ width: '100%' }}
    rtl
    speed={2}
    width={250}
    height={550}
    viewBox="0 0 250 550"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="12" ry="12" width="210" height="300" />
    <rect x="32" y="328" rx="6" ry="6" width="140" height="17" />
    <rect x="62" y="405" rx="12" ry="12" width="78" height="35" />
    <rect x="40" y="463" rx="12" ry="12" width="130" height="35" />
    <rect x="50" y="363" rx="6" ry="6" width="100" height="22" />
  </ContentLoader>
);

export default Skeleton;
