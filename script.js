document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const priceData = {
    'Sobrancelha': {
        'Design de Sobrancelha': 'R$ 50,00',
        'Tintura e Henna Sobrancelha': 'R$ 35,00',
        'Brow Lamination': 'R$ 120,00',
        'Forte Brow': 'R$ 150,00',
        'Hidratação Labial': 'R$ 150,00'
    },
    'Cabeleireiro': {
        'Corte Feminino': 'R$ 130,00',
        'Corte Masculino': 'R$ 110,00',
        'Corte Masculino com Máquina': 'R$ 50,00',
        'Corte Infantil': 'R$ 110,00',
        'Escova': 'R$ 85,00',
        'Escova MegaHair': 'R$ 110,00',
        'Luzes': 'R$ 250,00',
        'Luzes Disfarce': 'R$ 180,00',
        'Coloração': 'R$ 190,00',
        'Escova Progressiva': 'R$ 400,00',
        'Botox': 'R$ 250,00',
        'Hidratação': 'R$ 120,00',
        'Reconstrução': 'R$ 150,00',
        'Penteado': 'R$ 250,00'
    },
    'Micropigmentação': {
        'Fio a Fio Shadow': 'R$ 850,00',
        'Olhos': 'R$ 500,00',
        'Labial': 'R$ 999,00',
        'Despigmentação': 'R$ 250,00'
    },
    'Estética Corporal': {
        'Drenagem Linfática Manual': 'R$ 120,00',
        'Drenagem Linfática M. Pós Cirúrgia': 'R$ 120,00',
        'Modeledrene': 'R$ 120,00',
        'Massagem Relaxante': 'R$ 120,00',
        'Ultracavitação': 'R$ 120,00',
        'Endermologia': 'R$ 120,00',
        'Rádio Frequência (2 áreas)': 'R$ 190,00',
        'Thermo Derm': 'R$ 100,00',
        'Ultra Som': 'R$ 100,00',
        'Esfoliação Corporal': 'R$ 120,00',
        'Banho de Lua Corpo Todo': 'R$ 190,00'
    },
    'Manicure': {
        'Mão': 'R$ 35,00',
        'Pé': 'R$ 35,00',
        'Pé + Spa dos Pés': 'R$ 90,00',
        'Só Pintar': 'R$ 25,00',
        'francezinha': 'R$ 4,00 (adicional)'
    },
    'Depilação': {
        'Meia Perna + Virilha + Axila': 'R$ 85,00 (Ganhe Buço)',
        'Perna Inteira + Virilha + Axila': 'R$ 109,00 (Ganhe Buço)',
        'Virilha + Íntimo': 'R$ 68,00',
        'Virilha + Íntimo + Axila': 'R$ 90,00',
        'Buço de Cera': 'R$ 15,00',
        'Buço de linha': 'R$ 22,00'
    },
    'Estética Facial': {
        'Limpeza de Pele': 'R$ 150,00',
        'Limpeza de Pele Acne': 'R$ 190,00',
        'Hidratação': 'R$ 100,00',
        'Peeling de Cristal': 'R$ 120,00',
        'Fototerapia': 'R$ 100,00',
        'Rejuvenescimento': 'R$ 165,00',
        'Microagulhamento': 'R$ 260,00',
        'Drenagem Linfática Manual': 'R$ 100,00',
    },
    'Cílios': {
        'Lash Lifting': 'R$ 150,00',
        'Tintura dos Cílios': 'R$ 40,00',
        'Cílios Postiço': 'R$ 45,00',
        'Maquiagem': 'R$ 150,00',
    }
};

const priceModal = document.getElementById('priceModal');
if (priceModal) {
    priceModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const serviceName = button.getAttribute('data-service');
        
        const modalTitle = priceModal.querySelector('.modal-title');
        const modalBody = priceModal.querySelector('.modal-body');

        modalTitle.textContent = 'Tabela de Preços - ' + serviceName;

        const tableData = priceData[serviceName] || { 'Serviço não encontrado': '' };
        
        let tableHtml = '<table class="table table-striped">';
        tableHtml += '<thead><tr><th>Serviço</th><th>Preço</th></tr></thead>';
        tableHtml += '<tbody>';

        for (const item in tableData) {
            tableHtml += `<tr><td>${item}</td><td>${tableData[item]}</td></tr>`;
        }

        tableHtml += '</tbody></table>';

        modalBody.innerHTML = tableHtml;
    });
}

const galleryModal = document.getElementById('galleryModal');
if (galleryModal) {
    const galleryModalImage = document.getElementById('galleryModalImage');
    const muralGrid = document.querySelector('.mural-grid');
    const bsGalleryModal = new bootstrap.Modal(galleryModal);

    if (muralGrid) {
        muralGrid.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                galleryModalImage.src = e.target.src;
                bsGalleryModal.show();
            }
        });
    }
}