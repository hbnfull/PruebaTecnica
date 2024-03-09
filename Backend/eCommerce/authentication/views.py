# Create your views here.
from django.http import JsonResponse
import sys, jwt
from rest_framework.views import APIView
from .models import User
from datetime import datetime
from .custom_permissions import authJWT

# Create your views here.

""" class authAccount(APIView):
    permission_classes = [authJWT]

    def get(self, request):
        headers = str(request.headers["Authorization"])
        try:
            decode = dict(jwt.decode(headers, 'D3cS#C3E%$P!)=n3%mn2nM$N%', algorithms="HS256"))
        except jwt.DecodeError:
            print("Token no valido")
        usuario = decode["user"]
        return JsonResponse({'usuario': usuario, 'logged': True}, status=200) """

class register(APIView):

    @classmethod
    def get(self, request):
        return JsonResponse({"message": "Buen Post"}, status=200) 

    @classmethod
    def post(self, request):
        print(request.data)
        try:
            user = {}
            user['nombre']=str(request.data.get("nombre"))
            user['apellido']=str(request.data.get("apellido"))
            user['email']=str(request.data.get("email"))
            user['contraseña']=str(request.data.get("password"))

            if self.setUser(user):
                return JsonResponse({"message": "Buen Post"}, status=200) 
            return JsonResponse({"message": "Producto existente"}, status=401)
        except KeyError as e:
            print(e)
            return JsonResponse({"Failed": str(e)}, status=400)

    def setUser(user):
        if User.objects.filter(email=user['email']).exists():
            return False
        User(name=user['nombre'], lastName=user['apellido'], email=user['email'], password=user['contraseña']).save()
        return True
    
class login(APIView):

    @classmethod
    def post(self, request):
        print("holi", request.data)
        try:
            user = {}
            user['email']=str(request.data.get("username"))
            user['contraseña']=str(request.data.get("password"))
            print(user)
            if self.dbloggin(user):
                return JsonResponse({"message": "Login Correcto", "user": user["email"]}, status=200) 
            return JsonResponse({"message": "Datos Incorrectos"}, status=401)
        except KeyError as e:
            print(e)
            return JsonResponse({"Failed": str(e)}, status=400) 

    @classmethod
    def dbloggin(self, user):
        print("runnig usvalid")
        if User.objects.filter(email=user['email']).exists():
            ouser = User.objects.get(email=user['email'])
            if ouser.password == user['contraseña']:
                return bool(True)
            else:
                return bool(False)
        else:
            return bool(False)
        
    """ @classmethod
    def getJWT(self, user):
        encoded = jwt.encode({'user': user['email'], "fecha": str(datetime.now().day)}, 'D3cS#C3E%$P!)=n3%mn2nM$N%', algorithm='HS256')
        encoded = encoded.decode(sys.getdefaultencoding())
        self.authJWT(encoded)
        print(dict(jwt.decode(encoded, 'D3cS#C3E%$P!)=n3%mn2nM$N%', algorithms="HS256")))
        return(encoded)
    
    @classmethod
    def authJWT(self, jtoken):
        try:
            decode = dict(jwt.decode(jtoken, 'D3cS#C3E%$P!)=n3%mn2nM$N%', algorithms="HS256"))
        except jwt.DecodeError:
            print("Token no valido")
        usuario = decode["user"]
        date = decode["fecha"]
        print(usuario)
        print(decode)
        return None """