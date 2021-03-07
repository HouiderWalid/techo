function capitalizeFirstWord(value) {
    if (!value) return ''
    value = value.toString().trim()
    return value.charAt(0).toUpperCase() + value.slice(1)
}

function capitalizeWords(value) {
    if (!value) return ''
    value = value.toString().trim()
    let allWords = value.split(' ')
    if (allWords.length < 2) return capitalizeFirstWord(value)
    else {
        let allWordsCqp = ''
        allWords.forEach(word => allWordsCqp = allWordsCqp + ' ' + capitalizeFirstWord(word))
        return allWordsCqp.trim()
    }
}

const capfw = {
    name: 'capfw',
    methode: capitalizeFirstWord
}

const capw = {
    name: 'capw',
    methode: capitalizeWords
}

export default {
    capfw,
    capw
}

function collapseHeight(element) {
    let sectionHeight = element.scrollHeight;
    let elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(function() {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;

        requestAnimationFrame(function() {
            element.style.height = 0 + 'px';
        });
    });

    element.setAttribute('data-collapsed', 'true');
}

function expandHeight(element) {
    let sectionHeight = element.scrollHeight;

    element.style.height = sectionHeight + 'px';

    element.addEventListener('transitionend', function(e) {
        //element.removeEventListener('transitionend', arguments.callee);
        element.style.height = null;
    });

    element.setAttribute('data-collapsed', 'false');
}
