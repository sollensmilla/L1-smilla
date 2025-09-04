/**
 * The script for the client-side of the application.
 *
 * @author Smilla Sollén <ss226uk@student.lnu.se>
 * @version 1.0.0
 */

const form = document.getElementById('name-form')
const input = document.getElementById('name-input')
const message = document.getElementById('welcome-message')
const greeting = document.getElementById('greeting')
const mascot = document.getElementById('mascot')

const mascots = [
  'img/sylvan1.png',
  'img/sylvan2.png',
  'img/sylvan3.png',
  'img/sylvan4.png',
  'img/sylvan5.png'
]

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = input.value.trim()
  if (name) {
    const randomMascot = mascots[Math.floor(Math.random() * mascots.length)]
    mascot.src = randomMascot

    message.textContent = `Hej ${name}! Kul att du är här!`

    greeting.classList.remove('hidden')

    input.value = ''
  }
})
