import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Iconos = ({ icon, className, style, onClick }) => (
 <FontAwesomeIcon icon={icon} className={className} style={{style}} onClick={onClick}/>
);

export default Iconos;