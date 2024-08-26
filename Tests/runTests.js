'To check wether the delete.yaml is working fine or not?'

const { execSync } = require('child_process');
const path = require('path');

const yamlFilePath = path.join(__dirname, 'delete.yaml');

function executeYAML() {
    try {
        console.log('Executing YAML test script...');
        const command = `maestro test ${yamlFilePath}`;
        const result = execSync(command, { encoding: 'utf8' });
        return result; 
    } catch (error) {
        console.error('Error executing the YAML test script:', error);
        return null; 
    }
}

function checkAssertionResult(output) {
    if (output.includes('Start Quiz')) { 
        console.log("Test passed, deletion successful");
    } else {
        console.log("Test failed");
    }
}

const testOutput = executeYAML();

if (testOutput) {
    checkAssertionResult(testOutput);
} else {
    console.log("No output to check.");
}
