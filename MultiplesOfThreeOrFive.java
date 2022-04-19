import java.util.Scanner;

public class MultiplesOfThreeOrFive {
    public static void main(String[] args) {

        int sum=0;
        for(int number=1;number<1000;number++){
            if((number%3==0)||(number%5==0)){
                // System.out.println(i);
                sum=sum+number;
            }

        }
        System.out.println("Sum of all the multiples of 3 or 5 below 1000="+sum);
    }
}