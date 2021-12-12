import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import "./index.scss";
const Favourite = () => {
  
  const [dishes, setDishes] = useState([])
 
  useEffect(()=>{
    const dishes = JSON.parse(localStorage.getItem("data")) || [];
    setDishes(dishes)
  },[])

  const handleRemove = (id) =>{
    const cutDishesesList = dishes.filter(item => item.idMeal !== id)
    localStorage.setItem("data",JSON.stringify(cutDishesesList) )
    setDishes(cutDishesesList)
    console.log(cutDishesesList)
    
  }
  

  return (
    <div className="container">
      {dishes && dishes.map((value) => (
        <div key={Math.random()} className="content">
          <Card sx={{ maxWidth: 245}}>
            <CardMedia component="img" height="250" image={value.strMealThumb} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {value.strMeal}
              </Typography>
              <Typography variant="body2" color="initial" component="div">
                <div className="instruction">{value.strInstructions}</div>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"  onClick={()=> handleRemove(value.idMeal)} color="secondary">
                {" "}
                Remove{" "}
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Favourite;
