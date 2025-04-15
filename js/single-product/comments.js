let activeStar =0;
const commentReviewsFunc = function(){
    const commentStarsDOM = document.querySelectorAll(".comment-form-rating .star");
    
    commentStarsDOM.forEach((item, index)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            commentStarsDOM.forEach((star)=> star.classList.remove("active"));
            item.classList.add("active");
            const starCount = item.querySelectorAll("i").length;
            activeStar = starCount;
            console.log(activeStar);
        });
    });  
};

const addNewCommentFunc = () => {
  commentReviewsFunc();
    // 1. LocalStorage'dan yorumları al
    //let comments = JSON.parse(localStorage.getItem("comments")) || [];
    let comments = localStorage.getItem("comments") ? JSON.parse(localStorage.getItem("comments")) :[];
  
    // 2. DOM elemanları
    const commentTextDOM = document.getElementById("comment-text");
    const commentNameDOM = document.getElementById("comment-name");
    const commentBtnDOM = document.querySelector(".form-submit input");
    const commentListDOM = document.querySelector(".comment-list");
    // 3. Sayfa yüklenince varsa yorumları göster
    const renderComments = () => {
      let result = "";
      comments.forEach((item) => {
        result += `
          <li class="comment-item">
            <div class="comment-avatar">
              <img src="img/avatars/avatar1.jpg" alt="">
            </div>
            <div class="comment-text">
              <ul class="comment-star">
                  
                ${"<li><i class='bi bi-star-fill'></i></li>".repeat(item.stars)}
              </ul>
              <div class="comment-meta">
                <strong>${item.author}</strong>
                <span>-</span>
                <time>${new Date().toLocaleDateString()}</time>
              </div>
              <div class="comment-desc">
                <p>${item.text}</p>
              </div>
            </div>
          </li>
        `;
      });
  
      commentListDOM.innerHTML = result;
    };
  
    renderComments();
  
    // 4. Butona tıklanınca yorum ekle
    commentBtnDOM.addEventListener("click", function (e) {
      e.preventDefault();
  
      const commentText = commentTextDOM.value.trim();//trim baştaki ve sondaki boşlukları temizler
      const commentName = commentNameDOM.value.trim();
  
      if (!commentText || !commentName) return;
  
      // Yorum ekle
      comments.push({ text: commentText, author: commentName, stars:activeStar });
  
      // LocalStorage'a kaydet
      localStorage.setItem("comments", JSON.stringify(comments));
  
      // Listeyi tekrar çiz
      renderComments();
  
      // Formu temizle
      commentTextDOM.value = "";
      commentNameDOM.value = "";
      
    });
  };
  

function commentsFunc(){
    commentReviewsFunc();
    addNewCommentFunc();
    
}
export default commentsFunc();