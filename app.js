const menu = document.querySelectorAll('.my-tab .tab-menu ul li a');
const body = document.querySelectorAll('.tab-body .tab-pane');

menu.forEach( item => {
    
    item.addEventListener('click',function(e){
        e.preventDefault();

        menu.forEach( item => {
            item.classList.remove('active'); 
        })
        item.classList.add('active');

        let link = document.querySelector(this.getAttribute('href'));

        body.forEach( item =>{
            item.classList.remove('active');
        })

        link.classList.add('active');
       



    })
});