import java.util.Arrays;

public class ArraysEx {

	public static void main(String[] args) {
		 int[] arr = {12, 5, 8, 130, 45};

	        // Largest and smallest
	        int max = arr[0], min = arr[0];
	        for (int n : arr) {
	            if (n > max) max = n;
	            if (n < min) min = n;
	        }
	        System.out.println("Max: " + max + ", Min: " + min);

	        // Sort ascending
	        Arrays.sort(arr);
	        System.out.println("Sorted: " + Arrays.toString(arr));

	        // Average
	        int sum = 0;
	        for (int n : arr) sum += n;
	        System.out.println("Average: " + (double) sum / arr.length);

	        // Count occurrences of element
	        int count = 0, target = 8;
	        for (int n : arr) {
	            if (n == target) count++;
	        }
	        System.out.println("Occurrences of " + target + ": " + count);

	        // Reverse array
	        System.out.print("Reversed: ");
	        for (int i = arr.length - 1; i >= 0; i--) {
	            System.out.print(arr[i] + " ");
	        }
	        System.out.println();

	}

}
