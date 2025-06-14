## 💻 Key Features

- **SPA Architecture**: Built as a Single Page Application (SPA) using React’s core features.
- **Responsive Design**: Optimized for both mobile and desktop with MUI for UI components.
- **API Integration**: Fetches GitHub data asynchronously to display language usage percentages.
- **Real-Time Notifications**: Contact form sends real-time notifications via email (ryoyama.work01@gmail.com).

---

## 🛠 Tech Stack

- **Frontend**: React (via Create React App), MUI, styled-components
- **Data Fetching**: GitHub API (asynchronous fetch, post-fetch rendering)
- **Contact Form**: Input validation (Yup/React Hook Form), notifications
- **Build & CI**: Yarn, ESLint warnings treated as errors in CI, deployed on Netlify

---

## 👨‍💻 Development Highlights

- Implemented multiple core React patterns (state management, effects, conditional rendering).
- Applied mobile-friendly styling and component-scoped styles using styled-components.
- Ensured clean CI/CD via Netlify, with lint warnings resolved before production deploys.
- Integrated GitHub API to dynamically generate language usage stats based on file extensions.

---

## ✅ QA-Focused Contributions

Even though this PR is for a QA tester role, here are the key areas I've already ensured QA compatibility for:

- Cross-browser compatibility testing (Chrome, Firefox, mobile browsers)
- Validation and sanitization of form inputs
- Accessibility checks (ARIA labels, button states, responsive UI)
- CI lint checks ensure code quality before deployment

---

## 👁️‍🔨 How to Run Locally

```bash
git clone https://github.com/RyoYamashiro/react-portfolio-myself.git
cd react-portfolio-myself
yarn install
yarn start
```
Then, open `http://localhost:3000` in your browser.

---

## 🧰 Testing & QA Instructions

1. **Form Validation**  
   - Leave required fields empty or enter invalid email → verify validation messages.
2. **Responsive Design**  
   - Resize browser or use dev-tools to ensure layout adjusts gracefully.
3. **Functionality Tests**  
   - Submit the contact form and check email notification flow.  
   - Confirm GitHub language stats load correctly and reflect current repositories.
4. **Cross-Browser/Device Testing**  
   - Run on Chrome, Firefox, Safari, Edge, and mobile devices/emulators.
5. **Accessibility Checks**  
   - Verify ARIA attributes, keyboard navigation, focus state visibility.

---

## 🌟 Summary

This project demonstrates full-stack understanding with React and API integration, all packaged in a QA-ready portfolio site. As a QA tester applicant, you'll see that attention to detail, usability, and cross-environment compatibility are already built-in.

---

📌 Feel free to open issues or PRs if you'd like to suggest enhancements or improvements!
