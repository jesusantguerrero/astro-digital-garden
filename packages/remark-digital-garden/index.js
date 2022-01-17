import { addDoubleBrackets } from "./lib/addDoubleBrackets";

export default function remarkDigitalGarden(options = {}) {
   return (tree, _file) => {
       addDoubleBrackets(tree);
   }
};