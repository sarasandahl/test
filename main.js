async function fetchPicture() {
    const src = ("https://images.unsplash.com/photo-1633115384130-49f50dd42ff0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80")
    const response = await fetch ("https://api.unsplash.com//photos/random?client_id=ca7ON_zCDKnzVsuzwapdk-_KoxIHqdE9tSzVokJUOME")   
}

response.json().then(res => {
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.serAttribute("alt, pictures from unsplash")
})