import { Choice, Remove } from "./helpers";
import fruits from "./foods";

let RANDOMFRUIT = Choice(fruits);

console.log(`I'd like one ${RANDOMFRUIT}, please.`);
console.log(`Here you go: ${RANDOMFRUIT}.`);
console.log(`Delicious! May I have another?`);

const leftOut = Remove(fruits, RANDOMFRUIT);

console.log(`I’m sorry, we’re all out. We have ${leftOut.length} left`);
