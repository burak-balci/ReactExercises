import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        double tutar,kdv18 = 0.18,kdv8 = 0.08;
        Scanner input = new Scanner(System.in);
        System.out.print("Ücret Tutarını Giriniz: ");
        tutar = input.nextDouble();
        
        double kdvTutari = (tutar >= 1000) ? tutar * kdv8 : tutar * kdv18;
        double kdvliTutar = tutar + kdvTutari;

        System.out.println("KDV'siz Fiyat: " + tutar);
        System.out.println("KDV'li Fiyat: " + kdvliTutar);
        System.out.print("KDV Tutarı: " + kdvTutari);


    }
}