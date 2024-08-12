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
    database: {
        'PostgreSQL-Docker': {
            script: 'db-postgresql.sh',
            params: (answers) => [
                answers.appName, 
                answers.POSTGRES_USER, 
                answers.POSTGRES_PASSWORD, 
                answers.POSTGRES_DB, 
                answers.PORT
            ],
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
                    message: 'App Name',
                    default: 'my-database',
                },
                {
                    type: 'input',
                    name: 'POSTGRES_USER',
                    message: 'Postgres User',
                    default: 'postgres',
                },
                {
                    type: 'input',
                    name: 'POSTGRES_PASSWORD',
                    message: 'Postgres Password',
                },
                {
                    type: 'input',
                    name: 'POSTGRES_DB',
                    message: 'Database Name',
                    default: 'mydatabase',
                },
                {
                    type: 'input',
                    name: 'PORT',
                    message: 'Port',
                    default: '5432',
                }
            ]
        },
        'MySQL-Docker': {
            script: 'db-mysql.sh',
            params: (answers) => [
                answers.appName, 
                answers.MYSQL_USER, 
                answers.MYSQL_PASSWORD, 
                answers.MYSQL_DATABASE, 
                answers.PORT
            ],
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
                    message: 'App Name',
                    default: 'my-database',
                },
                {
                    type: 'input',
                    name: 'MYSQL_USER',
                    message: 'MySQL User',
                    default: 'root',
                },
                {
                    type: 'input',
                    name: 'MYSQL_PASSWORD',
                    message: 'MySQL Password',
                },
                {
                    type: 'input',
                    name: 'MYSQL_DATABASE',
                    message: 'Database Name',
                    default: 'mydatabase',
                },
                {
                    type: 'input',
                    name: 'PORT',
                    message: 'Port',
                    default: '3306',
                }
            ]
        },
    },
    test: {
        'javascript': {
            script: 'javascript-test.sh',
            params: () => [],
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
            params: () => [],
            questions: [
                {
                    type: 'input',
                    name: 'workdir',
                    message: 'Work Directory',
                    default: DEFAULT_WORK_DIRECTORY,
                }
            ]
        }
    },
};
