fn main() {
    let str = String::from("Arjun");
    let len = get_length(str);
    println!("{}", len);

    print!("{}", str); // gives waring
}

fn get_length(str: String) -> usize {
    return str.len()
}




//Transferring back ownership 
fn main() {
    let str = String::from("Harkirat");
    let (str, len) = get_length(str);
    println!("{} {}", str, len);
}

fn get_length(str: String) -> (String, usize) {
    let len = str.len();
    return (str, len);
}