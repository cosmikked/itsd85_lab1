# Student Services Portal 

### Project Description
A TypeScript-based backend application designed to manage, validate, and format student data. It features robust runtime validation using custom type guards and strictly enforces type safety using literal union types and exhaustive switch cases to handle student statuses effectively.

### Requirements

* Node.js 
* TypeScript
* npm 

### Installation Instructions 

1. Clone the repository: `git clone https://github.com/cosmikked/itsd85_lab1.git`
2. Navigate to the project directory: `cd it85_lab1`
3. Install dependencies: `npm install`

### How to Run the Project 

Because this is a TypeScript project, you can run the main execution script directly using tsx (which executes TypeScript seamlessly without needing a separate compile step): 

`npx tsx src/index.ts`

### How to Run Linting 

This project uses ESLint to analyze the code to quickly find problems. To run the linter against the src directory, use the predefined npm script: 

`npm run lint`

### How to Format Code 

This project uses Prettier to ensure consistent code styling. To automatically format all files in the project, run: 

`npm run format` 

### Development Workflow 

1. **Making Changes**: Write your TypeScript code inside the `src/` directory. Ensure you define strict interfaces in `src/types/` and reusable functions in `src/utils/`.
2. **Formatting**: Before committing, always format your code by running `npm run format`.
3. **Linting**: Ensure your code meets quality standards by running `npm run lint`. Fix any errors that ESLint flags.
4. **Type Checking**: Run `npm run typecheck` to verify that there are no strict TypeScript errors (this catches issues that your linter might miss).
5. **Testing/Execution**: Run your code locally using `npx tsx src/index.ts` to verify the logic and terminal output.