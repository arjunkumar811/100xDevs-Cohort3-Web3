function setNumber(uint256 _number) public {
    // Use `require` to ensure the number is positive
    require(_number > 0, "Number must be greater than zero");
    storedNumber = _number;
}
