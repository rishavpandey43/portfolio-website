# Personal Portfolio Website

This repository contains the code for my personal portfolio website, a dynamic showcase built with Tailwind CSS. The portfolio is designed to be responsive and features a variety of layouts and sections that highlight my skills and projects.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup and Development](#setup-and-development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The portfolio website aims to provide a professional online presence. It's developed to be highly responsive, ensuring that it looks great on all devices, from phones to desktops. The layouts are crafted with attention to detail and design principles that aim to highlight my professional journey and achievements.

## Project Structure

Here's how the project is organized:

- `src/index.html` - The main HTML document.
- `src/input.css` - The main CSS file where Tailwind CSS directives are written.
- `src/output.css` - The compiled Tailwind CSS file.
- `src/assets/` - Contains static files like images, documents.
- `src/script.js` - JavaScript file for interactivity.
- `tailwind.config.js` - Tailwind CSS configuration.

## Setup and Development

To get the project up and running on your local machine, follow these steps:

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/rishavpandey43/portfolio-website.git
   ```

2. **Navigate to the Project Directory:**

   ```sh
   cd portfolio-website
   ```

3. **Install Dependencies:**

   Ensure you have Node.js installed, then run:

   ```sh
   npm install
   ```

4. **Start Tailwind CLI Build Process:**

   To compile your CSS with Tailwind, run:

   ```sh
   npm run compile:watch
   ```

   This command watches for changes in your CSS file and automatically re-compiles the `output.css` file.

5. **Open `index.html`:**
   You can open the index.html file in a browser to see your changes, or use a live server extension if you're using a code editor like VS Code.

## Deployment

We're using Netlify to deploy the website. The deployment process is automated, and the website is updated whenever changes are pushed to the `main` branch.
