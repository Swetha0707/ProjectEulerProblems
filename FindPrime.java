By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
    
    
public class FindPrime {
    public static void main(String[] args) {
        int count=0,i;
        int start=2,end=300000;
        for(i=start;i<=end;i++) {
            if (isPrime(i)) {
                count++;

                if (count == 10001) {
                    System.out.println("The prime number at 10001st position =" + i);
                    break;
                }
            }
            }
        }



     static boolean isPrime(int n){
        for(int i=2;i<=n/2;i++) {
            if (n % i == 0) {
                return false;
            }
        }
          return true;



    }
}
