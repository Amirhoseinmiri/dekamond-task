# Authentication System with Next.js, TypeScript, and SCSS

## Overview

This project implements a simple **authentication system** using **Next.js**, **TypeScript**, and **SCSS**. It includes two main pages:

1. **Login Page** (`/auth`) - Users can enter their phone number and be authenticated.
2. **Dashboard Page** (`/dashboard`) - Users are redirected here after a successful login.

The project also utilizes **conditional classnames** using the `clsx` utility and validates the user input with **manual validation**.

---

## Features

- **Responsive Design**: The application is fully responsive and works well on all screen sizes (mobile, tablet, and desktop).
- **Reusable Components**: The input fields and buttons are designed to be reusable, using SCSS Modules for styling.
- **API Integration**: A random user is fetched via the `https://randomuser.me/api/?results=1&nat=us` API to simulate user authentication.
- **State Management**: User data is stored in `localStorage` after successful login.
- **Styling**: SCSS with variables, nesting, mixins, and focus/hover states for better styling.

---

## Setup

### 1. Install Dependencies

To set up the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Amirhoseinmiri/dekamond-task
   cd auth-system
   ```
