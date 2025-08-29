const express = require("express");
const app = express();
app.use(express.json());

const FULL_NAME = "john_doe";

const DOB_DDMMYYYY = "01011999";
// official email
const EMAIL = "john.doe2025@vitstudent.ac.in";
// university roll number
const ROLL_NUMBER = "21BCE0000";

function isAllDigits(s) {
  return /^\d+$/.test(s);
}
function isAllLetters(s) {
  return /^[A-Za-z]+$/.test(s);
}

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body?.data;
    if (!Array.isArray(data)) {
      return res
        .status(400)
        .json({
          is_success: false,
          message: 'Provide JSON body with key "data": []',
        });
    }

    const even = [];
    const odd = [];
    const alphabets = [];
    const special_characters = [];
    const letters = [];
    let sumBig = 0n;

    for (const item of data) {
      const s = String(item);

      if (isAllDigits(s)) {
        const n = BigInt(s);
        if (n % 2n === 0n) even.push(s);
        else odd.push(s);
        sumBig += n;
      } else if (isAllLetters(s)) {
        alphabets.push(s.toUpperCase());
        for (const ch of s) letters.push(ch);
      } else {
        special_characters.push(s);
      }
    }

    const concat_string = letters
      .reverse()
      .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB_DDMMYYYY}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      even,
      odd,
      alphabets,
      special_characters,
      sum: String(sumBig),
      concat_string,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ is_success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
