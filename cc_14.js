//Task 2 - Support Tickets Dynamic Addition
function addSupportTicket(Name, issue, priority) {
    const container = document.getElementById("ticketContainer"); 
    // created container

    const ticket = document.createElement("div"); 
    ticket.setAttribute("class", "support-ticket"); 
    // helps build a support ticket and sets attributes 

    const custName = document.createElement("h3");
    // heading for the customer’s name
    custName.textContent = Name; 

    const issuedes = document.createElement("p"); 
    // issue description
    issuedes.textContent = issue;

    const priorityLevel = document.createElement("span");
    // created label to show priority level.
    priorityLevel.textContent = `Priority: ${priority}`; 
    priorityLevel.classList.add("prioritylevel"); 
    // shows if something is a priority

    
    //Task 4 - Support Ticket Resolution with Event Bubbling
    const resolveButton = document.createElement("button");
    //created a resolve button
    resolveButton.textContent = "Resolved";
    resolveButton.addEventListener("click", function(event) {
        event.stopPropagation();
        container.removeChild(ticket);
    });

    // Append elements
    ticket.appendChild(custName);
    ticket.appendChild(issuedes);
    ticket.appendChild(priorityLevel);
    ticket.appendChild(resolveButton);
  // Appends elements

    
    container.appendChild(ticket);
    //appends the ticket to container 
}

//Task 3 - Highlighting High Priority Tickets
function HighPriorityTickets() { 
    // highlights the high priority tickets
    const priorityElements = document.querySelectorAll(".prioritylevel");
    const priorityTickets = Array.from(priorityElements); 
    // changes list to array

    priorityTickets.forEach(ticket => { 
        // created loop for each ticket
        if (ticket.textContent.includes("Priority: High")) { 
            // checks if ticket is high priority 
            ticket.parentElement.style.backgroundColor = "lavender"; 
            // highlights purple if so
        }
    });
}


const ticketContainer = document.getElementById("ticketContainer");
ticketContainer.addEventListener("click", function() {
    console.log("ticket clicked");
}); //logged when ticket is clicked on 

// task 2 - test 
window.onload = function() {
    addSupportTicket("Phineas Flynn", "Rollercoaster too slow", "Low");
    addSupportTicket("Candace Flynn", "Mom won't believe me", "High");
    addSupportTicket("Perry the Platypus", "Lost spy gear", "Medium");

///task 3 test 
    HighPriorityTickets();
};