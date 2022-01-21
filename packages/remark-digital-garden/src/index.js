import { addDoubleBrackets } from "./lib/add-double-brackets.js";
import "./components.js";

export default function remarkDigitalGarden(options = {}) {
   return (tree, _file) => {
       addDoubleBrackets(tree, options);
   }
};