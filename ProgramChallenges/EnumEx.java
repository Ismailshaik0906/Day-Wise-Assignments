

enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

enum TrafficLight {
    RED("Stop"), GREEN("Go"), YELLOW("Wait");

    String action;

    TrafficLight(String action) {
        this.action = action;
    }

    public String getAction() {
        return action;
    }
}

class EnumDemo {
    public static void main(String[] args) {
        // 1. Iterate enum
        for (Day d : Day.values()) {
            System.out.println(d);
        }

        // 2. Use enum in switch
        Day today = Day.FRIDAY;
        switch (today) {
            case MONDAY -> System.out.println("Start of week");
            case FRIDAY -> System.out.println("Almost weekend");
            default -> System.out.println("Midweek day");
        }

        // 3. Enum with properties
        for (TrafficLight t : TrafficLight.values()) {
            System.out.println(t + ": " + t.getAction());
        }
    }
}

