function bookPantrySlot() {
    console.log("Starting booking process...");

    // step 1: Find the first Wednesday with an available slot
    let days = document.querySelectorAll("[role='gridcell']");
    let wednesday = null;
    
    days.forEach(day => {
        let dayText = day.innerText.trim();
        let isAvailable = day.querySelector("button"); // check if selectable
        let date = new Date();
        date.setDate(parseInt(dayText));

        if (date.getDay() === 3 && isAvailable) { // wed is day 3
            wednesday = day;
        }
    });

    if (wednesday) {
        console.log("Selecting available Wednesday.....");
        wednesday.click();

        // step 2: Wait for slot list to appear
        setTimeout(() => {
            let slots = document.querySelectorAll("button[role='button']");
            if (slots.length > 0) {
                console.log("Selecting first available slot.......");
                slots[0].click();

                // step 3: Click 'Next' button
                setTimeout(() => {
                    let nextButton = document.querySelector("button:contains('Next')");
                    if (nextButton) {
                        nextButton.click();

                        // step 4: Autofill the form
                        setTimeout(() => {
                            document.querySelector("[name='first_name']").value = "Daniel";
                            document.querySelector("[name='last_name']").value = "YourLastName";
                            document.querySelector("[name='email']").value = "your-email@cmu.edu";
                            document.querySelector("button:contains('Schedule Event')").click();
                        }, 2000);
                    }
                }, 2000);
            }
        }, 2000);
    } else {
        console.log("No available Wednesdays found.");
    }
}

// run the function when the page loads
window.onload = bookPantrySlot;
