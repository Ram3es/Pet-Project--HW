import { Favourite } from "../containers/Dishes/components/Favourite/index";
import { RandomDish } from "../containers/Dishes/components/RandomDish/index";
import { PostAddSharp, FavoriteBorderOutlined } from "@material-ui/icons";

export const publicRoutes = [
  {
    path: "/dishes",
    element: <RandomDish />,
    children: [],
    icon: <PostAddSharp fontSize="large" />,
    label: "New Dishes",
  },
  {
    path: "/favourite",
    element: <Favourite />,
    children: [],
    icon: <FavoriteBorderOutlined fontSize="large" />,
    label: "Favourite Dishes",
  },
];
