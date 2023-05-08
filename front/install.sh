cd api
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
cd ..
cd front
npm install