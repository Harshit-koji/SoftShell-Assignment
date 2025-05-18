# 💼 Software License Landing Page

A modern, responsive React-based landing page for a company that helps users buy/sell software licenses. Built with React 19, Bootstrap 5, Zustand, Framer Motion, and SASS for smooth UI, theme toggling, and scalable architecture.

---

## 🚀 Tech Stack

- **React 19**
- **Bootstrap 5 / React-Bootstrap**
- **Framer Motion**
- **Zustand (for global theme management)**
- **React Scroll**
- **SASS / SCSS (with Bootstrap override)**
- **React Icons / Bootstrap Icons**
- **AOS (Animate On Scroll)**

---

## ✨ Features Implemented

### ✅ Hero Section
- Two-column layout with text + image
- "Sell License" and "Join Now" buttons
- Framer Motion animation on both columns
- Responsive via Bootstrap grid

### ✅ Navigation
- Fixed-top Bootstrap Navbar
- Mobile toggle without layout shift
- Smooth scroll using `react-scroll`
- Dropdown behavior to be shown horizontally (in-progress)

### ✅ Contact / Lead Form
- Fields: First Name, Last Name, Email, Company, Message
- Dropdown for license type using React-Bootstrap
- Frontend validation
- Framer Motion animations
- `handleSubmit` stubbed for future backend integration

### ✅ Theme Toggle (Dark / Light)
- Zustand-based global theme state
- Saved in `localStorage`
- Available across all pages/components
- Reusable theme button

### ✅ Pages & UI Sections
- **How It Works**
- **Why Choose Us**
- **Customer Reviews**
- **Contact Us**

---

## 📁 Folder Structure

# 💼 Software License Landing Page

A modern, responsive React-based landing page for a company that helps users buy/sell software licenses. Built with React 19, Bootstrap 5, Zustand, Framer Motion, and SASS for smooth UI, theme toggling, and scalable architecture.

---

## 🚀 Tech Stack

- **React 19**
- **Bootstrap 5 / React-Bootstrap**
- **Framer Motion**
- **Zustand (for global theme management)**
- **React Scroll**
- **SASS / SCSS (with Bootstrap override)**
- **React Icons / Bootstrap Icons**
- **AOS (Animate On Scroll)**

---

## ✨ Features Implemented

### ✅ Hero Section
- Two-column layout with text + image
- "Sell License" and "Join Now" buttons
- Framer Motion animation on both columns
- Responsive via Bootstrap grid

### ✅ Navigation
- Fixed-top Bootstrap Navbar
- Mobile toggle without layout shift
- Smooth scroll using `react-scroll`
- Dropdown behavior to be shown horizontally (in-progress)

### ✅ Contact / Lead Form
- Fields: First Name, Last Name, Email, Company, Message
- Dropdown for license type using React-Bootstrap
- Frontend validation
- Framer Motion animations
- `handleSubmit` stubbed for future backend integration

### ✅ Theme Toggle (Dark / Light)
- Zustand-based global theme state
- Saved in `localStorage`
- Available across all pages/components
- Reusable theme button

### ✅ Pages & UI Sections
- **How It Works**
- **Why Choose Us**
- **Customer Reviews**
- **Contact Us**

---

## 📁 Folder Structure

# 💼 Software License Landing Page

A modern, responsive React-based landing page for a company that helps users buy/sell software licenses. Built with React 19, Bootstrap 5, Zustand, Framer Motion, and SASS for smooth UI, theme toggling, and scalable architecture.

---

## 🚀 Tech Stack

- **React 19**
- **Bootstrap 5 / React-Bootstrap**
- **Framer Motion**
- **Zustand (for global theme management)**
- **React Scroll**
- **SASS / SCSS (with Bootstrap override)**
- **React Icons / Bootstrap Icons**
- **AOS (Animate On Scroll)**

---

## ✨ Features Implemented

### ✅ Hero Section
- Two-column layout with text + image
- "Sell License" and "Join Now" buttons
- Framer Motion animation on both columns
- Responsive via Bootstrap grid

### ✅ Navigation
- Fixed-top Bootstrap Navbar
- Mobile toggle without layout shift
- Smooth scroll using `react-scroll`
- Dropdown behavior to be shown horizontally (in-progress)

### ✅ Contact / Lead Form
- Fields: First Name, Last Name, Email, Company, Message
- Dropdown for license type using React-Bootstrap
- Frontend validation
- Framer Motion animations
- `handleSubmit` stubbed for future backend integration

### ✅ Theme Toggle (Dark / Light)
- Zustand-based global theme state
- Saved in `localStorage`
- Available across all pages/components
- Reusable theme button

### ✅ Pages & UI Sections
- **How It Works**
- **Why Choose Us**
- **Customer Reviews**
- **Contact Us**

---

## 📁 Folder Structure
src/
├── assets/images → Hero section + Illustration images
├── components/
│ ├── layout/ → NavComp, HeroComp, Contact, FooterEnd
│ ├── pages/ → Header, Footer, MainInfo (central content)
│ ├── Reusable/ → Headline, Icon, Info (used across sections)
│ └── ui/ → HowItWorks, WhyChooseUs, CustomerReviews
├── services/ → carousel.json for customer review slides
├── store/ → Zustand store (themeStore.js)
├── styleComp/ → SCSS files (Header.scss, var.scss, etc.)
├── App.jsx → Routes and structure
├── index.scss → Global SASS imports
├── main.jsx → Vite/React root mount




---

## 🧩 Design Choices

- **Component Structure**: Divided into `layout`, `pages`, `ui`, and `reusable` for clarity and reusability.
- **SCSS Modules**: Each major section gets its own SCSS file for maintainability.
- **Theme System**: Zustand enables clean, scalable theme control.
- **Animations**: Framer Motion used for performant, smooth section transitions.
- **Reusable Headline**: Central `Headline.jsx` simplifies UI consistency.
- **Validation**: Client-side validation prioritizes UX before integrating backend.

---

## ⏱️ Time Spent (Estimates)

| Task                              | Time Spent |
|-----------------------------------|------------|
| Project Setup + Packages          | 0.5 hr     |
| Navbar + Hero Section             | 1 hr       |
| Theme Toggle with Zustand         | 1 hr       |
| Page Sections (UI components)     | 1.5 hr     |
| Contact Form + Validation         | 1 hr       |
| Animations with Framer Motion     | 1 hr       |
| Styling (SCSS + Bootstrap layout) | 1.5 hr     |
| Bug fixes & polish                | 1 hr       |
| **Total**                         | ~8.5 hrs   |

---

## 🪜 Step-by-Step Implementation

1. **Installed Packages**  
   `npm install react-bootstrap bootstrap react-scroll aos framer-motion react-icons sass bootstrap-icons`

2. **Created `Header.jsx` Page**  
   Inside: Imported `NavComp` (Navbar) and `HeroComp` (Hero Section)

3. **Wrote `NavComp.jsx` (layout)**  
   - Bootstrap Navbar + react-scroll `<Link>`  
   - Mobile toggler fixed to avoid layout shift  
   - Smooth scroll enabled  
   - Custom style toggling logic added

4. **Wrote `HeroComp.jsx` (layout)**  
   - Two-column layout (text/image)  
   - Buttons with theme style  
   - Framer Motion fade-in animation

5. **Created `styleComp/`**  
   - `Header.scss`: Styles for header section  
   - `var.scss`: All theme/utility SCSS variables

6. **Created `pages/MainInfo.jsx`**  
   - Includes 3 UI blocks from `ui/`:  
     `HowItWorks`, `WhyChooseUs`, `CustomerReviews`

7. **Created `pages/Footer.jsx`**  
   - Includes 2 UI blocks from `ui/`:  
     `Contact`, `FooterEnd`

8. **Created `Reusable/Headline.jsx`**  
   - Standard headline for every major section  
   - Accepts title and subtitle as props

9. **Implemented Dark/Light Theme Button**  
   - Zustand store in `store/themeStore.js`  
   - Button toggles and persists theme  
   - `useEffect` applies theme class to `body`

10. **Added Smooth Scroll Navigation**  
   - Linked all navbar items to section `id`s  
   - Added cursor pointer fix for `react-scroll`

11. **Used Framer Motion Globally**  
    - Page sections animate on scroll/mount  
    - Hero and form sections smoothly enter screen

---

## 📝 Final Notes

- Footer is basic (`FooterEnd.jsx`); can be enhanced later
- `handleSubmit` in contact form is a placeholder for future backend
- Animations and responsiveness tested on multiple screen sizes
- Project is modular and extendable for real-world use

---

> ✅ If cloned, just run:
```bash
bun install
bun run dev
