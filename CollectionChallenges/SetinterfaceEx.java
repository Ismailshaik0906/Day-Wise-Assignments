package CollectionChallenges;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class SetinterfaceEx {

	public static void main(String[] args) {
		
		//use hashset to store unique roll numbers
		Set<Integer> rollNumbers = new HashSet<>();
        rollNumbers.add(101);
        rollNumbers.add(102);
        rollNumbers.add(103);
        rollNumbers.add(101); // duplicate will be ignored

        System.out.println("Unique roll numbers: " + rollNumbers);
        
        
        
        //use treeset to automatically sort
        Set<String> cities = new TreeSet<>();
        cities.add("Delhi");
        cities.add("Mumbai");
        cities.add("Bangalore");
        cities.add("Chennai");

        System.out.println("Sorted cities: " + cities);
        
        
        
        //use linkedhashset to maintain insertion order
        
        Set<String> animals = new LinkedHashSet<>();
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Horse");
        animals.add("Dog"); // duplicate ignored

        System.out.println("Animals (insertion order): " + animals);
        
        
        //Senario based
        //store unique email ids
        Scanner sc = new Scanner(System.in);
        Set<String> emailSet = new HashSet<>();

        System.out.println("Enter email IDs (type 'done' to finish):");
        while (true) {
            String email = sc.nextLine();
            if (email.equalsIgnoreCase("done")) break;
            if (emailSet.add(email)) {
                System.out.println("Email registered.");
            } else {
                System.out.println("Duplicate email! Not added.");
            }
        }

        System.out.println("Registered emails: " + emailSet);
        
        
        //eliminate duplicate city names using set
        Scanner scanner = new Scanner(System.in);
        List<String> cts = new ArrayList<>();
        System.out.println("Enter city names (type 'done' to finish):");

        while (true) {
            String city = scanner.nextLine();
            if (city.equalsIgnoreCase("done")) break;
            cts.add(city);
        }

        Set<String> uniqueCities = new HashSet<>(cts);
        System.out.println("Unique cities: " + uniqueCities);
        
	}

}
