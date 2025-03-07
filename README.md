# Blog project
This project is a simple blog created with Astro framework. It allows users to read blog posts, add comments and see the popularity of the posts.

## Structure
The project is structured as follow:
- `src/pages/`: This folder contains the different pages of the project.
    - `index.astro`: This is the main page of the blog.
    - `api/`: This folder contains the API endpoints.
        - `comment.ts`: API to manage comments.
- `src/content/`: This folder contains the different blog posts.
    - `config.ts`: Configuration to manage blog posts.
- `src/lib`: This folder contains the logic.
    - `comment.ts`: logic to manage comments
    - `popularity.ts`: logic to manage popularity
- `src/data/`: This folder contains the data of the project
    - `comments.json`: comments storage
    - `popularity.json`: popularity storage

## Usage
To start the project, you need to run the following command:
