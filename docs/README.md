**************************************************
# App Automation Tests
**************************************************


# Overview:
**************************************************

This repository contains automated test scripts for an Android application using Maestro. The tests cover key functionalities such as user authentication, story interactions, and quiz flows. The tests are designed to ensure that both new and existing users have a seamless experience while using the app.

**************************************************
# Project Structure
bash
Copy code
> AppAutomationTests/
│
├── tests/
│   └── maestro-test.yaml          # Maestro test script
│
├── recordings/
│   └── test_run_recording.mp4     # Recording of the test runs (Optional)
│
├── docs/
│   └── README.md                  # Project documentation
│
├── screenshots/
│   └── screenshot_1.png           # Screenshots from tests (Optional)
│
├── apk/
│   └── test_app.apk               # APK file for testing (Optional)
└── requirements.txt               # List of dependencies (Optional)



**************************************************
# Prerequisites:

Before running the tests, ensure you have the following installed:

Maestro CLI: 

Follow the installation guide here:
Java Development Kit (JDK): Required for running Android tests.
Android Debug Bridge (ADB): For device and emulator management.

# Getting Started:

1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/AppAutomationTests.git
cd AppAutomationTests
2. Install Maestro
If you haven't installed Maestro yet, you can do so using Homebrew (on macOS) or directly via the Maestro website:

bash
Copy code
brew install maestro
Or for direct installation, follow the instructions here.

3. Prepare the APK
Place your APK file in the apk/ directory if you haven’t already. You can also install the APK directly on the device or emulator.

4. Running the Tests
To run the tests, navigate to the project root and use the following command:


Copy code
`maestro test tests/maestro-test.yaml'

5. Viewing Results
Live Logs: You can view the test execution logs directly in your terminal.
Recordings: (Optional) Test recordings can be found in the recordings/ directory.
Screenshots: (Optional) Screenshots taken during tests will be stored in the screenshots/ directory.


**************************************************
# Test Scenarios

The following test scenarios are covered in the maestro-test.yaml script:

User Authentication:

New user creation and login.
Existing user login.
Logout and re-login.
Story Interactions:

Trigger a story as a new user.
Trigger a story as an existing user.
Test multiple story triggers.
Quiz Flow:

Start and complete a quiz as a new user.
Start and complete a quiz as an existing user.
Test quiz with various answers.
User Management:

Delete an existing user.
Attempt to log in after user deletion.
Contributing
We welcome contributions! If you’d like to improve the tests or add new ones, please follow these steps:

**************************************************
# Pushing Subsequent Changes, 

Make Changes Locally:
Edit your files as needed.
Stage and Commit Changes:

Stage the changes:
$ bash

Copy code
$ git add .

Commit the changes with a message:
$ bash

Copy code
$ git commit -m "Your commit message"

****************************************************
# Push Changes to GitHub:

Push the changes to GitHub:
bash
Copy code
git push


********************************************************
If you're facing version mismatch issue please follow below steps: 

Step 1: Kill Any Running ADB Instances
First, stop any running ADB servers:

bash
Copy code
adb kill-server
*********************************************************
Step 2: Remove Any Conflicting ADB Versions
You might have ADB installed from different sources (like the Android SDK and Ubuntu's package manager). You should remove the one from the package manager and use the one that comes with Android Studio.

Remove ADB installed via package manager:

bash
Copy code
sudo apt-get remove adb
Verify that ADB is not running:

bash
Copy code
adb version
If you get a "command not found" error, it means ADB has been successfully removed.

*********************************************************

Step 3: Use ADB from Android Studio
The correct version of ADB should be the one bundled with Android Studio. You can make sure that your system uses this version by adding it to your PATH.

Find the path to Android Studio’s ADB:

If you installed Android Studio in the default location, the path should be:

bash
Copy code
~/Android/Sdk/platform-tools/adb
Add this to your PATH:

You can add this to your .bashrc or .bash_profile file to make sure this ADB version is used by default.

Open your .bashrc file:

bash
Copy code
nano ~/.bashrc
Add the following line to the end of the file:

bash
Copy code
export PATH=$PATH:~/Android/Sdk/platform-tools
Save the file and exit the editor.

Reload your terminal:

Run the following command to apply the changes:

bash
Copy code
source ~/.bashrc
*********************************************************
Step 4: Restart the ADB Server
Now start the ADB server using the correct version:

bash
Copy code
adb start-server
*********************************************************
Step 5: Install the APK Again
Finally, try to install the APK again:

bash
Copy code
adb install path/to/app-release.apk

This should resolve the version mismatch issue and allow you to install the APK successfully.
***

To run tests, use commands

maestro test file_name

To See tests running: 

run this command - maestro studio 