/*execute the function that shows the dkill detai description when the detail button is clicked*/
document.addEventListener("DOMContentLoaded", () => {
    /*getting all the button that triggers the action*/
    const skillDetailButton = document.querySelectorAll(".skill-detail");

    /*Actions are assigned for each button*/
    skillDetailButton.forEach((button) => {
        button.addEventListener("click", (detail) =>{
            const skill = detail.target.closest(".skills");
            const detailDescription = skill.querySelector(".detail-description"); /*getting the correponding description*/

            /*switching the actieve statement of .detail-description in between active and non-active*/
            detailDescription.classList.toggle("active");

            if(detailDescription.classList.contains("active")){
                button.textContent= "Hide details";/*what the button will show under active status*/
            }
            else{
                button.textContent= "Click here for more details!";/*what the button will show under non-active status*/
            }
        });
    });
})

