
/* fn main() {
    println!("Hello, world!");
    let ans: u16 = sum(1, 2);
    println!("{}", ans);
}

fn sum(a: u16, b: u16) -> u16 {
    return a + b;
}

// signed number u32
// unsigned number i32

*/

// Nmbers

/*fn main() {
    let x: i32 = 1;
    println!("{}", x);
}
*/ 



// What happens if we overflow?

/*fn main() {
    let mut num: i8 = 124;
    for i in 0..100 {
        num += 127;
    }
    print!("Number: {}", num)
}
*/



//Bool


// fn main() {
//     let ans: bool = is_even(10);
//     println!("{}", ans);
// }

// fn is_even (a: u32) -> bool {
//     return a % 2 == 0;
// }



// Strings


// fn main() {
//     let num = String::from("Arjun");
//     println!("{}", num);
// }


//  Arrays

// fn main () {
//     let arr: [i32; 4] = [12, 23, 34, 45];
//     println!("{}", arr.len());
    
// }



// Vectors

// fn main() {
//     let vec = vec![12, 23, 34];
//     print!("{}", xs.len());
// }


    



// Condition

// pub fn main() {

//     let x:i32 = 99;
//     let is_even = is_even(x);
//     if is_even {
//     println!("{} is even" ,x);
//     } else {
//     println!("{} is odd" ,x);
//     }
// }

// pub fn is_even(x: i32) -> bool{
//  return x % 2 == 0;
// }



// Loops

// fn main() {
//     for i in 0..5 {
//         println!("i: {}", i);
//     }
// }


// Loop with Index

// fn main() {
//     let arr = [5, 10, 15];

//     for i in 0..arr.len() {
//         println!("{}", arr[i]);
//     }
// }


// Loops for Strigs

// pub fn main() {
//     let str = String::from("harkirat singh");
//     println!("First name {}", get_first_name(str))
    
// }

// pub fn get_first_name(str: String) -> String {
//     let mut first_name = String::from("");
//     for c in str.chars() {
//         if c == ' ' {
//             break
//         }
//         first_name.push(c);
//     }
//     return first_name;
// }




// Mutable vs immutable variables

// fn main() {
//     let x = 5;
//     println!("The value of x is: {x}");
//     x = 6;
//     println!("The value of x isa {x}");
// }




// fn main() {
//     let mut x = 5;
//     println!("The value of x is: {x}");
//     x = 6;
//     println!("The value of x isa {x}");
// }



// Function

// fn sum(x: i32) -> i32 {
//     return a + b;
// }



// Ownership of heap variables

