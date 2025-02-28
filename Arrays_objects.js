// Array destructuring
const colors = ["red", "green", "blue"];
const [primaryColor, secondaryColor] = colors;

// Object destructuring
const user = {
  username: "johnDoe",
  email: "john@example.com",
  password: "securepassword123"
};
const { username, email } = user;

// Print all the variables
console.log("Primary Color:", primaryColor); // Output: red
console.log("Secondary Color:", secondaryColor); // Output: green
console.log("Username:", username); // Output: johnDoe
console.log("Email:", email); // Output: john@example.com
