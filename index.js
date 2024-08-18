const questions = Array.from(document.getElementsByClassName("card-question"));

console.log(questions)

questions.forEach(el =>
  el.onclick = () => {
    const flag = el.getAttribute('data-open')

    if (flag === 'false') {
      el.setAttribute('data-open', 'true')
    } else {
      el.setAttribute('data-open', 'false')
    }
  }
)