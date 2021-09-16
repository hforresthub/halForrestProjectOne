// on blog comment form submit, add timestamped comment to list with anonymous picture
// add a query selector for the form
// add a listener for form submit
// prevent default submit action
// grab input data
// use input data to create a new comment entry

// code start

// selector queries
const formEl = document.querySelector('form.commenting')

// functions 
const getInputData = function (event) {
	event.preventDefault()

	const commenterName = document.querySelector('input[name=name]').value
	const commenterComment = document.querySelector('textarea[name=comment]').value

	createPost(commenterName, commenterComment)
}

const getOrdinal = function(number) {
	if (number == 1 || number == 21 || number == 31) {
		return 'st'
	} else if (number == 2 || number == 22) {
		return 'nd'
	} else if (number == 3 || number == 23) {
		return 'rd'
	} else {
		return 'th'
	}
}

const createPost = function (name, comment) {
	// selectors
	const commentList = document.querySelector('.commentList')
	const newComment = document.createElement('div')

	// date info
	const date = new Date();
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
	const dateString = date.toLocaleDateString(undefined, options)
	const dateArray = dateString.split(',')
	const dayNumber = date.getDate()
	const dateFormatted = `${dateArray[0]} ${dateArray[1]}${getOrdinal(dayNumber)}, ${dateArray[2]}`
	
	// creating the post
	newComment.innerHTML = `<div class="wrapper commentImage">
	<img src="./images/unknownprofile.png" alt="unknown user">
	</div> <!-- div.commentImage end -->
	<div class="wrapper commentText">
	<p class="date">${dateFormatted} by ${name}</p>
	<p>${comment}</p>
	</div> <!-- div.commentText end -->`
	newComment.classList.add('wrapper')
	newComment.classList.add('comment')
	commentList.appendChild(newComment)

	formEl.reset()
}

// listeners
formEl.addEventListener('submit', getInputData)

