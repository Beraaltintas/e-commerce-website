const commentReviewsFunc = function(){
    const commentStarsDOM = document.querySelectorAll(".comment-form-rating .star");
    commentStarsDOM.forEach((item)=>{
        item.addEventListener("click",(e)=>e.preventDefault());//yukarı atmayı engelle
        item.addEventListener("click",()=>{
            commentStarsDOM.forEach((star)=> star.classList.remove("active"));
            item.classList.add("active");
        });
    });
    
};

const addNewCommentFunc = () =>{
    let comments =[];
    let commentTextDOM = document.getElementById("comment-text");
    let commentText ="";
    let commentNameDOM = document.getElementById("comment-name");
    let commentName ="";
    let commentBtnDOM = document.querySelector(".form-submit input");
    let commentListDOM = document.querySelector(".comment-list");
    // function addComment(e){
        
    //     console.log(e);
        

    // }
    commentTextDOM.addEventListener("input",function(e){
        commentText = e.target.value;
        
        
    })
    commentNameDOM.addEventListener("input",function(e){
        commentName = e.target.value;
        
        
    })
    commentBtnDOM.addEventListener("click",function(e){
        e.preventDefault();
        comments.push({text: commentText ,author: commentName});
        let resault = "";
        comments.forEach((item)=>{
            resault += `
            <li class="comment-item">
                      <div class="comment-avatar">
                        <img src="img/avatars/avatar1.jpg" alt="">
                      </div>
                      <div class="comment-text">
                        <ul class="comment-star">
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i class="bi bi-star-half"></i>
                          </li>
                        </ul>
                        <div class="comment-meta">
                          <strong>${item.author}</strong>
                          <span>-</span>
                          <time>feb 23, 2025</time>
                        </div>
                        <div class="comment-desc">
                          <p>
                            ${item.text}
                          </p>
                        </div>
                      </div>
                    </li>
            `;
        });
        commentListDOM.innerHTML = resault;
        commentTextDOM.value = "";
        commentNameDOM.value = "";
    });
    
    
}

function commentsFunc(){
    commentReviewsFunc();
    addNewCommentFunc();
    
}
export default commentsFunc();