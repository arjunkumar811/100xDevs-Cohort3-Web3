


function (unit256[] memory _number){

if(_number < 10){
    return "Small";
} else if (_number >=10  && _number < 100) {
    return "medium";
} else {
    return "Lrage";
}
}