import React from 'react'

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    label?: string;
    icon?: React.ReactNode;
    styleType?: 'primary' | 'toggle' | 'delete' | 'filter' | 'tag';
}

const Button: React.FC<ButtonProps> = ({ onClick, icon, label, styleType = 'primary' }) => {

    return (
        <button
            onClick={onClick}
            className={`button ${styleType}`}
        >
            {icon && <span className="button__icon">{icon}</span>}
            {label && <span className="button__label">{label}</span>}
        </button>
    
  )
}

export default Button