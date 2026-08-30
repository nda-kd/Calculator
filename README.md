# 🧮 Calculator

A clean and responsive calculator built with **React, TypeScript, and Redux**.

The project provides a functional calculator interface for performing everyday arithmetic operations while demonstrating component-based development, state management, and TypeScript integration in React.

**[🚀 Live Demo](https://nda-kd.github.io/Calculator/)**

## ✨ Features

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* 🔢 Decimal number support
* 🧹 Clear/reset functionality
* ⌫ Delete/backspace functionality
* 📱 Responsive calculator interface
* ⚛️ React component architecture
* 🗃️ Redux state management
* 🔷 TypeScript

## 📸 Preview

![Calculator](./screenshots/calculator.png)

> Add a screenshot of the calculator to `screenshots/calculator.png` to display it here.

## 🛠️ Built With

* **React** — Building the user interface
* **TypeScript** — Type-safe application development
* **Redux** — Managing calculator state
* **JSX** — Component markup
* **CSS** — Layout and styling
* **GitHub Pages** — Deployment

## 🧠 What I Learned

This project was built to practice creating an interactive application with React while introducing stronger type safety through TypeScript.

Some of the main concepts explored include:

* Building reusable React components
* Managing application state with Redux
* Using TypeScript with React
* Handling user interactions and button events
* Implementing calculator logic
* Working with numeric and arithmetic operations
* Creating a responsive user interface
* Deploying a React application to GitHub Pages

## ⚙️ How It Works

The calculator separates the user interface from the underlying calculation state.

When a user presses a button, the application processes the corresponding action and updates the calculator state. Redux is used to keep this state centralized and predictable.

A simplified flow looks like this:

```text
User Input
    │
    ▼
Calculator Button
    │
    ▼
Redux Action
    │
    ▼
State Update
    │
    ▼
Calculator Display
```

This approach makes the calculator a useful example of how application state can be managed in a React project rather than relying entirely on local component state.

## 🚀 Getting Started

### Prerequisites

You'll need:

* [Node.js](https://nodejs.org/)
* npm or Yarn

### Clone the Repository

```bash
git clone https://github.com/nda-kd/Calculator.git
```

Navigate into the project:

```bash
cd Calculator
```

### Install Dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn
```

### Start the Development Server

```bash
npm start
```

The application should then be available at:

```text
http://localhost:3000
```

## 🌐 Live Demo

Try the calculator directly in your browser:

**[nda-kd.github.io/Calculator](https://nda-kd.github.io/Calculator/)**

## 📂 Project Structure

```text
Calculator/
├── public/             # Public/static assets
├── src/                # React + TypeScript source code
├── .gitignore
├── package.json        # Project configuration and dependencies
├── package-lock.json
├── tsconfig.json       # TypeScript configuration
├── yarn.lock
└── README.md
```

## 🎓 Project Background

This calculator was created as part of the **freeCodeCamp Front End Libraries** curriculum.

The project focuses on combining React with application state management to create a fully interactive calculator while practicing modern frontend development techniques.

---

Built with ⚛️ React, 🔷 TypeScript, and 🧮 a little bit of math by **nda-kd**.

