Running the Application with Docker Compose
This repository contains an application that can be run using Docker Compose. Follow the steps below to get the application up and running on your machine:

Prerequisites
Docker
Docker Compose
Installation
Clone the repository to your local machine using git clone.

Navigate inside the main directory of the project.

Run the following command to start the application using Docker Compose:

#docker-compose up

Wait for the images to be downloaded and the containers to be started.

Once the application has started, you can access it by navigating to http://localhost:3001 in your web browser.

For APis(Backend) use http://localhost:3000 in your call.

Stopping the Application
To stop the application, use the following command in the same directory:

#docker-compose down

This will stop and remove the containers created by Docker Compose.

I have made assumption that in instruction starting date of product should be editable or not so I just kept it editable but we can remove it.

That's it! You should now have the application up and running on your machine. If you have any questions or issues, feel free to open an issue in this repository.

