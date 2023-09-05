function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}
function Barreira(reversa = false) { 
  this.elemento = novoElemento('div','barreira')

  const borda = novoElemento('div', 'borda')
  const corpo = novoElemento('div', 'corpo')
  this.elemento.appendChild(reversa ? corpo : borda)
  this.elemento.appendChild(reversa ? borda : corpo)

  this.SetAltura = altura => corpo.style.height  = `${altura}px`
}
//const b = new Barreira(true)
// b.setAltura(300)
//document.querySelector('[wm-flappy]').appendChild

function ParDeBarreiras(altura, abertura, x) {
  this.elemento = novoElemento('div','par-de-barreiras')

  this.superior = new Barreira(true)
  this.inferior = new Bareiras(false)

  this.elemento.appendChild(this.superior.elemento)
  this.elemento.appendChild(this.inferior.elemento)

  this.sortearAbertura = () = >{
    
  }
}
