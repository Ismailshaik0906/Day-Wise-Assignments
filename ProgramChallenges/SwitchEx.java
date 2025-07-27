
public class SwitchEx {

	public static void main(String[] args) {
		 int month = 4;
	        switch (month) {
	            case 1: System.out.println("January"); break;
	            case 2: System.out.println("February"); break;
	            case 3: System.out.println("March"); break;
	            case 4: System.out.println("April"); break;
	            default: System.out.println("Other Month");
	        }
	        
	     // Simple Menu
	        int choice = 2;
	        switch (choice) {
	            case 1: System.out.println("Start"); break;
	            case 2: System.out.println("Settings"); break;
	            case 3: System.out.println("Exit"); break;
	            default: System.out.println("Invalid Choice");
	        }
	     
	        
	     // Day of week
	        int d = 6;
	        switch (d) {
	            case 1: System.out.println("Sunday"); break;
	            case 2: System.out.println("Monday"); break;
	            case 3: System.out.println("Tuesday"); break;
	            case 4: System.out.println("Wednesday"); break;
	            case 5: System.out.println("Thursday"); break;
	            case 6: System.out.println("Friday"); break;
	            case 7: System.out.println("Saturday"); break;
	            default: System.out.println("Invalid day");
	        }

	}

}
