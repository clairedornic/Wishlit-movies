import React from 'react'
import Button from '../Button'
import iconPlus from '../../assets/icons/icon-plus.svg';

interface CategoriesProps {
  onCategoryChange: (category: string) => void;
  className: string;
}

const Categories: React.FC<CategoriesProps> = ({ onCategoryChange, className }) => {
  
  return (
    <div className={`categories ${className}`}>
      <Button onClick={() => onCategoryChange("All")} label="All" styleType="filter" />
      <Button onClick={() => onCategoryChange("Horror")} label="Horror" icon={<img src={iconPlus} alt="Plus sign" />} styleType="filter" />
      <Button onClick={() => onCategoryChange("Comedy")} label="Comedy" icon={<img src={iconPlus} alt="Plus sign" />} styleType="filter" />
      <Button onClick={() => onCategoryChange("4K")} label="4K" icon={<img src={iconPlus} alt="Plus sign" />} styleType="filter" />
    </div>
  )
}

export default Categories