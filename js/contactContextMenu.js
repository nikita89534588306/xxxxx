class ContextMenu{
    constructor(contact){

        this.INDEX = 1;
        this.path = contact.parentElement.children[this.INDEX];
    }

    get isOpen (){ return this.path.className.split(' ').includes("show")  }

    open = function(){  
        contactList.closeContextMenuContacts()
        this.path.classList.add("show")

        window.addEventListener('click', function closeContextMenuContact(){

            contactList.closeContextMenuContacts()
            this.window.removeEventListener( 'click',closeContextMenuContact )

        })
    }

    close = function(){  this.path.classList.remove("show") }

}
class Contact
{
    contextMenu;

    constructor(contact){

       this.contextMenu = new ContextMenu(contact);
       contact.oncontextmenu = this.callContextMenu
       
    }

    callContextMenu = function()
    {
        event.preventDefault();
        let contextMenu = new ContextMenu(this);
        contextMenu.open()
    }

}

class ContactsList{
    contact = []
    constructor( contactsHTMLCollection ) {
        
        for(let oneContactHTML of contactsHTMLCollection )
        {    
            this.contact.push( new Contact( oneContactHTML ) )   
        }   

    }
    closeContextMenuContacts = function(){

        for (let contact of this.contact){   
            
            if(contact.contextMenu.isOpen){ 
               
                contact.contextMenu.close(); 
                break 

            }
        }
    }
}



let contactList = new ContactsList( document.querySelectorAll('.contact') );
