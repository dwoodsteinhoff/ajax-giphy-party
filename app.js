console.log("Let's get this party started!");

const gifs = $("#gifs")
const searchInput = $("#search")


function addGif(res){
    let results = res.data.length
    if(results){
        let randomIndex = Math.floor(Math.random() * results)

        let gifContainer = $("<div>", { id: "gifContainer" });

        let newGif = $("<img>",{
            src : res.data[randomIndex].images.original.url,
            id : "theGif"
        });

    gifContainer.append(newGif)
    gifs.append(gifContainer);
    } 
}

$("form").on("submit", async function (e) {
    e.preventDefault();

   let searchTerm = searchInput.val();
   searchInput.val("");

    const res = await axios.get('http://api.giphy.com/v1/gifs/search',{params:{
        q : searchTerm,
        api_key : "HVXw1WjOjccnOQzzVmVeSvLEEzFNyPlw"
        }
    });
    console.log(res.data)
  addGif(res.data);
});

function clearImages () {
    document.getElementById("gifs").innerHTML = "";
}

const removeBtn = document.querySelector('#remove')
removeBtn.addEventListener("click",function(e){
    e.preventDefault();
    clearImages();
})