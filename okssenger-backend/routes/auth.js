// routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db");

// 회원가입 요청 처리
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "회원가입 실패!" });
      }
      res.status(201).json({ message: "회원가입 성공!" });
    });
  } catch (error) {
    res.status(500).json({ message: "서버 에러!" });
  }
});

module.exports = router;
