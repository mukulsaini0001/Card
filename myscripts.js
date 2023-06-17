// Fetch data from the mock API
fetch('test.json')
    .then(response => response.json())
    .then(data => {
        // Access the card data from the API response
        const cardsData = data.data;

        // Select the card-list container
        const cardList = document.querySelector('.card-list');

        // Generate card elements dynamically
        cardsData.forEach(cardData => {
            const card = document.createElement('div');
            card.classList.add('card');

            // Create card type icon element and set the appropriate icon image
            const cardType = document.createElement('div');
            cardType.classList.add('card-type');
            const cardTypeIcon = document.createElement('img');
            if (cardData.card_type === 'card') {
                cardTypeIcon.src = 'card.png';
                cardTypeIcon.alt = 'card';
            } else if (cardData.card_type === 'subscription') {
                cardTypeIcon.src = 'subscription-icon.png';
                cardTypeIcon.alt = 'Subscription';
            }
            cardType.appendChild(cardTypeIcon);
            card.appendChild(cardType);

            // Create card content elements
            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const cardName = document.createElement('h3');
            cardName.classList.add('card-name');
            cardName.textContent = cardData.name;
            cardContent.appendChild(cardName);

            const cardDetails = document.createElement('p');
            cardDetails.classList.add('card-details');
            if (cardData.card_type === 'card') {
                cardDetails.textContent = `Expiry: ${cardData.expiry}`;
            } else if (cardData.card_type === 'subscription') {
                cardDetails.textContent = `Limit: ${cardData.limit}`;
            }
            cardContent.appendChild(cardDetails);

            card.appendChild(cardContent);

            // Append the card to the card-list container
            cardList.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });