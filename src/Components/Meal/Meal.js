import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Meal.css'

const Meal = ({meal}) => {
  const { strMealThumb, strMeal, strCategory, strArea, strInstructions } = meal;
  // console.log(meal);
  return (
    <div className='meal'>
      <img src={strMealThumb} alt="" />
      <div className='meal-info'>
        <h2 className='food-title'>Item Name : {strMeal} , {strArea} Food </h2>
        <p>Category : {strCategory} </p>
        <p>Cooking Process : {strInstructions.slice(0,50)}...</p>
      </div>
      <button className='order-btn'>
        <p style={{marginRight:'7px'}}>Order Now</p>
        <FontAwesomeIcon icon={faBowlFood} />
      </button>
    </div>
  );
};

export default Meal;