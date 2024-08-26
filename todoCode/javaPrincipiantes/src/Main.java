import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        //ejerc();
        //ifElse();
        //switchEx();
        //ejerc2();
        //repetitiveStructures();
        //ejercPract1();
        //ejercArbolitoNavidad();
        //arrays();

        practicandoClases();
    }

    //region TRABAJANDO
    public static void variables () {
        System.out.println("Hello world!!!");

        int number = 10;
        String name = "Ezequiel";
        char word = 'a';
        double temperature = 15.7;
        boolean flag = false;
        long large = 123456789;

        System.out.println(number);
        System.out.println("My name is " + name + "!");
        System.out.println(word);
        System.out.println(temperature);
        System.out.println(flag);
        System.out.println(large);
    }

    public static void ejerc() {
        int num1 = 10;
        int num2 = 20;

        int aux;

        aux = num1;
        num1 = num2;
        num2 = aux;

        System.out.println("num1 = " + num1);
        System.out.println("num2 = " + num2);
    }

    public static void ifElse() {

        int num1 = 100;
        int num2 = 100;

        if(num1 > num2) {
            System.out.println("num1 > num2");
        } else if(num1 == num2) {
            System.out.println("num1 = num2");
        } else {
            System.out.println("num1 < num2");
        }

    }

    public static void switchEx() {
        int dayNumber = 1;
        String nameDay = "";

       /* switch (dayNumber) {
            case 1:
                nameDay = "Lunes";
                break;
            case 2:
                nameDay = "Martes";
                break;
            case 3:
                nameDay = "Miercoles";
                break;
            case 4:
                nameDay = "Jueves";
                break;
            case 5:
                nameDay = "Viernes";
                break;
            case 6:
                nameDay = "Sabado";
                break;
            case 7:
                nameDay = "Domingo";
                break;
            default:
                System.out.println("Numero de dia INVALIDO!");
                break;
        }*/

        switch (dayNumber) {
            case 1 -> nameDay = "Lunes";
            case 2 -> nameDay = "Martes";
            case 3 -> nameDay = "Miercoles";
            case 4 -> nameDay = "Jueves";
            case 5 -> nameDay = "Viernes";
            case 6 -> nameDay = "Sabado";
            case 7 -> nameDay = "Domingo";
            default -> System.out.println("Numero de dia INVALIDO!");
        }
        System.out.println(nameDay);
    }

    public static void ejerc2() {

        double sueldo = 0;
        int categoria;

        System.out.println("Ingrese el tipo de categoria que desea calcular el sueldo");
        Scanner teclado = new Scanner(System.in);
        categoria = teclado.nextInt();

        switch (categoria) {
            case 1 -> sueldo = 15890 + 15890*0.1;
            case 2 -> sueldo = 25630.89;
            case 3 -> sueldo = 35560.20 - (35560.2*0.11);
            default -> System.out.println("CATEGORIA INGRESADA INVALIDA");
        }

        if (categoria>0 && categoria<4) {
            System.out.println("El sueldo segun la categoria ingresada es -> " + sueldo);
        }
    }

    public static void repetitiveStructures() {

        /*int contador = 0;

        while(contador <= 10) {
            System.out.println(contador);
            contador++;
        }*/

        for(int i=0; i<10; i++) {
            System.out.println(i);
        }
    }

    public static void ejercPract1() {

        System.out.println("Ingrese el numero limite: ");

        Scanner scan = new Scanner(System.in);
        int numLimite = scan.nextInt();
        imprimirHastaNum(numLimite);
    }

    public static void imprimirHastaNum(int numLimite) {
        for(int i=1; i<=numLimite; i++) {
            System.out.println(i);
        }
    }

    public static void ejercArbolitoNavidad() {

        Scanner scanWord = new Scanner(System.in);
        String confirmExit;

        do {
            System.out.println("Ingrese la altura del arbol");

            Scanner scanNumber = new Scanner(System.in);
            int altura = scanNumber.nextInt();

            arbolitoNavidad(altura);

            System.out.println(" ");
            System.out.println("Desea continuar? (Y/N)");
            confirmExit = scanWord.next();

            while (!confirmExit.equalsIgnoreCase("Y") && !confirmExit.equalsIgnoreCase("N")) {
                System.out.println("INGRESE UN VALOR VALIDO!");
                confirmExit = scanWord.next();
            }

        } while(confirmExit.equalsIgnoreCase("Y"));
    }

    public static void arbolitoNavidad(int altura) {

        if(altura >= 2) {
            // ------------------  HOJAS  ------------------
            for(int fila=0; fila<altura; fila++) {
                //bucle para los espacios
                for(int espacio=0; espacio < (altura-fila-1); espacio++) {
                    System.out.print(" ");
                }

                //bucle para los asteriscos
                for(int asterisco=0; asterisco<fila*2+1; asterisco++) {
                    System.out.print("*");
                }

                //bucle para los espacios
                for(int espacio=0; espacio < (altura-fila-1); espacio++) {
                    System.out.print(" ");
                }
                System.out.println(" ");
            }

            // ------------------  TRONCO 1 ------------------
            /*for(int filaTronco=0; filaTronco<2; filaTronco++) {
                for (int espacios=0; espacios< altura - 1; espacios++) {
                    System.out.print(" ");
                }

                System.out.print("*");

                for (int espacios=0; espacios< altura - 1; espacios++) {
                    System.out.print(" ");
                }

                System.out.println(" ");
            }*/

            // ------------------  TRONCO 2 ------------------
            for(int filaTronco=0; filaTronco<2; filaTronco++) {
                for (int espacios=0; espacios< altura - 2; espacios++) {
                    System.out.print(" ");
                }

                System.out.print("|||");

                for (int espacios=0; espacios< altura - 2; espacios++) {
                    System.out.print(" ");
                }

                System.out.println(" ");
            }
        }
    }
    //endregion

    public static void arrays() {

        // Declaracion
        int vector[];
        int vector2[] = new int [4];

        int[] vector3;

        // Asignacion (manual)
        vector2[0] = 10;
        vector2[1] = 11;
        vector2[2] = 12;
        vector2[3] = 13;

        showArray(vector2, 4);

        int aad;
    }

    public static void showArray(int[] array, int dimension) {
        for(int i=0; i<dimension; i++) {
            System.out.print(" " + i);
        }
    }

    //region POO CON JAVA
    public static void practicandoClases() {

        Alumno alumno1 = new Alumno();
        Alumno alumno2 = new Alumno(26, "Ezequiel", "Mamani");

        System.out.println("La EDAD del alumno1 es: " + alumno1.getAge());

    }
    //endregion
}