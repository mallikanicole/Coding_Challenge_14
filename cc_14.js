//Task 2 Adding Support Tickets Dynamically

const elementID=document.getElementById('ticketContainer');
const ticketCard=document.createElement('div');
ticketCard.setAttribute("class","ticket-card");
ticketCard.setAttribute("id","ticketName")

ticketContainer.appendChild(ticketCard);

function addSupportTicket(ticketName,issueDesc,priorityLev){
    const supportTicket=document.getElementById('supportTicket')
    const newTicket=document.createElement('li');
    newTicket.setAttribute('class','support-ticket');
    newTicket.innerText=ticketName;
    newTicket.addEventListener('click',()=>{
        removeSupportTicket(newTicket);
    });
    supportTicket.appendChild(newTicket);
};
