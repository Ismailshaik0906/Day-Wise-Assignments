package CollectionChallenges;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class CollectionFrameworkEx {
	public static void main(String[] args) {
		
		//Add and print arraylist.
//		ArrayList<String> list=new ArrayList<>();
//		list.add("Apple");
//		list.add("Banana");
//		list.add("kiwi");
//		System.out.println(list);
//		System.out.println();
//		for (String s: list) {
//			System.out.println(s);
//		}
		
		
		//max,min in collection
//		List<Integer> nums=Arrays.asList(10,20,30,40,50);
//		System.out.println(Collections.max(nums));
//		System.out.println(Collections.min(nums));
		
		
		
		//collection sort
//		List<String> names = new ArrayList<>();
//		names.add("Zara");
//		names.add("Alex");
//		names.add("John");
//		Collections.sort(names);
//		System.out.println(names);
		
		
		//Senario based
		//store std names dynamically and display them alphabetically
		
//		 Scanner sc = new Scanner(System.in);
//	     List<String> students = new ArrayList<>();
//
//	     System.out.println("Enter student names (type 'done' to finish):");
//	     while (true) {
//	    	 String name = sc.nextLine();
//	         if (name.equalsIgnoreCase("done")) break;
//	         students.add(name);
//	     }
//
//	     Collections.sort(students);
//	     System.out.println("Sorted student names: " + students);
		
		
		
		//store integer and disp sum
		
		
		Scanner sc=new Scanner(System.in);
		List<Integer> nums=new ArrayList<>();
		
		System.out.println("Enter numbers");
		int sum=0;
		while(true) {
			int num= sc.nextInt();
			if (num==-1)break;
			nums.add(num);
			sum+=num;
			
		}
		System.out.println(nums);
		System.out.println(sum);
	
	}
}
