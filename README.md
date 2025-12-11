# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.



## Frontend Pages and Components
ProjectDetailsPage: It is the page that shows a project with its corresponding tasks. It also manages the necessary backend calls for obtaining the project and tasks details.

TaskForm: The component is a form used for submitting a new task. It sends a POST request to the backend and updates the project's task list in the frontend.

EditTaskForm: The component is a form used for making changes to an existing task. It sends a PUT request for the purpose of task updating.

Navbar: It is the component responsible for providing navigation options within the app.

apiClient: Axios instance configured with the backend URL and authorization headers.

## How it works

User Authentication: It is required for users to either log in or sign up to be able to use the application. In the backend, routes are protected with JSON web token authentication.

Projects: 
    
      The feature allows users to create projects, view their details, and delete projects that they own.

Tasks:

      Creating a task falls under a particular project.

      A task can be edited or removed.

      Newly created tasks automatically appear in the project view without refreshing.

      Only the authenticated user is able to see Edit/Delete buttons for their tasks.

State Management:

      Frontend uses React state (useState) to store tasks and projects.

      New tasks are passed up via callbacks to update the project view dynamically.


## Backend 
Projects:

      GET /api/projects - Get all projects of the authenticated user

      GET /api/projects/:projectId - Get a single project by ID

      POST /api/projects - Create a new project

      PUT /api/projects/:projectId - Update a project

      DELETE /api/projects/:projectId - Delete a project

Tasks:

      GET /api/projects/:projectId/tasks - Get all tasks for a project

      GET /api/projects/:projectId/tasks/:taskId - Get a single task

      POST /api/projects/:projectId/tasks - Create a new task for a project

      PUT /api/projects/:projectId/tasks/:taskId - Update a task

      DELETE /api/projects/:projectId/tasks/:taskId - Delete a task

Authorization:

      All routes are protected using authMiddleware.

      Users can only modify projects/tasks that belong to them.



## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
