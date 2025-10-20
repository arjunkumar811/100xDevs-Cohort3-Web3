contract FixedArry {
uint[3] public numbers;

function setNumber(uint _num, uint _num, uint _num) public {
    numbers[0] = _num;
    numbers[1] = _num;
    numbers[2] = _num;
}

function getValue() public view returns (uint) {
    return numbers[index];
}


}