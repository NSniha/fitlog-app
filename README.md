# FitLog — Workout Library

FitLog is a modern and responsive workout planning web application built with Next.js. Users can explore workouts, view detailed exercise information, create a workout plan, save workouts for later, track workout statistics, sort exercises, and manage their training through a clean and interactive interface.

## Live Website

https://fitlog-app-sigma.vercel.app

## Features

- Browse workouts from a REST API
- View dynamic workout details
- Add workouts to Today's Plan
- Save workouts for later
- Live Plan and Saved counters
- Persistent data using localStorage
- Live Exercises, Minutes, and Calories statistics
- Sort workouts by Duration, Calories, and Rating
- Mark planned workouts as completed
- Remove workouts from Plan or Saved
- Duplicate workout prevention
- Custom toast notifications
- Custom loading UI
- Custom 404 page
- Responsive Navbar with mobile menu
- Fully responsive desktop, tablet, and mobile design

## Technologies

- Next.js
- React
- JavaScript ES6
- Next.js App Router
- Tailwind CSS
- DaisyUI
- Lucide React
- React Context API
- localStorage
- REST API
- Vercel

## Main Routes

| Route | Description |
| --- | --- |
| `/` | Home and Workout Library |
| `/workout/[id]` | Dynamic Workout Details |
| `/my-plan` | Today's Plan and Saved Workouts |
| Invalid Route | Custom 404 Page |

## API

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

## Project Structure

```text
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

## State Management

FitLog uses React Context API to manage shared application state.

The application manages:

- Today's Plan
- Saved Workouts
- Plan Counter
- Saved Counter
- Active Plan/Saved Tab
- Workout Completion State

Plan and Saved data are stored in browser localStorage so they remain available after page reload.

## Workout Details

Each workout has a dynamic details page containing:

- Workout image
- Name and description
- Muscle groups
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Instructions
- Add to Today's Plan
- Save for Later

## My Plan

The My Plan page contains two interactive tabs:

```text
Today's Plan
Saved
```

Users can:

- View planned or saved workouts
- Check live workout statistics
- Sort workouts
- View workout details
- Mark planned workouts as done
- Remove workouts

The page URL remains clean:

```text
/my-plan
```

## Sorting

Workouts can be sorted by:

- Duration
- Calories
- Rating

The default sorting option is Duration.

## Responsive Design

FitLog is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive features include a mobile navigation menu, responsive workout cards, compact workout statistics, mobile-friendly workout details, inline action controls, and adaptive layouts.

## Fonts and Design

The project uses:

- **Oswald** for headings
- **Inter** for body text and interface elements

Main design colors:

```text
Background:   #0b0d10
Surface:      #15181e
Border:       #292e37
Accent:       #c8ff00
Primary Text: #f5f6f7
Muted Text:   #8f949e
```

The layout uses a shared maximum container width of `1400px`.

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project folder:

```bash
cd fitlog
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Commands

```bash
npm run dev
npm run build
npm start
npm run lint
```

Before deployment, it is recommended to run:

```bash
npm run build
```

## Deployment

The application is deployed on Vercel.

After deployment, the following routes should be tested directly and after browser refresh:

```text
/
/my-plan
/workout/1
/random-route
```

## Key Learning Outcomes

This project demonstrates:

- Next.js App Router
- Dynamic Routing
- REST API Integration
- React Context API
- localStorage
- State Management
- Conditional Rendering
- Sorting
- Reusable Components
- Responsive Design
- Tailwind CSS
- Loading and Error Handling
- Vercel Deployment

## Project Status

**Completed**

Core functionality includes:

- Workout Library
- Workout Details
- Today's Plan
- Saved Workouts
- Live Counters
- Workout Metrics
- Sorting
- Mark as Done
- Remove Workout
- Persistent Data
- Responsive Design
- Custom Loading
- Custom 404 Page

## Purpose

This project was developed for educational and academic purposes as a practical implementation of modern frontend development using Next.js and React.

---

**FitLog — Train with purpose. Track every workout.**