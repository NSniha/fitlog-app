<div>

# FitLog — Workout Library

**Train with purpose. Track every workout.**

FitLog is a modern, responsive workout planning web app built with **Next.js**. Browse workouts, view detailed exercise info, build a daily plan, save favorites, track live stats, and manage your training — all through a clean, fast, and fully responsive interface.

<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,react,js,tailwind,vercel&theme=dark" />
  </a>
</p>

</div>

---

## About

FitLog is a full-featured **workout tracker and exercise library** built as a practical, real-world implementation of **Next.js App Router**. It pulls live workout data from a REST API and lets users build a daily training plan, save exercises for later, and monitor progress through live statistics — all backed by persistent local storage, so nothing is lost on refresh.

This project was built for **educational and academic purposes**, demonstrating modern frontend architecture, state management, dynamic routing, and responsive UI design.

---

## Preview
<img width="1280" height="800" alt="preview (1)" src="https://github.com/user-attachments/assets/3965add8-b7fa-4a07-86fe-cc0d76aa2be1" />

---

## Features

- Browse workouts from a live REST API
- View detailed, dynamic workout pages
- Add workouts to Today's Plan
- Save workouts for later
- Live Plan and Saved counters
- Persistent data using `localStorage`
- Live Exercises, Minutes, and Calories statistics
- Sort workouts by Duration, Calories, or Rating
- Mark planned workouts as completed
- Remove workouts from Plan or Saved
- Duplicate workout prevention
- Custom toast notifications
- Custom loading UI
- Custom 404 page
- Fully responsive navbar with mobile menu
- Fully responsive across desktop, tablet, and mobile

---

## Tech Stack

| Technology | Purpose |
|---|---|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white) | React framework with App Router for routing & rendering |
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | UI library for building components |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Core programming language (ES6) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first CSS styling |
| ![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white) | Tailwind component library |
| ![Lucide](https://img.shields.io/badge/Lucide-1A1A1A?style=flat-square&logo=lucide&logoColor=white) | Icon set |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | Hosting & deployment |

**Also uses:** React Context API · Browser `localStorage` · REST API integration

---

## Main Routes

| Route | Description |
|---|---|
| `/` | Home and Workout Library |
| `/workout/[id]` | Dynamic Workout Details |
| `/my-plan` | Today's Plan and Saved Workouts |
| Invalid Route | Custom 404 Page |

---

## API

**All Workouts**
```
https://api.abcz.workers.dev/api/fitlog
```

**Single Workout**
```
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## Project Structure

```
fitlog/
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
│
├── src/
│   ├── app/
│   │   ├── workout/[id]/page.js
│   │   ├── my-plan/page.js
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── loading.js
│   │   ├── not-found.js
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── workout/
│   │   ├── plan/
│   │   └── shared/
│   │
│   ├── context/
│   │   └── FitLogContext.jsx
│   │
│   └── utils/
│       └── api.js
│
├── next.config.mjs
├── package.json
└── README.md
```

---

## State Management

FitLog uses **React Context API** to manage shared application state, including:

- Today's Plan
- Saved Workouts
- Plan Counter
- Saved Counter
- Active Plan/Saved Tab
- Workout Completion State

Plan and Saved data are stored in browser `localStorage` so they persist after page reload.

---

## Workout Details

Each workout has a dynamic details page containing:

- Workout image, name & description
- Muscle groups & equipment
- Difficulty, sets & reps
- Duration, calories & rating
- Step-by-step instructions
- Add to Today's Plan / Save for Later

---

## My Plan

The My Plan page has two interactive tabs — **Today's Plan** and **Saved** — where users can:

- View planned or saved workouts
- Check live workout statistics
- Sort workouts
- Mark planned workouts as done
- Remove workouts

Accessible at a clean, persistent `/my-plan` URL.

---

## Sorting

Workouts can be sorted by:

- Duration *(default)*
- Calories
- Rating

---

## Responsive Design

Optimized for Desktop, Laptop, Tablet, and Mobile — including a mobile navigation menu, responsive workout cards, compact statistics, mobile-friendly workout details, and adaptive layouts.

---

## Fonts & Design

| Element | Value |
|---|---|
| Headings | **Oswald** |
| Body / UI | **Inter** |

**Color Palette**

| Role | Hex |
|---|---|
| Background | `#0b0d10` |
| Surface | `#15181e` |
| Border | `#292e37` |
| Accent | `#c8ff00` |
| Primary Text | `#f5f6f7` |
| Muted Text | `#8f949e` |

Layout uses a shared max container width of `1400px`.

---

## Getting Started

Clone the repository:
```bash
git clone https://github.com/NSniha/fitlog-app.git
```

Go to the project folder:
```bash
cd fitlog-app
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open in your browser:
```
http://localhost:3000
```

### Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

> Run `npm run build` before deployment to catch build-time errors.

---

## Deployment

Deployed on **Vercel**. After deploying, test these routes directly and after a browser refresh:

```
/
/my-plan
/workout/1
/random-route
```

---

## Key Learning Outcomes

- Next.js App Router & Dynamic Routing
- REST API Integration
- React Context API & State Management
- Persistent storage with `localStorage`
- Conditional Rendering & Sorting Logic
- Reusable, modular components
- Responsive design with Tailwind CSS
- Loading & error handling
- Deployment on Vercel

---

## Project Status

**Completed** — Core functionality includes the workout library, workout details, today's plan, saved workouts, live counters, sorting, mark-as-done, persistent data, responsive design, custom loading, and custom 404 page.

---

## Purpose

This project was developed for **educational and academic purposes** as a practical implementation of modern frontend development using Next.js and React.

---

<div align="center">

**FitLog — Train with purpose. Track every workout.**

</div>
