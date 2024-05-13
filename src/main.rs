fn main() {
    let mut vector = vec![
        vec![1,2,3,4],
        vec![5,6,7,8],
        vec![9,10,11,12],
        vec![13,14,15,16]
    ];

        for row in vector.iter_mut() {
            row.reverse();
        }

        println!("Output:");
            for row in&vector {
                println!("{:?}", row);
            }
}
