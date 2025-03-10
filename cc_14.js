//Task 2 Adding Support Tickets Dynamically

const elementID=document.getElementById('ticketContainer');
const ticketCard=document.createElement('div');
ticketCard.setAttribute("class","ticket-card");
ticketCard.setAttribute("id","ticketName");
ticketCard.classList.add('ticket-card')

ticketContainer.appendChild(ticketCard);

function addSupportTicket(ticketName,issueDesc,priorityLev){
    const supportTicket=document.getElementById('supportTicket')
    const newTicket=document.createElement('li');
    newTicket.setAttribute('class','support-ticket');
    newTicket.innerText=ticketName;
    newTicket.innerText=issueDesc
    newTicket.innerText=priorityLev
    const addButton=document.createElement('button');
    addButton.textContent='New Ticket';


    const removeButton=document.createElement('button');
    removeButton.textContent='Resolve'
    removeButton.addEventListener('click',()=>{
        removeButton(newTicket);
    });
    supportTicket.appendChild(card);
};

//task 3 Converting Nodelists to Arrays for Bulk Updates

function highlightHighPriority(){
    const highlightHighPriority=document.querySelectorAll(".high");
    const highPriorityArray=Array.from(highPriority);

    highPriorityArray.forEach(ticketCard=>{
        ticketCard.style.border="1.5px tomato";
        ticketCard.style.backgroundColor="blueviolet";
        
    });
};
