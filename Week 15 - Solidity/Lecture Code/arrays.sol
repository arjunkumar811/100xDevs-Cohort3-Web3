// fixed Array

contract FixedArry {
uint[3] public numbers;

function setNumber(uint _num, uint _num, uint _num) public {
    numbers[0] = _num;
    numbers[1] = _num;
    numbers[2] = _num;
}

function getValue(uint index) public view returns (uint) {
    return numbers[index];
}


}


// Dynamic Array

contract DynamicArray () {
    unit256[] num;

    constructor(unit256 _num) public {
        num = _num;
    }

    function add(unit256 _num) public {
        num.push(_num);
    }

    function getSum(unit256 index) public view returns (unit256) {
        return num[index];
    }
}