const button = document.querySelectorAll("button");
const img = document.querySelector("#my_image");
const inputFile = document.querySelector("input[type=file]");
const div =  document.querySelector("#insirir_img");
const range =  document.querySelector("input[type=range]");


var valores = { Brilho: { value: 50, max: 200 },  Cor: { value: 40, max: 200 },  Inversao: { value: 0, max: 100 },}

let filtroativo;
button[0].classList.add("tons")
valores["Brilho"].value = 150


const novofoto = ()=>{
let input = document.createElement("input");
input.type = "file";
input.click();


input.onchange =()=>{
let file = input.files[0];
img.src = URL.createObjectURL(file);
}

}



button.forEach((item) => {

item.onclick = ()=>{
document.querySelector(".tons").classList.remove("tons");
item.classList.add("tons")
filtroativo = item.innerText;
range.value = valores[item.innerText].value;

}

})


//criar canvas para poder abaixa a foto
function Abaixar() {
   
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  
 ctx.filter = `
 brightness(${valores["Brilho"].value}%) 
 grayscale(${valores["Cor"].value}%) 
 invert(${valores["Inversao"].value}%)
  `;



ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.drawImage(
    img,
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );

  const link = document.createElement("a");
  link.download = "foto_editada.png";
  link.href = canvas.toDataURL();
  link.click();

}



function Auterar(v) {
valores[filtroativo].value = v.value

 
  img.style.filter = `
  brightness(${valores["Brilho"].value}%)
  grayscale(${valores["Cor"].value}%) 
  invert(${valores["Inversao"].value}%)
  
  
  `;
  


}
 

