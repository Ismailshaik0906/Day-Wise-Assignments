
public class ConditionsEx {

	public static void main(String[] args) {
		 int num = 10;
	        if (num % 2 == 0 && num % 5 == 0) {
	            System.out.println("Even and divisible by 5");
	        }
	        
	        
	        //trianle or not
	        int angle1 = 60, angle2 = 60, angle3 = 60;
	        if (angle1 + angle2 + angle3 == 180) {
	            System.out.println("Valid triangle");
	        } else {
	            System.out.println("Invalid triangle");
	        }
	        
	        
	        //leap / not
	        int year = 2024;
	        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
	            System.out.println("Leap year");
	        } else {
	            System.out.println("Not a leap year");
	        }
	        //
	        char ch = '#';
	        if (Character.isLetter(ch)) {
	            if ("aeiouAEIOU".indexOf(ch) != -1) System.out.println("Vowel");
	            else System.out.println("Consonant");
	        } else if (Character.isDigit(ch)) {
	            System.out.println("Digit");
	        } else {
	            System.out.println("Special Character");
	        }
	        
	        int ageCheck = 22;
	        if (ageCheck >= 18) System.out.println("Eligible to vote");
	        if (ageCheck >= 21) System.out.println("Eligible to drive");
	        if (ageCheck >= 25) System.out.println("Eligible for job");

	}

}
