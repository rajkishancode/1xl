# Pet Care Website

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description
The Pet Care Website is a comprehensive platform offering personalized services for pets. This project includes a home page with engaging animations and a category page for easy navigation through various pet services and products. The website is designed to provide pet owners with a seamless and visually appealing experience.

## Features
- **Home Page**: Contains dynamic text and pet images with animations.
- **Category Page**: Organized and easy-to-navigate categories of pet services and products.
- **Responsive Design**: Optimized for all device sizes.
- **Secure Authentication**: Firebase authentication for user login and registration.
- **Modern UI**: Tailwind CSS for a sleek and responsive design.
- **Smooth Animations**: Implemented using React and Framer Motion.

## Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: Firebase Authentication
- **Design**: Figma

## Setup Instructions
1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/pet-care-website.git
    cd pet-care-website
    ```

2. **Install dependencies**
    ```bash
    yarn install
    ```

3. **Setup Firebase**
    - Go to [Firebase Console](https://console.firebase.google.com/)
    - Create a new project
    - Enable Authentication and add the required methods (Email/Password, Google, etc.)
    - Get your Firebase configuration and add it to your project.

4. **Create a `.env` file in the root directory and add your Firebase configuration**
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

5. **Run the development server**
    ```bash
    yarn start
    ```

6. **Build for production**
    ```bash
    yarn build
    ```

## Usage
- **Home Page**: Scroll horizontally to see text and image animations.
- **Category Page**: Navigate through different categories of pet services and products.
- **Authentication**: Register and sign in to access personalized services.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch.
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes.
4. Commit and push your changes.
    ```bash
    git commit -m "Add your message here"
    git push origin feature/your-feature-name
    ```
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy building and improving the Pet Care Website! If you have any questions or need further assistance, feel free to open an issue or contact us.
