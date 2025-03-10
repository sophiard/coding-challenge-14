//task 1: in html

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
    priorityLevel.classList.add("prioritylevel"); }
    // shows if something is a priority

//Task 3 - Highlighting High Priority Tickets
function HighPriorityTickets() { //highlights the high priority tickets
    const priorityElements = document.querySelectorAll(".prioritylevel");
    const priorityTickets = Array.from(priorityElements);
//changes list ot array

    priorityTickets.forEach(ticket => { //created loop for each ticker
        if (ticket.textContent.includes("Priority: High")) { //sees if ticket is high priority 
            ticket.parentElement.style.backgroundColor = "purple"; //highlights purple if so
        }
    });
}
