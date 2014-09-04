def make_exponentiater(e):
     return lambda(value):  pow(value,e)

square = make_exponentiater(2)
 
def index(req, value): 
      value  = int(value)
      return square(value)
	
	
