# Git Story

## Technologies

- **Framework:** React 19 + Vite
- **Language:** Typescript
- **Styles:** Tailwind CSS
- **Animaciones:** GSAP
- **Estado:** Zustand  
- **Backend & Auth:** Supabase + Gemini API
- **Notifications & Feedback:** : `react-hot-toast` & `canvas-confetti`

## User Flow

1. Onboarding: User register with Supabase. Upon entering, a GSAP effect reveals the dashboard.
2. Connection: The user can filter their repositories.
3. Extraction: The user can enter the repositorie and see his commits.
4. Generation: The user pick a commit. We send the commit message to the AI. While it loads, we display an animated skeletton. 
5. Edition: The post appear in a editor. The user can adjust. 
6. Publication/Saving: It is saved in the supabase posts table and the confetti is displayed. 

