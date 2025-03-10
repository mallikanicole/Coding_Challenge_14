//Task 2 Adding Support Tickets Dynamically

const ticketContainer=document.getElementById('ticketContainer');
const ticketCard=document.createElement('div');
ticketCard.setAttribute("class","ticket-card");//set class attributes
ticketCard.setAttribute("id","ticketName");//set id attributes
ticketCard.classList.add('ticket-card')

ticketContainer.appendChild(ticketCard);//append ticket to container

function addSupportTicket(ticketName,issueDesc,priorityLev){//build support ticket
    const supportTicket=document.getElementById('supportTicket')
    const newTicket=document.createElement('li');
    newTicket.setAttribute('class','support-ticket');
    newTicket.innerText=ticketName;
    newTicket.innerText=issueDesc
    newTicket.innerText=priorityLev
    const addButton=document.createElement('button');
    addButton.textContent='New Ticket';

    
    const resolveButton=document.createElement('button');
    resolveButton.textContent='Resolve'
    resolveButton.addEventListener('click',(event)=>{
        resolveButton(newTicket);
    });
};

addSupportTicket('new ticket');

//task 3 Converting Nodelists to Arrays for Bulk Updates

function highlightHighPriority(){//select high priority tickets
    const highlightHighPriority=document.querySelectorAll(".high");
    const highPriorityArray=Array.from(highPriority);

    highPriorityArray.forEach(ticketCard=>{
        ticketCard.style.border="1.5px tomato";
        ticketCard.style.backgroundColor="blueviolet";
        
    });
};

//Task 4 Implementing Ticket Resolution with Event Bubbling

ticketContainer.addEventListener('click',()=>{
    console.log("Support ticket has been clicked")
});//logs message when support ticket clicked

const resolveButton=document.createElement('button');
resolveButton.addEventListener('click',(event)=>{
    ticketContainer.removeChild(ticket);
    event.stopPropagation()
})


addSupportTicket("Tyler Swift","Phone won't turn off","Low")
addSupportTicket("Selena Hernandez","Fraud Suspected","High")
addSupportTicket("Ariana Venti","Phone won't turn on","High")

//Task 5 Inline Editing of Support Tickets


//add edit button
const editButton=document.createElement("button");
editButton.textContent="Edit";

editButton.addEventListener("click",function(){
    const inputName=document.createElement("input");
    inputName.value=heading.textContent;
    const inputIssue=document.createElement("input");
    inputIssue.value=paragraph.textContent;
    const saveButton=document.createElement("button");
    saveButton.textContent='Save';
    card.appendChild(inputIssue);

    card.appendChild(inputName);
    card.appendChild(inputIssue);
    card.appendChild(saveButton);
    card.appendChild(removeButton);

    saveButton.addEventListener("click",function(){
        heading.textContent=inputName.value;
        paragraph.textContent=inputIssue.value;

        card.inner.HTML="";
        card.appendChild(heading)
        card.appendChild(paragraph)
        card.appendChild(removeButton)
        card.appendChild(editButton)
    })
})