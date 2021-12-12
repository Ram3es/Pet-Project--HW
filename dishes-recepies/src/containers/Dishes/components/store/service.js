import axios from "axios";

export const fetchMeal = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
