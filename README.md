# GISPER Online Learning

A static, responsive learning website for primary-school learners. It runs in a browser and can be published with GitHub Pages; no paid backend is required for the basic experience.

## Features
- Dashboard, subject cards, searchable notes, quiz practice and practical activities.
- Learner-friendly starter notes for English, Chichewa and Mathematics.
- Randomized answer choices and question order, a progress indicator, optional timer, scoring, answer explanations and on-device score history.
- Responsive navigation and layouts for Android phones and desktop browsers.
- Progress is stored in the browser's local storage; it is not synchronized between devices.

## Important content scope
The repository does not include verified Malawi syllabus documents, textbooks, grammar books or past examination papers. Therefore the learning materials are original **PSLC-style practice**, not official PSLC past-paper content, and have not been independently curriculum-verified. Please have a qualified Malawi primary teacher review subject wording and alignment before classroom use.

The included starter bank currently has **50 English questions, 50 Chichewa questions and 50 basic Mathematics questions**, plus 20 starter practical activities per subject. Each generated quiz selects up to 50 questions from the selected subject's current bank, without repeating a question in that attempt. The quiz selector offers ten practice slots, but these slots do not yet represent 500 unique questions per subject. Expand and review the bank before claiming the requested 10 × 50 unique-question coverage. Chichewa notes and questions especially require review by a fluent subject teacher.

## Run locally
Open `index.html` in a modern browser. No build step or server is required.

## Publish with GitHub Pages
In repository **Settings → Pages**, select deployment from the `main` branch and the root folder. The supplied dashboard hero asset is referenced as `assets/hero.webp`; add that file to the repository if it is not already present. If the asset is absent, the page displays a green gradient fallback.

## Maintain the question bank
Edit `rawQuestions` and `practicals` in `app.js`. Each question has a prompt, one answer, three distractors, and an explanation. Review answers and Chichewa grammar with a qualified teacher, and use provided official reference material as the primary source when available. Do not label original practice questions as official past papers.
