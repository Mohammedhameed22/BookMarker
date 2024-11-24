var bookMarkName = document.getElementById('bookmarkname');
var bookMarkUrl = document.getElementById('bookmarkurl');

var tableInfo = document.getElementById('table-info');
var formAlert = document.getElementById('formAlert');
var arr =[];

if(localStorage.getItem('arr') != null){
    arr =JSON.parse(localStorage.getItem('arr'));
    console.log(arr);
    displayBooks();
    
}

function addBooks(){
    if(validateForm(bookMarkName)
        && validateForm(bookMarkUrl))
    {
            books = {
                name:bookMarkName.value,
                url:bookMarkUrl.value
            }
            arr.push(books);
            localStorage.setItem('arr',JSON.stringify(arr));
            console.log(arr);
            displayBooks();
            formAlert.classList.add('d-none')
            

        }else{
            formAlert.classList.remove('d-none')
        }
   
}



function displayBooks(){
    var book =``;
    for(i=0;i<arr.length;i++){
        book +=` 
                <tr>
                    <td>${i + 1}</td>
                    <td>${arr[i].name}</td>
                    <td><button  type="button" class="btn btn-success text-white"> <i class="fa-solid fa-eye px-2"></i>visit</button></td>
                    <td><button  onclick="deleteBook()" type="button" class="btn btn-danger text-white"><i class="fa-solid fa-trash px-2"></i>delete</button></td>
                </tr>
           
        
        
        
        
        `
    }
    tableInfo.innerHTML = book;


}

function deleteBook(deleteIndex){
    arr.splice(deleteIndex,1);
    localStorage.setItem('arr',JSON.stringify(arr));
    displayBooks();

    
}
function validateForm(element){
    var regex ={
        bookmarkname: /^.{3,}$/,
        bookmarkurl:/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.?[a-z]{2,6}\b\.([-a-zA-Z0-9@:%_\+.~#?&//=]+)/gi
       
    }

    if (regex[element.id].test(element.value)){
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        element.nextElementSibling.classList.add('d-none');
        return true;
    }else{
        element.classList.add('is-invalid')
        element.classList.add('is-valid')
        element.nextElementSibling.classList.remove('d-none');
        return false;

    }

}