import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Persona> list = new ArrayList<>();

        list.add(new Persona(1, "Luisina", 30));
        list.add(new Persona(2, "Ezequiel", 26));
        list.add(new Persona(3, "Florencia", 25));
        list.add(new Persona(4, "Adrian", 6));

        // Reccoriendo por indice
        System.out.println(" --------------  FOR  -------------- ");
        for (int i = 0; i < list.size()-1; i++) {
            System.out.println(list.get(i));
        }

        System.out.println(" --------------  FOR EACH  -------------- ");
        //FOR EACH
        for(Persona p : list) {
            System.out.println(p);
        }
    }
}