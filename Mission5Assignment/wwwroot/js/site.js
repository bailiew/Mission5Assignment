// Ensure that the DOM is ready
$(document).ready(function() {
    // get input from form and store number input by user
    $("#btnSubmit").on("click", function () {
        const hours = parseFloat($("#txtHours").val());
        const rate = parseFloat($("#txtRate").data("rate"));

        // if the user does not enter hours 
        if (isNaN(hours) || hours < 0) {
            $("#txtTotal").val("Enter valid hours");
            return
        }

        const total = hours * rate;

        // Format as currency
        $("#txtTotal").val(total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        }));

    });

});
