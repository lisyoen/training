# Project Title

This project is a real-time chat application built with Express and Socket.IO. It allows users to connect and send messages in real-time.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Docker](#docker)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd training
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Development

For development, you can use the provided Docker container. Make sure you have Docker installed and running.

1. Open the project in your code editor.
2. Use the command palette to run the "Remote-Containers: Reopen in Container" command.

This will build the Docker image and start the development environment.

## Docker

To build the Docker image for production, run:
```
docker build -t <image-name> .
```

To run the Docker container, use:
```
docker run -p 3000:3000 <image-name>
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.