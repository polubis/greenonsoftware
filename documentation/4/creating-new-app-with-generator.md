1. Go to directory with `package.json`.
2. Type command: `nx g @nx/next:application apps/todo` to generate Next app.
3. To show list of projects you can type `nx show projects`.
4. To run all applications you can type following: `nx run-many -t dev`. If you want to run single app, you can do it like that: `nx dev kalinka`. [Here](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial#testing-and-linting-running-multiple-tasks) is more about options.