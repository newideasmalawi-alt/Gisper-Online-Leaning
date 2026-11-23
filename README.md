# GISPER Online Learning

A static, GitHub Pages-ready primary learning website with a student dashboard, hero image, study notes, quiz practice and practical task lists.

## Included
- Dashboard uses the provided photo (`assets/hero.webp`) as the hero background.
- Starter notes for English, Chichewa and Mathematics.
- Quiz practice interface with 10 quiz selections per subject and 50 questions per quiz session. Questions and answer choices are randomized; questions do not repeat within a session.
- 50 practical prompts per subject, shown in randomized order.
- Responsive layout for phones and desktop.

## Important content note
This is a starter content bank (50 MCQ entries and 50 practical activities per subject), not a complete official syllabus/grammar-book-derived bank of 500 unique MCQs per subject. No syllabus or grammar book was provided with this request. For accurate curriculum alignment and expansion, upload the school syllabus/grammar books or share the exact curriculum and grade level. The third subject is set to Mathematics because the request listed English twice; edit `app.js` if a different subject was intended.

## Run locally
Open `index.html` in a browser. No server or database is required for this demo.

## Publish with GitHub Pages
1. Create a repository, for example `gisper-online-learning`.
2. Upload the contents of this ZIP (the `index.html`, `style.css`, `app.js`, `assets` folder and README should be in the repository root).
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish and open the provided URL.

## Customize
- Edit subject names, notes, MCQs and practical prompts in `app.js`.
- Change the dashboard hero photo by replacing `assets/hero.webp` with your image (keep the same filename).
- This version is a front-end learning prototype. Scores and progress are not stored permanently, and quiz answer feedback is shown immediately. Add a database/authentication layer if you want student accounts and saved progress.