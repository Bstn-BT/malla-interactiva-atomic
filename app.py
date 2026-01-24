import webview
import http.server
import socketserver
import threading
import os
import sys

PORT = 8080

def resource_path(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

def start_server():
    web_dir = resource_path("dist")
    os.chdir(web_dir)

    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        httpd.serve_forever()

threading.Thread(target=start_server, daemon=True).start()

webview.create_window(
    "Malla Interactiva",
    f"http://localhost:{PORT}",
    width=1200,
    height=800
)

webview.start()
