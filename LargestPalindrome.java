A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

public class LargestPalindrome {

    public static void main(String[] args) {
        int product;
        int maxPalindrome = 0;
        for (int i = 100; i <1000; i++) {
            for (int j = 100; j <1000; j++) {
                product = i * j;

                if (isPalindrome(product) && product > maxPalindrome) {
                    maxPalindrome = product;
                }
            }

        }
        System.out.println("The product of largest palindrome= " + maxPalindrome);

}

    private static boolean isPalindrome(int n) {
        int temp=n;
        int rev = 0;
        while (n!= 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        if(temp==rev){
            return true;
        }
        else{
            return  false;
        }

    }
    }
