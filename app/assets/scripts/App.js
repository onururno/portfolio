import "../styles/styles.css";
import "lazysizes";
import Burger from "./modules/burger";
import Preload from "./modules/preload";
Burger();
Preload();

if (module.hot) {
  module.hot.accept();
}

