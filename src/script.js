function toggleMenu() {
  const menu = document.getElementById('mobileMenu')
  if (menu.classList.contains('max-h-0')) {
    menu.classList.remove('max-h-0', 'opacity-0')
    menu.classList.add('max-h-96', 'opacity-100') // Adjust 'max-h-96' as needed to fit content
  } else {
    menu.classList.remove('max-h-96', 'opacity-100')
    menu.classList.add('max-h-0', 'opacity-0')
  }
}
