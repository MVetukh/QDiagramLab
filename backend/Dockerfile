FROM julia:1.11.2

WORKDIR /app

# Копируем файл зависимостей
COPY Project.toml ./

# Обновляем реестры и устанавливаем зависимости
RUN julia --project=. -e ' \
    using Pkg; \
    Pkg.Registry.add("General"); \
    Pkg.update(); \
    Pkg.instantiate(); \
'

# Копируем исходный код
COPY src ./src

# Предкомпилируем зависимости
RUN julia --project=. -e 'using Pkg; Pkg.precompile()'

EXPOSE 8000

# Запускаем сервер
CMD ["julia", "--project", "src/server.jl"]