import React from 'react'
import Button from '../Button'
import iconGrid from '../../assets/icons/icon-grid.svg';
import iconList from '../../assets/icons/icon-list.svg';

interface ViewProps {
  className: string
}

const ViewChoice: React.FC<ViewProps> = ({className}) => {
  return (
    <div className={className}>
        <Button label="" icon={<img src={iconGrid} alt="A grid" />} styleType="toggle" />
        <Button label="" icon={<img src={iconList} alt="A list" />} styleType="toggle" />
    </div>
  )
}

export default ViewChoice