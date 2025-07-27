import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class DatetimeEx {

	public static void main(String[] args) {
		LocalDateTime now = LocalDateTime.now();
        System.out.println("Now: " + now);

        LocalDate birth = LocalDate.of(2002, 12, 24);
        Period age = Period.between(birth, LocalDate.now());
        System.out.println("Age: " + age.getYears());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        System.out.println("Formatted: " + now.format(formatter));

        LocalDate future = LocalDate.now().plusDays(5);
        System.out.println("5 Days Later: " + future);


	}

}
