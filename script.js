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
        foto: 'grazi/gra.jpg',
        descricao: 'Especialista em design de sobrancelhas com mais de 20 anos de experiência. Criadora do salão com visão artística única.'
    },
    'Cabeleireiro': {
        nome: 'Carlos',
        foto: 'grazi/gra.jpg',
        descricao: 'Cabeleireiro experiente com especialização em cortes, coloração e tratamentos capilares. Profissional dedicado com excelente reputação.'
    },
    'Micropigmentação': {
        nome: 'Graziela',
        foto: 'grazi/gra.jpg',
        descricao: 'Profissional altamente qualificado em técnicas avançadas de micropigmentação com resultados naturais e duradouros.'
    },
    'Estética Corporal': {
        nome: 'Vanessa',
        foto: 'grazi/gra.jpg',
        descricao: 'Esteticista especializada em tratamentos corporais. Profissional experiente e dedicada ao bem-estar das clientes.'
    },
    'Manicure': [
        {
            nome: 'Jaque',
            foto: 'grazi/gra.jpg',
            descricao: 'Manicure experiente com especialização em design de unhas. Profissional criativa com excelente atenção aos detalhes.'
        },
        {
            nome: 'Eliana',
            foto: 'grazi/gra.jpg',
            descricao: 'Especialista em cuidados com pés e mãos. Profissional dedicada ao conforto e satisfação das clientes.'
        },
        {
            nome: 'Fran',
            foto: 'grazi/gra.jpg',
            descricao: 'Manicure com experiência em gel e acrílico. Profissional atenciosa que oferece acabamento impecável em todos os serviços.'
        },
        {
            nome: 'Bete',
            foto: 'grazi/gra.jpg',
            descricao: 'Especialista em nail art e designs personalizados. Profissional criativa com visão artística apurada.'
        },
        {
            nome: 'Claudia',
            foto: 'grazi/gra.jpg',
            descricao: 'Manicure experiente com foco em hidratação e cuidados preventivos. Profissional dedicada à saúde das unhas.'
        }
    ],
    'Depilação': [
        {
            nome: 'Silvia',
            foto: 'grazi/gra.jpg',
            descricao: 'Depiladora experiente com especialização em depilação de cera. Profissional atenciosa com excelentes técnicas.'
        },
        {
            nome: 'Nair',
            foto: 'grazi/gra.jpg',
            descricao: 'Depiladora com técnica refinada e atendimento acolhedor. Especializada em cuidados com a pele e depilação sem irritação.'
        }
    ],
    'Estética Facial': {
        nome: 'Vanessa',
        foto: 'grazi/gra.jpg',
        descricao: 'Profissional especializada em tratamentos faciais personalizados com equipamentos de última geração.'
    },
    'Cílios': {
        nome: 'Graziela',
        foto: 'grazi/gra.jpg',
        descricao: 'Profissional experiente em serviços de lash lifting, tintura e aplicação de cílios postiços com resultados naturais.'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.navbar');
    const serviceModal = document.getElementById('serviceModal');
    const professionalModal = document.getElementById('professionalModal');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('navbar-hidden');
        } else if (scrollTop === 0) {
            header.classList.remove('navbar-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        if (scrollTop > 50) {
            header.classList.add('navbar-scrolled');
        } else {
            header.classList.remove('navbar-scrolled');
        }
    });

    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                searchResults.classList.remove('show');
                return;
            }

            const services = ['Sobrancelha', 'Cabeleireiro', 'Micropigmentação', 'Estética Corporal', 'Manicure', 'Depilação', 'Estética Facial', 'Cílios'];
            let results = [];
            let uniqueResults = new Set();

            services.forEach(service => {
                if (service.toLowerCase().includes(searchTerm)) {
                    const resultKey = `service-${service}`;
                    if (!uniqueResults.has(resultKey)) {
                        results.push({
                            name: service,
                            type: 'Serviço'
                        });
                        uniqueResults.add(resultKey);
                    }
                }
            });

            if ('unha'.toLowerCase().includes(searchTerm)) {
                const resultKey = `service-Manicure`;
                if (!uniqueResults.has(resultKey)) {
                    results.push({
                        name: 'Manicure',
                        type: 'Serviço'
                    });
                    uniqueResults.add(resultKey);
                }
            }

            Object.keys(professionals).forEach(serviceKey => {
                const professionalData = professionals[serviceKey];
                if (Array.isArray(professionalData)) {
                    professionalData.forEach(prof => {
                        if (prof.nome.toLowerCase().includes(searchTerm)) {
                            const resultKey = `prof-${prof.nome}`;
                            if (!uniqueResults.has(resultKey)) {
                                results.push({
                                    name: prof.nome,
                                    type: 'Profissional',
                                    service: serviceKey
                                });
                                uniqueResults.add(resultKey);
                            }
                        }
                    });
                } else if (professionalData.nome && professionalData.nome.toLowerCase().includes(searchTerm)) {
                    const resultKey = `prof-${professionalData.nome}`;
                    if (!uniqueResults.has(resultKey)) {
                        results.push({
                            name: professionalData.nome,
                            type: 'Profissional',
                            service: serviceKey
                        });
                        uniqueResults.add(resultKey);
                    }
                }
            });

            if (results.length > 0) {
                searchResults.innerHTML = results.map(result => {
                    const displayName = result.name === 'Manicure' ? 'Unha' : result.name;
                    return `
                    <div class="search-result-item" data-name="${result.name}" data-type="${result.type}" data-service="${result.service || result.name}">
                        <div class="search-result-title">${displayName}</div>
                        <div class="search-result-type">${result.type}</div>
                    </div>
                `;
                }).join('');
                searchResults.classList.add('show');

                attachSearchResultHandlers();
            } else {
                searchResults.innerHTML = '<div class="search-result-item" style="text-align: center; color: #B59B85;">Nenhum resultado encontrado</div>';
                searchResults.classList.add('show');
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.toLowerCase().trim();
                if (searchTerm === '') return;

                // Verifica se o termo pesquisado corresponde a um profissional
                let professionalName = null;
                let professionalService = null;
                for (const serviceKey in professionals) {
                    const profData = professionals[serviceKey];
                    if (Array.isArray(profData)) {
                        const found = profData.find(p => p.nome.toLowerCase() === searchTerm);
                        if (found) {
                            professionalName = found.nome;
                            professionalService = serviceKey;
                            break;
                        }
                    } else if (profData.nome && profData.nome.toLowerCase() === searchTerm) {
                        professionalName = profData.nome;
                        professionalService = serviceKey;
                        break;
                    }
                }

                if (professionalName) {
                    openProfessionalModal(professionalName, professionalService);
                    searchInput.value = '';
                    searchResults.classList.remove('show');
                    return;
                }

                // Se não for um profissional, verifica se é um serviço
                const services = ['Sobrancelha', 'Cabeleireiro', 'Micropigmentação', 'Estética Corporal', 'Manicure', 'Depilação', 'Estética Facial', 'Cílios'];
                let serviceName = services.find(s => s.toLowerCase() === searchTerm);
                
                if (!serviceName && searchTerm === 'unha') {
                    serviceName = 'Manicure';
                }

                if (serviceName) {
                    openServiceModal(serviceName);
                    searchInput.value = '';
                    searchResults.classList.remove('show');
                }
            }
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest('.search-bar-container')) {
                searchResults.classList.remove('show');
            }
        });
    }

    function attachSearchResultHandlers() {
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function() {
                const name = this.getAttribute('data-name');
                const type = this.getAttribute('data-type');
                const serviceName = this.getAttribute('data-service');
                
                searchInput.value = '';
                searchResults.classList.remove('show');

                if (type === 'Profissional') {
                    openProfessionalModal(name, serviceName);
                } else {
                    openServiceModal(name);
                }
            });
        });
    }

    function openServiceModal(serviceName) {
        const specification = serviceSpecifications[serviceName] || 'Serviço não encontrado';
        const professional = professionals[serviceName];
        const modalTitle = serviceModal.querySelector('.modal-title');
        const modalBody = document.getElementById('serviceModalBody');

        const displayTitle = serviceName === 'Manicure' ? 'Manicure e pedicure' : serviceName;
        modalTitle.textContent = displayTitle;

        let html = '<div class="service-details">';
        
        if (Array.isArray(professional)) {
            html += '<div class="professionals-section mb-4">';
            html += '<h6 class="text-muted mb-3">Responsáveis pelo Serviço</h6>';
            professional.forEach((prof, index) => {
                html += '<div class="professional-card mb-3">';
                html += '<div class="row align-items-center">';
                html += '<div class="col-md-4 text-center">';
                html += `<img src="${prof.foto}" alt="${prof.nome}" class="professional-img img-fluid rounded-circle" style="width: 150px; height: 150px; object-fit: cover; border: 3px solid #B59B85;">`;
                html += '</div>';
                html += '<div class="col-md-8">';
                html += `<h5 class="mb-2">${prof.nome}</h5>`;
                html += `<p class="text-muted">${prof.descricao}</p>`;
                html += '</div>';
                html += '</div>';
                if (index < professional.length - 1) {
                    html += '<hr class="my-3">';
                }
                html += '</div>';
            });
            html += '</div>';
        } else if (professional && professional.nome) {
            html += '<div class="professional-section mb-4">';
            html += '<div class="row align-items-center">';
            html += '<div class="col-md-4 text-center">';
            html += `<img src="${professional.foto}" alt="${professional.nome}" class="professional-img img-fluid rounded-circle" style="width: 150px; height: 150px; object-fit: cover; border: 3px solid #B59B85;">`;
            html += '</div>';
            html += '<div class="col-md-8">';
            html += '<h6 class="text-muted">Responsável pelo Serviço</h6>';
            html += `<h5 class="mb-2">${professional.nome}</h5>`;
            html += `<p class="text-muted">${professional.descricao}</p>`;
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }
        
        html += '<hr>';
        html += `<p class="lead mb-4">${specification}</p>`;
        html += '</div>';
        
        modalBody.innerHTML = html;
        const bsModal = new bootstrap.Modal(serviceModal);
        bsModal.show();
    }

    function openProfessionalModal(professionalName, serviceName) {
        const professionalData = professionals[serviceName];
        let professional;

        if (Array.isArray(professionalData)) {
            professional = professionalData.find(p => p.nome === professionalName);
        } else if (professionalData && professionalData.nome === professionalName) {
            professional = professionalData;
        }

        if (!professional) {
            console.error('Profissional não encontrado:', professionalName);
            return;
        }

        const modalTitle = professionalModal.querySelector('.modal-title');
        const modalBody = document.getElementById('professionalModalBody');

        modalTitle.textContent = professional.nome;

        let html = '<div class="professional-details">';
        html += '<div class="row align-items-center">';
        html += '<div class="col-md-4 text-center">';
        html += `<img src="${professional.foto}" alt="${professional.nome}" class="professional-img img-fluid rounded-circle" style="width: 150px; height: 150px; object-fit: cover; border: 3px solid #B59B85;">`;
        html += '</div>';
        html += '<div class="col-md-8">';
        html += `<h5 class="mb-2">${professional.nome}</h5>`;
        html += `<p class="text-muted">${professional.descricao}</p>`;
        html += `<p class="text-muted"><strong>Serviço:</strong> ${serviceName}</p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';

        modalBody.innerHTML = html;
        const bsModal = new bootstrap.Modal(professionalModal);
        bsModal.show();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const serviceModal = document.getElementById('serviceModal');
if (serviceModal) {
    serviceModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        let serviceName = button.getAttribute('data-service');
        
        if (!serviceName && button.parentElement) {
            serviceName = button.parentElement.getAttribute('data-service');
        }
        
        const modalTitle = serviceModal.querySelector('.modal-title');
        const modalBody = document.getElementById('serviceModalBody');

        // Exibir "Manicure e pedicure" para o serviço de Manicure
        const displayTitle = serviceName === 'Manicure' ? 'Manicure e pedicure' : serviceName;
        modalTitle.textContent = displayTitle;

        const specification = serviceSpecifications[serviceName] || 'Serviço não encontrado';
        const professional = professionals[serviceName];
        
        let html = '<div class="service-details">';
        
        if (Array.isArray(professional)) {
            html += '<div class="professionals-section mb-4">';
            html += '<h6 class="text-muted mb-3">Responsáveis pelo Serviço</h6>';
            professional.forEach((prof, index) => {
                html += '<div class="professional-card mb-3">';
                html += '<div class="row align-items-center">';
                html += '<div class="col-md-4 text-center">';
                html += '<img src="' + prof.foto + '" alt="' + prof.nome + '" class="professional-img img-fluid rounded-circle" style="width: 150px; height: 150px; object-fit: cover; border: 3px solid #B59B85;">';
                html += '</div>';
                html += '<div class="col-md-8">';
                html += '<h5 class="mb-2">' + prof.nome + '</h5>';
                html += '<p class="text-muted">' + prof.descricao + '</p>';
                html += '</div>';
                html += '</div>';
                if (index < professional.length - 1) {
                    html += '<hr class="my-3">';
                }
                html += '</div>';
            });
            html += '</div>';
        } else if (professional && professional.nome) {
            html += '<div class="professional-section mb-4">';
            html += '<div class="row align-items-center">';
            html += '<div class="col-md-4 text-center">';
            html += '<img src="' + professional.foto + '" alt="' + professional.nome + '" class="professional-img img-fluid rounded-circle" style="width: 150px; height: 150px; object-fit: cover; border: 3px solid #B59B85;">';
            html += '</div>';
            html += '<div class="col-md-8">';
            html += '<h6 class="text-muted">Responsável pelo Serviço</h6>';
            html += '<h5 class="mb-2">' + professional.nome + '</h5>';
            html += '<p class="text-muted">' + professional.descricao + '</p>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }
        
        html += '<hr>';
        html += '<p class="lead mb-4">' + specification + '</p>';
        
        html += '</div>';
        modalBody.innerHTML = html;
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
AOS.init({
    duration: 1000,
    once: true,
    offset: 50
});
