// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი

function numbers(...args) {
  if (args.length <= 2) {
    return "arguments must be greater than 2";
  }

  let firstEl = args[0] + args[1];
  let secondEl = 1;
  for (i = 2; i < args.length; i++) {
    secondEl *= args[i];
  }
  return [firstEl, secondEl];
}

console.log(numbers(1, 2, 3, 4, 5));

// დავუშვათ გვინდა ობიექტიდან
// წავიკითხოთ შემდეგი ველი:
// user.banks[2].address.city. დაწერე ფუნქცია,
// რომელიც პარამეტრად მიიღებს user
// ობიექტს და დააბრუნებს city-ს. გამოიყენე
// destructuring-ი. თუ ასეთი ველი არ
// არსებობს უნდა დაბრუნდეს undefined

let user = {
  banks: [
    undefined,
    undefined,
    {
      address: {
        city: "tbilisi",
      },
    },
  ],
};

function bankAddress({ address: { city } } = { address: {} }) {
  return "address is" + " " + city;
}

console.log(bankAddress(user.banks[1]));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს.
// გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას.
// გამოიყენეთ (...) ოპერატორი

const obj = {
  name: "Jack Nicholson",
  age: 86,
  address: {
    city: "New Jersey",
    country: "USA",
  },
  hobbies: ["basketball", "baseball"],
  friends: [
    {
      name: "Morgan Freeman",
      age: 86,
    },
    {
      name: "Danny DeVito",
      age: 78,
    },
  ],
};

const obj2 = {
  ...obj,
  address: {
    ...obj.address,
  },
  hobbies: [...obj.hobbies],
  friends: [...obj.friends],
};
console.log(obj2);
