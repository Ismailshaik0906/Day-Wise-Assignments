
public class StringBuilderex {

	public static void main(String[] args) {
		String st="HELLO";
		StringBuilder sb=new StringBuilder(st);
		System.out.println(sb.reverse());
		System.out.println(sb.append(" Welcome!"));
		System.out.println(sb.replace(0, 5, "Hello"));
		System.out.println(sb.insert(6, "Guys!, "));
		System.out.println(sb.delete(6,12));

	}

}
