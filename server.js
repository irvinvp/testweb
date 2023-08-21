const express = require("express");
const app = express();

//{"publicKey":"BJO9_x6_fyPShW8QylagdMpbPTJKQx2NLUfmn2zTQynQeHhjkUY2bL5F4N13BSSgE83ZXBA6pQda7GmXyeRWZpU","privateKey":"NYp9FpLmZZgjkInm3Ipifi8kq_ozPPo5ra2BWEp6FrY"}
app.post("/api/subscription", (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    console.log("subscription", body);
    res.setHeader("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify({ data: { success: true } }));
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
