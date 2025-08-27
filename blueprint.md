
# Blueprint: Bad Habits Tracker

## Overview

This document outlines the plan for creating a "Bad Habits Tracker" application as requested by the user. The goal is to build a modern and intuitive React application that allows the user to track their progress in quitting bad habits over a period of 6 months.

## Features

*   **Habit Tracking:** Track multiple bad habits.
*   **Streak Counter:** Automatically calculate and display the current streak in days for each habit.
*   **Streak Breaking:** Allow the user to record when they break a streak.
*   **Add Habit:** A form will allow the user to add a new habit with a name, start date, and notes.
*   **Modify Habit:** A form will allow the user to edit the details of an existing habit.
*   **Delete Habit:** A button will allow the user to delete a habit.
*   **Detailed View:** Display the following for each habit:
    *   Habit Name
    *   Current Streak (Days)
    *   Habit Type
    *   Last Break Date
    *   Notes
    *   Start Date
    *   Status
    *   Target Duration
*   **Modern UI:** A visually appealing and intuitive user interface inspired by the provided reference images, incorporating modern design principles.

## Tech Stack

*   **Frontend:** React
*   **Component Library:** Material-UI (MUI)
*   **Routing:** `react-router-dom`
*   **Styling:** Emotion, CSS

## Plan

1.  **Setup:**
    *   Install necessary dependencies: `@mui/material`, `@emotion/react`, `@emotion/styled`, `react-router-dom`, and `@mui/icons-material`.

2.  **Component Structure:**
    *   `src/App.jsx`: Main application component, will include routing.
    *   `src/pages/HabitTracker.jsx`: The main page for the habit tracker.
    *   `src/components/HabitRow.jsx`: A component to display a single habit.
    *   `src/components/AddHabit.jsx`: A component to add a new habit.
    *   `src/components/EditHabit.jsx`: A component to edit an existing habit.

3.  **Styling:**
    *   Create a custom theme using `createTheme` from MUI to define the color palette and typography.
    *   Use a dark theme as inspired by the user's screenshots.
    *   Apply custom styles to components to match the desired look and feel.
    *   Add a gradient background.

4.  **State Management:**
    *   Use React hooks (`useState`, `useEffect`) to manage the state of the habits.
    *   The initial state will be an array of habit objects.

5.  **Functionality:**
    *   **Streak Calculation:** The streak will be calculated as the number of days between the `lastBreakDate` (or `startDate` if never broken) and the current date.
    *   **Break Streak:** A button will be provided for each habit to "break" the streak. Clicking this will update the `lastBreakDate` to the current date.
    *   **Add Habit:** A form will allow the user to add a new habit with a name, start date, and notes.
    *   **Update Habit:** A form will allow the user to edit the details of an existing habit.
    *   **Delete Habit:** A button will allow the user to delete a habit.

6.  **Initial Data:**
    *   Pre-populate the application with the initial list of bad habits provided by the user.

7.  **Deployment:**
    *   The application will be viewable in the Firebase Studio's web preview.
