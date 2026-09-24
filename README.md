# FitLog — Workout Library

FitLog is a modern and responsive workout planning web application built with Next.js. It allows users to browse a workout library, view detailed exercise information, build a personal workout plan, save workouts for later, track workout statistics, mark exercises as completed, and manage saved items through a clean and interactive interface.

The project focuses on a simple workout management experience with responsive design, persistent client-side data, dynamic routing, API integration, and reusable components.

---

## Live Website

**Live Site:**  
https://fitlog-app-sigma.vercel.app

---

## Project Overview

FitLog provides users with a structured workout library where they can explore exercises and organize their training sessions.

Users can:

- Browse available workouts
- View detailed workout information
- Add workouts to Today's Plan
- Save workouts for later
- Remove workouts from Plan or Saved
- Mark planned workouts as completed
- Sort workouts by Duration, Calories, or Rating
- View live exercise statistics
- Keep Plan and Saved data after page reload using localStorage

The application is fully responsive and optimized for desktop, tablet, and mobile devices.

---

## Technologies Used

- **Next.js**
- **React**
- **JavaScript ES6**
- **Next.js App Router**
- **Tailwind CSS**
- **DaisyUI**
- **Lucide React**
- **Context API**
- **localStorage**
- **REST API**
- **Next.js Image Optimization**
- **Next.js Font Optimization**
- **Vercel**

---

## Main Features

### 1. Workout Library

The Home page displays workouts fetched dynamically from the FitLog API.

Each workout card contains:

- Workout image
- Workout name
- Muscle group tags
- Equipment
- Duration
- Calories burned
- Rating

Users can select a workout card to open its detailed page.

---

### 2. Dynamic Workout Details

Every workout has its own dynamic route:

```text
/workout/[id]