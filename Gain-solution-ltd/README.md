# Task Management UI – React + Tailwind CSS

A responsive task management interface built with React.js and Tailwind CSS, based on a provided low-fidelity wireframe.
The application uses static mock data and focuses on clean component structure, predictable state management, and responsive layout behavior.

🔗 **[Live Demo](https://gain-solutions-limited-job-task-naim-sheikh.vercel.app/)**

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Layout Decisions](#layout-decisions)
- [Responsiveness](#responsiveness)
- [Wireframe to React Mapping](#wireframe-to-react-mapping)
- [Components](#components)

## Features

✨ **Multiple Views**: Switch between Kanban board, list view, and detailed task view
📱 **Fully Responsive**: Mobile-first design that adapts to all screen sizes
🎯 **Task Management**: Create, update, and organize tasks by status
👥 **Task Assignment**: Assign tasks to team members
📝 **Comments & Activity**: Add comments and view task activity history
🎨 **Clean UI**: Built with Tailwind CSS for a modern, polished interface


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
cd Gain-solution-ltd
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

## Wireframe to React Mapping

### How the Wireframe Was Translated into React + Tailwind

Before writing code, the wireframe was broken down into clear, reusable components that align with React principles.

### Mapping Approach:

1. **Component Breakdown**: Each wireframe section was translated into a React component
   - Navigation area → `Navbar` component
   - Status columns → `KanbanColumn` component
   - Task cards → Individual task card components
   - Task details panel → `TaskDrawer` with `TaskMain` and `TaskSidebar`
   - Comments section → `TaskComments` and `TaskCommentsInput` components

2. **Consistent Patterns**: Repeated UI patterns follow consistent spacing and styling
   - Input fields, buttons, and cards use standardized Tailwind classes
   - Consistent padding, margins, and border-radius across all components
   - Color scheme applied uniformly throughout the interface

3. **Tailwind Implementation**: Tailwind utility classes were used directly to match wireframe specifications
   - Spacing and alignment precisely follow the wireframe layout
   - Responsive utilities handle different screen sizes without custom CSS
   - Flexbox and Grid layouts replicate wireframe structure

4. **No External UI Libraries**: The design was built from scratch using only React and Tailwind
   - Custom components provide full control over behavior and styling
   - Easy to customize and extend based on future requirements
   - Lightweight and performant without external dependencies

5. **Reusable Component Structure**: The final architecture closely mirrors the wireframe while maintaining modularity
   - Components are self-contained and easy to test
   - Props-based customization allows flexibility
   - Hooks manage state and side effects cleanly

### Key Design Translations:

| Wireframe Element | React Component | Tailwind Approach |
|---|---|---|
| Navigation bar | `Navbar`, `NavbarDesktop`, `NavbarMobile` | Flexbox with responsive breakpoints |
| Kanban columns | `KanbanColumn` | Grid layout with horizontal scroll on mobile |
| Task cards | Task card elements | Card styling with shadow and hover effects |
| Task details drawer | `TaskDrawer`, `TaskMain`, `TaskSidebar` | 2-column grid (desktop) / 1-column (mobile) |
| Comments section | `TaskComments`, `TaskCommentsInput` | Stacked layout with list styling |
| Activity log | `TaskActivity` | Timeline-style list |
| Modal forms | `AddTaskModal` | Overlay with centered content |

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

