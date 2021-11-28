var likeCount =9
var addCount = document.querySelector("#count")

function addLike() {
    likeCount++
    addCount.innerText = likeCount + " like(s)"
}