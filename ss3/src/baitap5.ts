let firstName: string = "john";
let lastName: string = "doe";

function capitalizeFirstLetter(str: string): string {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);

let fullName: string = firstName + " " + lastName;

console.log(fullName);