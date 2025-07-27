
public class Flowcontrol {

	public static void main(String[] args) {
		int num = -10;
        if (num > 0) {
            System.out.println("Positive");
        } else if (num < 0) {
            System.out.println("Negative");
        } else {
            System.out.println("Zero");
        }
        
        int a = 15, b = 25, c = 5;
        if (a > b && a > c) System.out.println("A is largest");
        else if (b > c) System.out.println("B is largest");
        else System.out.println("C is largest");
        
        
        String username = "admin", password = "1234";
        if ("admin".equals(username) && "1234".equals(password)) {
            System.out.println("Login successful");
        } else {
            System.out.println("Invalid credentials");
        }
        
        int age = 45;
        if (age < 13) System.out.println("Child");
        else if (age < 20) System.out.println("Teenager");
        else if (age < 60) System.out.println("Adult");
        else System.out.println("Senior");
        
        
        
        int percentage = 82;
        if (percentage >= 90) System.out.println("Grade A");
        else if (percentage >= 75) System.out.println("Grade B");
        else if (percentage >= 60) System.out.println("Grade C");
        else System.out.println("Grade D or Fail");
	}

}
