// const User = require('../models/userModel');
import User from "../models/userModel.js";
import argon2 from "argon2";
// const argon2 = require('argon2');

// Fungsi untuk inisialisasi data
// Fungsi untuk inisialisasi data
async function initializeData() {
  try {
    const email = 'admin@example.com';
    const password = 'admin123';

    // Hash password menggunakan argon2
    const hashedPassword = await argon2.hash(password);

    // Tambahkan data user jika belum ada
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name: 'Administrator',
        email,
        password: hashedPassword,
        role: 'admin',
      },
    });

    if (created) {
      console.log('User admin berhasil ditambahkan');
    } else {
      console.log('User admin sudah ada');
    }
  } catch (error) {
    console.error('Gagal menginisialisasi data:', error.message);
  }
}

// Ekspor menggunakan ES Module
export default initializeData;
