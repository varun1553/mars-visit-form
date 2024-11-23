Mars Visit Application Form:
- This project is a multi-stage form for users to apply for a Mars visit. It includes various stages such as personal information, travel preferences, and health and safety declarations. The form is built using React, Material UI, and CSS for styling.

Features:
- Collects personal information (Name, Email, Phone, etc.)
- Collects travel preferences (Dates, Accommodation, Special requests)
- Collects health & safety information (Health Declaration, Emergency Contact, Medical Conditions)
- Displays a progress bar for each form stage
- Form validation to ensure all required fields are filled
- Success message after form submission

Prerequisites:
- Before setting up the project, ensure you have the following installed:
    1. Node.js (which includes npm)
    2. Git
    3. A text editor like Visual Studio Code

Setup Instructions:

1. Clone the Repository
- Start by cloning the project repository to your local machine:
    git clone https://github.com/your-username/mars-visit-form.git
    cd mars-visit-form

2. Install Dependencies
- Install the necessary npm dependencies:
    npm install: This will install all the required dependencies for the project, including React, Material UI, and other libraries.

3. Running the Project
- To run the project locally, use the following command:
    npm start: This will start the React development server, and you should be able to view the application by opening your browser and going to: http://localhost:3000

4. Building the Project
- If you want to build the project for production (i.e., to deploy it), run: npm run build
- This will create an optimized build of the application in the build/ directory. You can then deploy it to your hosting provider.

src/components/: Contains the main component of the form.
src/App.js: Main entry point for the app.
public/: Static files like index.html.
README.md: Project documentation.

Technologies Used
1. React: A JavaScript library for building user interfaces.
2. Material UI: A popular React UI framework for styling components.
3. CSS: Custom styles for form and layout.