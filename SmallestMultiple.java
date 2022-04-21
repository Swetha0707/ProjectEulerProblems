2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

public class SmallestMultiple {
    public static void main(String[] args) {
        int num=1,lcm;
        for(int i=1;i<=20;i++){
            num*=i/gcd(i,num);
        }
        System.out.println("The smallest multiple of 1 to 20 = "+num);
    }
    private static int gcd(int a,int b){
        int gc=0;
        for(int i=1;i<=a && i<=b;i++){
            if((a%i==0) && (b%i==0)){
                 gc=i;
            }
        }

        return gc;
    }

}
