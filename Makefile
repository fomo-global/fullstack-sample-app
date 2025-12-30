# BACKEND
backend-build:
	docker compose -f docker-compose.yml build backend

# Сборка обоих
build:
	docker compose -f docker-compose.yml build

# Запуск
up:
	docker compose -f docker-compose.yml up -d

# Перезапуск
rebuild:
	docker compose -f docker-compose.yml down
	docker compose -f docker-compose.yml build
	docker compose -f docker-compose.yml up -d

# Остановка
down:
	docker compose -f docker-compose.yml down

# Логи
logs:
	docker compose -f docker-compose.yml logs -f

# логи frontend
frontend-logs:
	docker compose -f docker-compose.yml logs -f frontend

# логи backend
backend-logs:
	docker compose -f docker-compose.yml logs -f backend

# логи db
db-logs:
	docker compose -f docker-compose.yml logs -f db

# зайти в постгресс и посмотреть что там есть 
# \du	    список ролей
# \l	    список баз
# \dt	    список таблиц
# \d        имя_таблицы	схема таблицы
# \conninfo	информация о текущем подключении
# \q	    выйти
db:
	docker exec -it my_postgres psql -U user_progect_1 db_progect_1