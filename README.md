# AutoAid Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The AutoAid Tracker is a sophisticated, backend-centric application tailored for the automotive service industry. It aims to simplify and optimize the way service centers interact with their clients and manage service orders. Built using Node.js, with Sequelize as the ORM for smooth database transactions and Express for seamless API routing, the app stands as a robust solution for businesses looking to digitize and upgrade their service management processes.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution](#contribution)
- [Questions](#questions)



## Installation

### Prerequisites
- Node.js installed on your system.
- A MySQL database setup.

### Steps
1. **Clone the repository** to your local machine using `git clone`, or download the ZIP file and extract it.
2. **Navigate to the project directory** and install the dependencies with `npm install`.
3. **Set up your database** by creating a `.env` file in the root directory and configuring your database credentials:
    ```
    DB_NAME='car_service_app'
    DB_USER='your_username'
    DB_PASSWORD='your_password'
    ```
4. **Initialize the database** by running the schema file located in the `db` folder. Use a MySQL client or command line to execute the SQL statements.
5. **Start the application** by running `node index.js` in your terminal. The application will connect to the database and start listening for requests.

![Screenshot](/public/assets/Screenshot.png)

## Usage

### User Authentication
- **Login:** Users can log in by sending a POST request to `/api/users/login` with their email and password. The `login.js` script handles form submission and redirects to the dashboard upon successful login.
- **Logout:** Users can log out by clicking the logout button, which triggers a POST request to `/api/users/logout` using the `logout.js` script.

### Managing Clients
- **Creating a Client:** Service requests can be added via the client form, which sends a POST request to `/api/clients` with client details. The `client.js` and `clientModal.js` scripts manage form submissions and modal interactions.
- **Viewing and Updating Clients:** The application provides interfaces for viewing detailed client information and updating it as needed. (Note: Specific implementation details for these features should be developed according to the service center's requirements.)

### Technical Structure
- The `User.js` and `Client.js` files define the Sequelize models for the database, including relations where a user can have many clients.
- The `index.js` file sets up the Express server and API routes, tying together user and client functionalities.

## Credits

This project was developed by [Luis Asprilla](https://www.linkedin.com/in/andersonasprilla/), [Anica Barrios](https://www.linkedin.com/in/anica-barrios-b104062ab/) and [Matthew Gonzalez](https://www.linkedin.com/in/matthew-gonzalez-a1b6a7280/?trk=public-profile-join-page). Special thanks to Node.js, MySQL, and Inquirer.js documentation.

## License
This project is licensed under the MIT License. For more information, please visit [here](https://opensource.org/licenses/MIT).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
## Features

- **Customer Information Management:** Easily store and manage detailed customer information, including names, contact details, and any special requests or notes that will help you serve them better.
  
- **Car Details Recording:** Input and update information about each customer's car, such as make, model, year, and VIN, ensuring that you have all the necessary details at your fingertips.
  
- **Service Tracking:** Track the status of each service request from initiation to completion. Keep customers informed with updates on their service status, enhancing transparency and trust.
  
- **Service Catalog:** Maintain a detailed catalog of all the services you offer, from routine maintenance to complex repairs. This allows customers to browse and select the services they require, making it easier for them to do business with you.
  
- **Appointment Scheduling:** An integrated appointment scheduling feature makes it easy for customers to book their services at a time that's convenient for them, while also helping you manage your workload and staff allocation more effectively.
  
- **Notifications and Reminders:** Automated notifications and reminders keep both you and your customers informed about upcoming appointments, service completions, and other important updates.

## Contribution

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## Questions

If you have any questions about the repo, open an issue or contact me through my [LinkedIn](https://www.linkedin.com/in/andersonasprilla/) You can find more of my work at [GitHub](https://github.com/andersonasprilla).




