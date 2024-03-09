from django.shortcuts import render
from .models import Producto
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import ProductoSerializer

class productos(APIView):

    @classmethod
    def post(self, request):
        print(request.data)
        print(request.FILES.get("imagen"))
        try:
            producto = {}
            producto['producto']=str(request.data.get("producto"))
            producto['stock']=int(request.data.get("stock"))
            producto['precio']=float(request.data.get("precio"))
            producto['descripcion']=str(request.data.get("descripcion"))
            try:
                producto['imagen']=request.FILES.get("imagen")
            except TypeError:
                print("no jalo papu")

            if self.setProducto(producto):
                return JsonResponse({"message": "Buen Post"}, status=200) 
            return JsonResponse({"message": "Producto existente"}, status=401)
        except KeyError as e:
            return JsonResponse({"Failed": str(e)}, status=400)

    @classmethod
    def get(self, request,):
        print(request.data)
        productos= Producto.objects.all()
        Producto_Serializer=ProductoSerializer(productos, many=True)
        return JsonResponse({"cards": Producto_Serializer.data}, status=200) 
    
    def setProducto(product):
        if Producto.objects.filter(product=product['producto']).exists():
            return False
        Producto(product=product['producto'], stock=product['stock'], price=product['precio'], description=product['descripcion'], image=product['imagen']).save()
        return True

class eliminar(APIView):

    def post(self, request):
        tag=str(request.data.get('producto'))
        if Producto.objects.filter(product=tag).exists():
            gproduct = Producto.objects.get(product=tag)
            gproduct.removeD()
            gproduct.delete()
            return JsonResponse({"message": "Borrado con exito"}, status=200) 
        return JsonResponse({"message": "No borrado"}, status=400) 