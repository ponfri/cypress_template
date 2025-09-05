# Angular 20 Demo App

## Quick Start
1. **Install Node.js (v22.x or v24.x recommended) and npm.**
2. **Clone the repository:**
   ```bash
   git clone https://github.com/ponfri/cypress_template.git
   cd cypress_template
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the backend server:**
   ```bash
   node server.js
   ```
   The API runs at [http://localhost:3200](http://localhost:3200)
5. **Start the Angular app:**
   ```bash
   npm start
   ```
   Visit [http://localhost:5200](http://localhost:5200)

For step-by-step onboarding, see [ONBOARDING.md](../ONBOARDING.md).

# Table of Contents

- [What is Angular?](#what-is-angular)
- [What Does This App Do?](#what-does-this-app-do)
- [Features](#features)
- [Step-by-Step Setup](#step-by-step-setup)
- [Backend Server (Express API)](#backend-server-express-api)
- [Client-Side Routes (Angular)](#client-side-routes-angular)
- [How to Use the App](#how-to-use-the-app)
- [Project Structure](#project-structure)
- [Angular Concepts (Glossary)](#angular-concepts-glossary)
- [Customizing the App](#customizing-the-app)
- [Running Tests](#running-tests)
- [Troubleshooting](#troubleshooting)
- [Learn More](#learn-more)
- [License](#license)
## Client-Side Routes (Angular)

Here are all the main routes in the Angular app:

| Path           | Page/Component         | Description                          |
|----------------|-----------------------|--------------------------------------|
| `/`            | LoginComponent         | Login and registration page           |
| `/home`        | HomeComponent          | Welcome page, intro to the app        |
| `/products`    | ProductsComponent      | Product list and details              |
| `/forms`       | FormsDemoComponent     | Demo of Angular forms                 |
| `/contacts`    | ContactsComponent      | Manage contacts (CRUD)                |
| `/admin`       | AdminComponent         | Admin panel (delete users, admin only)|
| `/users`       | UsersComponent         | User list (if enabled)                |

**Note:** Some routes (like `/admin`) are only visible to admin users. The menu updates automatically based on your role.


## What's New in Angular 20?
- **Signals:** Reactive state management with signals and signal-based forms.
- **Standalone Components:** All components use the latest standalone API.
- **inject() API:** Modern dependency injection.
- **New Control Flow:** Demos for new *ngIf/*ngFor syntax.
- **Zone-less Change Detection:** Demo for zone-less mode.
- **View Transitions API:** Smooth page transitions.
- **ngAfterRender Hook:** Demo of new lifecycle hook.
- **Feature Routing:** Lazy-loaded feature route demo.
- **DI Tokens:** Custom DI token demo.
- **Async Pipe:** Modern async data handling.
- **Custom Pipes & Directives:** Standalone pipe and directive demos.
- **Signal Inputs/Outputs:** Demo of signal-based component communication.

## Modernized UI/UX
- All pages use a modern card layout, consistent spacing, and responsive design.
- Navigation menu updates based on user role (admin/user).
- All demo pages are visually coherent and easy to use.

## Demo Pages
| Path                | Page/Component         | Description                          |
|---------------------|-----------------------|--------------------------------------|
| `/`                 | LoginComponent         | Login and registration page           |
| `/home`             | HomeComponent          | Welcome page, intro, RxJS, signals    |
| `/products`         | ProductsComponent      | Product list and buy buttons          |
| `/forms`            | FormsDemoComponent     | Template-driven & reactive forms      |
| `/contacts`         | ContactsComponent      | Manage contacts (CRUD)                |
| `/admin`            | AdminComponent         | Admin panel (delete users, admin only)|
| `/users`            | UsersComponent         | User list (if enabled)                |
| `/angular20-demo`   | Angular20DemoComponent | Angular 20 feature showcase           |
| `/feature-demo`     | FeatureDemoComponent   | Lazy-loaded feature route demo        |
| `/testing-playground` | TestingPlaygroundComponent | Cypress testing playground: dynamic modal, file upload, drag-and-drop, custom dropdown, pagination, toast, date picker, shadow DOM, similar elements, hidden element |

**Note:** Some routes (like `/admin`) are only visible to admin users. The menu updates automatically based on your role.

# Angular Demo App


## Development server


---

## What is Angular?
Angular is a popular framework for building web applications. It helps you create interactive websites using reusable building blocks called **components**.

## What Does This App Do?
This demo app shows how to:
- Log in and register users (with password visibility toggle)
- Use admin and user roles for navigation and permissions
- Display and edit data (products, contacts)
- Use forms (two styles)
- Organize images and styles
- Always show a footer with info and links

## Features
- **Login & Registration:** Create accounts, choose User or Admin role, and log in/out.
- **Admin Panel:** Admins can delete users (except master admin).
- **Role-Based Menu:** Admins see extra navigation options.
- **Forms Demo:** Try both template-driven and reactive forms.
- **Password Toggle:** Show/hide password fields for convenience.
- **Organized Images:** All images are in `src/assets/img`.
- **Consistent Layout:** Header, menu, content, and footer on every page.


## Backend Server (Express API)

This app uses a simple backend server built with [Express](https://expressjs.com/), a popular Node.js framework. The backend handles authentication, user management, and provides data for products and contacts.

### How the Backend Works
- **File:** `server.js` (located in the project root)
- **Port:** Runs on [http://localhost:3200](http://localhost:3200)
- **Data Storage:** Uses JSON files in `src/assets/` for users, products, and contacts
- **No database required!**

### Main Data Files
- `src/assets/accounts.json` — Stores user accounts and roles
- `src/assets/products.json` — Stores product data
- `src/assets/contacts.json` — Stores contact data

### Key API Endpoints
| Method | Endpoint              | Purpose                          |
|--------|-----------------------|----------------------------------|
| POST   | `/api/login`          | Log in with username/password    |
| POST   | `/api/register`       | Register new user (role support) |
| POST   | `/api/delete`         | Delete a user account            |
| GET    | `/api/users`          | List all users                   |
| GET    | `/api/products`       | Get product list                 |
| GET    | `/api/contacts`       | Get contacts list                |
| POST   | `/api/contacts`       | Add a new contact                |
| PUT    | `/api/contacts/:id`   | Update a contact                 |
| DELETE | `/api/contacts/:id`   | Delete a contact                 |

### How to Start the Backend
1. Make sure Node.js is installed
2. In your project folder, run:
	 ```bash
	 node server.js
	 ```
3. The server will start and print: `Server running on http://localhost:3200`

### How to Modify Backend Data
- **Users:** Edit `src/assets/accounts.json` to add, remove, or change users and roles
- **Products/Contacts:** Edit their respective JSON files
- **Images:** Place new images in `src/assets/img` and update references in your code

### Example: Adding a New Admin User
Edit `src/assets/accounts.json` and add:
```json
{
	"users": [
		{ "username": "admin", "password": "adminpass", "role": "admin" },
		{ "username": "user1", "password": "userpass", "role": "user" }
	]
}
```

### Troubleshooting Backend
- **Port in use:** Change the `PORT` variable in `server.js`
- **Data not saving:** Make sure you have write permissions to the `src/assets/` folder
- **API errors:** Check the terminal for error messages
- **CORS issues:** The server allows all origins by default

### Customizing the Backend
- Add new endpoints in `server.js` for more features
- Change data files or structure as needed
- Integrate with a real database (MongoDB, PostgreSQL) for advanced use

### Learning Resources
- [Express Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs)


### 1. Install Node.js and npm
- Download from [nodejs.org](https://nodejs.org/)
- Install and verify:
	```bash
	node --version
	npm --version
	```

### 2. Clone the Project
```bash
git clone https://github.com/ponfri/cypress_template.git
cd cypress_template
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the App
- **Frontend (Angular):**
	```bash
	npm start
	```
		Visit [http://localhost:5200](http://localhost:5200)
- **Backend (API):**
	```bash
	node server.js
	```
	API runs at [http://localhost:3200](http://localhost:3200)

## How to Use the App

### Logging In
- Use your username and password.
- If you don’t have an account, register below.

### Registering
- Fill in username, password, and select a role (User or Admin).
- After registering, you’ll be logged in automatically.

### Admin Features
- If you register as Admin, you’ll see an Admin menu item.
- Go to Admin Panel to delete users (except master admin).

### Forms Demo
- Try both types of forms on the Forms Demo page.

### Products & Contacts
- View and manage example data.

### Images
- All images are in `src/assets/img`. To add new images, place them here and update references in your code.

## Project Structure
- `src/app/` — Angular components, services, and pages
- `src/assets/img/` — All images
- `server.js` — Backend API (Express)
- `README.md` — This guide

## Angular Concepts (Glossary)
- **Component:** A reusable UI block (like a page or button)
- **Standalone Component:** No need for NgModules, easier setup
- **Service:** Shared logic (e.g., authentication)
- **Routing:** Navigation between pages
- **Form:** User input (template-driven or reactive)
- **Directive:** Adds behavior to elements (e.g., highlight)
- **Pipe:** Transforms data in templates (e.g., capitalize)

## Customizing the App
- **Change Images:** Add to `src/assets/img` and update paths
- **Change Styles:** Edit `src/styles.scss` or component styles
- **Add Pages:** Create a new component in `src/app/` and add a route

## Running Tests
```bash
npm test
```
Runs Angular’s built-in unit tests.

## Example: Write Your First Test

Create a new spec file in `src/app/` (e.g., `hello-world.component.spec.ts`):

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorldComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

See more examples in the `src/app/` folder.

## Troubleshooting
**Common Issues:**
- If `npm install` fails, check your Node.js version (`node -v`).
- If the frontend won’t start, make sure you ran `npm install` and are in the right folder.
- If the backend won’t start, make sure Node.js is installed and you are running `node server.js` from the project root.
- For permission errors, use a terminal with admin rights or check your folder permissions.
- If images are missing, check `src/assets/img` and update paths.
- If login/register features don’t work, make sure the backend is running.
- For other errors, see [Angular documentation](https://angular.io/docs).

See [ONBOARDING.md](../ONBOARDING.md) for more troubleshooting tips.

## Learn More
- [Angular Getting Started](https://angular.io/start)
- [Angular Glossary](https://angular.io/guide/glossary)
- [Node.js Download](https://nodejs.org/)
- [VS Code Editor](https://code.visualstudio.com/)

## License
MIT

---

**Tip for Beginners:**
Start by exploring the Home, Login, and Forms Demo pages. Try registering as both User and Admin. The code is commented to help you learn as you go!
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.