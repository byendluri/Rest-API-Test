Feature: Myapi
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Get All data
    * Get the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                                 | expectval                                                                                                                                                                                                                                                                                   |
      | http://localhost:8081/fetchStudents | [{"id":0,"firstname":"undefined","lastname":"undefined","class":"undefined","nationality":"undefined"},{"id":223445,"firstname":"Mike","lastname":"Wong","class":"3A","nationality":"Singapore"},{"id":900076,"firstname":"bhargav","lastname":"yendluri","class":"6C","nationality":"sg"}] |

  Scenario Outline: Post data
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                            | data                                                                                        | expectval                                                                                                                                                                                                                                                                                 |
      | http://localhost:8081/students | { "id": 345678, "firstname": "Zack", "lastname": "gee", "class": "8B", "nationality": "us"}| {"id":"345678","lastname":"Gee","class":"8B","nationality":"US"} |

  Scenario Outline: Scenario Put Data
    * Update to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                        | data                 | expectval                 |
      | http://localhost:8081/updateStudent/345678 | {"nationality": "sg"}| User deleted Successfully |