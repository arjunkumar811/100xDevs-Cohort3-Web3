// fn main() {
//     let str = String::from("Arjun");
//     let len = get_length(str);
//     println!("{}", len);

//     print!("{}", str); // gives waring
// }

// fn get_length(str: String) -> usize {
//     return str.len()
// }




//Transferring back ownership 
// fn main() {
//     let str = String::from("Harkirat");
//     let (str, len) = get_length(str);
//     println!("{} {}", str, len);
// }

// fn get_length(str: String) -> (String, usize) {
//     let len = str.len();
//     return (str, len);
// }


// Borrowing and references


// fn main() {
//     let str = String::from("Harkirat");
//     let len = get_length(&str);
//     println!("{} {}", str, len);
// }

// fn get_length(str: &String) -> usize {
//     let len = str.len();
//     return len
// }


// Structs

// Class in javascript
// function main() {
//     let r = {
//         width = 20,
//         height = 20
//     }

//     cosnole.log(r.width, r.height)
// }


// Struct in Rust


struct Rect {
    width: f32,
    height: f32
}

fn main() {
    let r: Rect = Rect {
         width: 20.0,
         height: 20.0
    };

    println!("{}, {}", r.width, r.height);
}
