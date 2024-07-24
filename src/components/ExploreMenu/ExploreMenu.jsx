import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Introducing the All Food Menu Description Generator! Simply input the type of cuisine, dish, or ingredient you want to feature, and let our generator create mouthwatering menu descriptions for you. Whether you're showcasing appetizers, entrees, desserts, or drinks, our generator will help you craft compelling and enticing descriptions to tempt your customers' taste buds. </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-nemu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="image" />
                <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
