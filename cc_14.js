//Task 2 Adding Support Tickets Dynamically

const elementID=document.getElementById('ticketContainer');
const ticketCard=document.createElement('div');
Card.setAttribute("class","ticket-card");
Card.setAttribute("id","ticketName");

ticketContainer.appendChild(ticketCard);

function addSupportTicket(ticketName,issueDesc,priorityLev){
    const supportTicket=document.getElementById('supportTicket')
    const newTicket=document.createElement('li');
    newTicket.setAttribute('class','support-ticket');
    newTicket.innerText=ticketName;
    const addButton=document.createElement('button');
    addButton.textContent='New Ticket';
    const removeButton=document.createElement('button');
    removeButton.textContent='Resolve'
    removeButton.addEventListener('click',()=>{
        removeButton(newTicket);
    });
    supportTicket.appendChild(card);
};
