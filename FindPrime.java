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