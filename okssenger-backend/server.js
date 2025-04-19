const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("index.html"); // 경로 모듈 추가
const authRoutes = require("./routes/auth"); // 👈 추가!

app.use(cors());
app.use(bodyParser.json());

// 'public' 폴더에 있는 정적 파일을 제공
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRoutes); // 👈 추가!

// "/" 경로로 접근 시 index.html 파일을 반환
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("서버 실행 중! http://localhost:3000");
});
