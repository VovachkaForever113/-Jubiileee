document.getElementById('payButton').addEventListener('click', function () {
    const form = document.getElementById('bookingForm');

    // Цены услуг
    const servicePrices = {
        "Стрижка": 500,
        "Окрашивание": 1200,
        "Укладка": 700,
        "Маникюр": 600
    };

    const serviceName = form.service.value;
    const amount = servicePrices[serviceName];

    // CloudPayments
    const widget = new cp.CloudPayments();
    widget.charge({
        publicId: 'A9fVr9Q_U_ZhJl2H9', // сюда вставь свой публичный ID
        description: `Запись на услугу: ${serviceName}`,
        amount: amount,
        currency: 'RUB',
        invoiceId: Date.now(),
        accountId: form.name.value,
        data: {
            phone: form.phone.value
        }
    },
    function (options) { // success
        alert('Оплата прошла успешно!');
        sendBookingForm();
    },
    function (reason, options) { // fail
        alert('Оплата не прошла: ' + reason);
    });
});

// Функция отправки данных формы на email через EmailJS
function sendBookingForm() {
    const form = document.getElementById('bookingForm');
    const data = {
        name: form.name.value,
        phone: form.phone.value,
        master: form.master.value,
        date: form.date.value,
        time: form.time.value,
        service: form.service.value,
        comment: form.comment.value
    };

    emailjs.send("service_gmjl1cm", "template_yke4tkm", data)
        .then(() => {
            alert("Администратор получил вашу запись!");
            form.reset();
        })
        .catch((err) => {
            alert("Ошибка при отправке формы. Попробуйте позже.");
            console.error(err);
        });
}

// Чтобы форма не отправлялась через Enter
document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Для записи сначала оплатите через кнопку СберPay!');
});
