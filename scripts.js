const DEFAULT_WORK_DIRECTORY = '/Users/dmitrygrinko/Projects/';

export const SCRIPTS_DIRECTORY = '/Users/dmitrygrinko/Projects/new/scripts';

export const config = {
    mobile: {
        'React Native App': {
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
    },
    frontend: {
        Angular: {
            script: 'angular.sh',
            params: (answers) => [
                answers.appName, 
                answers.style, 
                answers.routing, 
                answers.strict, 
                answers.skipTests, 
                answers.prefix, 
                answers.viewEncapsulation, 
                answers.skipGit, 
                answers.inlineStyle, 
                answers.inlineTemplate, 
                answers.packageManager,
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
                    message: 'Name',
                    default: 'angular-website',
                },
                {
                    type: 'list',
                    name: 'style',
                    message: 'Choose a stylesheet format',
                    choices: ['css', 'scss', 'sass', 'less', 'styl'],
                    default: 'css',
                },
                {
                    type: 'confirm',
                    name: 'routing',
                    message: 'Do you want to include Angular routing?',
                    default: false,
                },
                {
                    type: 'confirm',
                    name: 'strict',
                    message: 'Do you want to enable strict mode?',
                    default: true,
                },
                {
                    type: 'confirm',
                    name: 'skipTests',
                    message: 'Do you want to skip the creation of test files?',
                    default: false,
                },
                {
                    type: 'input',
                    name: 'prefix',
                    message: 'Prefix to apply to generated selectors',
                    default: 'app',
                },
                {
                    type: 'list',
                    name: 'viewEncapsulation',
                    message: 'Choose a view encapsulation strategy',
                    choices: ['None', 'Emulated', 'Native', 'ShadowDom'],
                    default: 'None',
                },
                {
                    type: 'confirm',
                    name: 'skipGit',
                    message: 'Do you want to skip initializing a git repository?',
                    default: false,
                },
                {
                    type: 'confirm',
                    name: 'inlineStyle',
                    message: 'Do you want to include styles inline in the component?',
                    default: false,
                },
                {
                    type: 'confirm',
                    name: 'inlineTemplate',
                    message: 'Do you want to include the template inline in the component?',
                    default: false,
                },
                {
                    type: 'list',
                    name: 'packageManager',
                    message: 'Choose a package manager',
                    choices: ['npm', 'yarn', 'pnpm'],
                    default: 'npm',
                },
            ]  
        },
        React: {
            script: 'react.sh',
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
                    default: 'react-website',
                }
            ]  
        },
    },
    backend: {
        'NodeJS Rest API': {
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
