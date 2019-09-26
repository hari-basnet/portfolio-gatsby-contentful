import React from 'react';
import defaultImg from '../../assets/images/hero.jpg'
import './styles.css'

const SubPageHeader = ({ img, children }) => {
    const backgroundStyle1 = {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img}) center/cover fixed no-repeat`
    }
    return (
        <header className="sub-page-header" style={backgroundStyle1}>
            {children}
        </header>
    );
};

SubPageHeader.defaultProps = {
    img: defaultImg,
}

export default SubPageHeader

