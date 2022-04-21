The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?


public class LongestPrimeFactor {

    public static void main(String[] args) {
     long num=600851475143L ;
     long temp=num;
     long LargestPrimeFac=num;
     long n=2;
     while(n<=num && num!=1){
         if(num%n==0){
             num=num/n;
             LargestPrimeFac=n;
         }
         else{
             n=n+1;
         }
     }
     System.out.println("The Largest prime factor ="+LargestPrimeFac);
    }
}
