# Secret Santa Website Documentation

## Table of Contents

1. [Abstract](#abstract)
2. [Introduction](#introduction)
3. [Objectives](#objectives)
   1. [Enhance User Experience](#enhance-user-experience)
   2. [Streamline Event Management](#streamline-event-management)
   3. [Increase Participation](#increase-participation)
   4. [Ensure Data Security](#ensure-data-security)
   5. [Expand Feature Set](#expand-feature-set)
   6. [Improve Communication](#improve-communication)
   7. [Promote Accessibility](#promote-accessibility)
   8. [Drive Engagement](#drive-engagement)
   9. [Facilitate Internationalization](#facilitate-internationalization)
   10. [Measure Success](#measure-success)
4. [Identifying the Need](#identifying-the-need)
5. [Secret Santa Website Process](#secret-santa-website-process)
   1. [Admin Registration](#admin-registration)
   2. [Admin Login](#admin-login)
   3. [Home Page](#home-page)
   4. [QR Code Generation](#qr-code-generation)
   5. [Employee Management](#employee-management)
   6. [Viewing Secret Santa Records](#viewing-secret-santa-records)
   7. [Email Management](#email-management)
6. [Technologies Used](#technologies-used)
   1. [Frontend](#frontend)
   2. [Backend](#backend)
7. [Testing with Selenium in Eclipse](#testing-with-selenium-in-eclipse)
   1. [Introduction to Selenium](#introduction-to-selenium)
   2. [Basic Setup For Selenium(JDK, Maven Project, Eclipse)](#basic-setup-for-seleniumjdk-maven-project-eclipse)
   3. [Open browser using Selenium(WebDriver , Eclipse)](#open-browser-using-seleniumwebdriver--eclipse)
   4. [Write Testcase, step(TestNG, Installation, Configure)](#write-testcase-stepTestNG-installation-configure)
   5. [Locators In Selenium (TestNG Priority Attribute)](#locators-in-selenium-testng-priority-attribute)
   6. [Automating Secret Santa Website](#automating-secret-santa-website)

7. [PlantUML of Secret Santa Website](#plantuml-of-secret-santa-website)
8. [Comprehensive Overview of Secret Santa Application](#comprehensive-overview-of-secret-santa-application)
9. [Conclusion](#conclusion)


## Abstract


The Secret Santa Website documentation outlines the development and implementation of a dedicated platform designed to streamline and enhance the Secret Santa gift exchange process within an organization. The initiative stemmed from challenges faced during previous Christmas celebrations, including confusion and inefficiencies in manually managing the gift exchange.

The document begins with an introduction to the objectives of the Secret Santa Website, which include enhancing user experience, streamlining event management, increasing participation, ensuring data security, expanding feature sets, improving communication, promoting accessibility, driving engagement, facilitating internationalization, and measuring success.

The need for such a platform arose from observations during past celebrations, leading to collaboration *January Intern* to find a solution. The development process is detailed, covering aspects such as admin registration, login, home page functionalities, QR code generation, employee management, viewing Secret Santa records, and email management.


Technologies used in the frontend and backend development are extensively discussed, including HTML, CSS, JavaScript, React.js, Axios, Express.js, MongoDB, Node.js, Mongoose, Nodemailer, and others. The integration of Selenium testing in Eclipse for automated testing is also highlighted, along with a PlantUML diagram illustrating the Secret Santa Website's architecture.

The comprehensive overview of the application includes insights into user authentication, employee management, Secret Santa assignment, frontend components, routing, event handlers, API requests, styling, and additional features like QR code generation and email notifications.

In conclusion, the Secret Santa Website documentation emphasizes the platform's role in enhancing office celebrations, fostering inclusivity, and creating memorable holiday experiences for employees. Continuous improvements and enhancements are planned to ensure ongoing success and positive engagement in future celebrations.


## Introduction

The Secret Santa Website facilitates several essential processes to ensure the smooth and effective management of Secret Santa events within our organization. It begins with admin registration, where new administrators can easily create accounts by providing necessary details like their name, email, and password. Once this information is provided, the system validates it for accuracy, and upon successful validation, a new admin account is created, directing the admin to the login page for access.

Once logged in, administrators can navigate to the home page, where they are presented with various options to manage the Secret Santa event. One crucial feature is the QR code generation tool, allowing admins to generate unique QR codes for each participant, simplifying the process of assigning Secret Santas. These generated QR codes can be saved and distributed to employees, providing a seamless way for everyone to access their Secret Santa assignments.

The website also offers employee management functionalities, enabling admins to view, add, or delete employee details as needed. This feature ensures that participant information remains up-to-date and accurate throughout the event. Additionally, admins can easily access Secret Santa records to oversee and manage the gift exchange process effectively.

Moreover, the Secret Santa Website automates email notifications, sending them out on December 26th to inform participants of their assigned Secret Santas. These emails contain all the necessary details, ensuring clarity and transparency in the gift exchange process. Overall, the website streamlines the organization and execution of Secret Santa events, making it a valuable tool for creating memorable holiday experiences within our organization.

# Objectives

1. # Enhance User Experience:
2. Improve the website's usability and interface to ensure a seamless and enjoyable experience for users participating in the Secret Santa event.

3. # Streamline Event Management:
   Develop administrative tools to simplify the process of organizing and managing the Secret Santa event, including features for employee data management and event tracking.

4. # Increase Participation:
    Implement features and incentives to encourage higher participation rates among employees, fostering a greater sense of community and holiday spirit within the organization.

6. # Ensure Data Security:
    Strengthen security measures to protect user data and ensure compliance with privacy regulations, maintaining trust and confidence among participants.

8. # Expand Feature Set:
    Introduce new functionalities and integrations to enrich the Secret Santa experience, catering to diverse user preferences and needs.

10. # Improve Communication:
    Enhance communication channels between participants and administrators, facilitating clearer instructions, reminders, and notifications throughout the event.

12. # Promote Accessibility:
     Optimize the website for accessibility to ensure that all users, including those with disabilities, can fully participate in the Secret Santa event without barriers.

14. # Drive Engagement:
    Incorporate gamification elements and community-building activities to enhance engagement and excitement surrounding the Secret Santa event.

16. # Facilitate Internationalization:
     Support multiple languages and cultural customs to accommodate participants from diverse backgrounds and regions, promoting inclusivity and cultural sensitivity.

18. # Measure Success:
     Establish key performance indicators (KPIs) to track the effectiveness of the Secret Santa Website in achieving its objectives and iteratively improve based on feedback and analytics.



## Identifying the Need
We noticed some issues during our previous office Christmas celebrations, especially concerning the organization of our Secret Santa gift exchange. Managing it manually led to confusion and made it challenging to ensure fairness for everyone involved. People often became confused about who they were supposed to give gifts to, which dampened the fun of the event.

Our mentors and Rashmi Chaudhary, Ma'am, identified these problems and realized the need for a better way to manage our Secret Santa event. They assigned the task to find a solution to the January intern. Everyone pitched in with their ideas, and among them, Aman's idea was chosen. The task of implementing the solution was then assigned to Aman, Aditi, and Irfan.


## Secret Santa Website Process

The Secret Santa Website facilitates various processes to ensure smooth operation and effective management of Secret Santa events within our organization. Here's a breakdown of each process:

### Admin Registration

1. **New admin visit the registration page:** New admins access the registration page to create an account.
2. **Provide necessary details:** Admins provide required information such as name, email, and password.
3. **Validate information:** The system validates the provided information.
4. **Generate OTP:** An OTP (One-Time Password) is generated and sent to the admin's provided email for verification.
5. **Verify OTP:** Admin verifies the OTP to confirm their identity.
6. **Create new admin account:** Upon successful OTP verification, a new admin account is created.
7. **Admin directed to login page:** The admin is then redirected to the login page.


![Screenshot from 2024-03-27 12-15-02](https://github.com/Aditi22222/SecretSanta/assets/162342704/49ff546a-84aa-4678-8455-eb672d6e20d2)

![image](https://github.com/Aditi22222/SecretSanta/assets/162342704/a50b3f4a-f819-4d7e-9590-40c8debbcd41)


### Admin Login
1. **Admin enters login credentials:** Admins enter their registered email and password.
2. **Validate login credentials:** The system validates the entered credentials.
3. **Redirect to home page upon successful login:** Upon successful validation, admins are redirected to the home page.
4. **Forgot password option:** Admins have the option to reset their password if forgotten.

![Screenshot from 2024-03-27 10-39-54](https://github.com/Aditi22222/SecretSanta/assets/162342704/1e9998a7-cd9d-457c-94db-0a2cb063582a)

![Screenshot from 2024-03-27 10-40-17](https://github.com/Aditi22222/SecretSanta/assets/162342704/9e4db4a6-bed4-4173-8cf5-af6e95757289)


### Home Page
1. **Choose from various options:** Admins can choose from various options available on the home page.

 ![Screenshot 2024-03-21 103743](https://github.com/Aditi22222/SecretSanta/assets/162342704/586b6bd6-9a7e-45ef-8b7e-12ef8fd51660)




### QR Code Generation
1. **Admins access QR code generation:** Admins access the feature to generate QR codes.
2. **Generate QR code to become a Secret Santa:** QR codes are generated for each participant to become a Secret Santa.
3. **Save QR codes in a document file:** Generated QR codes are saved in a document file.
4. **Distribute QR codes to employees:** Admins distribute QR codes to employees.
5. **QR code button for each employee:** Each employee has a QR code button associated with their name.
6. **Fill out the form:** Upon scanning, employees fill out a form.
7. **Form submission:** After form submission, employees are informed of the name of the person they are assigned to be the Secret Santa for.

 ![Screenshot from 2024-03-27 10-41-06](https://github.com/Aditi22222/SecretSanta/assets/162342704/9aad3a12-37e0-4dc7-8b3c-d4e15b2fca0f)


 ![Screenshot from 2024-03-27 10-42-33](https://github.com/Aditi22222/SecretSanta/assets/162342704/3a33873e-aedf-42f9-84dc-dc2a6e7d7770)


### Employee Management
1. **View/Add/Delete Employee List:** Admins can view, add, or delete employee details.
2. **Manage employee details:** Admins can manage employee details as needed.
3. **Update Employee Information:** Admins have the option to update employee information, ensuring that the data remains accurate and up to date.

![Screenshot from 2024-03-27 10-41-21](https://github.com/Aditi22222/SecretSanta/assets/162342704/19f59ebb-a119-4c3e-93c7-49342edd6360)
![Screenshot 2024-03-21 102757](https://github.com/Aditi22222/SecretSanta/assets/162342704/c8290507-7e7d-43d1-849d-7c8c2d570192)




### Viewing Secret Santa Records
1. **View Secret Santa records:** Admins can view Secret Santa assignments.

   ![Screenshot 2024-03-14 162008](https://github.com/Aditi22222/SecretSanta/assets/162342704/19e5a9bf-5138-4c85-b5e1-c159ffb04a0b)

### Email Management
1. **System sends email notifications on December 26th:** Email notifications containing assigned Secret Santa details are sent.
2. **Contain assigned Secret Santa details:** Email notifications contain assigned Secret Santa details.
3. **Disclose assigned Secret Santa details via email:** Assigned Secret Santa details are disclosed via email.

![Screenshot from 2024-03-27 10-43-09](https://github.com/Aditi22222/SecretSanta/assets/162342704/8fb05804-244c-4b17-a703-6e3313655fe9)


## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript
- React.js for building user interfaces
- Axios for making HTTP requests
- Express.js for backend API integration
- React Router DOM for client-side routing
- Web Vitals for web performance monitoring
- QRCode.react for generating QR codes
- react-hot-toast for toast notifications
- init for project initialization

![Screenshot 2024-03-15 110846](https://github.com/Aditi22222/SecretSanta/assets/162342704/5c4f045c-6d9c-4445-8f08-cd6cd4801f1a)

### Backend
- Node.js for server-side operations
- Express.js for building RESTful APIs
- MongoDB for database management
- Mongoose for MongoDB object modeling
- Nodemailer for sending emails
- bcrypt for password hashing
- Cors for enabling CORS in Express.js
- Nodemon for automatic server restarts during development
- React Router for routing on the server side

![Screenshot 2024-03-15 110916](https://github.com/Aditi22222/SecretSanta/assets/162342704/acc601dd-7a21-486b-afcd-35aee64e91c5)

### Frontend

- **HTML (Hypertext Markup Language):**
  - HTML is the standard markup language used for creating the structure and content of web pages.
  - It defines the layout and elements displayed on the user interface of the Secret Santa Website.

- **CSS (Cascading Style Sheets):**
  - CSS is used to style HTML elements, defining their appearance, layout, and visual presentation.
  - It enhances the aesthetics and user experience by controlling colors, fonts, and spacing.

- **JavaScript:**
  - JavaScript enables dynamic interactions and functionalities on web pages.
  - It handles user events and implements dynamic features to enhance interactivity.

- **React.js:**
  - React.js is a JavaScript library for building user interfaces.
  - It allows for creating reusable UI components and managing application state efficiently.

- **Axios:**
  - Axios is a promise-based HTTP client for making asynchronous HTTP requests in JavaScript applications.
  - It is used for making HTTP requests to the backend server and fetching data.

- **Express.js:**
  - Express.js is a minimalist web application framework for Node.js.
  - It is utilized for server-side rendering and routing in the frontend of the Secret Santa Website.

- **React Router DOM:**
  - React Router DOM provides routing capabilities to React applications.
  - It enables navigation between different pages without full page reloads.

- **Web Vitals:**
  - Web Vitals is used for monitoring key performance metrics such as page load time and interactivity.
  - It ensures optimal performance and user satisfaction.

- **QRCode.react:**
  - QRCode.react is a React component library for generating QR codes dynamically.
  - It facilitates the assignment of Secret Santas and enhances the user experience.

- **react-hot-toast:**
  - react-hot-toast is a library for displaying toast notifications in React applications.
  - It provides a simple way to show informative messages to users.

- **init:**
  - init is a command-line utility for initializing new projects and configuring dependencies.
  - It sets up the project structure and installs necessary dependencies.

### Backend

- **Node.js:**
  - Node.js is a runtime environment for executing JavaScript code outside of a web browser.
  - It is used for server-side operations in the Secret Santa Website.

- **Express.js:**
  - Express.js is a web application framework for Node.js.
  - It is utilized for building RESTful APIs, handling HTTP requests, and routing.

- **MongoDB:**
  - MongoDB is a NoSQL database management system.
  - It is used for storing and managing data in the Secret Santa Website.

- **Mongoose:**
  - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
  - It provides a schema-based solution for modeling application data.

- **Nodemailer:**
  - Nodemailer is a module for sending emails from Node.js applications.
  - It is used for sending email notifications to users.

- **bcrypt:**
  - bcrypt is a library for hashing passwords securely in Node.js applications.
  - It ensures the security of user authentication credentials.

- **Cors:**
  - Cors is a middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js applications.
  - It facilitates communication between frontend and backend components.

- **Nodemon:**
  - Nodemon is a utility for automatically restarting Node.js applications when file changes are detected.
  - It enhances the development workflow by reducing manual intervention.

- **React Router:**
  - React Router is a library for routing in React applications.
  - It is used for server-side routing in the backend of the Secret Santa Website.


# Testing with Selenium in Eclipse

# Introduction to Selenium

# Selenium: Automating Web Testing

Selenium is a suite of tools and libraries for automated web testing and browser automation. It simplifies testing web applications across different browsers and platforms.

## Features

- Interact with web elements
- Simulate user actions
- Validate expected behaviors

## Compatibility

- Works with Chrome, Firefox, Safari, and Internet Explorer
- Ensures consistent behavior across browsers

## Language Support

- Java, Python, C#, Ruby, JavaScript, and more
- Integrates seamlessly into development workflows

## Applications

- Web testing
- Web scraping
- Data extraction
- Browser automation

## Benefits

- Accelerates testing process
- Enhances application quality
- Delivers better user experiences


# Basic Setup For Selenium(JDK, Maven Project, Eclipse 
To set up a basic Selenium project using JDK, Maven, and Eclipse, follow these steps:

### Step 1: Install JDK (Java Development Kit)

1. Download and install the latest version of JDK from the official Oracle website.
2. Set up the JAVA_HOME environment variable to point to the JDK installation directory.
   
   ![Screenshot 2024-03-07 102822](https://github.com/Aditi22222/Selenium/assets/162342704/190b5212-a3eb-4b0f-bec3-c53d29395cc2)


### Step 2: Install Eclipse IDE

1. Download and install the Eclipse IDE for Java Developers from the Eclipse Foundation website.
2. Launch Eclipse and set up any necessary preferences.

    ![Screenshot 2024-03-07 103403](https://github.com/Aditi22222/Selenium/assets/162342704/ca0c9b41-4892-41ef-b6a1-2857b08f8c6a)

### Step 3: Create a Maven Project

1. Open Eclipse IDE.
2. Go to "File" -> "New" -> "Other...".
3. In the wizard, select "Maven" -> "Maven Project" and click "Next".
4. Choose "Create a simple project (skip archetype selection)" and click "Next".
5. Enter the Group Id, Artifact Id, and Version for your project. Click "Finish" to create the Maven project.

    ![Screenshot 2024-03-07 103801](https://github.com/Aditi22222/Selenium/assets/162342704/0e6e7e35-de12-42c7-84b1-5faf3c325c66)

    ![Screenshot 2024-03-07 103844](https://github.com/Aditi22222/Selenium/assets/162342704/46ab9d6c-395c-46ae-b6fa-3b02eb705d90)
   

### Step 4: Add Selenium Dependencies

1. **Save the File:** After adding the dependencies, save the `pom.xml` file.

2. **Update Maven Project:** Right-click on your Maven project in the project explorer, navigate to "Maven" -> "Update Project...". This will update the project with the newly added dependencies.

3. **Wait for Dependencies to Download:** Maven will automatically download the required libraries and manage them for you. Wait for Maven to finish downloading the dependencies.

4. **Verify Dependencies:** Once the dependencies are downloaded successfully, you can verify that they are added to your project by expanding the "Maven Dependencies" folder in the project explorer.


![Screenshot 2024-03-07 111936](https://github.com/Aditi22222/Selenium/assets/162342704/4b2111f2-4cff-4db6-85f8-66498d1ca426)

### Step 5: Write Your Selenium Tests

1. Create a new Java class within your Maven project.
2. Write your Selenium test code using the Selenium WebDriver API.
3. Make sure to include necessary import statements for Selenium classes.
   
   ![image](https://github.com/Aditi22222/SecretSanta/assets/162342704/f9e7d64c-c268-44c8-8568-4130676ee94a)


# Open browser using Selenium(WebDriver , Eclipse)

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class OpenBrowser {
    public static void main(String[] args) {
       
         1. Set the system property to specify the location of the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "C:\\salanium testing\\chromedriver\\chromedriver-win32\\chromedriver.exe");
        
        2. Initialize a new instance of the ChromeDriver class
        WebDriver driver = new ChromeDriver();
        
         3. Open a new browser window
        driver.get("https://www.example.com");
    }
}
 # Write Testcase, step(TestNG, Installation, Configure)

1. **Open Eclipse IDE:**
   - Launch the Eclipse IDE on your computer.

2. **Access the Eclipse Marketplace:**
   - Go to `Help` > `Eclipse Marketplace...` from the top menu bar.

3. **Search for TestNG:**
   - In the Eclipse Marketplace dialog, type "TestNG" into the search bar.

4. **Select TestNG from Search Results:**
   - From the search results, find "TestNG for Eclipse" and click on it.

5. **Install TestNG:**
   - Click on the `Go to the marketplace` button.
   - Click on the `Install` button next to "TestNG for Eclipse".

6. **Review Installation Details:**
   - Review the details of the installation including the software being installed and its dependencies.

7. **Accept License Agreement:**
   - Accept the terms of the license agreement and click `Finish`.

8. **Restart Eclipse:**
   - Once the installation is complete, Eclipse will prompt you to restart.
   - Click `Yes` to restart Eclipse.

9. **Verify TestNG Installation:**
   - After restarting Eclipse, create a new Java project or open an existing one.
   - Right-click on the project, go to `Properties` > `TestNG`.
   - Verify that TestNG is listed as one of the testing frameworks.

10. **TestNG is Installed Successfully:**
    - Congratulations! You have successfully installed TestNG in Eclipse via the Eclipse Marketplace.

![Screenshot 2024-03-07 144713](https://github.com/Aditi22222/Selenium/assets/162342704/9c1b3c06-7987-4801-8d8a-f84db51fa6c2)



# Locators In Selenium (TestNG Priority Attribute)

Selenium WebDriver is a powerful tool for automating web applications. Locators are used to identify elements on a web page, and TestNG's priority attribute allows you to prioritize the execution order of test methods.

#### Locating Elements with Selenium WebDriver

1. **ID Locator:**
   - Use `driver.findElement(By.id("element_id"))` to locate elements by their ID attribute.

2. **Name Locator:**
   - Use `driver.findElement(By.name("element_name"))` to locate elements by their Name attribute.

3. **Class Name Locator:**
   - Use `driver.findElement(By.className("element_class"))` to locate elements by their Class Name attribute.

4. **Tag Name Locator:**
   - Use `driver.findElement(By.tagName("tag_name"))` to locate elements by their HTML tag.

5. **Link Text Locator:**
   - Use `driver.findElement(By.linkText("link_text"))` to locate anchor elements by their visible text.

6. **Partial Link Text Locator:**
   - Use `driver.findElement(By.partialLinkText("partial_link_text"))` to locate anchor elements by partial visible text.

7. **XPath Locator:**
   - Use `driver.findElement(By.xpath("xpath_expression"))` to locate elements using XPath.

8. **CSS Selector Locator:**
   - Use `driver.findElement(By.cssSelector("css_selector"))` to locate elements using CSS selectors.

#### Using TestNG Priority Attribute

The priority attribute in TestNG allows you to prioritize the order of test method execution.

1. **Specify Priority in TestNG Annotations:**
   - Use the `priority` attribute in `@Test` annotation to specify the execution order of test methods.
   - TestNG will execute the test methods in ascending order of their priority values.



# Automating Secret Santa Website

 ## Secret Santa Testing Process :
 
![Screenshot 2024-03-15 111449](https://github.com/Aditi22222/SecretSanta/assets/162342704/4c45bb6a-b7ce-4c66-8e9c-c434c36d4c75)
 
 - Description of the first step in the Secret Santa testing process.

![Screenshot 2024-03-15 112155](https://github.com/Aditi22222/SecretSanta/assets/162342704/d27e2f9a-8b8a-44d9-be9b-9189c75d554f)

- Description of the second step in the Secret Santa testing process.

![Screenshot 2024-03-15 112134](https://github.com/Aditi22222/SecretSanta/assets/162342704/73032979-2896-43fb-9a48-066d366739cb)

- Description of the third step in the Secret Santa testing process.

![Screenshot 2024-03-15 112217](https://github.com/Aditi22222/SecretSanta/assets/162342704/299b3aa2-a1a2-4da2-bb2a-51984c7d7163)

 - Description of the fourth step in the Secret Santa testing process.
  # QR scanner
  
   - The testing process began with verifying the QR scanner functionality.
   - Screenshots were captured to document the scanning process and ensure that QR codes were being recognized correctly.

![Screenshot 2024-03-15 111507](https://github.com/Aditi22222/SecretSanta/assets/162342704/55307fae-be03-47ef-8ba6-48106ad266e0)

![Screenshot 2024-03-15 112229](https://github.com/Aditi22222/SecretSanta/assets/162342704/6069ea53-6a7f-41ea-8889-a28694f5d10d)


 # Register 

 - Next, the registration process was tested to ensure users could successfully register on the Secret Santa website.
 - Screenshots were taken to validate each step of the registration flow.

![Screenshot 2024-03-15 111519](https://github.com/Aditi22222/SecretSanta/assets/162342704/b9097884-9c31-43bb-83c2-683b0a897995)

![Screenshot 2024-03-15 112244](https://github.com/Aditi22222/SecretSanta/assets/162342704/707a1bcb-f5d9-47f8-9f8e-dd23849ac760)

![Screenshot 2024-03-15 112304](https://github.com/Aditi22222/SecretSanta/assets/162342704/ac27df2f-81ee-48bf-a5b7-e7e379d5a9a7)

### Analyzing Test Results:

After executing the test scripts, the results were analyzed to ensure that the Secret Santa Website functioned as expected. Test cases were designed to cover various functionalities of the website, including user authentication, QR code generation, and email notifications.

By utilizing Selenium WebDriver in Eclipse, comprehensive testing of the Secret Santa Website was conducted to verify its functionality, reliability, and user experience.

## PlantUML of Secret Santa Website

The PlantUML diagram illustrates the architecture and components of the Secret Santa Website. It visualizes the various modules and their interactions within the system, providing a comprehensive overview of its structure.

### Components:

- **Admin Registration:** Represents the process flow for new administrators to register accounts, validate information, and create new admin accounts.

- **Admin Login:** Illustrates the steps involved in admin login, including entering credentials, validating them, and redirecting to the home page upon successful login.

- **Home Page:** Displays the options available to administrators upon logging in, such as accessing QR code generation, employee management, and viewing Secret Santa records.

- **QR Code Generation:** Demonstrates the steps for admins to generate QR codes for Secret Santa assignments, save them, distribute them to employees, and associate QR codes with each employee.

- **Employee Management:** Depicts the functionalities related to managing employee details, including viewing, adding, and deleting employee information.

- **Viewing Secret Santa Records:** Shows how administrators can view Secret Santa assignments and manage them effectively within the system.

- **Email Management:** Represents the process of sending email notifications containing Secret Santa details to participants on December 26th, ensuring transparency and clarity in the gift exchange process.

### Technologies Used:

- **Frontend:** HTML, CSS, JavaScript, React.js, Axios, Express.js, React Router DOM, Web Vitals, QRCode.react, react-hot-toast, init.

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Nodemailer, bcrypt, Cors, Nodemon, React Router.

The diagram provides a visual reference for understanding the Secret Santa Website's architecture, component interactions, and underlying technologies, facilitating better comprehension of its functionalities and implementation details.

![dLPBSzms3BxhLt1oTpBJGmyvT19xtIOTEt6zgNFe-C2bi5hQ4haXgKqydVxtWWH5FRmIlT5913wyGGBlhEF6jKrT5FPHgZqtl65xBXvv1UpVWk5tZgVAw5QL5xhMXbt9QkTkf7eahZOb6EASrmWj_YkAJi6hzsKZ5Rk5Ibfdk9DQlOfQ__a4tnaFx8EqqZ6t0sO6GFIYWdl2tXXza2Km1GAivUQ9bU2uh6tat_5Qbjm1asghJHFa8-l2W6](https://github.com/Aditi22222/SecretSanta/assets/162342704/62487bba-fb92-4740-9556-291d0a9988cf)

 # Comprehensive Overview of Secret Santa Application
 ## Backend: Node.js/Express with MongoDB

### User Authentication:
- HTTP requests handled by Express.js.
- MongoDB connected using Mongoose.
- Schemas defined for Emp and User using Mongoose.
- Implemented routes for user authentication (/register, /login).
- Passwords hashed with bcrypt before saving.
- Login route validates email existence and compares hashed passwords.

### Employee Management:
- Endpoints created for adding, fetching, updating, and deleting employees (/emplist, /emplist/:id, /empl/:id).
- Employee data includes first name, last name, and email.

### Secret Santa Assignment:
- Endpoint /santasubmit assigns Secret Santas to employees.
- Sends emails to each employee with their Secret Santa's details.

## Frontend: React.js

### Components:
- Register: User registration form with form validation using Axios for HTTP requests and React Hot Toast for notifications.
- Santaform: Form for submitting Secret Santa entries with form validation and Axios for HTTP requests.
- ShowQr: Displays QR code generated based on URL parameters.
- UpdateEmp: Incomplete component for updating employee information.
- App: Main component with React Router for navigation.

### Routing:
- React Router manages client-side routing with different routes mapped to corresponding components.

### Root Rendering:
- ReactDOM.createRoot creates a root instance for rendering in strict mode.

### Event Handlers and Form Validation:
- Handlers like handlechange, handlechangeemail, and handlechangepass update state.
- Form validation checks required fields and data criteria.

### API Requests:
- Axios makes HTTP requests to localhost:9002 for user registration and Santa event entries.

### Styling:
- Basic CSS styling applied to components.

### Additional Features:
- Nodemailer used for sending emails.
- QR code generation (/empqr) and viewing Secret Santa records (/records).



## Conclusion

In conclusion, our Secret Santa Website provides an efficient and user-friendly solution for organizing and managing our gift exchange at work. Its intuitive interface and streamlined processes make the entire experience smooth and hassle-free for participants.

With features such as simple signup, easy gift assignments, and clear email notifications, our website ensures that everyone can fully enjoy the holiday fun without any complications. Additionally, it fosters inclusivity and strengthens team bonding by making every employee feel included and valued.

By leveraging our website, we can enhance our office celebrations and create lasting memories for years to come. We remain committed to continually improving and refining our platform to ensure that our holiday traditions bring joy and camaraderie to our workplace year after year.

 # Foxians, may your Secret Santa reveal bring laughter and happiness!
