import React from 'react';
import MenuItem from './MenuItem.jsx'

const MenuSection = (props) => {
  return (
    <div>
      <h4>
        {props.section}
      </h4>
      {props.items.map(item => 
        <MenuItem 
          key={item.item_name} 
          details={item}
        />
      )}
      <br></br>
    </div>
  )
}

export default MenuSection;