const deliveryTimeCalculator = (packageType) => {
    switch (packageType) {
        case "standard":
            console.log('Delivery expected in 3-5 days')
            break;
        case "express":
            console.log('Delivery expected in 1-2 days')
            break;
        case "overnight":
            console.log('Delivery expected by tomorrow')
            break;
        default:
            console.log('Wrong package type input')
            break;
    }
}

deliveryTimeCalculator("standard")
deliveryTimeCalculator("express")
deliveryTimeCalculator("overnight")