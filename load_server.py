from http.server import BaseHTTPRequestHandler, HTTPServer
import json
# HTTPRequestHandler class
class testHTTPServer_RequestHandler(BaseHTTPRequestHandler):

  # GET
  def do_GET(self):
        # Send response status code
 #       self.send_response(200)

        # Send headers
#        self.send_header('Content-type','text/html')
#        self.end_headers()
        content_type=""
        response_content=""
        print(self.path)
        if self.path.endswith(".js"):
         content_type='javascript'
         response_content=self.path
        else:
         content_type='html'
         response_content='index.html'
        try:
         f = open(response_content,'rb')
         response=f.read()
         self.send_response(200)
         self.send_header('Content-type', 'text/'+content_type)
         self.end_headers()
         self.wfile.write(response)
         f.close()
         return
        except IOError:
         self.send_error(404, 'File Not Found: %s' % self.path)



        # Send message back to client 
        # Write content as utf-8 data
#        self.wfile.write(bytes(message, "utf8"))
        return
  def do_POST(self):
     self.send_response(200)
     self.send_header('Content-type','text/html')


def run():
  print('starting server...')

  # Server settings
  # Choose port 8080, for port 80, which is normally used for a http server, you need root access
  config_file=open('config.json','r')
  data = json.load(config_file)

  server_address = ('localhost', int(data['port']))
  httpd = HTTPServer(server_address, testHTTPServer_RequestHandler)
  print('running server...')
  httpd.serve_forever()


run()
