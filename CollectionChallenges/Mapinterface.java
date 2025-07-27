package CollectionChallenges;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Mapinterface {

	public static void main(String[] args) {
		
		//Use HashMap to store student names and their marks
		 Map<String, Integer> studentMarks = new HashMap<>();
	        studentMarks.put("Alice", 85);
	        studentMarks.put("Bob", 90);
	        studentMarks.put("Charlie", 78);

	        System.out.println("Student Marks: " + studentMarks);
	        
	        //iterate over map using entryset()
	        Map<String, String> countries = new HashMap<>();
	        countries.put("India", "New Delhi");
	        countries.put("USA", "Washington");
	        countries.put("Japan", "Tokyo");

	        for (Map.Entry<String, String> entry : countries.entrySet()) {
	            System.out.println(entry.getKey() + " -> " + entry.getValue());
	        }
	        
	        // Update value associated with a key in a Map
	        Map<String, Integer> stock = new HashMap<>();
	        stock.put("Apple", 50);
	        stock.put("Banana", 30);

	        // Update value
	        stock.put("Apple", stock.get("Apple") + 20);

	        System.out.println("Updated stock: " + stock);
	        //senario based
	        //phone directory
	        
	        Scanner scanner = new Scanner(System.in);
	        Map<String, String> phoneBook = new HashMap<>();

	        while (true) {
	            System.out.println("1. Add Contact\n2. View Contacts\n3. Exit");
	            int choice = scanner.nextInt();
	            scanner.nextLine(); // consume newline

	            if (choice == 1) {
	                System.out.print("Enter name: ");
	                String name = scanner.nextLine();
	                System.out.print("Enter phone number: ");
	                String number = scanner.nextLine();
	                phoneBook.put(name, number);
	            } else if (choice == 2) {
	                for (Map.Entry<String, String> entry : phoneBook.entrySet()) {
	                    System.out.println(entry.getKey() + " - " + entry.getValue());
	                }
	            } else {
	                break;
	            }
	        }
	        
	        
	        //frequency counter for words
	        Scanner sc = new Scanner(System.in);
	        System.out.print("Enter a sentence: ");
	        String sentence = sc.nextLine();

	        String[] words = sentence.split("\\s+");
	        Map<String, Integer> frequencyMap = new HashMap<>();

	        for (String word : words) {
	            frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
	        }

	        System.out.println("Word Frequencies: " + frequencyMap);
	        
	        
	}

}
