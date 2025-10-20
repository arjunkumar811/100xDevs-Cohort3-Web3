function (uint256[] memory _number) {
    uint num = 0;

    for(uint256 i = 0; i < _number.length; i++) {
        num =+ _number[i];
    }

    return num;
}