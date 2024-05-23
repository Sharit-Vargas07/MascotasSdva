import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Iconos = ({ icon, className, style }) => (
 <FontAwesomeIcon icon={icon} className={className} style={{style}} />
);

export default Iconos;