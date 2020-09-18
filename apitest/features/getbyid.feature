Feature: Test GetById Students Data fetchStudents Scenario
Scenario Outline: Test fetchStudent/:id API Call
When send GET request to "http://localhost:8081/fetchStudents/223445
Then id should be "223445"


