
const imgContainer = document.querySelector(".galleryimage-large");

console.log(imgContainer);
const btn = document.createElement("button");
btn.innerText="Download all";
btn.className="button";
btn.style="display:flex;align-self:start;justify-self:start;position:relative;z-index:100"
btn.onclick = () => {
    const images = document.querySelectorAll(".galleryimage-element img");
    console.log(images);
    for(let i=0; i<images.length;i++){
        const url = images[i].src;
        fetch(url)
  .then(resp => resp.blob())
  .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = document.title + "_" + i + ".jpg";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
  })
  .catch(() => alert('oh no!'));
    }
};
imgContainer.appendChild(btn);