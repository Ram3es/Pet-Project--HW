import { fetchMeal } from "../store/service";
import "./index.scss";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";

const RandomDish = () => {
  const [value, setValue] = useState("");

  const fetchRecepies = async () => {
    const { data } = await fetchMeal();
    setValue(data.meals[0]);
  };
  useEffect(() => {
    fetchRecepies();
  }, []);

  const handleClick = () => {
    fetchRecepies();
  };

  const handleAddDish = () => {
    const dishes = JSON.parse(localStorage.getItem("data")) || [];
    const updateData = dishes.concat([value]);
    localStorage.setItem("data", JSON.stringify(updateData));
  };

  return value ? (
    <div className="container">
      <div className="content">
        {" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="250" image={value.strMealThumb} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {value.strMeal}
            </Typography>
            <Typography variant="body2" color="secondary" component="div">
              <div className="instruction">{value.strInstructions}</div>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick} color="secondary">
              Skip
            </Button>
            <Button size="small" onClick={handleAddDish} color="primary">
              Add to Favourites
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  ) : null;
};

export default RandomDish;
