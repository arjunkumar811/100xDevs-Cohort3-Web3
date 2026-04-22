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

// Object in javascript
// function main() {
//     let r = {
//         width = 20,
//         height = 20
//     }

//     cosnole.log(r.width, r.height)
// }


// Struct in Rust


// struct Rect {
//     width: f32,
//     height: f32
// }

// fn main() {
//     let r: Rect = Rect {
//          width: 20.0,
//          height: 20.0
//     };

//     println!("{}, {}", r.width, r.height);
// }



// Class on javascript

// class Rect {
//     constructor(w, h){
//         this.width = w;
//         this.height = h;

// area() {
//     return this.height * this.width
// }


// perimeter() {
//     return 2 * (this.height + this.width)
// }


//     }

// }

// let r = new Rect(10, 10);
// console.log(r.perimeter())
// console.log(r.area())



struct User {
    name: String,
    age: u32
}

fn main () {
    let user1: User  = User {
            name: String::from("Arjun"),
            age: 18
    };


    let user2: User  = User {
            name: String::from("Kumar"),
            age: 13
    };

    print!("{}", is_allowed_to_vote(user1));
    print!("{}", is_allowed_to_vote(user2));


}

fn is_allowed_to_vote(u: User) -> bool {
    if u.age >= 18 {
        return  true;
    } 
    false
}