# SkillPathDev

SkillPathDev is a developer interview preparation platform designed to help developers practice **technology-wise, topic-wise, and level-wise questions** in a structured way.

The platform helps developers improve their technical knowledge, track learning progress, and compare performance with other developers through analytics and leaderboard features.

SkillPathDev aims to make interview preparation **structured, measurable, and competitive**.

---

## Live Platform

The platform is deployed and accessible at:

**Live Demo**  
https://skillpathdev.vercel.app/

---

## Features

### Structured Learning

Practice interview questions based on:

- Technology
- Topic
- Difficulty Level

This structured approach allows developers to focus on specific areas required for technical interviews.

---

### Authentication

Authentication is handled using **Clerk**, which provides secure and scalable user authentication.

---

### Logged-in User Features

After signing in, users can access additional features:

- Bookmark questions for later review
- Compete with other developers on the leaderboard
- Track analytics and learning progress
- View ranking among other developers

---

## Core Functionalities

- Technology-based question filtering  
- Topic-based question selection  
- Level-based difficulty system  
- Bookmark system for saving questions  
- Leaderboard ranking system  
- Analytics dashboard for tracking user progress  

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Material UI
- Recharts
- Lucide

### State Management

- Redux Toolkit
- React Redux
- Redux Persist

### Forms & Validation

- Formik
- Yup

### Backend / Database

- Supabase

### Deployment

- Vercel

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/mitali2003/skillpathdev.git
```

### 2. Navigate into the project directory

```bash
cd skillpathdev
```

### 3. Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

---

## Run the Project Locally

```bash
npm run dev
```

The application will run at:

```
http://localhost:3000
```

---

## Repository Access Policy

The source code for **SkillPathDev** is currently **private**.

This project is part of an actively developing platform and therefore the repository is not publicly accessible.

If you are interested in:

- Reviewing the code
- Learning about the architecture
- Collaborating
- Providing technical feedback

You may request **read-only access**.

Access will be granted after verification.

### Important Notes

- Repository access will be **view-only**
- **Merge permissions will not be granted**
- Code redistribution or reuse is **not permitted without permission**

---

## Request Repository Access or Share Ideas

If you would like to review the code or collaborate, please send an email with:

- Your Name  
- Subject: **SkillPathDev Code Access Request**  
- Purpose of access  

**Email:**  
mitaligohel09@gmail.com

If you have any ideas, suggestions, or improvements for the platform, feel free to contact using the above contact details.

---

## Upcoming Features (Currently in Development)

The following features are currently being developed and will be added in future updates:

### Level Completion Certificates

Users will be able to generate certificates after completing specific levels.

### Score Sharing

Users will be able to share their results directly on platforms such as:

- LinkedIn
- WhatsApp
- Twitter

### Challenge Friends

Users will be able to challenge their friends to solve the same question sets and compare scores.

### AI-Based Learning Analysis

AI will analyze user performance and identify weaker topics, helping users focus on areas that need improvement.

---

## License

All Rights Reserved.

The source code of this project is not permitted for copying, redistribution, or commercial use without permission from the author.
