Para realizar peticiones HTTP Angular tiene una herramienta poderosa...

Pero para poder utilizarla debemos importarla, y lo haremos en el modulo principal, porque probablemente la vamos a utilizar en varios modulos. Procedemos a importarlo en el "app.module":

``import { HttpClientModule } from "@angular/common/http";``

Y tambien lo agregamos, ya que es un modulo, en los imports → "HttpClientModule".


