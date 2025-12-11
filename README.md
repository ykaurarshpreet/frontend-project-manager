## Description

This project is basically a lightweight project manager app where users can sign up, log in, and keep track of their own projects and tasks. After creating an account and logging in, users can see all their projects on the Projects page and create new ones, update them, or delete them whenever they want. Clicking on a project opens a page that shows all the tasks for that specific project, and users can add, edit, or delete tasks there too. All the routes are protected so people can only see their own stuff, and the app uses JWT auth (plus optional GitHub login) to keep everything secure. It’s a simple React single-page app with pages for Home, Auth, Projects, and Project Details, and it includes helpful loading states and error messages so the experience feels smooth.


## Frontend Pages and Components

env file in the root directory of the project:

      VITE_BACKEND_URL

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

env file in the root directory of the project:

      MONGO_URI
      JWT_SECRET
      GITHUB_CLIENT_ID
      GITHUB_CLIENT_SECRET
      GITHUB_CALLBACK_URL
      FRONTEND_URL

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



```
