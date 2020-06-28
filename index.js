    import BookFinder from './book-finder.js';
    
    /*** create bookCard items and add them to array  ***/
    async function createDomElements(bookListResult, searchTerm) {
        let bookCardArray = [];
        for( let item of bookListResult.items){
            /*** Create all necessary elements  ***/
            const bookCardDiv = document.createElement('div');
            const bookImageDiv = document.createElement('div');
            const bookImage = document.createElement('img');
            const bookTitle = document.createElement('h1');
            const bookDetailsDiv = document.createElement('div');
            const bookAuthor = document.createElement('h2');
            const bookPageCount = document.createElement('p');
            
            /*** Add appropriate classesName  ***/
            bookCardDiv.className = "book-card";
            bookImageDiv.className = "book-cover-container";
            bookImage.className = "book-cover";
            bookTitle.className = "bookTitle";
            bookDetailsDiv.className = "book-details";
            bookAuthor.className = "book-author";
            bookPageCount.className = "book-pages";

            /*** Grab data and insert it into created elements  ***/
            bookImage.setAttribute('src', item.volumeInfo.imageLinks!= null ? item.volumeInfo.imageLinks.thumbnail : "./img/no-image.png");
            bookTitle.innerHTML = item.volumeInfo.title!= null && item.volumeInfo.title.length ? item.volumeInfo.title : "no-Tile";
            bookAuthor.innerText = item.volumeInfo.authors!= null && item.volumeInfo.authors.length ? item.volumeInfo.authors[0] : "no-author";
            bookPageCount.innerHTML = item.volumeInfo.pageCount!= null && item.volumeInfo.pageCount.length ? item.volumeInfo.pageCount : "#0";

            /***  push bookCard in array  ***/
            bookDetailsDiv.append(bookAuthor, bookPageCount);
            bookImageDiv.append(bookImage);
            bookCardDiv.append(bookImageDiv, bookTitle, bookDetailsDiv);
            bookCardArray.push(bookCardDiv);
        }

        /*** create empty element to add at the end of the array. this empty element make prevent from extra growing in last row.  ***/
        for( let i = 0; i < 3; i++){
             const bookCardDiv = document.createElement('div');
             bookCardDiv.className = "book-card hidden-flex-item";
             bookCardArray.push(bookCardDiv);
        }

        return bookCardArray;
    }

    /*** clear content of domElement (remove all inner elements ***/
    function clearContent(domElement){
             while(domElement.firstChild) { 
                domElement.removeChild(domElement.firstChild); 
            } 
    }

    /*** display element ***/
    function showElement(domElement){
         domElement.classList.add("show");
         domElement.classList.remove("hide");
    }
   
    /*** hide element ***/
    function hideElement(domElement){
        domElement.classList.add("hide");
        domElement.classList.remove("show");
    }

    /*** enable element***/
    function setEnable(domElement){
        domElement.disabled = false;
    }

    /*** disable element***/
    function setDisable(domElement){
        domElement.disabled = true;
    }
   
    export default class Index{
      async find(){
        let searchTerm = document.getElementById("searchInput").value;
        let bookListContainer = document.querySelector(".book-list-container");
        let messageContainer = document.querySelector(".msg-container");
        let messageElement = document.querySelector(".msg");
        let loaderContainer = document.querySelector(".loader-container");
        const findButton = document.querySelector('.search-btn')
        
        setDisable(findButton);
        showElement(loaderContainer);
        const bookFinder = new BookFinder(searchTerm, 23);
        let bookListResult = await bookFinder.findBook();

        /*** if any book find truly ***/
        if (bookListResult != null && bookListResult.totalItems > 0){
           /*** create book card ***/
            await createDomElements(bookListResult, searchTerm)
            .then(result => { 
              
                /*** hide message-container ***/
                hideElement(messageContainer);

                /*** clear all previous search result ***/
                clearContent(bookListContainer);
               
                /*** Add new books find result to DOM ***/
                result.forEach(bookCard => {
                    bookListContainer.append(bookCard);
                });

                /*** show book list container ***/
                showElement(bookListContainer);

                /*** hide loader ***/
                hideElement(loaderContainer);

                /*** enable find button ***/
                setEnable(findButton)
            })
            .catch( error => {
                hideElement(loaderContainer);
                hideElement(bookListContainer);
                showElement(messageContainer);
                setEnable(findButton);
                messageElement.innerText = `Error on create DOM element.`;
                console.log(error);
            })  
        }else{
            hideElement(loaderContainer);
            hideElement(bookListContainer);
            showElement(messageContainer);
            if(searchTerm != ""){
                messageElement.innerText = `No results for "${searchTerm}". \nTry checking your spelling or use more general terms.`;
            }else{
                messageElement.innerText = `Please enter book title.`;
            }
            setEnable(findButton)
        }
    }
    
}
