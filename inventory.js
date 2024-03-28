document.addEventListener("click", function(event) {
    if (event.target.classList.contains("change-stock-btn")) {
        var targetRow = event.target.closest("tr");
        var stockLabel = targetRow.querySelector(".stocked-amount");
        var customInput = targetRow.querySelector(".custom-stock-input");

        var currentStock = parseInt(stockLabel.textContent);
        var changeAmount = parseInt(customInput.value) || 1;

        if (event.target.classList.contains("decrease-stock-btn")) {
            if (currentStock >= changeAmount) {
                currentStock -= changeAmount;
            } else {
                alert("Stocked Amount cannot be less than the inputted amount");
            }
        } else if (event.target.classList.contains("increase-stock-btn")) {
            currentStock += changeAmount;
        }

        stockLabel.textContent = currentStock;
    }
});

document.getElementById("addItem_btn").addEventListener("click", function(){
    document.querySelector(".addItem_form").style.display = "flex";
})

document.addEventListener("click",e => {
    if(!document.querySelector(".addItem_form").contains(e.target) && !document.querySelector("#addItem_btn").contains(e.target)){
        document.querySelector(".addItem_form").style.display = "none";
    }
})

document.getElementById("editItem_btn").addEventListener("click", function(){
    document.querySelector(".editItem_form").style.display = "flex";

    var row = this.parentNode.parentNode;
    var productId = row.querySelector("input[name='id']").value;
    var prodName = row.querySelector(".prodName").textContent;
    var prodCategory = row.querySelector(".prodCategory").textContent;
    var prodPrice = row.querySelector(".prodPrice").value;
    var prodDescription = row.querySelector(".prodDescription").textContent;

    document.querySelector(".editItem_form input[name='id']").value = productId;
    document.querySelector(".editItem_form input[name='prodName']").value = prodName;
    document.querySelector(".editItem_form input[name='prodCategory']").value = prodCategory;
    document.querySelector(".editItem_form input[name='prodPrice']").value = prodPrice;
    document.querySelector(".editItem_form input[name='prodDescription']").value = prodDescription;
});

document.addEventListener("click",e => {
    if(!document.querySelector(".editItem_form").contains(e.target) && !document.querySelector("#editItem_btn").contains(e.target)){
        document.querySelector(".editItem_form").style.display = "none";
    }
})