"""Servidor local de Mejora tu Docencia con endpoint de exportación de PNGs.

Uso:
    python automatizacion/servidor_export.py [puerto]   (por defecto 8000)

Sirve el repo (para html2canvas, que no funciona desde file://) y añade
POST /export para que los posts escriban sus PNGs 1080x1080 directamente
en output/<slug>/ sin pasar por el MCP (que trunca salidas grandes).

Body (JSON): {"filename": "<slug>/<archivo>.png", "data": "data:image/png;base64,..."}
"""

import base64
import json
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'output')


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_POST(self):
        if self.path.startswith('/export'):
            try:
                length = int(self.headers.get('Content-Length', 0))
                payload = json.loads(self.rfile.read(length).decode('utf-8'))
                filename = payload['filename']
                data_url = payload['data']
                raw = base64.b64decode(data_url.split(',', 1)[1])
                dest = os.path.join(OUT, filename)
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                with open(dest, 'wb') as f:
                    f.write(raw)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'ok': True, 'file': filename, 'bytes': len(raw)}).encode())
            except Exception as exc:  # noqa: BLE001
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'ok': False, 'error': str(exc)}).encode())
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, *args):  # silenciar logging
        pass


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    sys.stderr.write(f"Serving {ROOT} on :{port} — POST /export -> {OUT}\n")
    ThreadingHTTPServer(('127.0.0.1', port), Handler).serve_forever()
