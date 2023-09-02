import React from 'react'
import Button from '../Button'
import iconPlus from '../../assets/icons/icon-plus.svg';

interface CategoriesProps {
  className: string;
}

const Categories: React.FC<CategoriesProps> = ({className }) => {
  
  return (
    <div className={`categories ${className}`}>
      <Button label="All" styleType="filter" />
      <Button label="Horror" icon={<img src={iconPlus} alt="Plus sign" />} styleType="filter" />
      <Button label="Comedy" icon={<img src={iconPlus} alt="Plus sign" />} styleType="filter" />
      <Button label="4K" icon={<img src={iconPlus} alt="Plus sign" />} styleType="filter" />
    </div>
  )
}

export default Categories