function oldBooks(book, capacity){
    capacity_count = Number(capacity)
    for (capacity_count; capacity_count > 0; capacity_count--){
        let book_name = input.shift();
        if(book_name == book){
            break;
        }
    }
    if (capacity_count > 0) {
        console.log(`You checked ${capacity - capacity_count} books and found it.`)
    } else {
        console.log('The book you search is not here!')
        console.log(`You checked ${capacity} books.`)
    }
}