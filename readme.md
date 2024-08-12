# New (v0.0.1)

This script runner allows you to automate the creation of various types of projects by guiding you through a series of prompts. The script then executes the necessary commands to generate the project according to your specifications.

## Usage

   Before running the script, ensure that the `config` object in `scripts.js` is up to date. This configuration defines the available project categories, scripts, and the questions that will be prompted. Modify the `config` object as needed to match your project requirements.

   Example structure of `config` in `scripts.js`:

   ```javascript
   export const config = {
       app: {
           'Mobile: React Native App': {
               script: 'mobile-react-native.sh',
               params: (answers) => [...],
               questions: [...]
           },
           // other scripts
       },
       test: {
           'javascript': {
               script: 'javascript-test.sh',
               params: (answers) => [...],
               questions: [...]
           },
           // other scripts
       }
   };

To run the script runner, execute the following command:

```bash
npm install
npm start
```