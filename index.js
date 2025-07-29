const express = require("express");
const app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const input = req.body.data || [];

  let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let alphaString = "";

  input.forEach((item) => {
    if (typeof item !== "string") item = String(item);

    const trimmed = item.trim();

    if (/^\d+$/.test(trimmed)) {
      const num = parseInt(trimmed);
      sum += num;
      (num % 2 === 0 ? even_numbers : odd_numbers).push(trimmed);
    } else if (/^[a-zA-Z]+$/.test(trimmed)) {
      alphabets.push(trimmed.toUpperCase());
      alphaString += trimmed;
    } else {
      special_characters.push(trimmed);
    }
  });

  // Reverse + alternating
  const reversedChars = alphaString.split("").reverse();
  const concat_string = reversedChars
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  const response = {
    is_success: true,
    user_id: "nishtha_t_14022004",
    email: "nishtha621.be22@chitkara.edu.in",
    roll_number: "2210990621",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  };

  res.status(200).json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
