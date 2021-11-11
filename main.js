async function fetchPicture() {
    const src ="https://images.unsplash.com/photo-1633115384130-49f50dd42ff0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"  // await fetch("https://api.unsplash.com/")
    // createElement("img");
    const src ="https://images.unsplash.com/photo-1633115384130-49f50dd42ff0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"  
    const response = await fetch("https://api.unsplash.com//photos/random?client_id=IQP84MhEUy4biTV0H2iqzsVkO_MRv_tgppvDf86BNHU")
}

response.json().then( res => {
    console.log(res.urls)
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.serAttribute("alt", "pictures from unsplash")
    img.height = "400" 
    img.width = "600"
    //img.height="400"
    //img element i body taggen
    document.querySelector("body").appendChild(img)
})

document
.querySelector("button")
.addEventListener("click", fetchPicture)


/*
async function fetchPicture() {
    const src ="https://images.unsplash.com/photo-1633115384130-49f50dd42ff0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"  // await fetch("https://api.unsplash.com/")
    // createElement("img");
    const src ="https://images.unsplash.com/photo-1633115384130-49f50dd42ff0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"  

    const response = await fetch("https://api.unsplash.com//photos/random?client_id=IQP84MhEUy4biTV0H2iqzsVkO_MRv_tgppvDf86BNHU")



   response.json().then( res=> {

    console.log(res.urls)
    const img = document.createElement("img"); 
    img.setAttribute("src", src );
    img.setAttribute("src", res.urls.small );
    img.setAttribute("alt", "pictures from unsplash")
    img.height="400"
    img.width="600"
    //img.height="400"
    // img element i body taggen
    document.querySelector("body").appendChild(img)


   } )



}
document
.querySelector("button")
.addEventListener("click", fetchPicture)*/