function verOcultar(cardView,cardsHidden){
    const _cardView = document.querySelector(cardView);
    _cardView.style.display ='block' ;
    cardsHidden.forEach(card => {
        const _cardHidden = document.querySelector(card);
        _cardHidden.style.display = 'none' ;
    });

}