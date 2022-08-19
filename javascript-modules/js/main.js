// Modules
import * as Guitars from "./guitars.js";
import User from "./user.js";

const me = new User("email@email.com", "Augusto");
console.log(me);
console.log(me.greeting());

// When the import is * "all the exports"
// I have to put in the dafault function
// export isnted of the name of the export
// I put "default"

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

// Or insted of inserting the default
// just put export function or export const