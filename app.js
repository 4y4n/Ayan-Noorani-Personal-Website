const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransitions(){
    // Button Click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }
    // Sections Active Class
    allSections[0].addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            const btns = sectBtns[0].children;
            for (let btn of btns){
                btn.classList.remove('active')
            }
            // Remove selected from the button
            // sectBtns.forEach((btn) => {
            //     btn.classList.remove('active')
            // });
            e.target.classList.add('active')

            // Hide other sections
            sections.forEach((sections)=>{
                sections.classList.remove('active')
            });

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    });
}
PageTransitions();
