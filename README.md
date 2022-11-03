# Dicoding Jobs
Built with [Laravel](https://laravel.com/), [React](https://reactjs.org/), and [Inertia](https://inertiajs.com/).

## Installation
1. Clone this repository `main` branch.
2. Install required dependencies with `composer install` and `npm install` command.
3. Copy `.env.example` file to `.env`.
4. Generate key with `php artisan key:generate` command.
5. Configure database settings in `.env` file.
    ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=<your_db_name>
    DB_USERNAME=<your_db_username>
    DB_PASSWORD=<your_db_password>
    ```
6. Run migration with `php artisan migrate --seed`.
7. Build assets with `npm run build`.
8. Run tests with `php artisan test`.
9. Run development server with `php artisan serve` or use your own web server.
10. Enjoy!
