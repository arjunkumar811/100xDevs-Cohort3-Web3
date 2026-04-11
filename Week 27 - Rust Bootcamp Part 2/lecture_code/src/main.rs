fn main() {
    let str = String::from("Arjun");
    let len = get_length(str);
    println!("{}", len);

    print!("{}", str); // gives waring
}

fn get_length(str: String) -> usize {
    return str.len()
}
