# Node.Js (Express) with TypeScript and MongoDb

This repository serves as a starter template for building Node.js applications using TypeScript. It includes essential tools and configurations for efficient development, including linting, formatting, and environment management.

---

## **Table of Contents**
- [Node.Js (Express) with TypeScript and MongoDb](#nodejs-express-with-typescript-and-mongodb)
  - [**Table of Contents**](#table-of-contents)
  - [**Scripts**](#scripts)
  - [**Dependencies**](#dependencies)
  - [**Dev Dependencies**](#dev-dependencies)
  - [**How to Use**](#how-to-use)
    - [Prerequisites](#prerequisites)
    - [Steps to Run the Project](#steps-to-run-the-project)

---

## **Scripts**

The `scripts` section in `package.json` defines various commands for development, testing, building, and production.

| **Script**       | **Command**                                                 | **Description**                                                                                                                             |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `build`          | `tsc`                                                       | Compiles TypeScript files from `src/` to JavaScript in the `dist/` directory using `tsconfig.json`.                                         |
| `start:prod`     | `node ./dist/server.js`                                     | Runs the compiled JavaScript file for production. Ensure the application is built beforehand using the `build` script.                      |
| `start:dev`      | `ts-node-dev --exit-child ./src/server.ts`                  | Starts the application in development mode using `ts-node-dev`. Automatically reloads the server when changes are detected in source files. |
| `lint`           | `eslint . --format stylish --stats`                         | Runs ESLint to analyze the code for errors and enforce coding standards. Uses the `stylish` format for output and displays statistics.      |
| `lint:fix`       | `eslint . --fix-dry-run`                                    | Runs ESLint and simulates automatic fixes for errors without modifying the files.                                                           |
| `prettier`       | `prettier --ignore-path .gitignore --write "./src/**/*.+(js\|ts\|json)"`   | Formats all JavaScript, TypeScript, and JSON files in the `src` directory according to Prettier configuration.                 |
| `prettier:check` | `prettier --ignore-path .gitignore --check "./src/**/*.+(js\|ts\|json)"`   | Checks the formatting of files against Prettier rules without modifying them.                                                  |                                                                                           | json)"` | Checks the formatting of files against Prettier rules without modifying them.                                  |
| `prettier:fix`   | `prettier --write src`                                      | Automatically fixes formatting issues in the `src` directory using Prettier.                                                                |

---

## **Dependencies**

| **Package**                  | **Version** | **Description**                                                                                                          |
| ---------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `cors`                       | `^2.8.5`    | Enables Cross-Origin Resource Sharing (CORS) for handling requests from different domains.                               |
| `dotenv`                     | `^16.4.7`   | Loads environment variables from a `.env` file into `process.env`, allowing secure and dynamic configuration.            |
| `express`                    | `^4.21.2`   | A fast and lightweight web framework for building APIs and web applications.                                             |
| `mongoose`                   | `^8.9.3`    | An Object Data Modeling (ODM) library for MongoDB that provides schema-based solutions for managing MongoDB collections. |
| `template-nodejs-typescript` | `file:`     | A placeholder for the local package reference (not functional).                                                          |

---

## **Dev Dependencies**

| **Package**              | **Version** | **Description**                                                                                              |
| ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `@eslint/js`             | `^9.17.0`   | Provides ESLint configurations and rules for JavaScript projects.                                            |
| `@types/cors`            | `^2.8.17`   | TypeScript type definitions for the `cors` package, enabling strong typing for CORS configurations.          |
| `@types/express`         | `^5.0.0`    | TypeScript type definitions for the `express` package, enabling strong typing for routes and middleware.     |
| `@types/node`            | `^22.10.5`  | TypeScript type definitions for Node.js, providing type safety for Node.js APIs.                             |
| `eslint`                 | `^9.17.0`   | A linting tool for identifying and fixing problems in JavaScript and TypeScript code.                        |
| `eslint-config-prettier` | `^9.1.0`    | Disables ESLint rules that conflict with Prettier, ensuring compatibility between the two tools.             |
| `prettier`               | `^3.4.2`    | A code formatter that enforces consistent code style for JavaScript, TypeScript, and other file types.       |
| `ts-node-dev`            | `^2.0.0`    | A development tool for running TypeScript code directly without compilation, with support for hot-reloading. |
| `typescript`             | `^5.7.2`    | A strongly typed superset of JavaScript that compiles to plain JavaScript.                                   |
| `typescript-eslint`      | `^8.19.0`   | ESLint plugin that provides TypeScript-specific linting rules and functionality.                             |

---

## **How to Use**

### Prerequisites
- Ensure you have Node.js (v14+) and npm or yarn installed.
- Install TypeScript globally: `npm install -g typescript`.

### Steps to Run the Project
1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd template-nodejs-typescript
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up the environment variables in a `.env` file.

4. Run the application in development mode:  
   ```bash
   npm run start:dev
   ```

5. Build the application for production:  
   ```bash
   npm run build
   ```

6. Start the production server:  
   ```bash
   npm run start:prod
   ```

---

Feel free to contribute to this template by submitting issues or creating pull requests. 🎉
