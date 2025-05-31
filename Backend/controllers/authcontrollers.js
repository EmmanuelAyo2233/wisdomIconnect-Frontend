const bcrypt = require('bcryptjs');
const db = require('../config/db');

// Youth Registration
const registerYouth = async (req, res) => {
    try {
      const {
        name, email, password, role, bio,
        expertise, fluentIn, industry, experienceDescription,
        startDate, endDate, phone
      } = req.body;
  
      if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: 'Name, email, password, and phone are required.' });
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
      }
  
      if (password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters.' });
      }
  
      if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
        return res.status(400).json({ message: 'End date cannot be before start date.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const query = `
        INSERT INTO youth_users 
        (name, email, password, role, bio, expertise, fluentIn, industry, experienceDescription, startDate, endDate, phone) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
      const values = [
        name,
        email,
        hashedPassword,
        role || 'youth',
        bio || '',
        JSON.stringify(expertise) || '[]',
        JSON.stringify(fluentIn) || '[]',
        industry || '',
        experienceDescription || '',
        startDate || null,
        endDate || null,
        phone
      ];
  
      const [result] = await db.query(query, values);
  
      res.status(201).json({
        message: 'Youth registered successfully!',
        userId: result.insertId
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error.' });
    }
  };
  
// Youth Login
const loginYouth = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
      }
  
      const [results] = await db.query('SELECT * FROM youth_users WHERE email = ?', [email]);
      if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }
  
      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }
  
      delete user.password;
      res.status(200).json({ message: 'Login successful', user });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error.' });
    }
  };
  


// Register Elder
const registerElder = async (req, res) => {
  const {
    fullName,
    email,
    password,
    bio,
    role,
    expertise,
    discipline,
    fluentIn,
    experience,
    education
  } = req.body;

  // === BASIC VALIDATION ===
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Full name, email, and password are required.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters.' });
  }

  if (!Array.isArray(expertise) || expertise.length < 1) {
    return res.status(400).json({ message: 'Select at least one expertise field.' });
  }

  if (!Array.isArray(discipline) || discipline.length < 1) {
    return res.status(400).json({ message: 'Select at least one discipline.' });
  }

  if (!Array.isArray(fluentIn) || fluentIn.length < 1) {
    return res.status(400).json({ message: 'Select at least one language you’re fluent in.' });
  }

  // === DATE VALIDATION for EXPERIENCE & EDUCATION ===
  const isValidDateRange = (entries) => {
    if (!Array.isArray(entries)) return false;
    for (const entry of entries) {
      const { startDate, endDate, present } = entry;
      const start = new Date(startDate);
      const end = present ? new Date() : new Date(endDate);

      if (isNaN(start) || isNaN(end) || start > end) {
        return false;
      }
    }
    return true;
  };

  if (experience && !isValidDateRange(experience)) {
    return res.status(400).json({ message: 'Experience dates are invalid.' });
  }

  if (education && !isValidDateRange(education)) {
    return res.status(400).json({ message: 'Education dates are invalid.' });
  }

  try {
    // Check for existing elder
    const [existingElder] = await db.query('SELECT * FROM elder_users WHERE email = ?', [email]);
    if (existingElder.length > 0) {
      return res.status(400).json({ message: 'Elder already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into DB
    await db.query(
      `INSERT INTO elder_users 
        (full_name, email, password, bio, role, expertise, disciplines, fluent_in, experience, education) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        fullName,
        email,
        hashedPassword,
        bio || '',
        role || '',
        JSON.stringify(expertise),
        JSON.stringify(discipline),
        JSON.stringify(fluentIn),
        JSON.stringify(experience || []),
        JSON.stringify(education || [])
      ]
    );

    res.status(201).json({ message: 'Elder registered successfully' });
  } catch (error) {
    console.error('Elder registration error:', error);
    res.status(500).json({ message: 'Server error during elder registration' });
  }
};


// Elder Login
const loginElder = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [results] = await db.query('SELECT * FROM elder_users WHERE email = ?', [email]);

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const elder = results[0];

    const match = await bcrypt.compare(password, elder.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Don’t send password back
    delete elder.password;

    return res.status(200).json({
      message: 'Login successful',
      user: elder
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};
const updateYouthProfile = (req, res) => {
  console.log("Update route hit!"); // ✅ Add this
  console.log("Request Body:", req.body); // ✅ Check if body arrives
const { id, name, role, bio, experienceDescription, expertise, fluentIn, industry } = req.body;

  const sql = `
    UPDATE youth_users
    SET name = ?, role = ?, bio = ?, experienceDescription = ?, expertise = ?, fluentIn = ?, industry = ?
    WHERE id = ?
  `;

  db.query(sql, [name, role, bio, experienceDescription, expertise, fluentIn, industry, id], (err, result) => {
    if (err) {
      console.error('Error updating profile:', err);
      return res.status(500).json({ error: 'Failed to update profile' });
    }
    return res.status(200).json({ message: 'Profile updated successfully' });
  });
};

  module.exports = {
  registerYouth,
  loginYouth,
  registerElder,
  loginElder,
  updateYouthProfile, // ✅ add this
};
