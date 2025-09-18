using HTTP
using Sockets

function run_server()
    HTTP.serve("0.0.0.0", 8000) do request::HTTP.Request
        # Ваша логика обработки запросов здесь
        return HTTP.Response(200, "Hello from QDiagramLab Backend!")
    end
end

# Запускаем сервер, если файл выполняется напрямую
if abspath(PROGRAM_FILE) == @__FILE__
    println("Starting QDiagramLab server on port 8000...")
    run_server()
end