import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        double a,alan,r,pi = 3.14;
        System.out.print("Dairenin Yarıçapını Giriniz : ");
        Scanner input = new Scanner(System.in);
        r = input.nextInt();
        System.out.print("Dairenin Merkez Açısını giriniz : ");
        a = input.nextDouble();
        alan = (pi*r* r * a )/360;
        System.out.print("Daire Diliminin Alanı : " + alan);

    }
}