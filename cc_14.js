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
    custName.textContent = customerName; 

    const issuedes = document.createElement("p"); 
    // issue description
    issuedes.textContent = issue;

    const priorityLevel = document.createElement("span");
     // created label to show priority level.
    priorityLevel.textContent = `Priority: ${priority}`; 
    priorityLevel.classList.add("prioritylevel"); }
    // shows if something is a priority