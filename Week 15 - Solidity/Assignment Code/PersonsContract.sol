// struct Assignment

contracts PersonContract {
    struct Person {
        string name;
        uint age;
        address addr;


        Person public person1;
        Person public person1;
        Person public person1;

        function (string memory _name, uint _age, address _addr) {
            person1.name = _name;
            person1.age = _age;
            person1,addr = _addr;
        }

        
        function (string memory _name, uint _age, address _addr) public {
            person2.name = _name;
            person2.age = _age;
            person2,addr = _addr;
        }

        
        function (string memory _name, uint _age, address _addr) public {
            person3.name = _name;
            person3.age = _age;
            person3,addr = _addr;
        }

  function getPersons() public view returns (string memory, uint, address) {
    return (person1.name, person1,age, person1.add);
  }
        
    }
}