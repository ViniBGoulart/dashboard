let search = document.querySelector('#fa-searchHeader')
let searchInput = document.querySelector('#inputSearchHeader')
let bell = document.querySelector('#fa-bellHeader')
let contentNotification = document.querySelector('.contentNotificationHeader')
let transparentContent = document.querySelector('#transparentContentForNotification')


function hiddenInput() {
    searchInput.classList.add('invisible', 'd-none')
    search.classList.add('fa-searchNotClicked')
    search.classList.remove('fa-searchClicked')
}
function visibleInput() {
    searchInput.classList.remove('invisible', 'd-none')
    search.classList.remove('fa-searchNotClicked')
    search.classList.add('fa-searchClicked')
}

function hiddenNotification() {
    contentNotification.classList.add('invisible', 'd-none')
    bell.classList.add('fa-bellNotClicked')
    bell.classList.remove('fa-bellClicked')
}
function visibleNotification() {
    contentNotification.classList.remove('invisible', 'd-none')
    bell.classList.remove('fa-bellNotClicked')
    bell.classList.add('fa-bellClicked')
}

function hiddenTranparentContent() {
    transparentContent.classList.add('invisible')
    transparentContent.classList.remove('visible')
}
function visibleTransparentContent() {
    transparentContent.classList.remove('invisible')
    transparentContent.classList.add('visible')
}


search.addEventListener('click', function() {

    let searchInputHidden = searchInput.classList.contains('invisible', 'd-none')

    if (!searchInputHidden) {
        hiddenInput()
    } else {
        visibleInput()
    }
})

bell.addEventListener('click', function() {

    let contentNotificationHidden = contentNotification.classList.contains('invisible', 'd-none')

    if (!contentNotificationHidden) {
        hiddenNotification()
        hiddenTranparentContent()
    } else {
        visibleNotification()
        visibleTransparentContent()
    }
})

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    let searchInputHidden = searchInput.classList.contains('invisible', 'd-none')
    let contentNotificationHidden = contentNotification.classList.contains('invisible', 'd-none')

    if (!searchInputHidden || !contentNotificationHidden) {
        if (isEscKey) {
            hiddenInput()
            hiddenNotification()
            hiddenTranparentContent()
        }
    }

})

document.addEventListener('click', function(event) {

    const isClickedOutNotification = event.target.id == transparentContent.id

    if (isClickedOutNotification) {
        hiddenNotification()
        hiddenTranparentContent()
    }
})