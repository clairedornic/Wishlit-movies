import React from 'react'

interface ButtonProps {
    label?: string;
    icon?: React.ReactNode;
    styleType?: 'primary' | 'toggle' | 'delete' | 'filter' | 'category' | 'primary active' | 'toggle active' | 'delete active' | 'filter active' | 'category active';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, label, styleType = 'primary', onClick }) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`button ${styleType}`}
            onClick={handleClick}
        >
            {icon && <span className="button__icon">{icon}</span>}
            {label && <span className="button__label">{label}</span>}
        </button>
    
  )
}

export default Button