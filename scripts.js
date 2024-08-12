const DEFAULT_WORK_DIRECTORY = '/Users/dmitrygrinko/Projects/';

export const SCRIPTS_DIRECTORY = '/Users/dmitrygrinko/Projects/new/scripts';

export const config = {
    app: {
        'Mobile: React Native App': {
            script: 'mobile-react-native.sh',
            params: (answers) => {
                const params = [
                    answers.appName, 
                    `--template ${answers.template}`,
                ];
                
                if (answers.useNpm) {
                    params.push('--use-npm');
                }
                
                return params;
            },
            questions: [
                {
                    type: 'input',
                    name: 'workdir',
                    message: 'Work Directory',
                    default: DEFAULT_WORK_DIRECTORY,
                },
                {
                    type: 'input',
                    name: 'appName',
                    message: 'Name',
                    default: 'my-app',
                },
                {
                    type: 'list',
                    name: 'template',
                    message: 'Choose a template',
                    choices: ['blank', 'blank-typescript', 'tabs', 'bare-minimum'],
                    default: 'blank',
                },
                {
                    type: 'confirm',
                    name: 'useNpm',
                    message: 'Do you want to use npm (instead of yarn)?',
                    default: true,
                }
            ]
        },
        'Backend: Rest API, nodejs, express': {
            script: 'backend-rest-api-node-express.sh',
            params: (answers) => [answers.appName],
            questions: [
                {
                    type: 'input',
                    name: 'workdir',
                    message: 'Work Directory',
                    default: DEFAULT_WORK_DIRECTORY,
                },
                {
                    type: 'input',
                    name: 'appName',
                    message: 'Name',
                    default: 'my-api',
                }
            ]
        },
    },
    test: {
        'javascript': {
            script: 'javascript-test.sh',
            params: (answers) => [answers.websiteName],
            questions: [
                {
                    type: 'input',
                    name: 'workdir',
                    message: 'Work Directory',
                    default: DEFAULT_WORK_DIRECTORY,
                }
            ]
        },
        'python': {
            script: 'python-test.sh',
            params: (answers) => [answers.websiteName],
            questions: [
                {
                    type: 'input',
                    name: 'workdir',
                    message: 'Work Directory',
                    default: DEFAULT_WORK_DIRECTORY,
                }
            ]
        }
    }
};
