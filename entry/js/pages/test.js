// https://webpack.js.org/guides/tree-shaking/
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import
import { getParentNode, getOffsetTop, square } from "components/test_components";

console.log("just test");
// console.log(getParentNode, getOffsetTop);

console.log(getOffsetTop(document.getElementsByTagName("h1")[0]));

console.log(square(2));

console.log(square(3));
