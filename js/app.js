const navbarToggle = document.querySelector('#toggle')
const htmlClass = document.querySelector('html')
const bodyClass = document.querySelector('body')
var div = document.createElement('div')
div.id = 'bodyClick'
navbarToggle.addEventListener('click', () => {
 htmlClass.classList.add('nav-open')
 navbarToggle.classList.add('toggled')
 document.body.appendChild(div)
 const bodyClick = document.querySelector('#bodyClick')
bodyClick.addEventListener('click', () => {
	htmlClass.classList.remove('nav-open')
  navbarToggle.classList.remove('toggled')
  bodyClick.remove('#bodyClick')
})
})

const navbar = document.querySelector('#navigation')
const background_image = navbar.dataset.navImage
const readBg = document.querySelector('.read-bg')
const readImage = readBg.dataset.image
const init = () => {
if(window.innerWidth < 991){
	if(background_image != undefined){
		//navbar.style.background = "url('" + background_image + "' )"
		//navbar.style.backgroundSize = "cover"
		navbar.style.cssText = "background: url('" + background_image + "' ); background-size: cover; z-index: 1023; "
		navbar.classList.add("has-image")
	  navbar.removeAttribute('data-nav-image')
	}
}else if (background_image != undefined) {
	navbar.setAttribute('data-nav-image', background_image)
	navbar.classList.remove("has-image")
	navbar.style.background = ''
	//navbar.dataset = background_image
  }

  if(window.innerWidth > 991){
  	if(readImage != undefined){
  		readBg.style.cssText = " background-image: url('" + readImage + "') "
  		readBg.removeAttribute('data-image')
  		readBg.classList.add('has-image')
  	}
  }else if(readImage != undefined){
  	readBg.setAttribute('data-image', readImage)
  	readBg.style = ''
  	readBg.classList.remove('has-image')
  }
}

init()
window.addEventListener('resize', init)


