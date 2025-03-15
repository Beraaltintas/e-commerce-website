function sidebarFunc() {
  //! home sidebar start
  const btnOpenSidebar = document.querySelector("#btn-menu"); //? #işareti id ye göre alır #btn-menu . direkt classı alır .header-mobile
  const sidebar = document.querySelector("#sidebar");
  const close_sidebar = document.querySelector("#close-sidebar");
  btnOpenSidebar.addEventListener("click", function () {
    sidebar.style.left = "0";
  });
  close_sidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%";
  });
  console.log(btnOpenSidebar);

  /* click outside start */
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar)
    ) {
      sidebar.style.left = "-100%";
    }
  });
  /* click outside end */
  //! home sidebar end
}
function searchModalFunc() {
  //! search modal start
  const btnOpenSearch = document.querySelector(".search-button");
  const btnCloseSearch = document.getElementById("close-search");
  const modalSearch = document.getElementsByClassName("modal-search");
  const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");
  btnOpenSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "visible";
    modalSearch[0].style.opacity = "1";
  });
  btnCloseSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "1";
  });

  /* click outside start */
  document.addEventListener("click", function (e) {
    //e=event
    if (
      !e.composedPath().includes(modalSearchWrapper[0]) &&
      !e.composedPath().includes(btnOpenSearch)
    ) {
      modalSearch[0].style.visibility = "hidden";
      modalSearch[0].style.opacity = "1";
    }
  });
  /* click outside end */
  //! search modal end
}

function headerFunc(){
    sidebarFunc();
    searchModalFunc();
}
export default headerFunc();