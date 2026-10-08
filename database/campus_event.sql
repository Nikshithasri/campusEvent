CREATE DATABASE campus_event_db;

USE campus_event_db;

-- STUDENTS TABLE
CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department VARCHAR(50) NOT NULL,
    year INT NOT NULL
);

-- EVENTS TABLE
CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    event_date DATE,
    venue VARCHAR(100),
    capacity INT
);

-- REGISTRATIONS TABLE
CREATE TABLE registrations (
    registration_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    event_id INT,
    registration_date DATE,
    status VARCHAR(20) DEFAULT 'Registered',

    FOREIGN KEY (student_id)
        REFERENCES students(student_id),

    FOREIGN KEY (event_id)
        REFERENCES events(event_id)
);

-- INSERT STUDENTS
INSERT INTO students (name, email, department, year)
VALUES
('Nikshitha Sri', 'nikshitha@srmist.edu.in', 'CSE', 3),
('Ananya Sharma', 'ananya@srmist.edu.in', 'CSE', 2),
('Rahul Kumar', 'rahul@srmist.edu.in', 'ECE', 3),
('Sneha Raj', 'sneha@srmist.edu.in', 'CSE', 1),
('Arjun Kumar', 'arjun@srmist.edu.in', 'IT', 3);

-- INSERT EVENTS
INSERT INTO events
(event_name, category, event_date, venue, capacity)
VALUES
('TechFest 2026', 'Technical', '2026-10-20', 'TP2 Auditorium', 200),
('CodeSprint', 'Coding', '2026-10-22', 'Lab 5', 100),
('Design Arena', 'Design', '2026-10-24', 'Tech Park', 80),
('Hackathon', 'Technical', '2026-10-26', 'TP1 Hall', 150),
('Cultural Night', 'Cultural', '2026-10-28', 'University Ground', 500);

-- INSERT REGISTRATIONS
INSERT INTO registrations
(student_id, event_id, registration_date)
VALUES
(1, 1, '2026-10-08'),
(2, 1, '2026-10-08'),
(3, 2, '2026-10-08'),
(1, 4, '2026-10-08'),
(4, 3, '2026-10-08');

-- ALTER TABLE EXAMPLE
ALTER TABLE students
ADD phone VARCHAR(15);

-- UPDATE EXAMPLE
UPDATE students
SET phone = '9876543210'
WHERE student_id = 1;