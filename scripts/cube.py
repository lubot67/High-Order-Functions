def make_exponentiater(e):
     return lambda(value):  pow(value,e)

cube = make_exponentiater(3)
 
def index(req, value): 
      value  = int(value)
      return cube(value)
	
	
