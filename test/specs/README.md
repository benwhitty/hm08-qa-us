# Sprint 8 project 

The tasks of this project consist of completing a task that requires writing several tests to check the functionality of Urban Routes. The instructions state: "Write your tests in the createAnOrder.e2e.js file located in the test/specs folder."

# Task 1 
Write automated tests covering the full process of ordering a taxi. The tests should cover:

1. Setting the address
2. Selecting Supportive plan
3. Filling in the phone number
4. Adding a credit card (Tip: the “link” button doesn’t become active until the card CVV field on the “Adding a card” modal id=”code” class=”card-input” loses focus. To change focus you can simulate the user pressing TAB or clicking somewhere else on the screen).
5. Writing a message for the driver
6. Ordering a Blanket and handkerchiefs (Tip: there are two selectors to be aware of here. One selector to click on and one to run expect on to verify that the state changed).
7. Ordering 2 Ice creams
8. The car search modal appears
9. Waiting for the driver info to appear in the modal (OPTIONAL) In addition to the steps above there is an optional step you can check. This one is a bit more tricky than the others but it’s good practice since you will likely encounter more difficult tasks in your career. 

# Task 2
Add a README.md file to the root directory of the project. The README should include the project’s name, a description of the project, a description of the technologies and techniques used, and instructions on how to run the tests.

 # Description of technologies and techniques used to test functionality of Urban Routes:

- Step 1: Use GitBash to clone your repository; git clone git@github.com:username/hm08-qa-us.git
- Step 2: Work with the project locally using VS Code. You should write each individual test using VS Code
- Step 3: Open Urban Routes Server; URL 
- Step 4: Test your scripts using terminal in VS Code

# Instructions on how to configure resources used for testing

- *Step 1: Connect your GitHub*
The first step was to link my GitHub account to Practicum. To do so, I clicked the "Link GitHub account" button in the widget at the top of this page. This took me to a new browser tab where I was asked to confirm that I wanted to link your GitHub account. Upon confirming, my Practicum profile was connected to to my GitHub profile via GitHub's secure API. This allowed me to submit my projects automatically at the click of a button, directly within the Practicum platform.

- *Step 2. Clone the repo to your computer*
Once I linked my Practicum account with GitHub, a repository was created automatically. The repository name was hm08-qa-us.
I then went to GitHub and cloned the new repo to my local computer, using the following steps:
Open your preferred terminal emulator. If you’re on Windows, use Git Bash (I am on windows).
If you haven’t done so already, create a directory to store all of your projects. For example:
 cd ~               # make sure you're in your home directory
 mkdir projects     # create a folder called projects
 cd projects        # change directory into the new projects folder
  
Clone the repo. The command you use will depend on the authentication strategy that you’re using.
 # if you are using HTTPS
 git clone https://github.com/username/hm08-qa-us.git
 
 # if you are using SSH
 git clone git@github.com:username/hm08-qa-us.git
  
💡 Make sure that you clone the correct repo. I chose SSH, and the username should be your own username, not practicum-com.

- *Step 3. Work with the project locally*
Now I have a local copy of the project and can open the project folder on my computer.
Before starting your work with the project, run npm install from the console in your project folder.
💡 When working on the project locally, you can use a standard text editor, but I recommend using VS Code. Simply open VS Code and select File → Open Folder and then select the hm08-qa-us folder that you cloned to your computer.

In config.js, replace the API URL with the unique link generated after the launch of Urban Routes server. This helps us to declare the URL in one place and then use it throughout the whole project.
When you’re ready to start working, hit the “start server” button to get your server URL.
Great, your server is on!

# This is Project 8 Submission #2 (The first submission was an accident! The project was not complete!)
I am attaching screen shots of my work thus far. Having some difficulty but cannot seem to troubleshoot! 

# Screenshots
I added the screenshots under the issues tab in Github