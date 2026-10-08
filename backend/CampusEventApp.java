import java.sql.*;

public class CampusEventApp {

    // ==========================================
    // DATABASE DETAILS
    // ==========================================

    static final String URL =
            "jdbc:mysql://localhost:3306/campus_event_db";

    static final String USER =
            "root";

    static final String PASSWORD =
            "root";


    // ==========================================
    // MAIN METHOD
    // ==========================================

    public static void main(String[] args) {

        System.out.println(
                "=================================="
        );

        System.out.println(
                " CAMPUS EVENT MANAGEMENT SYSTEM"
        );

        System.out.println(
                "=================================="
        );


        try {

            // Connect to database

            Connection connection =
                    DriverManager.getConnection(
                            URL,
                            USER,
                            PASSWORD
                    );


            System.out.println(
                    "\nDatabase Connected Successfully!"
            );


            // Execute SELECT query

            displayRegistrations(connection);


            // INSERT example

            // insertStudent(connection);


            // UPDATE example

            // updateRegistration(connection);


            // DELETE example

            // deleteRegistration(connection);


            connection.close();


            System.out.println(
                    "\nDatabase connection closed."
            );


        } catch (SQLException e) {

            System.out.println(
                    "Database connection failed!"
            );

            e.printStackTrace();

        }

    }


    // ==========================================
    // SELECT + JOIN
    // ==========================================

    public static void displayRegistrations(
            Connection connection)
            throws SQLException {


        String sql = """
                SELECT
                    r.registration_id,
                    s.name,
                    s.department,
                    e.event_name,
                    e.category,
                    r.status
                FROM registrations r
                JOIN students s
                    ON r.student_id = s.student_id
                JOIN events e
                    ON r.event_id = e.event_id
                """;


        // Statement Interface

        Statement statement =
                connection.createStatement();


        // ResultSet Interface

        ResultSet result =
                statement.executeQuery(sql);


        System.out.println(
                "\n--- REGISTRATION DETAILS ---"
        );


        while (result.next()) {

            int id =
                    result.getInt(
                            "registration_id"
                    );

            String name =
                    result.getString("name");

            String department =
                    result.getString("department");

            String event =
                    result.getString("event_name");

            String category =
                    result.getString("category");

            String status =
                    result.getString("status");


            System.out.println(
                    id + " | "
                    + name + " | "
                    + department + " | "
                    + event + " | "
                    + category + " | "
                    + status
            );

        }


        result.close();

        statement.close();

    }


    // ==========================================
    // INSERT
    // ==========================================

    public static void insertStudent(
            Connection connection)
            throws SQLException {


        String sql =
                "INSERT INTO students "
                + "(name, email, department, year) "
                + "VALUES "
                + "('New Student', "
                + "'newstudent@srmist.edu.in', "
                + "'CSE', 3)";


        Statement statement =
                connection.createStatement();


        int rows =
                statement.executeUpdate(sql);


        System.out.println(
                "\nInserted rows: " + rows
        );


        statement.close();

    }


    // ==========================================
    // UPDATE
    // ==========================================

    public static void updateRegistration(
            Connection connection)
            throws SQLException {


        String sql =
                "UPDATE registrations "
                + "SET status = 'Cancelled' "
                + "WHERE registration_id = 1";


        Statement statement =
                connection.createStatement();


        int rows =
                statement.executeUpdate(sql);


        System.out.println(
                "\nUpdated rows: " + rows
        );


        statement.close();

    }


    // ==========================================
    // DELETE
    // ==========================================

    public static void deleteRegistration(
            Connection connection)
            throws SQLException {


        String sql =
                "DELETE FROM registrations "
                + "WHERE registration_id = 5";


        Statement statement =
                connection.createStatement();


        int rows =
                statement.executeUpdate(sql);


        System.out.println(
                "\nDeleted rows: " + rows
        );


        statement.close();

    }

}