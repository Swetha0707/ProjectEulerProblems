public class EvenFibonacciSum {
    public static void main(String[] args) {
        int first=1;
        int second=2;
        int third;
        int sum=0;
        while(first<=4000000){
            if(first%2==0){
                sum+=first;
            }
            third=first+second;
            first=second;
            second=third;
        }
        System.out.println(("Sum of even fibonacci numbers="+sum));
    }

}