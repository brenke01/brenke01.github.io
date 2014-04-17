import re
class MyApp:
    def __init__(self):
    	self.d1 = re.compile('^/([aeiouAEIOU]+)')
    	self.d2 = re.compile('^/luther/([a-zA-Z]+)/([0-9]+)/([a-zA-Z]+)')


    def __call__(self,environ,start_response):
        self.res = self.d1.match(environ['RAW_URI'])
        self.res2 = self.d2.match(environ['RAW_URI'])
        if self.res is not None:
            self.lstring = ("All of the vowels are: " + self.res.group(1))
            self.data = bytes(self.lstring, 'utf-8')
            start_response("200 OK", [
                ("Content-Type", "text/plain"),
                ("Content-length", str(len(self.data)))])
            return [self.data]   
        
        elif self.res2 is not None:
            self.lstring = ("Did you graudate in: " + self.res2.group(2))
            self.data = bytes(self.lstring, 'utf-8')
            start_response("200 OK", [
                ("Content-Type", "text/plain"),
                ("Content-length", str(len(self.data)))])
            return [self.data]
        else:
        	self.lstring = "404 Not Found"
        	self.data = bytes(self.lstring, 'utf-8')
        	start_response("400 ERROR", [
                ("Content-Type", "text/plain"),
                ("Content-length", str(len(self.data)))])
        	return [self.data]
        	

matchapp = MyApp()