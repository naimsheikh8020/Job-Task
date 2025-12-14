import { ASSIGNEES } from "./assignees";

const boardData = [
  {
    id: "backlog",
    name: "Backlog",
    tasks: [
      {
        id: "t1",
        title: "Implement User Authentication",
        details:
          "Set up JWT-based authentication, create login and signup UI, handle token refresh, and integrate with backend API.",
        comments: {
          input: "",
          list: [
            {
              id: "c1",
              author: "Naim",
              text: "Need backend endpoint first.",
              time: "2025-01-01",
            },
          ],
        },
        activityLog: [
          { id: "a1", action: "Task created", time: "2024-12-28" },
          { id: "a2", action: "Initial specs added", time: "2024-12-29" },
        ],
        status: "backlog",
        priority: "high",
        assignee: ASSIGNEES.Unassigned,
        dueDate: "2025-01-15",
        labels: ["auth", "backend"],
        estimate: "8h",
      },
      {
        id: "t2",
        title: "Create Product Listing Page",
        details:
          "Design and implement product list UI with filtering, sorting, and pagination. Should work on mobile and desktop.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a3", action: "Added to backlog", time: "2024-12-30" }],
        status: "backlog",
        priority: "medium",
        assignee: ASSIGNEES.Naim,
        dueDate: "2025-01-20",
        labels: ["frontend", "ui"],
        estimate: "6h",
      },
      {
        id: "t3",
        title: "Global Error Handling",
        details:
          "Implement global error boundaries, toast notifications, and Axios interceptor for backend errors.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a4", action: "Created", time: "2024-12-27" }],
        status: "backlog",
        priority: "low",
        assignee: ASSIGNEES.Unassigned,
        dueDate: "2025-02-01",
        labels: ["system", "improvement"],
        estimate: "4h",
      },
      {
        id: "t4",
        title: "Setup CI/CD Pipeline",
        details:
          "Integrate GitHub Actions to run tests, linting, and automatic deployment on main branch merge.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a5", action: "Added to backlog", time: "2024-12-29" }],
        status: "backlog",
        priority: "high",
        assignee: ASSIGNEES["DevOps Team"],
        dueDate: "2025-01-25",
        labels: ["devops"],
        estimate: "10h",
      },
    ],
  },

  {
    id: "in-progress",
    name: "In Progress",
    tasks: [
      {
        id: "t5",
        title: "Build Dashboard Widgets",
        details:
          "Create analytics widgets (sales, orders, conversion) with dynamic API data and responsive charts.",
        comments: { input: "", list: [] },
        activityLog: [
          { id: "a6", action: "Work started", time: "2024-12-31" },
          { id: "a7", action: "API integrated", time: "2025-01-02" },
        ],
        status: "in-progress",
        priority: "high",
        assignee: ASSIGNEES.Naim,
        dueDate: "2025-01-10",
        labels: ["analytics", "frontend"],
        estimate: "12h",
      },
      {
        id: "t6",
        title: "Refactor State Management",
        details:
          "Migrate local state logic to Zustand store. Ensure type safety and persistence using middleware.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a8", action: "Refactor started", time: "2025-01-02" }],
        status: "in-progress",
        priority: "medium",
        assignee: ASSIGNEES.Sarah,
        dueDate: "2025-01-12",
        labels: ["refactor", "zustand"],
        estimate: "5h",
      },
      {
        id: "t7",
        title: "Create Notification System",
        details:
          "Build toast + push notifications for order updates and system alerts. Must support multiple channels.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a9", action: "In progress", time: "2025-01-03" }],
        status: "in-progress",
        priority: "medium",
        assignee: ASSIGNEES.John,
        dueDate: "2025-01-18",
        labels: ["notifications"],
        estimate: "7h",
      },
    ],
  },

  {
    id: "review",
    name: "Review",
    tasks: [
      {
        id: "t8",
        title: "Improve Mobile Responsiveness",
        details:
          "Optimize layout for mobile screens, fix overflow bugs, adjust spacing, and improve touch interactions.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a10", action: "PR submitted", time: "2025-01-01" }],
        status: "review",
        priority: "high",
        assignee: ASSIGNEES.Naim,
        dueDate: "2025-01-06",
        labels: ["responsive", "ui"],
        estimate: "3h",
      },
      {
        id: "t9",
        title: "Optimize API Performance",
        details:
          "Reduce load times by adding caching, compressing payloads, and modifying slow SQL queries.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a11", action: "Waiting for review", time: "2025-01-03" }],
        status: "review",
        priority: "high",
        assignee: ASSIGNEES["Backend Team"],
        dueDate: "2025-01-09",
        labels: ["api", "performance"],
        estimate: "9h",
      },
    ],
  },

  {
    id: "done",
    name: "Done",
    tasks: [
      {
        id: "t10",
        title: "Add Dark Mode",
        details:
          "Implemented theme switcher with persistence and system preference detection.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a12", action: "Completed", time: "2024-12-27" }],
        status: "done",
        priority: "medium",
        assignee: ASSIGNEES.Naim,
        dueDate: "2024-12-20",
        labels: ["theme"],
        estimate: "4h",
      },
      {
        id: "t11",
        title: "Fix Image Upload Bug",
        details:
          "Resolved issue where large images weren't uploading due to incorrect server config.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a13", action: "Completed", time: "2024-12-28" }],
        status: "done",
        priority: "high",
        assignee: ASSIGNEES.Sarah,
        dueDate: "2024-12-22",
        labels: ["bugfix"],
        estimate: "2h",
      },
      {
        id: "t12",
        title: "Set Up Project Structure",
        details:
          "Initialized monorepo structure, installed dependencies, and configured eslint + prettier.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a14", action: "Done", time: "2024-12-25" }],
        status: "done",
        priority: "low",
        assignee: ASSIGNEES.John,
        dueDate: "2024-12-18",
        labels: ["setup"],
        estimate: "3h",
      },
      {
        id: "t13",
        title: "Landing Page UI",
        details:
          "Created hero section, product cards, testimonials, and footer with modern design.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a15", action: "Done", time: "2024-12-21" }],
        status: "done",
        priority: "medium",
        assignee: ASSIGNEES.Naim,
        dueDate: "2024-12-15",
        labels: ["ui", "frontend"],
        estimate: "6h",
      },
      {
        id: "t14",
        title: "Order Webhook Integration",
        details:
          "Connected order creation webhook to notify external CRM system.",
        comments: { input: "", list: [] },
        activityLog: [{ id: "a16", action: "Done", time: "2024-12-29" }],
        status: "done",
        priority: "high",
        assignee: ASSIGNEES["Backend Team"],
        dueDate: "2024-12-28",
        labels: ["webhook"],
        estimate: "5h",
      },
    ],
  },
];

export default boardData;
