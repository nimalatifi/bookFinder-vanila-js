export default class BookFinder {
    
    constructor( title = "Harry Potter", maxResult = 26 ) {
        this.bookTitle = title;
        this.maxResult = maxResult;
    }

    async getBooksFromGoogle() {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.bookTitle}&maxResults=${this.maxResult}`);
        const data =  await response.json();
       // console.log(data);
        return data;
    }

    async findBook() {
        let finalBookListResult = null;
        if (this.bookTitle.trim() != ""){
            await this.getBooksFromGoogle()
                    .then(result => { finalBookListResult = result} )
                    .catch( error => {
                        finalBookListResult = null;
                        console.log( 'Error on GoogleApi response!');
                        console.log(error);
                    })
        }
        return finalBookListResult;
    }

}

