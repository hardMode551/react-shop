import React from 'react';

import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import '../../components/mixins.scss';
import { selectFilterByName } from '../../Redux/Slices/filter/selectors';
import '../Scss/_Skeleton.scss';




export const Skeleton: React.FC = (props) => {
const { switchOn } = useSelector(selectFilterByName);

  return <ContentLoader
    style={{ width: '100%' }}
    rtl
    speed={2}
    width={250}
    height={550}
    viewBox="0 0 250 550"
    backgroundColor={switchOn ? "#212121" : '#f3f3f3'}
    foregroundColor={switchOn ? "#333333" : "#ecebeb"}
    {...props}>
    <rect x="0" y="0" rx="12" ry="12" width="210" height="300" />
    <rect x="32" y="328" rx="6" ry="6" width="140" height="17" />
    <rect x="62" y="405" rx="12" ry="12" width="78" height="35" />
    <rect x="40" y="463" rx="12" ry="12" width="130" height="35" />
    <rect x="50" y="363" rx="6" ry="6" width="100" height="22" />
  </ContentLoader>;
};

export default Skeleton;
