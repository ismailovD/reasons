const   sideBarBtn = document.querySelector('.side-bar__btn'),
        sideBar = document.querySelector('.side-bar'), 
        pageContent =document.querySelector('.global__content'), 
        selectBtns = document.querySelectorAll('.select__btn'),
        selectParent = '.select',
        selectItems = document.querySelectorAll('.select__item'),
        allChecked = document.querySelector('#all-check'),
        allCheckbox =document.querySelectorAll('.table__check-input'),
        deletePolicy = document.querySelector('.reason__delete'),
        tableRow = '.table__row',  
        dropdownWindow = document.querySelector('.side-bar__dropdown'),
        dropdownBtn = document.querySelector('.side-bar__dropdown-btn'); 

        
sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active'); 
        if(sideBar.classList.contains('active')){  
            pageContent.style.marginLeft = "275px"; 
    }else {  
        dropdownWindow.classList.remove('active')
        pageContent.style.marginLeft = "65px";  
    }
}); 

selectBtns.forEach(btn => { 
    btn.addEventListener('click', () => {  
        document.querySelectorAll(selectParent).forEach(parent => {
            if(btn.closest(selectParent) != parent){
                parent.classList.remove('show-select')
            }
        })
        btn.closest(selectParent).classList.toggle('show-select') 
    });
})
 
 

selectItems.forEach(item => {
     item.addEventListener('click', () => {
        selectItems.forEach(el => {
            el.classList.remove('item-selected')
        })
        item.classList.add('item-selected'); 
        item.closest(selectParent).children[0].textContent = item.getAttribute('data-value');
        item.closest(selectParent).classList.remove('show-select')
     })
})
allChecked.addEventListener('click',() => {
     if(allChecked.checked){
        allCheckbox.forEach(check => {
            check.checked = true
        })
     }else {
        allCheckbox.forEach(check => {
            check.checked = false
        })
     } 
 })

 deletePolicy.addEventListener('click', () => {
    allCheckbox.forEach(inp => {
        if(inp.checked){
            inp.closest(tableRow).remove();
        }
    })
 })

 dropdownBtn.addEventListener('click', () => {
    dropdownWindow.classList.toggle('active'); 
    if(dropdownWindow.classList.contains('active')){
        sideBar.classList.add('change-height')
    }else sideBar.classList.remove('change-height')
})