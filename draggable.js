class draggable {

    DragSrcEl;
    list;
    update;

    constructor(option) {

        this.setuplist(option) ;
        this.list = option.list ; 
        if(option.update) this.update = option.update;

        for(let listitem of option.elList.children) {
            this.addDnDHandlers(listitem)
        }

    }

    setuplist(option) {
        let {list , elList , template} = option;

        if(! elList) throw Error('the list is not exsist')
        if(! list) throw Error('the data is not exsit')
        if(! Array.isArray(list)) throw Error('list is not array')
        if(! template) throw Error('add temolate')
        if(! typeof template === "function") throw Error('template is not funcation')


        list.forEach(item => elList.innerHTML += template(item))
    }

    addDnDHandlers(elList) {
        elList.setAttribute('draggable' , true) ;
    
        elList.addEventListener('dragstart' , this.HandlerDragStart.bind(this))
        elList.addEventListener('dragenter' , this.HandlerDragEnter.bind(this))
        elList.addEventListener('dragover' , this.HandlerDragOver.bind(this))
        elList.addEventListener('dragleave' , this.HandlerDragLeave.bind(this))
        elList.addEventListener('drop' , this.HandlerDragDrop.bind(this))
        elList.addEventListener('dragend' , this.HandlerDragEnd.bind(this)) 
    
    }
    
    HandlerDragStart(e) {
        
        this.DragSrcEl = e.target ;

        e.dataTransfer.effectAllowed = 'move' ;
        e.dataTransfer.setData('text/html' , e.target.outerHTML);

        e.target.classList.add('dragElem')
    }

    HandlerDragEnter(e) {
    }

    HandlerDragOver(e) {
        if(e.preventDefault) e.preventDefault();

        e.target.classList.add('over')
    }

    HandlerDragLeave(e) {
        
        e.target.classList.remove('over')
    }

    HandlerDragDrop(e) {

        let target = e.target.closest('.list-item');

        if(this.DragSrcEl != target) {
            target.parentNode.removeChild(this.DragSrcEl);
            let dropHTML = e.dataTransfer.getData('text/html');
            target.insertAdjacentHTML('beforebegin' , dropHTML)
            this.addDnDHandlers(target.previousSibling)
        }

        e.target.classList.remove('over');
 
    }

    HandlerDragEnd(e) {
        
        e.target.classList.remove('dragElem')

        let newlist = [] ;
        list.querySelectorAll('.list-item').forEach(elList => newlist.push(this.list.find(item => elList.id == item.id)))
        this.update(newlist)
    }


}



