import { useState, useEffect } from "react";
import { ModalForm } from "../ModalForm";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import "./index.scss";

const Favourite = () => {
  const [dishes, setDishes] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(dishes));
  }, [dishes]);

  const handleRemove = (id) => {
    const filteredList = dishes.filter((item) => item.idMeal !== id);
    setDishes(filteredList);
  };

  return (
    <>
      <div className="btn">
        <Button variant="contained" color="primary" onClick={() => setIsOpenModal(true)}>
          Add Your Best
        </Button>
      </div>
      <div className="container">
        {dishes &&
          dishes.map((value) => (
            <div key={Math.random()} className="content">
              <Card sx={{ maxWidth: 245 }}>
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
                  <Button size="small" onClick={() => handleRemove(value.idMeal)} color="secondary">
                    {" "}
                    Remove{" "}
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
      </div>
      <ModalForm showModal={setIsOpenModal} isOpenModal={isOpenModal} addDish={setDishes} />
    </>
  );
};

export default Favourite;
