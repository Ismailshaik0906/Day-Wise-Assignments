
public class StringAPIEx {

	public static void main(String[] args) {
		String str = "Java";
        System.out.println("Char at 2: " + str.charAt(2));
        System.out.println("Length: " + str.length());
        System.out.println("Substring(1,3): " + str.substring(1, 3));

        // Count vowels
        int count = 0;
        for (char c : str.toLowerCase().toCharArray()) {
            if ("aeiou".indexOf(c) != -1) count++;
        }
        System.out.println("Vowels: " + count);

        // Palindrome check
        String str2 = "madam";
        boolean isPalindrome = str2.equals(new StringBuilder(str2).reverse().toString());
        System.out.println("Is Palindrome: " + isPalindrome);

        System.out.println("Upper: " + str.toUpperCase());
        System.out.println("Lower: " + str.toLowerCase());

        String messy = " Hello@ Java!! ";
        String cleaned = messy.replaceAll("[^a-zA-Z]", "");
        System.out.println("Cleaned: " + cleaned);

	}

}
