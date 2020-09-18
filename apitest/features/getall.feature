Feature: Test GetAll Students Data fetchStudents Scenario
Scenario Outline: Test fetchStudent API Call
When send GET request to "http://localhost:8081/fetchStudents
Then id should be "223445"


