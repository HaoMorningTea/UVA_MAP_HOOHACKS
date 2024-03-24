# UVA_MAP

## Overview

UVA_MAP is a web application providing an interactive map for the University of Virginia (UVA) campus, designed to facilitate easy navigation across the expansive UVA grounds.

## Setup

To set up the project locally, follow these simple steps:

1. **Download Dependencies:**
    ```bash
    npm install
    ```

2. **Start the Website:**
    ```bash
    npm install --force
    ```

    ```bash
    npm run dev
    ```
   This will initiate the development server, making the application accessible at `http://127.0.0.1:5173/` by default.

3. **Set Up Django Backend**
    Step 1: If not installed install it by typing a command on terminal.
    ```bash
    python -m pip install --user virtualenv
    ```
    Step 2: Go to backend directory and create a virtual environment if does not exist. 
    ```bash
    python -m venv env
    ```
    ```bash
    cd env
    ```
    ```bash
    <!-- source bin/activate (for mac) -->
    Scripts\activate
    cd ../UVA_MAP/backend/djangobackend
    ```
    Step 3: Install below packages by using pip
    ```bash
    pip install django
    ```
    ```bash
    pip install djangorestframework
    ```
    ```bash
    python -m pip install django-cors-headers
    ```
    ```bash
    python -m pip install Pillow
    ```
    ```bash
    python -m pip install django-model-utils
    ```
    Step 4: Run server
    ```bash
    python manage.py runserver
    ```

## Features

- **Interactive Map:** Explore the UVA campus with an easy-to-use, interactive map.
- **Navigation:** Find your way around the university using the map's navigation features.
- **Customization:** Personalize your experience by customizing the map based on your preferences.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [npm](https://www.npmjs.com/): The package manager for JavaScript.

## Contributing

We welcome contributions! If you'd like to contribute to the project, please follow our [contribution guidelines](CONTRIBUTING.md).

## Issues

If you encounter any issues while using UVA_MAP, please report them on our [issue tracker](https://github.com/yourusername/UVA_MAP/issues). We appreciate your feedback!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for checking out UVA_MAP! We hope it enhances your experience navigating the beautiful University of Virginia campus. If you have any questions or suggestions, feel free to reach out.

Happy exploring! 🗺️✨
