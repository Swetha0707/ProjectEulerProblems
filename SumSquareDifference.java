A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

public class SumSquareDifference {
    public static void main(String[] args) {
    int sumdiff;
    sumdiff=squareofsum()-sumofsquares();
    System.out.println("Sum Square Difference = "+sumdiff);
    }
    static int sumofsquares(){
        int sum=0;
        for(int i=1;i<=100;i++){
            sum+=(i*i);
        }
        return sum;
    }
    static int squareofsum(){
        int s=0;
        for(int i=1;i<=100;i++){
            s+=i;
        }
        s*=s;
        return s;
    }
}
