public class Persona {

    //region ATTRIBUTES
    private int num;
    private String nombre;
    private int edad;
    //endregion

    //region CONSTRUCTORS
    public Persona() {
    }
    public Persona(int num, String nombre, int edad) {
        this.num = num;
        this.nombre = nombre;
        this.edad = edad;
    }
    //endregion

    //region GETTERS AND SETTERS
    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }
    //endregion


    @Override
    public String toString() {
        return "Persona{" +
                "num=" + num +
                ", nombre='" + nombre + '\'' +
                ", edad=" + edad +
                '}';
    }
}
