
public class Looping_Branching {

	public static void main(String[] args) {
        // Multiplication Table
        int n = 5;
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
        // Break and Continue
        for (int i = 1; i <= 10; i++) {
            if (i == 5) continue;
            if (i == 8) break;
            System.out.print(i + " ");
        }
        System.out.println();
        
        
        // Factorial
        int fact = 1;
        int num = 5;
        for (int i = 1; i <= num; i++) {
            fact *= i;
        }
        System.out.println("Factorial of " + num + " is " + fact);
        
        
        
        // Fibonacci Series
        int a = 0, b = 1;
        System.out.print("Fibonacci: " + a + " " + b);
        for (int i = 2; i < 10; i++) {
            int c = a + b;
            System.out.print(" " + c);
            a = b;
            b = c;
        }
        System.out.println();
        
        
        // Sum of even numbers from 1 to 100
        int sum = 0;
        for (int i = 2; i <= 100; i += 2) {
            sum += i;
        }
        System.out.println("Sum of even numbers 1 to 100: " + sum);


	}

}
