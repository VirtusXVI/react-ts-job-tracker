# Job Tracker

**Tech Stack:**  
React + TypeScript, Tailwind CSS, Firebase Auth, Firebase Firestore

---

## Project Objective

The goal was to build a simple web app to manage job applications — letting users add, track, and filter job entries through a clean interface.

---

## Project Status: Discontinued

This project was discontinued due to architectural issues that came up mid-development. Instead of trying to fix a messy structure, I decided it was better to start fresh and apply what I learned along the way.

---

## Problems Encountered

One of the main issues was how I used React Context. I set it up in a way that only passed part of the data needed to manage a shared modal component. This worked at first, but when I tried to add features like create a new Job Application, the modal logic became hard to manage and scale.

Eventually, I realized the problem wasn’t in the feature itself, but in how I structured the state and data flow.

---

## What I Learned

- A single modal component for multiple purposes can work well, but only if the state and context logic is properly designed.
- It’s important to think about component architecture and state management early, especially when dealing with shared UI elements.
- I successfully installed and configured Tailwind CSS without breaking anything, which had been a pain point in the past.