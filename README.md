# BFHL API

This is the **BFHL API** built with **Node.js + Express** for the VIT Full Stack assignment.

The API exposes a single endpoint:


It processes an input array and returns:
- Even numbers (as strings)
- Odd numbers (as strings)
- Alphabets (in UPPERCASE)
- Special characters
- The sum of all numbers (as a string)
- A `concat_string` built from all letters, reversed with alternating caps  
- User details (`user_id`, `email`, `roll_number`)

---

Your service is live at:
https://bfhl-691p.onrender.com/bfhl

---

### 1. Clone the repo
```bash
git clone https://github.com/LavanyaVajpayee/bfhl.git
cd bfhl
npm install
npm start
Server will run on http://localhost:3000

Request
{
"data": [“a”,”1”,”334”,”4”,”R”, “$”]
}
Response
{
"is_success": true,
"user_id": "john_doe_17091999",
“email” : “john@xyz.com”,
“roll_number”:”ABCD123”,
"odd_numbers": [“1”],
"even_numbers": [“334”,”4”],
"alphabets": [“A”,”R”],
“special_characters”: [“$”],
"sum": "339" // return sum as a string
"concat_string": "Ra"
}
Request
{
"data": [“2”,"a", "y", ”4”, ”&”, “-”, “*”, ”5”,”92”,”b”]
}
Response
{
"is_success": true,
"user_id": "john_doe_17091999",
“email” : “john@xyz.com”,
“roll_number”:”ABCD123”,
"odd_numbers": [”5”],
"even_numbers": [“2”,”4”,”92”],

"alphabets": [“A”, "Y", “B”],
“sepcial_characters”: [“&”, “-”, “*”],
"sum": "103",
"concat_string": "ByA"
}
Request
{
"data": ["A",”ABcD”,”DOE”]
}
Response
{
"is_success": true,
"user_id": "john_doe_17091999",
“email” : “john@xyz.com”,
“roll_number”:”ABCD123”,
"odd_numbers": [],
"even_numbers": [],
"alphabets": ["A",”ABCD”,”DOE”],
“special_characters”: [],
"sum": "0",
"concat_string": "EoDdCbAa"
}
  -d '{"data":["a","1","4","Z","*"]}'
