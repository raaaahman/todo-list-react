const stylesheet = document.createElement('link')
stylesheet.href = 'fold.css'
stylesheet.rel = 'stylesheet'

document.head.appendChild( stylesheet )

document.querySelectorAll('.test-result.failed').forEach(element => {
    const failureMessages = element.querySelector('.failureMessages')
    failureMessages.classList.add('folded')

    element.addEventListener('click', () => {
        failureMessages.classList.toggle('folded')
    })
})