# Task Management UI – React + Tailwind CSS

A responsive task management interface built with React.js and Tailwind CSS, based on a provided low-fidelity wireframe.
The application uses static mock data and focuses on clean component structure, predictable state management, and responsive layout behavior.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Layout Decisions](#layout-decisions)
- [Responsiveness](#responsiveness)
- [Components](#components)

## Features

✨ **Multiple Views**: Switch between Kanban board, list view, and detailed task view
📱 **Fully Responsive**: Mobile-first design that adapts to all screen sizes
🎯 **Task Management**: Create, update, and organize tasks by status
👥 **Task Assignment**: Assign tasks to team members
📝 **Comments & Activity**: Add comments and view task activity history
🎨 **Clean UI**: Built with Tailwind CSS for a modern, polished interface

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Core language

## Project Structure

```
src/
├── Components/
│   ├── Button/
│   │   └── Button.jsx
│   ├── Kanban_Board/
│   │   ├── AddTaskModal.jsx
│   │   ├── KanbanColumn.jsx
│   │   ├── MobileDrawer.jsx
│   │   ├── Navbar.jsx
│   │   ├── NavbarDesktop.jsx
│   │   └── NavbarMobile.jsx
│   ├── Task_Drawer/
│   │   ├── TaskActivity.jsx
│   │   ├── TaskComments.jsx
│   │   ├── TaskCommentsInput.jsx
│   │   ├── TaskDescriptionEditor.jsx
│   │   ├── TaskMain.jsx
│   │   ├── TaskMetaFields.jsx
│   │   └── TaskSidebar.jsx
│   └── Task_List_View/
│       └── NavbarFroTaskListView.jsx
├── Pages/
│   ├── KanbanPage.jsx
│   ├── ListViewPage.jsx
│   └── TaskDrawer.jsx
├── hooks/
│   ├── useAddTaskModal.js
│   ├── useBoardFilters.js
├── assets/
│   ├── assignees.js
│   └── data.js
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd GAIN-SOLUTION-LTD
```

3. Install dependencies:
```bash
npm i
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

### Kanban Board View
Switch to the Kanban board to organize tasks by status (To Do, In Progress, Done).

### List View
View all tasks in a structured list format with sortable columns.

### Task Details
Click on any task to open the detailed view with:
- Task description and comments
- Activity log
- Metadata (status, priority, assignee, due date)
- Quick actions for updates

### Add Tasks
Use the "Add Task" button to create new tasks. Modal handles task creation with initial values.

## Layout Decisions

The application layout is organized around three main views:

- **Kanban Board** - Drag-and-drop style board organized by status
- **Task Details Drawer** - Detailed view with comments and metadata
- **List View** - Tabular view of all tasks

The KanbanPage component controls which view is rendered. Centralizing layout decisions in a single place avoids spreading UI logic across multiple components and keeps the layout easy to reason about.

### Task Details Layout

For task details, a two-column drawer layout is used:

- **Left side**: main task content (title, details, comments, activity log)
- **Right side**: task metadata (status, priority, assignee, due date, inputs)

A 12-column CSS grid is used on larger screens and collapses into a single column on smaller screens. This creates a clear visual hierarchy where primary content receives more space than secondary information.

### Kanban Board Layout

- **Horizontal scrolling** on small screens
- **Grid layout** on larger screens

This matches common Kanban interaction patterns and keeps the interface usable across different device sizes.

## Responsiveness

Responsiveness is implemented using Tailwind CSS responsive utility classes, without custom CSS or JavaScript.

### Key Design Decisions:

- **Mobile-first layout** using flex and overflow-x-auto for Kanban columns
- **Breakpoint switching** to grid layout at larger breakpoints (sm, xl)
- **Task drawer adaptation** from one column on mobile to two columns on desktop
- **Separate navigation components** for mobile and desktop to avoid complex conditional rendering

This approach keeps responsive behavior predictable, readable, and easy to maintain.

## Components

### Kanban Board Components
- `Navbar` - Main navigation
- `KanbanColumn` - Individual status column
- `AddTaskModal` - Modal for creating new tasks
- `MobileDrawer` - Mobile-friendly task drawer

### Task Drawer Components
- `TaskMain` - Main task details
- `TaskSidebar` - Metadata sidebar
- `TaskComments` - Comments section
- `TaskActivity` - Activity log
- `TaskDescriptionEditor` - Edit task description

### Navigation Components
- `NavbarDesktop` - Desktop navigation
- `NavbarMobile` - Mobile navigation
- `NavbarFroTaskListView` - List view navigation

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is part of the Gain Solution Ltd task management system.

Before writing code, the wireframe was broken down into clear, reusable components.

Mapping approach:

Each wireframe section was translated into a React component (Navbar, Column, Task Card, Drawer, Sidebar)

Repeated UI patterns (inputs, buttons, cards) follow consistent spacing and styling

Tailwind utility classes were used directly to match spacing, alignment, and layout from the wireframe

No UI libraries or prebuilt templates were used

The final structure closely mirrors the wireframe while keeping components reusable and easy to extend.

How to Run the Project
Prerequisites

Node.js (v16 or later recommended)

npm or yarn

Steps

Install dependencies:

npm install


or

yarn install


Start the development server:

npm run dev


or

yarn dev


Open the application in your browser:

http://localhost:5173


(Port may vary depending on the setup.)

Tech Stack

React.js (Functional Components)

Tailwind CSS

Static mock data (no API calls)

No UI libraries or external frameworks

Notes

This project focuses on:

Clean component structure

Predictable state management

Responsive layout using Tailwind utilities

Translating a wireframe into production-ready React components