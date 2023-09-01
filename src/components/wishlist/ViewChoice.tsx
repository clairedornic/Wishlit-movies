import React from 'react'
import Button from '../Button'
import iconGrid from '../../assets/icons/icon-grid.svg';
import iconList from '../../assets/icons/icon-list.svg';

interface ViewProps {
  onViewChange: (c: string) => void;
  className: string
}

const ViewChoice: React.FC<ViewProps> = ({onViewChange, className}) => {
  return (
    <div className={className}>
        <Button onClick={() => onViewChange("grid")} label="" icon={<img src={iconGrid} alt="A grid" />} styleType="toggle" />
        <Button onClick={() => onViewChange("list")} label="" icon={<img src={iconList} alt="A list" />} styleType="toggle" />
    </div>
  )
}

export default ViewChoice