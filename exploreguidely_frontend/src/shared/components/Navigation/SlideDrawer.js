import React from 'react';

import './SlideDrawer.css';

const SlideDrawer = props => {
    return <aside className='side-drawer'>{props.children}</aside>
};

export default SlideDrawer;