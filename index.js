import inquirer from 'inquirer';
import { spawn } from 'child_process';
import { config, SCRIPTS_DIRECTORY } from './scripts.js';

const categoryQuestion = [
    {
        type: 'list',
        name: 'category',
        message: 'Category',
        choices: Object.keys(config),
        default: 'app'
    }
];

function ask() {
    inquirer.prompt(categoryQuestion).then((categoryAnswer) => {
        const scriptsInCategory = Object.keys(config[categoryAnswer.category]);

        const mainQuestions = [
            {
                type: 'list',
                name: 'script',
                message: `Script`,
                choices: scriptsInCategory,
                default: scriptsInCategory[0]
            }
        ];

        inquirer.prompt(mainQuestions).then((mainAnswer) => {
            const selectedScript = config[categoryAnswer.category][mainAnswer.script];

            inquirer.prompt(selectedScript.questions).then((answers) => {
                const params = selectedScript.params(answers);
                
                const scriptPath = `${SCRIPTS_DIRECTORY}/${selectedScript.script}`;
                
                const script = spawn('sh', [scriptPath, answers.workdir, ...params]);

                script.stdout.on('data', (data) => {
                    console.log(`${data}`);
                });

                script.stderr.on('data', (data) => {
                    console.error(`${data}`);
                });

                script.on('close', (code) => {
                    if (code === 0 && answers.appName) {
                        console.log(`open ~/Projects/${answers.appName}`);
                    }
                });
            }).catch(err => {
                // Exit silently on interrupt or other errors
                process.exit();
            });
        }).catch(err => {
            // Exit silently on interrupt or other errors
            process.exit();
        });
    }).catch(err => {
        // Exit silently on interrupt or other errors
        process.exit();
    });
}

ask();
