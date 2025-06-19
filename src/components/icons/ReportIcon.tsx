import { useState, useRef, useEffect } from 'react';
import { LuTriangleAlert } from "react-icons/lu";
import styles from './ReportIcon.module.css'; 
import Tooltip from '../tootips/Tooltip';

type ReportIconProps = {
  onClick?: () => void;
  className?: string;
};

const ReportIcon: React.FC<ReportIconProps> = ({ onClick, className }) => {
  return (
    <Tooltip text="Avisar de una avería">
      <button
        onClick={onClick}
        className={`${styles.reportIcon} ${className}`}
        aria-label="Avisar de una avería"
      >
        <LuTriangleAlert />
      </button>
    </Tooltip>
  );
};

export default ReportIcon;
