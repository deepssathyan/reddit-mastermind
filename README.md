# Reddit Mastermind – Persona-Driven Reddit Content Planner

A lightweight scheduling + content-generation engine that creates natural, non-repetitive Reddit posting calendars using personas, heuristics, pattern-avoidance rules, and weekly planning logic.

## 🔗 Live Demo
https://reddit-mastermind-8nwjowc65.vercel.app/

---

## ⚡ Overview

Reddit Mastermind simulates human posting behavior by combining:

- Persona-specific tone and vocabulary  
- Subreddit constraints  
- Timing heuristics  
- Comment simulation  
- Repetition + spam-pattern checks  

It outputs a **weekly content calendar** with posts, comments, timing, and persona rotation.

---

## 🎯 Core Features

### Persona Engine
Generates unique behavior for each persona (tone, vocabulary, posting windows, subreddit preferences).

### Post + Comment Generation
Creates short-form Reddit posts and 1–3 simulated comments for context.

### Pattern-Avoidance Heuristics
Reduces repetition by varying:
- posting times  
- personas  
- subreddits  
- phrasing  

### Weekly Calendar Composer
Distributes posts across the week with spacing and persona rotation.

### Quality Scoring
Simple naturalness + repetition scoring to evaluate outputs.

---

## 🧠 System Architecture

Persona Builder
→ Content Generator
→ Pattern Prevention
→ Quality Scoring
→ Weekly Calendar Composer


### High-Level Logic
- **Persona Builder:** Converts description → structured persona object.  
- **Content Generator:** Generates posts + comment threads.  
- **Pattern Prevention:** Ensures timing + topic + persona variation.  
- **Quality Scoring:** Rates realism + diversity.  
- **Calendar Composer:** Creates a balanced 7-day schedule.

---

## 🛠 Engineering Approach (Short & Practical)

If evolving this system further, I would:

- Add lightweight memory (topic history, previous week)  
- Improve scheduling heuristics (density caps, timing spacing)  
- Expand comment simulation for realism  
- Add entropy-based scoring for better diversity checks  
- Keep each module isolated for fast iteration  
- Benchmark outputs weekly and refine heuristics  

Focus: small changes that improve realism without over-engineering.

---


---

## ⚙ Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript heuristics
- Vercel deployment

---

## 🧪 Local Development

```bash
npm install
npm run dev

