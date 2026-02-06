const WHATSAPP_NUMBER = "551150732011";

const serviceSpecifications = {
    'Sobrancelha': 'Serviços especializados de design e tratamento de sobrancelhas com técnicas modernas e profissional experiente. Oferecemos desde design clássico até técnicas avançadas.',
    'Cabeleireiro': 'Cortes realizados por profissional especializado. Oferecemos coloração, escova progressiva, botox capilar e muito mais.',
    'Micropigmentação': 'Técnica avançada de micropigmentação para sobrancelhas, olhos e lábios. Resultados naturais e duradouros com profissional altamente qualificada.',
    'Estética Corporal': 'Tratamentos corporais completos incluindo drenagem linfática, ultracavitação, radiofrequência e massagens relaxantes para revitalizar seu corpo.',
    'Manicure': 'Esmaltação tradicional, cuidados com as cutículas e spa dos pés em ambiente higienizado.',
    'Depilação': 'Depilação com técnicas seguras e eficazes utilizando cera de mel e algas, de qualidade premium. Atendimento atencioso em ambiente limpo e aconchegante.',
    'Estética Facial': 'Tratamentos faciais personalizados para limpeza profunda, hidratação, rejuvenescimento e microagulhamento com equipamentos de última geração.',
    'Cílios': 'Serviços de lash lifting, tintura, cílios postiços e maquiagem profissional para realçar o olhar de forma natural e elegante.'
};

const professionals = {
    'Sobrancelha': {
        nome: 'Graziela',
        foto: 'img/funcionarios/graziela.jpg',
        descricao: 'Especialista em design de sobrancelhas com mais de 20 anos de experiência. Criadora do salão com visão artística única.'
    },
    'Cabeleireiro': {
        nome: 'Carlos',
        foto: 'img/funcionarios/carlos.jpg',
        descricao: 'Cabeleireiro experiente com especialização em cortes, coloração e tratamentos capilares. Profissional dedicado com excelente reputação a mais de 30 anos.'
    },
    'Micropigmentação': {
        nome: 'Graziela',
        foto: 'img/funcionarios/graziela.jpg',
        descricao: 'Profissional altamente qualificado em técnicas avançadas de micropigmentação com resultados naturais e duradouros.'
    },
    'Estética Corporal': {
        nome: 'Vanessa',
        foto: 'img/funcionarios/vanessa.jpg',
        descricao: 'Esteticista especializada com mais 20 anos de experiência em tratamentos corporais. Profissional experiente e dedicada ao bem-estar das clientes.'
    },
    'Manicure': [
        { nome: 'Jaque', foto: 'img/funcionarios/jaque.jpg', descricao: 'Manicure com 21 anos de experiência em especialização em design de unhas.' },
        { nome: 'Eliana', foto: 'img/funcionarios/eliana.jpg', descricao: 'Especialista em cuidados com pés e mãos a 43 anos.' },
        { nome: 'Fran', foto: 'img/funcionarios/fran.jpg', descricao: 'Manicure com experiência em gel e acrílico.' },
        { nome: 'Bete', foto: 'grazi/gra.jpg', descricao: 'Especialista em nail art e designs personalizados.' },
        { nome: 'Claudia', foto: 'grazi/gra.jpg', descricao: 'Manicure experiente com foco em hidratação.' }
    ],
    'Depilação': [
        { nome: 'Silvia', foto: 'img/funcionarios/silvia.jpg', descricao: 'Depiladora experiente com 23 anos de experiência.' },
        { nome: 'Nair', foto: 'img/funcionarios/nair.jpg', descricao: 'Atendimento acolhedor e especializada em peles sensíveis.' }
    ],
    'Estética Facial': {
        nome: 'Vanessa',
        foto: 'img/funcionarios/vanessa.jpg',
        descricao: 'Profissional especializada com 20 anos de experiência em tratamentos faciais.'
    },
    'Cílios': {
        nome: 'Graziela',
        foto: 'img/funcionarios/graziela.jpg',
        descricao: 'Profissional experiente em lash lifting e maquiagem profissional.'
    }
};

// --- FUNÇÕES AUXILIARES ---

function generateWhatsAppLink(profissional, servico) {
    const text = `Olá! Gostaria de agendar um horário de ${servico.toLowerCase()} com a profissional ${profissional}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function renderServiceModalContent(serviceName) {
    const serviceModal = document.getElementById('serviceModal');
    const modalTitle = serviceModal.querySelector('.modal-title');
    const modalBody = document.getElementById('serviceModalBody');
    
    const specification = serviceSpecifications[serviceName] || 'Serviço não encontrado';
    const professionalData = professionals[serviceName];
    
    modalTitle.textContent = serviceName === 'Manicure' ? 'Manicure e Pedicure' : serviceName;

    let html = '<div class="service-details">';
    
    if (professionalData) {
        html += '<h6 class="text-muted mb-3">Especialistas Disponíveis</h6>';
        const profs = Array.isArray(professionalData) ? professionalData : [professionalData];
        
        profs.forEach(prof => {
            html += `
            <div class="professional-card p-3 mb-3 border rounded">
                <div class="row align-items-center">
                    <div class="col-4 col-md-3 text-center">
                        <img src="${prof.foto}" class="rounded-circle img-fluid" style="width: 80px; height: 80px; object-fit: cover; border: 2px solid #B59B85;">
                    </div>
                    <div class="col-8 col-md-9">
                        <h5 class="mb-1">${prof.nome}</h5>
                        <p class="text-muted small mb-2">${prof.descricao}</p>
                        <a href="${generateWhatsAppLink(prof.nome, serviceName)}" target="_blank" class="btn btn-success btn-sm">
                            <i class="fab fa-whatsapp"></i> Agendar com ${prof.nome}
                        </a>
                    </div>
                </div>
            </div>`;
        });
    }

    html += `<hr><p class="lead">${specification}</p></div>`;
    modalBody.innerHTML = html;
}

// --- INICIALIZAÇÃO DO DOM ---

document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const announcementBar = document.querySelector('.announcement-bar');
    const topBar = document.querySelector('.top-bar');
    const secondaryNav = document.querySelector('.secondary-nav');
    const fixedTopContainer = document.querySelector('.fixed-top');

    // Cálculo de Offset do Header
    function updateHeaderOffset() {
        const h1 = announcementBar?.offsetHeight || 0;
        const h2 = topBar?.offsetHeight || 0;
        const h3 = secondaryNav?.offsetHeight || 0;
        const total = h1 + h2 + h3;
        root.style.setProperty('--header-offset', `${total}px`);
        document.body.style.paddingTop = `${total}px`;
    }
    updateHeaderOffset();
    window.addEventListener('resize', updateHeaderOffset);

    // Efeito de Scroll na Navbar
    window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    const fixedTopContainer = document.querySelector('.fixed-top');
    if (st > 50) {
        fixedTopContainer.classList.add('navbar-hidden');
        
    } else {
        fixedTopContainer.classList.remove('navbar-hidden');
    }
});

    // --- LÓGICA DE BUSCA ---
    const setupSearch = (inputEl, resultsEl) => {
        inputEl.addEventListener('input', function() {
            const term = this.value.toLowerCase().trim();
            if (!term) { resultsEl.classList.remove('show'); return; }

            let results = [];
            // Buscar Serviços
            Object.keys(serviceSpecifications).forEach(s => {
                if (s.toLowerCase().includes(term) || (s === 'Manicure' && 'unha'.includes(term))) {
                    results.push({ name: s, type: 'Serviço' });
                }
            });
            // Buscar Profissionais
            Object.keys(professionals).forEach(s => {
                const pData = professionals[s];
                const pArray = Array.isArray(pData) ? pData : [pData];
                pArray.forEach(p => {
                    if (p.nome.toLowerCase().includes(term)) {
                        results.push({ name: p.nome, type: 'Profissional', service: s });
                    }
                });
            });

            if (results.length > 0) {
                resultsEl.innerHTML = results.map(r => `
                    <div class="search-result-item" onclick="handleSearchClick('${r.name}', '${r.type}', '${r.service || r.name}')">
                        <div class="search-result-title">${r.name === 'Manicure' ? 'Unha' : r.name}</div>
                        <div class="search-result-type">${r.type}</div>
                    </div>
                `).join('');
                resultsEl.classList.add('show');
            } else {
                resultsEl.innerHTML = '<div class="p-3 text-center text-muted">Nenhum resultado</div>';
                resultsEl.classList.add('show');
            }
        });
    };

    setupSearch(document.getElementById('searchInput'), document.getElementById('searchResults'));
    setupSearch(document.getElementById('searchInputMobile'), document.getElementById('searchResultsMobile'));
});

// --- CLIQUES E MODAIS ---

function handleSearchClick(name, type, service) {
    document.querySelectorAll('.search-results').forEach(el => el.classList.remove('show'));
    renderServiceModalContent(service);
    const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
    modal.show();
}

// Listener para os cards de serviço da página
const serviceModal = document.getElementById('serviceModal');
if (serviceModal) {
    serviceModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        if (!button) return; 
        const serviceName = button.getAttribute('data-service') || button.parentElement.getAttribute('data-service');
        if (serviceName) renderServiceModalContent(serviceName);
    });
}

// Galeria e AOS
const muralGrid = document.querySelector('.mural-grid');
if (muralGrid) {
    muralGrid.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            document.getElementById('galleryModalImage').src = e.target.src;
            new bootstrap.Modal(document.getElementById('galleryModal')).show();
        }
    });
}

AOS.init({ duration: 1000, once: true });