
const products = [
    {
        id: '1',
        image: [
            './images/body lotion front.png',
            './images/body lotion back.png',
            './images/body lotion single.png',
            './images/body lotion side.png',
            './5.png'
        ],
        title: 'Lightening Body Lotion',
        original_price: 199,
        current_price: 159,
        descrption: [
            "Reduced appearance of dark spots and scarring",  
            "Simple to use - apply twice a day",
            " It can also help diminish the appearance of freckles"
        ],
        quantity: "50ml",
        fragrance: "",
        container: "Harmless tubes",
        pack: 1,
        count: 1
    },
    {
        id: '2',
        image: [
            './1.png',
            './2.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Papaya Face Wash',
        original_price: 105,
        current_price: 84,
        descrption: [
            "Reduce Dark Spot",
            "Clean Pimple",
            "Tighten Pores & Brighten Skin Side"
        ],
        quantity: "50ml",
        fragrance: "Papaya",
        container: "Harmless tubes",
        pack: 1,
        count: 1
    },
    {
        id: '3',
        image: [
            './1.png',
            './2.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Neem Tulsi Aloe vera Face Wash',
        original_price: 99,
        current_price: 79,
        descrption: [
            "Intense Oil Clean & Fresh Skin",
            "Smothing Effect On Dehydrated Or Dry Skin",
            "Includind Vitamin 'C' "
        ],
        quantity: "50ml",
        fragrance: "Neem,Tulsi,Aloe vera",
        container: "Harmless tubes",
        pack: 1,
        count: 1
    },
    {
        id: '4',
        image: [
            './1.png',
            './2.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Acno Fight Fach Wash',
        original_price: 110,
        current_price: 88,
        descrption: [
            "Remove Dark Spots & Wrinkles",
            "Boosts Natural Radiance With Vitamin C ",
            "It Having Anti-Bacterial,Anti-Microbial And Anti-Fungal Properties"
        ],
        quantity: "50ml",
        fragrance: "Lemon",
        container: "Harmless tubes",
        pack: 1,
        count: 1
    },
    {
        id: '5',
        image: [
            './images/papaya soap front.png',
            './images/papaya soap back.png',
            './images/papaya soap side.png',
            './images/papaya soap top.png',
            './5.png'
        ],
        title: 'Papaya Soap',
        original_price: 99,
        current_price: 79,
        descrption: [
            "Skin Lightining & Brightining",
            "Enriched With Papaya Fruit Extract And Vitamin 'C'",
            "It helps tackle the dark spots on the skin and restores a youthful glow"
        ],
        quantity: "125g",
        fragrance: "Papaya",
        container: "Box",
        pack: 1,
        count: 1
    },
    {
        id: '6',
        image: [
            './images/skin care soap1.png',
            './images/skin care soap 2.png',
            './images/skin care soap 3.png',
            './images/skin care soap side.png',
            './5.png'
        ],
        title: 'Skin Care Soap',
        original_price: 90,
        current_price: 72,
        descrption: [
            "Protects the skin from infections",
            "Refreshes and hydrates skin, thereby preventing dry skin",
            "It is a Grade 1 soap with 76 % TFM, which makes it one of the safest soaps in the market"
        ],
        quantity: "75g",
        fragrance: "Neem,Tulsi,Aloe vera",
        container: "Box",
        pack: 1,
        count: 1
    },
    {
        id: '7',
        image: [
            './images/neem soap1.png',
            './images/neem soap2.png',
            './images/neem soap side.png',
            './4.png',
            './5.png'
        ],
        title: 'Neem Soap',
        original_price: 35,
        current_price: 28,
        descrption: [
            "Purifies your skin and leaves you feeling clean and fresh",
            "Anti-bacterial agent that helps fight acne-causing bacteria",
            "It is a Grade 1 soap with 76 % TFM, which makes it one of the safest soaps in the market"
        ],
        quantity: "75g",
        fragrance: "Neem",
        container: "Box",
        pack: 1,
        count: 1
    },
    {
        id: '8',
        image: [
            './images/hand wash orange 1 leter front.png',
            './images/hand wash orange 1 leter back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Wash',
        original_price: 195,
        current_price: 156,
        descrption: [
            "It Is Delicately Balanced To Clean Gently & Effectively",
            " Leave Skin Feeling Soft & Healthy ",
            " Its Unique Fragrance Leave Your Skin Fresh Longer"
        ],
        quantity: "1Leter",
        fragrance: "Orange",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '9',
        image: [
            './images/hand wash rose 1 leter front.png',
            './images/hand wash rose 1 leter back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Wash',
        original_price: 195,
        current_price: 156,
        descrption: [
            "It Is Delicately Balanced To Clean Gently & Effectively",
            " Leave Skin Feeling Soft & Healthy ",
            " Its Unique Fragrance Leave Your Skin Fresh Longer"
        ],
        quantity: "1Leter",
        fragrance: "Rose",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '10',
        image: [
            './images/hand wash lemon 1 leter front.png',
            './images/hand wash lemon 1 leter back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Wash',
        original_price: 180,
        current_price: 144,
        descrption: [
            "It Is Delicately Balanced To Clean Gently & Effectively",
            " Leave Skin Feeling Soft & Healthy ",
            " Its Unique Fragrance Leave Your Skin Fresh Longer"
        ],
        quantity: "1Leter",
        fragrance: "Lemon",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '11',
        image: [
            './images/hand wash orange 500ml front.png',
            './images/hand wash orange 500ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Wash',
        original_price: 105,
        current_price: 84,
        descrption: [
            "It Is Delicately Balanced To Clean Gently & Effectively",
            " Leave Skin Feeling Soft & Healthy ",
            " Its Unique Fragrance Leave Your Skin Fresh Longer"
        ],
        quantity: "500ml",
        fragrance: "Orange",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '12',
        image: [
            './images/hand wash rose 500ml front.png',
            './images/hand wash rose 500ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Wash',
        original_price: 95,
        current_price: 76,
        descrption: [
            "It Is Delicately Balanced To Clean Gently & Effectively",
            " Leave Skin Feeling Soft & Healthy ",
            " Its Unique Fragrance Leave Your Skin Fresh Longer"
        ],
        quantity: "500ml",
        fragrance: "Rose",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '13',
        image: [
            './images/hand wash lemon 500ml front.png',
            './images/hand wash lemon 500ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Wash',
        original_price: 105,
        current_price: 84,
        descrption: [
            "It Is Delicately Balanced To Clean Gently & Effectively",
            " Leave Skin Feeling Soft & Healthy ",
            " Its Unique Fragrance Leave Your Skin Fresh Longer"
        ],
        quantity: "500ml",
        fragrance: "Lemon",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '14',
        image: [
            './images/hand wash orange 250ml front.png',
            './images/hand wash orange 250ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Wash',
        original_price: 55,
        current_price: 44,
        descrption: [
            "It Is Delicately Balanced To Clean Gently & Effectively",
            " Leave Skin Feeling Soft & Healthy ",
            " Its Unique Fragrance Leave Your Skin Fresh Longer"
        ],
        quantity: "250ml",
        fragrance: "Orange",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '15',
        image: [
            './images/hand wash rose 250ml front.png',
            './images/hand wash rose 250ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Wash',
        original_price: 55,
        current_price: 44,
        descrption: [
            "It Is Delicately Balanced To Clean Gently & Effectively",
            " Leave Skin Feeling Soft & Healthy ",
            " Its Unique Fragrance Leave Your Skin Fresh Longer"
        ],
        quantity: "250ml",
        fragrance: "Rose",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '16',
        image: [
            './images/hand wash lemon 250ml front.png',
            './images/hand wash lemon 250ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Wash',
        original_price: 55,
        current_price: 44,
        descrption: [
            "It Is Delicately Balanced To Clean Gently & Effectively",
            " Leave Skin Feeling Soft & Healthy ",
            " Its Unique Fragrance Leave Your Skin Fresh Longer"
        ],
        quantity: "250ml",
        fragrance: "Lemon",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '17',
        image: [
            './images/hand sanitizer 60 ml.png',
            './2.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Rub',
        original_price: 30,
        current_price: 24,
        descrption: [
            "Instantly Cleans Hands Without Water",
            "Use Anytime And Anywhere",
            "It Leaves Your Hands Refreshed"
        ],
        quantity: "60ml",
        fragrance: "",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '18',
        image: [
            './images/hand sanitizer 100ml.png',
            './2.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Rub',
        original_price: 50,
        current_price: 40,
        descrption: [
            "Instantly Cleans Hands Without Water",
            "Use Anytime And Anywhere",
            "It Leaves Your Hands Refreshed"
        ],
        quantity: "100ml",
        fragrance: "",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '19',
        image: [
            './images/hand sanitizer 200ml.png',
            './2.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Rub',
        original_price: 100,
        current_price: 80,
        descrption: [
            "Instantly Cleans Hands Without Water",
            "Use Anytime And Anywhere",
            "It Leaves Your Hands Refreshed"
        ],
        quantity: "200ml",
        fragrance: "",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '20',
        image: [
            './images/hand sanitizer 500ml.png',
            './2.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Hand Rub',
        original_price: 240,
        current_price: 192,
        descrption: [
            "Instantly Cleans Hands Without Water",
            "Use Anytime And Anywhere",
            "It Leaves Your Hands Refreshed"
        ],
        quantity: "500ml",
        fragrance: "",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '21',
        image: [
            './images/glass cleaner 500ml front.png',
            './images/glass cleaner 500ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Glass Cleaner',
        original_price: 110,
        current_price: 88,
        descrption: [
            " Power Of Shine Boosters Remove Dirt & Dust",
            "2 Time More Shine Than Regular Clean",
            "Glass & Shiny Surface Like Mirrors,Glass Windows,Fridge,Tv,Oven,Kitchen Cabinet,Furniture etc."
        ],
        quantity: "500ml",
        fragrance: "",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '22',
        image: [
            './images/surface & floor cleaner mogra 1leter front.png',
            './images/surface & floor cleaner mogra 1leter back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Surface & Floor Cleaner',
        original_price: 165,
        current_price: 132,
        descrption: [
            "Safe On All Surface",
            "Extra Clean,Extra Care,Extra Shine",
            " Remove 99.9% Tough Stains And Leaves A Pleasant Lingering Fragrance"
        ],
        quantity: "1Leter",
        fragrance: "Mogra",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '23',
        image: [
            './images/surface & floor cleaner lemon 1leter front.png',
            './images/surface & floor cleaner lemon 1leter front.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Surface & Floor Cleaner',
        original_price: 165,
        current_price: 132,
        descrption: [
            "Safe On All Surface",
            "Extra Clean,Extra Care,Extra Shine",
            " Remove 99.9% Tough Stains And Leaves A Pleasant Lingering Fragrance"
        ],
        quantity: "1Leter",
        fragrance: "Lemon",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '24',
        image: [
            './images/surface & floor cleaner rose 1leter front.png',
            './images/surface & floor cleaner rose 1leter back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Surface & Floor Cleaner',
        original_price: 165,
        current_price: 132,
        descrption: [
            "Safe On All Surface",
            "Extra Clean,Extra Care,Extra Shine",
            " Remove 99.9% Tough Stains And Leaves A Pleasant Lingering Fragrance"
        ],
        quantity: "1Leter",
        fragrance: "Rose",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '25',
        image: [
            './images/surface & floor cleaner lemon 500ml front.png',
            './images/surface & floor cleaner lemon 500ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Surface & Floor Cleaner',
        original_price: 88,
        current_price: 70,
        descrption: [
            "Safe On All Surface",
            "Extra Clean,Extra Care,Extra Shine",
            " Remove 99.9% Tough Stains And Leaves A Pleasant Lingering Fragrance"
        ],
        quantity: "500ml",
        fragrance: "Lemon",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '26',
        image: [
            './images/surface & floor cleaner rose 500ml front.png',
            './images/surface & floor cleaner rose 500ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Surface & Floor Cleaner',
        original_price: 88,
        current_price: 70,
        descrption: [
            "Safe On All Surface",
            "Extra Clean,Extra Care,Extra Shine",
            " Remove 99.9% Tough Stains And Leaves A Pleasant Lingering Fragrance"
        ],
        quantity: "500ml",
        fragrance: "Rose",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '27',
        image: [
            './images/surface & floor cleaner rose 250ml front.png',
            './images/surface & floor cleaner rose 250ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Surface & Floor Cleaner',
        original_price: 48,
        current_price: 38,
        descrption: [
            "Safe On All Surface",
            "Extra Clean,Extra Care,Extra Shine",
            " Remove 99.9% Tough Stains And Leaves A Pleasant Lingering Fragrance"
        ],
        quantity: "250ml",
        fragrance: "Rose",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '28',
        image: [
            './images/dishwash 250ml front.png',
            './images/dishwash 250ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Dishwash Liquid',
        original_price: 50,
        current_price: 40,
        descrption: [
            "Remove Tough Grease",
            "Remove Food Smell",
            "Cleans 99.9% Germs"
        ],
        quantity: "250ml",
        fragrance: "Lemon",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '29',
        image: [
            './images/dishwash 500ml front.png',
            './images/dishwash 500ml back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Dishwash Liqid',
        original_price: 90,
        current_price: 72,
        descrption: [
            "Remove Tough Grease",
            "Remove Food Smell",
            "Cleans 99.9% Germs"
        ],
        quantity: "500ml",
        fragrance: "Lemon",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '30',
        image: [
            './images/dish wash 1leter front.png',
            './images/dishwash 1leter back.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Dishwash Liqid',
        original_price: 195,
        current_price: 156,
        descrption: [
            "Remove Tough Grease",
            "Remove Food Smell",
            "Cleans 99.9% Germs"
        ],
        quantity: "1Leter",
        fragrance: "Lemon",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    
    {
        id: '31',
        image: [
            './images/harpic 250ml front.png',
            './images/harpic 250ml back.png',
            './images/harpic back.png',
            './4.png',
            './5.png'
        ],
        title: 'Toilet Cleaner',
        original_price: 50,
        current_price: 40,
        descrption: [
            "Remove Tough Stains",
            "Fight Germs",
            "Fight Odours"
        ],
        quantity: "250ml",
        fragrance: "",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '32',
        image: [
            './images/harpic 500ml front.png',
            './images/harpic 500ml back.png',
            './images/harpic back.png',
            './4.png',
            './5.png'
        ],
        title: 'Toilet Cleaner',
        original_price: 95,
        current_price: 76,
        descrption: [
            "Remove Tough Stains",
            "Fight Germs",
            "Fight Odours"
        ],
        quantity: "500ml",
        fragrance: "",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '33',
        image: [
            './1.png',
            './2.png',
            './3.png',
            './4.png',
            './5.png'
        ],
        title: 'Toilet Cleaner',
        original_price: 160,
        current_price: 128,
        descrption: [
            "Remove Tough Stains",
            "Fight Germs",
            "Fight Odours"
        ],
        quantity: "1Leter",
        fragrance: "",
        container: "Bottle",
        pack: 1,
        count: 1
    },
    {
        id: '34',
        image: [
            './images/skin care soap1.png',
            './images/skin care soap 2.png',
            './images/skin care soap side.png',
            './images/skin care pack 4.png',
            './images/skin care soap pack 4 side.png'
        ],
        title: 'Skin Care Soap Pack of 4',
        original_price: 360,
        current_price: 300,
        descrption: [
            "Protects the skin from infections",
            "Refreshes and hydrates skin, thereby preventing dry skin",
            "It is a Grade 1 soap with 76 % TFM, which makes it one of the safest soaps in the market"
        ],
        quantity: "280g",
        fragrance: "Neem,Tulsi,Aloe vera",
        container: "Box",
        pack: 1,
        count: 1
    },
    {
        id: '35',
        image: [
            './images/neem soap1.png',
            './images/neem soap 2.png',
            './images/neem soap side.png',
            './images/neem soap pack4.png',
            './images/neem pack4 side.png'
        ],
        title: 'Neem Soap Pack of 4',
        original_price: 140,
        current_price: 125,
        descrption: [
            "Purifies your skin and leaves you feeling clean and fresh",
            "Anti-bacterial agent that helps fight acne-causing bacteria",
            "It is a Grade 1 soap with 76 % TFM, which makes it one of the safest soaps in the market"
        ],
        quantity: "280g",
        fragrance: "Neem",
        container: "Box",
        pack: 1,
        count: 1
    },
    

];

if (!localStorage.getItem('all_products')) {
    localStorage.setItem('all_products', JSON.stringify(products))
}

if (!localStorage.getItem('cart')) {
    localStorage.setItem("cart", "[]");
}
if (!localStorage.getItem('count')) {
    localStorage.setItem("count", JSON.stringify({ count: 0 }));
}

loadProducts();

function loadProducts() {
    let innerHtml = "";
    products.forEach(function (item) {
        innerHtml += `
                        <div class="product">
                            <a href="./preview.html" class="image-cnt" onclick="addPreview(${item.id});">
                                <img class="image" src="${item.image[0]}" alt="item image">
                            </a>
                            <div class="right">
                                <a href="./preview.html" onclick="addPreview(${item.id});">
                                    <h3 class="product-name">${item.title}</h3>
                                    <div class="price">
                                        <span class="price-title">Price : </span>
                                        <span class="mrp"><del>${item.original_price}</del></span>
                                        <span class="cur-price">₹${item.current_price}</span>
                                        <span class="discount">
                                            <span class="material-symbols-outlined">stat_minus_2</span>
                                            20%
                                        </span>
                                    </div>
                                    <div class="quantity">
                                        Quantity : ${item.quantity}
                                    </div>
                                    <b class="desc-title">Description : </b>
                                    <ul class="description">
                                        <li>${item.descrption[0]}</li>
                                        <li>${item.descrption[1]}</li>
                                        <li>${item.descrption[2]}</li>
                                    </ul>

                                </a>
                                <button class="btn" onclick="add(${item.id});">Add To Cart</button>
                            </div>
                        </div>
                        `;
    })
    console.log(innerHtml);
    let productsHtml = document.querySelector(".products");
    productsHtml.innerHTML = innerHtml;

    console.log("Loaded")
    let count = JSON.parse(localStorage.getItem("count")).count;
    let countElem = document.getElementById("count");
    countElem.innerHTML = count;
}

function addPreview(id) {
    let all_products = JSON.parse(localStorage.getItem('all_products'));
    let preview = all_products.find(item => item.id == id);
    localStorage.setItem('preview', JSON.stringify(preview));
}

function add(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart.find((item) => {
        return id == item.id
    })) {
        return;
    }
    let item = products.find(function (item) {
        return item.id == id;
    });
    cart.push(item)
    localStorage.setItem("cart", JSON.stringify(cart))

    let count = JSON.parse(localStorage.getItem("count")).count;
    count++;
    localStorage.setItem('count', JSON.stringify({ 'count': count }))

    let countElem = document.getElementById("count");
    countElem.innerHTML = count;
}
