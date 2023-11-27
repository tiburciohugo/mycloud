![MyCloud](/public/assets/MyCloud-cover.png "MyCloud Cover")
# MyCloud

---

MyCloud is a cloud-based application server designed to facilitate efficient and secure file management operations. It allows users to perform CRUD (Create, Read, Update, Delete) operations on files, providing a seamless interface for uploading, accessing, modifying, and downloading various types of digital files.

## Technologies

- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Swagger](https://swagger.io/docs/)
- [Docker](https://docs.docker.com/)


## Running the Project

To run the API, you will need Docker installed on your machine. Once Docker is set up, you can start the project using the following command:

```bash
docker-compose up --build
```
This command will build the Docker image if it's not already built and start the containers as defined in your docker-compose.yml file. The API should then be accessible at http://localhost:8080.

Make sure your Docker daemon is running and that there are no issues with your Docker setup or the docker-compose.yml file.