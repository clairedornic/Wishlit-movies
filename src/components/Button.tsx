import React from 'react'

interface ButtonProps {
    label?: string;
    icon?: React.ReactNode;
    styleType?: 'primary' | 'toggle' | 'delete' | 'filter' | 'category';
}

const Button: React.FC<ButtonProps> = ({ icon, label, styleType = 'primary' }) => {

    return (
        <button
            className={`button ${styleType}`}
        >
            {icon && <span className="button__icon">{icon}</span>}
            {label && <span className="button__label">{label}</span>}
        </button>
    
  )
}

export default Button