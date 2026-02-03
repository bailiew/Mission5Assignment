// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function() {
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
