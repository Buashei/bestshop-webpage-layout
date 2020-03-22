function test() {
    const width = document.documentElement.clientWidth;
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('i');
    const li = document.querySelectorAll('nav>ul>li')
    const calculator = document.querySelector('#calculator')
    hamburger.addEventListener('click', function(){
        nav.classList.toggle('hidden');
    });
    if(width < 817){
        nav.className="hidden";
        hamburger.className="fas fa-bars";
        calculator.className = "calculator hidden";
    } else {
        nav.className="";
        hamburger.classList="hidden";
        calculator.className = "calculator";
    }


    li.forEach(function(element){
        element.addEventListener('click', function(){
            if(width < 817){
                nav.className = "hidden";
            } else {
                nav.className = ""; 
            }
        });
    })
}

window.addEventListener('DOMContentLoaded', function(){
    

    window.addEventListener("resize", function(){
         test();
    })




    // inputs
    const inputProducts = document.querySelector('#products');
    const inputOrders = document.querySelector('#orders');
    const select = document.querySelector('select');
    const checkboxAccounting = document.querySelector('#accounting');
    const checkboxRental = document.querySelector('#rental');
    //Stripes
    const stripeProducts = document.querySelector('.stripe.products');
    const stripeOrders = document.querySelector('.stripe.orders');
    const stripePackage = document.querySelector('.stripe.package');
    const stripeAccounting = document.querySelector('.stripe.accounting');
    const stripeRental = document.querySelector('.stripe.rental');
    
    
    // Prices
    const productPrice = 0.5;
    const basicPrice = 20;
    const professionalPrice = 40;
    const premiumPrice = 60;
    const accountingPrice = 35;
    const rentalPrice = 5;

    // Values
    let productsValue = 0;
    let ordersValue = 0;
    let packageValue = 0;
    let accountingValue = 0;
    let rentalValue = 0;

    function counting(){
        let totalStripe = document.querySelector('.stripe.total');
        let totalValue = totalStripe.children;
        let result = productsValue + ordersValue + packageValue + accountingValue + rentalValue;
        if(isNaN(result)) {
            result = 0;
        }
        totalValue[1].innerText = "$"+result;

    }

    // Products logic
    inputProducts.addEventListener('input', function () {
        const value = this.value;
        productsValue = value * productPrice;
        const quantityChildren = stripeProducts.children;
        counting();
        if (value === "") {
            stripeProducts.style.visibility = "hidden";
            productsValue = 0;
            quantityChildren[1].innerText = "";
            quantityChildren[2].innerText = "$" + productsValue;
        } else if (value > 0) {
            stripeProducts.style.visibility = "visible";
            quantityChildren[0].innerText = "Products";
            quantityChildren[1].innerText = value + " * $ " + productPrice;
            quantityChildren[2].innerText = "$" + productsValue;
        } else {
            stripeProducts.style.visibility = "visible";
            const quantityChildren = stripeProducts.children;
            quantityChildren[0].innerText = "Provided value is invalid.";
            if (quantityChildren < 3) {
                for (i = 0; i < quantityChildren.length - 3; i++) {
                    const newP = document.createElement("p");
                    stripeProducts.appendChild(newP)
                }
            }
            quantityChildren[0].innerText = "Provided value is invalid.";
            quantityChildren[1].innerText = "";
            quantityChildren[2].innerText = "";
        }
    });

    // Orders logic
    inputOrders.addEventListener('input', function () {
        const value = this.value;
        ordersValue = value * productPrice;
        const quantityChildren = stripeOrders.children;
        counting();
        if (value === "") {
            stripeOrders.style.visibility = "hidden";
            ordersValue = 0;
            quantityChildren[1].innerText = "";
            quantityChildren[2].innerText = "$" + ordersValue;
        } else if (value > 0) {
            stripeOrders.style.visibility = "visible";
            quantityChildren[0].innerText = "Orders";
            quantityChildren[1].innerText = value + " * $ " + productPrice;
            quantityChildren[2].innerText = "$" + ordersValue;
        } else {
            stripeOrders.style.visibility = "visible";
            const quantityChildren = stripeOrders.children;
            quantityChildren[0].innerText = "Provided value is invalid.";
            if (quantityChildren < 3) {
                for (i = 0; i < quantityChildren.length - 3; i++) {
                    const newP = document.createElement("p");
                    stripeOrders.appendChild(newP)
                }
            }
            quantityChildren[0].innerText = "Provided value is invalid.";
            quantityChildren[1].innerText = "";
            quantityChildren[2].innerText = "";
        }
    });

    // Select logic
    select.addEventListener('click', function () {
        const value = this.value; 
        const valueChildren = stripePackage.children;
        counting();
        if (value === "") {
            stripePackage.style.visibility = "hidden";
            packageValue = 0;
            valueChildren[1].innerText = "";
            valueChildren[2].innerText = "$" + packageValue;
            counting();
        } else if (value === "Basic") {
            stripePackage.style.visibility = "visible";
            packageValue = basicPrice;
            valueChildren[0].innerText = "Package";
            valueChildren[1].innerText = value;
            valueChildren[2].innerText = "$" + packageValue;
            counting();
        } else if (value === "Professional") {
            stripePackage.style.visibility = "visible";
            packageValue = professionalPrice;
            valueChildren[0].innerText = "Package";
            valueChildren[1].innerText = value;
            valueChildren[2].innerText = "$" + packageValue;
            counting();
        } else if (value === "Premium") {
            stripePackage.style.visibility = "visible";
            packageValue = premiumPrice;
            valueChildren[0].innerText = "Package";
            valueChildren[1].innerText = value;
            valueChildren[2].innerText = "$" + packageValue;
            counting();
        }
    });

    // Accounting checkbox logic
    checkboxAccounting.addEventListener('change', function(){
        const valueChildren = stripeAccounting.children;
        if (checkboxAccounting.checked != true){
            stripeAccounting.style.visibility = "hidden";
            accountingValue = 0;
            counting();
        } else if(checkboxAccounting.checked == true) {
            accountingValue = accountingPrice;
            stripeAccounting.style.visibility = "visible";
            valueChildren[0].innerText = "Accounting";
            valueChildren[1].innerText = "$"+accountingValue;
            counting();
        }
    })

    //Rental checkbox logic
    checkboxRental.addEventListener('change', function(){
        const valueChildren = stripeRental.children;
        if (checkboxRental.checked != true){
            stripeRental.style.visibility = "hidden";
            rentalValue = 0;
            counting();
        } else if(checkboxRental.checked == true) {
            rentalValue = rentalPrice;
            stripeRental.style.visibility = "visible";
            valueChildren[0].innerText = "Terminal";
            valueChildren[1].innerText = "$"+rentalValue;
            counting();
        }
    })
});