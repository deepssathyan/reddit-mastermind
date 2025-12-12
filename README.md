# 🚀 Reddit Mastermind – Smart Content Calendar Generator

A lightweight planning engine that creates natural, non-spammy Reddit posting calendars using personas, subreddit constraints, and timing-pattern logic. Designed for founders, marketers, and growth teams who want **human-sounding Reddit presence without triggering spam detection**.

![App Preview](assets/Preview.jpg)

---

## 🔗 Live Demo

👉 **https://reddit-mastermind-8nwjowc65.vercel.app/**

---

## 🎯 What This Tool Does

Reddit content planning is tricky, spam filters, persona inconsistency, and timing repetition all reduce trust.  
This app solves that by generating **human-like posting behavior**, not robotic campaigns.

### ✔ Intelligent Persona Rotation  
Each persona has a unique tone, style, and subreddit footprint.

### ✔ Natural Pattern Variation  
Avoids repeated timing, clustered topics, and overposting.

### ✔ Automatic Quality Validation  
Every generated post is scored for:
- natural vs manufactured tone  
- subreddit culture fit  
- repetitiveness  
- posting risk level  

### ✔ Weekly Calendar Generator  
Produces a weekly schedule (3+ posts/week) including:
- post text  
- comments  
- persona  
- subreddit  
- timing  

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| UI | React (Vite) |
| Styling | Tailwind CSS |
| Logic Engine | Custom JS planning algorithms |
| Deployment | Vercel |
| Version Control | GitHub |

---

## 📂 Project Structure

```bash
/src
  App.jsx
  App.css
  /components
    RedditMastermind.jsx
  /utils
    personaUtils.js
    contentGenerator.js
    calendarGenerator.js
    qualityAssessment.js
    exportUtils.js

index.html
tailwind.config.js
vite.config.js
postcss.config.js
