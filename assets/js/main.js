// Archivo JavaScript para interacciones visuales (sin funcionalidad real)

document.addEventListener('DOMContentLoaded', function() {
    // Manejo del menú móvil
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            document.body.classList.toggle('mobile-menu-open');
        });
    }
    
    // Manejo de la notificación de cookies
    const cookieNotice = document.querySelector('.cookie-notice');
    const cookieAccept = document.querySelector('.cookie-accept');
    if (cookieNotice && cookieAccept) {
        cookieAccept.addEventListener('click', function() {
            cookieNotice.style.display = 'none';
        });
    }
    
    // Para el FAQ en la página de entradas
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Cierra los otros items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle el estado actual
                item.classList.toggle('active');
            });
        });
    }
    
    // Para los botones de contador en las entradas
    const counterBtns = document.querySelectorAll('.counter-btn');
    if (counterBtns.length > 0) {
        counterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const counterContainer = this.closest('.ticket-counter');
                const valueDisplay = counterContainer.querySelector('.counter-value');
                let value = parseInt(valueDisplay.textContent);
                
                if (this.classList.contains('plus')) {
                    value++;
                } else if (this.classList.contains('minus') && value > 0) {
                    value--;
                }
                
                valueDisplay.textContent = value;
            });
        });
    }
    
    // Simulación del botón de 360º
    const btn360 = document.querySelector('.btn-360-view');
    if (btn360) {
        btn360.addEventListener('click', function() {
            alert('Vista 360º - Esta funcionalidad requeriría una implementación real con una librería de 360º como Pannellum o similar.');
        });
    }
    
    // Simulación del botón de reproducción de video
    const btnPlay = document.querySelector('.btn-play');
    if (btnPlay) {
        btnPlay.addEventListener('click', function() {
            alert('Reproducción de vídeo - Esta funcionalidad requeriría un reproductor de vídeo real.');
        });
    }
    
    // Simulación de botones de "Añadir" en las entradas
    const addTicketBtns = document.querySelectorAll('.ticket-add-btn');
    if (addTicketBtns.length > 0) {
        addTicketBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const ticketCard = this.closest('.ticket-card');
                const ticketName = ticketCard.querySelector('h3').textContent;
                const counterValue = ticketCard.querySelector('.counter-value');
                
                if (counterValue && parseInt(counterValue.textContent) > 0) {
                    alert(`Se han añadido ${counterValue.textContent} entradas de tipo "${ticketName}" al carrito.\n\nEsta es solo una demostración visual sin funcionalidad real.`);
                    
                    // Para un sitio real, aquí se actualizaría el carrito
                } else {
                    alert('Por favor selecciona al menos 1 entrada.');
                }
            });
        });
    }
    
    // Para los selectores de fecha (solo visual)
    const calendarDays = document.querySelectorAll('.calendar-grid .day:not(.disabled)');
    if (calendarDays.length > 0) {
        calendarDays.forEach(day => {
            day.addEventListener('click', function() {
                // Quitar la clase active de todos los días
                calendarDays.forEach(d => d.classList.remove('active'));
                // Añadir la clase active al día clickeado
                this.classList.add('active');
            });
        });
    }
    
    // Para los slots de tiempo (solo visual)
    const timeSlots = document.querySelectorAll('.time-slot:not(.sold-out)');
    if (timeSlots.length > 0) {
        timeSlots.forEach(slot => {
            slot.addEventListener('click', function() {
                // Quitar la clase active de todos los slots
                timeSlots.forEach(s => s.classList.remove('active'));
                // Añadir la clase active al slot clickeado
                this.classList.add('active');
            });
        });
    }
    
    // Botón de finalizar compra (solo visual)
    const btnCheckout = document.querySelector('.btn-checkout');
    if (btnCheckout) {
        btnCheckout.addEventListener('click', function() {
            if (!this.disabled) {
                alert('Finalizar compra - Esta funcionalidad requeriría una implementación real de pasarela de pago.');
            }
        });
    }
});
