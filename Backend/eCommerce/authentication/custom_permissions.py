from rest_framework.permissions import BasePermission

class authJWT(BasePermission):

    def has_permission(self, request, view):
            try:
                headers = str(request.headers["Authorization"])
            except KeyError:
                return None   
            print(request.headers)
            """ try:
                if ConnectionSise.authJWT(headers):                       
                      return super().has_permission(request, view)
                else:
                    return None
            except UnboundLocalError:
                return None """

        