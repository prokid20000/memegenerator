document.addEventListener("DOMContentLoaded", function(){
    var memeForm = document.getElementById("memeform");
    var listGallery = document.querySelector(".gallery");

    memeForm.addEventListener("submit", function(event){
        event.preventDefault();

        var memeLi = document.createElement('li');
        memeLi.classList.add("memeimage");

        var urlInput = document.getElementById('upimg').value,
        src =  urlInput,
        img = document.createElement('img');
        img.src = src;
        
        var topTextDiv = document.createElement('div');
        topTextDiv.classList.add("text", "top");
        topTextDiv.innerText = document.getElementById("toptext").value;

        var bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add("text", "bottom");
        bottomTextDiv.innerText = document.getElementById("bottomtext").value;

        var removeDiv = document.createElement('div');
        removeDiv.classList.add("redcross");
        removeDiv.innerText = "X";
        removeDiv.style.color = "red";
    
        listGallery.appendChild(memeLi);
        memeLi.appendChild(img);
        memeLi.appendChild(topTextDiv);
        memeLi.appendChild(bottomTextDiv);
        memeLi.appendChild(removeDiv);

        memeForm.reset();
    });

    function remove(event){
        event.target.parentNode.remove();
    }
    
    listGallery.addEventListener('click', remove, false);

});