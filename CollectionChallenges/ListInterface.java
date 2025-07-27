package CollectionChallenges;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class ListInterface {

	public static void main(String[] args) {
		//add, remove, access, print ele in arraylist
		
//		List<String> fruits=new ArrayList<>();
//		
//		//add
//		fruits.add("Apple");
//		fruits.add("Banana");
//		fruits.add("Kiwi");
//		
//		//Access ele
//		System.out.println(fruits.get(1));
//		
//		//remove
//		fruits.remove("Banana");
//		
//		//Print all ele
//		System.out.println(fruits);
		
		
		//implement linkedlist to store and print employee names
		
//		LinkedList<String> employees = new LinkedList<>();
//        employees.add("Alice");
//        employees.add("Bob");
//        employees.add("Charlie");
//
//        for (String employee : employees) {
//            System.out.println(employee);
//        }
		
		
		//insert an ele at spesific position
//		List<String> animals = new ArrayList<String>(Arrays.asList("Dog", "Cat", "Elephant"));
//        animals.add(1, "Lion"); // insert at index 1
//        System.out.println(animals);
		
		
		//Senario based
		//to-do list manager
		
//		Scanner sc = new Scanner(System.in);
//        List<String> tasks = new ArrayList<>();
//
//        while (true) {
//            System.out.println("1. Add Task\n2. Remove Task\n3. View Tasks\n4. Exit");
//            int choice = sc.nextInt();
//            sc.nextLine(); // consume newline
//            if (choice == 1) {
//                System.out.print("Enter task: ");
//                tasks.add(sc.nextLine());
//            } else if (choice == 2) {
//                System.out.print("Enter task to remove: ");
//                tasks.remove(sc.nextLine());
//            } else if (choice == 3) {
//                System.out.println("Pending Tasks: " + tasks);
//            } else if (choice == 4) {
//                break;
//           }

//	}
		
		
		//shopping cart
//		 Scanner sc = new Scanner(System.in);
//	        List<String> cart = new ArrayList<>();
//
//	        while (true) {
//	            System.out.println("1. Add Product\n2. Remove Product\n3. View Cart\n4. Exit");
//	            int choice = sc.nextInt();
//	            sc.nextLine(); // consume newline
//	            if (choice == 1) {
//	                System.out.print("Enter product name: ");
//	                cart.add(sc.nextLine());
//	            } else if (choice == 2) {
//	                System.out.print("Enter product to remove: ");
//	                cart.remove(sc.nextLine());
//	            } else if (choice == 3) {
//	                System.out.println("Your cart: " + cart);
//	            } else if (choice == 4) {
//	                break;
//	            }
//	        }

	}
}
