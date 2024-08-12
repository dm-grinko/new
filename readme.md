# New (v0.0.1)

This script runner allows you to automate the creation of various types of projects by guiding you through a series of prompts. The script then executes the necessary commands to generate the project according to your specifications.

## Usage

1. Before running the script, ensure that the `config` object in `scripts.js` is up to date. This configuration defines the available project categories, scripts, and the questions that will be prompted. Modify the `config` object as needed to match your project requirements.

Example structure of `config` in `scripts.js`:

```javascript
export const config = {
    app: {
        'React Native App': {
            script: 'mobile-react-native.sh',
            params: (answers) => [...],
            questions: [...]
        },
        // other scripts
    },
    test: {
        'JavaScript test': {
            script: 'javascript-test.sh',
            params: (answers) => [...],
            questions: [...]
        },
        // other scripts
    }
};
```

2. Create `Shell Scripts`:

Ensure that the shell scripts referenced in the config object are created and available in the specified directory. Each script should be tailored to perform the desired operations for your projects.

3. Run the Script Runner:

Execute the following command in your terminal:

```bash
npm install
npm start
```

4. Follow Prompts:

The script will guide you through a series of prompts based on the selected category and script. Provide the necessary details, such as the project name, work directory, and template choice.

5. Execution:

After you provide the required information, the script runner will execute the corresponding shell script to create your project. You can monitor the process through the terminal output.

6. Access Your Project:

Once the script completes, you can navigate to the specified work directory to access your newly created project.



## License
This project is licensed under the MIT License. 