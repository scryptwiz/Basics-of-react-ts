# Basics of React with TypeScript

This repository serves as a learning resource for understanding React with TypeScript through various lessons.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Lessons](#lessons)
  - [Props](#props)
  - [Context](#context)
  - [Fetch API](#fetch-api)
  - [Form Event](#form-event)
  - [Reducer](#reducer)
  - [RTK](#rtk)
- [Contributing](#contributing)
- [License](#license)

## Folder Structure

```plaintext
src/
  ├── lessons/
  │   ├── Props/
  │   │   └── index.jsx
  │   ├── Context/
  │   │   ├── index.tsx
  │   │   └── context.tsx
  │   ├── FetchApi/
  │   |   ├── index.tsx
  │   |   ├── usingXod.tsx
  │   |   └── utils/
  │   |       ├── axiosTypes.ts
  │   |       └── zodTypes.ts
  |   ├── FormEvent/
  |   |     └── index.tsx
  |   ├── Reducer/
  |   |     ├── index.tsx
  │   │     └── reducer.ts
  |   ├── RTK/
  |   |     ├── index.tsx
  |   |     ├── conterSlice.ts
  |   |     ├── hooks.ts
  │   │     └── store.ts
  └── App.tsx
```

## Installation

Clone the repository:

```sh
git clone https://github.com/Kelvide/Basics-of-react-ts.git
```

Navigate to the project directory:
```sh
cd Basics-of-react-ts
```

Install dependencies:
```sh
npm install
```

## Usage

Start the development server:
```sh
npm start
```

Open your browser and navigate to http://localhost:3000 to view the project.

## Lessons
### Props
File: src/lessons/Props/index.jsx

This lesson demonstrates the use of props in a React component using TypeScript. It includes examples of how to define component props with and without the PropsWithChildren utility type from React.

### Context
Files: src/lessons/Context/

index.tsx: Demonstrates the use of a custom ThemeProvider context and a component that consumes this context.
context.tsx: Contains the implementation of the ThemeProvider context, including the context creation and a custom hook useTheme.

### Fetch API
Files: src/lessons/FetchApi/

index.tsx: Demonstrates fetching data using react-query and axios, with data validation using Zod.
usingXod.tsx: Demonstrates fetching data using the Fetch API with data validation using Zod.
utils/axiosTypes.ts: Contains the axios fetch function and the Zod schema for data validation.
utils/zodTypes.ts: Contains the Zod schema and TypeScript type for data validation.

### Form Event
File: src/lessons/FormEvent/index.tsx

This lesson demonstrates handling form events in React using TypeScript. It includes examples of how to type event handlers and manage form state using both controlled and uncontrolled components.

### Reducer
Files: src/lessons/Reducer/

index.tsx: Demonstrates the use of the useReducer hook in a React component. It shows how to manage complex state logic and side effects in a more predictable way.
reducer.ts: Contains the implementation of the reducer function, including state and action types, as well as the state transition logic.

### RTK
Files: src/lessons/RTK/

index.tsx: Demonstrates the use of Redux Toolkit (RTK) in a React application. It includes examples of setting up a store and dispatching actions.
counterSlice.ts: Contains the slice logic, including state, reducers, and actions generated by createSlice.
hooks.ts: Provides custom hooks (useAppSelector and useAppDispatch) for using Redux in TypeScript.
store.ts: Configures the Redux store with the slices and middleware.

## Contributing
Contributions are welcome! Please feel free to submit a pull request.