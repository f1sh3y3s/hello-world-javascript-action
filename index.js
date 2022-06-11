const core = require("@actions/core")
const github = require("@actions/github");

async function run() {
    try {
        // `who-to-greet` input defined in action metadata file
        const nameToGreet = core.getInput('who-to-greet');
        const myToken = core.getInput("myToken")
        console.log(`Hello ${nameToGreet}!`);
        console.log(`token ${myToken} ${github.token} `)
        // const octokit = github.getOctokit(github.token)

        // const workflows = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows', github.context.repo)
        // console.log(workflows)
        const time = (new Date()).toTimeString();
        core.setOutput("time", time);
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);
    } catch (error) {
        core.setFailed(error.message);
    }

}

run()