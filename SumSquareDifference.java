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