
const ulElement = document.querySelector('ul')
const divMainTitltes = document.querySelector('#mainTitles')
const h4Element = document.querySelector('h4')
const rightTitleElement = document.querySelector('#rightTitle')
const leftTitleElement = document.querySelector('#leftTitle')
const labelElement = document.querySelector('#label1')
const texts = {
    'text1' : 'My name is Mateus, I live in São Paulo, Brazil and I am 15 years old. I always liked programmation and I have done many coding courses already, now I am doing a Harvard course to improve my coding skill, probably until now probably you are thinking that I am too young for this, but in my opinion I am just preparing me to the future. Now I already speak 3 languages: portuguese, english and spanish, and I am also learning german now. My average in school is very high and I am thinking of do a college outside Brazil, maybe in Harvard, with you that probably is reading this.',
    'text2' : 'With only 15 years I already do many things, for example: '
}
const listElements = [
    'Play violin',
    'Programming in 8 different languages',
    'Speak English',
    'Speak Spanish',
    'Speak Portuguese',
    'Speak German',
    'Cambridge exam certificate',
    '...And much more'
]

leftTitleTouched(false)
function rightTitleTouched(value){
    //=============label style========================//
    labelElement.setAttribute('class','label_page4')
    

    //=============image changing=====================//
    divMainTitltes.removeAttribute('class')
    divMainTitltes.setAttribute('class', 'image2')

    //=============button skin changing===============//
    rightTitleElement.removeAttribute('class')
    rightTitleElement.setAttribute('class', 'selected_true')

    leftTitleElement.removeAttribute('class')
    leftTitleElement.setAttribute('class', 'selected_false')

    //============text changing=======================//
    h4Element.textContent = 'My skills'
    labelElement.textContent = texts.text2

    addElements()

}
function leftTitleTouched(){
    //=============image changing=====================//
    divMainTitltes.removeAttribute('class')
    divMainTitltes.setAttribute('class', 'image1')

    //=============button skin changing===============//
    leftTitleElement.removeAttribute('class')
    leftTitleElement.setAttribute('class', 'selected_true')

    rightTitleElement.removeAttribute('class')
    rightTitleElement.setAttribute('class', 'selected_false')

    //============text changing=======================//
    h4Element.textContent = 'Who am I?'
    labelElement.textContent = texts.text1

    removeElements()

}

function addElements(){

       
        for(var elementInList in listElements){
            const element = listElements[elementInList]
            console.log(element)
    
            var newElementOfList = document.createElement('li')
            var liTextContent = document.createTextNode(element)
    
            
            ulElement.appendChild(newElementOfList)
            newElementOfList.appendChild(liTextContent)
            
        }
}
function removeElements(){
    ulElement.innerHTML = ''
}