- En esta clase, estamos trabajando en el archivo "search-box.component.ts"
<br>
- La idea es hacer que cuando el usuario escriba algo en el buscado de gifs, se detecte cuando apreta enter y por el momento, queremos ver en consola lo que ingreso para buscar.

##EVENTOS:

- ## (keydown):
  Es cuando empieza a undir la tecla

- ## (keypress):
  Es cuando ya presiono la tecl

- ## (keyup):
  Es cuando ya presiono la tecla, la suelta y empieza a levantarse la tecla

<br><br>
- Finalmente usaremos este ultimo, y para agarrar la informacion ingresada, NO vamos a usar el ngModel para guarda el dato, veremos otra forma.
  Vamos a usar una referencia local con el # (numeral). Este se va a conocer a lo largo de todo el template.

- Nos queda de la siguiente forma: ``(keyup)="searchTag(txtInput.value)" #txtInput``

- Aunque observamos en la consola que se esta obteniendo el valor por cada tecla.. Y no queremos esto. Finalmente podemos hacer → ````(keyup.enter)="searchTag(txtInput.value)" #txtInput````

<br>
// Nos sirve para tomar una referencia local. Nos retorna una referencia.
<pre>
  @ViewChild('txtInput')
  public taginput!: ElementRef<HTMLInputElement>;
</pre>

- Y ViewChildren, nos sirve para tomar varias referencias locales, si es que hay mas de uno. Nos retorna un arreglo con todas estas referencias.

