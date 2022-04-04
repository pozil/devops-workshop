# Part 2:  Set up code quality tools, versioning, and CI

## Set up code quality tools

1. Remove the `"module": true` property from `package.json`.
1. Install Jest, Prettier and ESLint as dev dependencies:
    ```sh
    npm install --save-dev jest @lwc/jest-preset prettier eslint @lwc/eslint-plugin-lwc @salesforce/eslint-config-lwc eslint-plugin-import eslint-plugin-jest @salesforce/eslint-plugin-lightning
    ```
1. Add these dev tool scripts to the `scripts` property of `package.json`:
    ```json
    "test": "jest",
    "format": "prettier --write \"**/*.{css,html,js,json,md,yaml,yml}\"",
    "format:verify": "prettier --check \"**/*.{css,html,js,json,md,yaml,yml}\"",
    "lint": "eslint **/src/**/*.js",
    ```
1. Copy the configuration files located in [this directory](base-config) and place them at the root of your project:
    ```
    .eslintrc.json
    .gitignore
    .prettierignore
    .prettierrc
    jest.config.js
    ```

1. Test the newly added scripts by running:
    ```sh
    npm run format
    npm run lint
    npm test
    ```

    **Note:** the `test` script will fail for now as there are no tests in our project for now.

## Set up source control

1. Initialize a local git repository with your code by running these commands:
    ```sh
    git init
    git add .
    git commit -m "feat: initial commit"
    ```

1. Open a browswer and log in to github.com and create a new repository. Keep the default settings and name the repository `lwr-project`.

1. Push your local repository to the GitHub remote (remember to replace the username):
    ```sh
    git remote add origin git@github.com:USERNAME/lwr-project.git
    git branch -M main
    git push -u origin main
    ```

1. Refresh the web page for your repository to verify that your project is uploaded as expected.


<div align="center">
  <a href="part3.md"><b>Continue</b></a>
</div>