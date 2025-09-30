// script.js (versão limpa e corrigida)

// Dados iniciais
const initialBooks = [
    {
        id: 2,
        title: "Coraline",
        author: "Neil Gaiman",
        year: 2002,
        description: "Uma jovem descobre uma porta secreta para um mundo alternativo que é uma versão sombria e sinistra de sua própria vida.",
        genre: "fantasia",
        quantity: 1,
        cover: "imagens/livroo.jpg"
    },
    {
        id: 3,
        title: "Sherlock Holmes: Um Estudo em Vermelho",
        author: "Arthur Conan Doyle",
        year: 1887,
        description: "O primeiro romance de Sherlock Holmes, onde o detetive e Dr. Watson investigam um misterioso assassinato em Londres.",
        genre: "misterio",
        quantity: 1,
        cover: "imagens/livro2.jpg"
    },
    {
        id: 4,
        title: "Os Miseráveis",
        author: "Victor Hugo",
        year: 1862,
        description: "A história de Jean Valjean, um ex-condenado que busca redenção em meio à injustiça social na França do século XIX.",
        genre: "romance",
        quantity: 1,
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSnBtxf2bS4Kjvi8s3pnsQYjsXEG88AMUmm3hFn7g11z8ki8Wum"
    },
    {
        id: 5,
        title: "As Crônicas de Nárnia",
        author: "C. S. Lewis",
        year: 1950,
        description: "Crianças descobrem um mundo mágico chamado Nárnia, liderado pelo leão Aslan, e se envolvem em uma batalha épica entre o bem e o mal.",
        genre: "fantasia",
        quantity: 1,
        cover: "imagens/livro4.jpg"
    },
    {
        id: 6,
        title: "Duna",
        author: "Frank Herbert",
        year: 1965,
        description: "Em um planeta desértico, Paul Atreides lidera uma rebelião para controlar a substância mais valiosa do universo.",
        genre: "ficcao",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/81zN7udGRUL.jpg"
    },
    {
        id: 7,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        description: "Em uma sociedade totalitária, Winston Smith luta contra a vigilância constante do Grande Irmão e a manipulação da verdade.",
        genre: "ficcao",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/819js3EQwbL.jpg"
    },
    {
        id: 8,
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        author: "J.R.R. Tolkien",
        year: 1954,
        description: "Frodo Bolseiro inicia sua jornada perigosa para destruir o Um Anel e salvar a Terra-média da escuridão.",
        genre: "fantasia",
        quantity: 1,
        cover: "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg"
    },
    {
        id: 9,
        title: "O Guia do Mochileiro das Galáxias",
        author: "Douglas Adams",
        year: 1979,
        description: "A Terra é demolida para dar lugar a uma via expressa espacial, e Arthur Dent é salvo por seu amigo Ford Prefect, um alienígena disfarçado.",
        genre: "ficcao",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/81MandRgHRL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 10,
        title: "O Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        description: "A aventura de Bilbo Bolseiro, que é levado a uma jornada para recuperar um tesouro guardado por um dragão.",
        genre: "fantasia",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg"
    },
    {
        id: 11,
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        year: 1945,
        description: "Uma sátira sobre a Revolução Russa, onde os animais de uma fazenda tomam o poder, mas acabam criando uma tirania ainda pior.",
        genre: "ficcao",
        quantity: 1,
        cover: "https://images.dlivros.org/George-Orwell/revolucao-bichos-george-orwell_large.webp"
    },
    {
        id: 12,
        title: "O Nome do Vento",
        author: "Patrick Rothfuss",
        year: 2007,
        description: "A história de Kvothe, um jovem com um talento mágico extraordinário que se torna o mais notório mago que o mundo já viu.",
        genre: "fantasia",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/81CGmkRG9GL.jpg"
    },
    {
        id: 13,
        title: "Dom Quixote",
        author: "Miguel de Cervantes",
        year: 1605,
        description: "Um fidalgo que leu tantos romances de cavalaria que enlouqueceu e decidiu se tornar um cavaleiro andante.",
        genre: "romance",
        quantity: 1,
        cover: "https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525425669_hd.jpg"
    },
    {
        id: 14,
        title: "Cem Anos de Solidão",
        author: "Gabriel García Márquez",
        year: 1967,
        description: "A saga da família Buendía na cidade fictícia de Macondo, onde elementos fantásticos se misturam com a realidade.",
        genre: "realismo-magico",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/817esPahlrL.jpg"
    },
    {
        id: 15,
        title: "Orgulho e Preconceito",
        author: "Jane Austen",
        year: 1813,
        description: "A história de Elizabeth Bennet e sua conturbada relação com o Sr. Darcy em uma sociedade onde o status e o casamento são tudo.",
        genre: "romance",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/71Xta4Nf7uL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 16,
        title: "O Sol é para Todos",
        author: "Harper Lee",
        year: 1960,
        description: "Uma história sobre racismo e injustiça no sul dos Estados Unidos, vista pelos olhos de uma criança.",
        genre: "ficcao",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/91WKPd60P4L.jpg"
    },
    {
        id: 17,
        title: "Sapiens: Uma Breve História da Humanidade",
        author: "Yuval Noah Harari",
        year: 2011,
        description: "Uma análise da história da humanidade, desde a Idade da Pedra até a era moderna, explorando como o Homo sapiens chegou a dominar o planeta.",
        genre: "nao-ficcao",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/81BTkpMrLYL.jpg"
    },
    {
        id: 18,
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        description: "Um piloto de avião cai no deserto e conhece um jovem príncipe que viajou de planeta em planeta em busca de sabedoria.",
        genre: "fantasia",
        quantity: 1,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqKZ3yThwD8LVzlCnxtmheV8AD6sDepyTWw&s"
    },
    {
        id: 19,
        title: "Frankenstein",
        author: "Mary Shelley",
        year: 1818,
        description: "A história do jovem cientista Victor Frankenstein, que cria uma criatura grotesca e é forçado a enfrentar as consequências de sua ambição.",
        genre: "terror",
        quantity: 1,
        cover: "https://cdl-static.s3-sa-east-1.amazonaws.com/blog/artigo/6739/images/frankenstein-edicao-bolso-de-luxo.jpg"
    },
    {
        id: 20,
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851,
        description: "A obsessiva jornada do Capitão Ahab para se vingar da gigantesca baleia branca que arrancou sua perna.",
        genre: "aventura",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/712mdW4zCcL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 21,
        title: "A Culpa é das Estrelas",
        author: "John Green",
        year: 2012,
        description: "Dois adolescentes com câncer se conhecem em um grupo de apoio e embarcam em uma jornada inesquecível sobre a vida, o amor e a perda.",
        genre: "romance",
        quantity: 1,
        cover: "https://m.media-amazon.com/images/I/91RXDK2vhzL._UF1000,1000_QL80_.jpg"
    }
];

// Simulações
const generatedCodes = [
    { bookTitle: "Coraline", author: "Neil Gaiman", cover: "https://m.media-amazon.com/images/I/61IuYdR8loL._UF1000,1000_QL80_.jpg", code: "15838", student: "85474", status: "pending" },
    { bookTitle: "Sherlock Holmes: Um Estudo em Vermelho", author: "Arthur Conan Doyle", cover: "https://m.media-amazon.com/images/I/61GFsO7j0ZL._UF1000,1000_QL80_.jpg", code: "15879", student: "11234", status: "available" },
    { bookTitle: "Os Miseráveis", author: "Victor Hugo", cover: "https://m.media-amazon.com/images/I/71L28YvPobL.jpg", code: "15880", student: "45678", status: "pending" },
    { bookTitle: "As Crônicas de Nárnia", author: "C. S. Lewis", cover: "https://m.media-amazon.com/images/I/71yJLhQekBL._UF894,1000_QL80_.jpg", code: "15881", student: "98765", status: "available" },
    { bookTitle: "Duna", author: "Frank Herbert", cover: "https://intrinseca.com.br/wp-content/uploads/2025/04/CAPA-Duna-G.jpg", code: "15882", student: "12345", status: "pending" }
];

const activeLoans = [
    { bookTitle: "O Hobbit", author: "J.R.R. Tolkien", cover: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg", code: "15838", date: "24/10", fine: "R$ 1,00" },
    { bookTitle: "A Revolução dos Bichos", author: "George Orwell", cover: "https://images.dlivros.org/George-Orwell/revolucao-bichos-george-orwell_large.webp", code: "15879", date: "26/11", fine: "N/A" },
    { bookTitle: "O Nome do Vento", author: "Patrick Rothfuss", cover: "https://m.media-amazon.com/images/I/81CGmkRG9GL.jpg", code: "15883", date: "04/12", fine: "N/A" },
    { bookTitle: "Cem anos de solidão", author: "Gabriel García Márquez", cover: "https://m.media-amazon.com/images/I/817esPahlrL.jpg", code: "15884", date: "15/11", fine: "R$ 0,50" },
    { bookTitle: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqKZ3yThwD8LVzlCnxtmheV8AD6sDepyTWw&s", code: "15885", date: "29/11", fine: "N/A" }
];

// Variáveis globais
let books = initialBooks.slice();
let currentAction = null;

// Chave para armazenar a senha no localStorage
const PASSWORD_KEY = "librarian_password";
const LOGGED_IN_KEY = "librarian_logged_in";

// Funções utilitárias
const $ = id => document.getElementById(id);

// Sistema de Login
// Sistema de Login SIMPLIFICADO
function initializeLoginSystem() {
    // Verificar se já está logado
    const isLoggedIn = localStorage.getItem(LOGGED_IN_KEY) === "true";
    
    if (isLoggedIn) {
        showMainContent();
        return;
    }
    
    showLoginScreen();
    
    // Verificar se já existe uma senha definida
    const existingPassword = localStorage.getItem(PASSWORD_KEY);
    
    if (!existingPassword) {
        localStorage.setItem(PASSWORD_KEY, "biblioteca123");
    }
    
    // Configurar evento de login
    const loginForm = $("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const passwordInput = $("password");
            const errorDiv = $("login-error");
            
            if (!passwordInput || !errorDiv) return;
            
            const enteredPassword = passwordInput.value;
            const storedPassword = localStorage.getItem(PASSWORD_KEY);
            
            if (enteredPassword === storedPassword) {
                localStorage.setItem(LOGGED_IN_KEY, "true");
                showMainContent();
            } else {
                errorDiv.style.display = "block";
                passwordInput.value = "";
                passwordInput.focus();
            }
        });
    }
}

function showLoginScreen() {
    const loginScreen = $("login-screen");
    const mainContent = $("main-content");
    
    if (loginScreen) loginScreen.style.display = "flex";
    if (mainContent) mainContent.style.display = "none";
    
    const passwordInput = $("password");
    if (passwordInput) passwordInput.value = "";
    
    const errorDiv = $("login-error");
    if (errorDiv) errorDiv.style.display = "none";
}

function showMainContent() {
    const loginScreen = $("login-screen");
    const mainContent = $("main-content");
    
    if (loginScreen) loginScreen.style.display = "none";
    if (mainContent) mainContent.style.display = "block";
    
    // Renderizar conteúdo apenas quando logado
    renderBooks();
    renderGeneratedCodes();
    renderActiveLoans();
    
    // Configurar botão de logout
    setupLogoutButton();
}

function setupLogoutButton() {
    const profileIcon = document.querySelector('.profile-icon');
    if (profileIcon) {
        profileIcon.id = "logout-btn";
        profileIcon.title = "Sair";
        profileIcon.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
        profileIcon.style.cursor = "pointer";
        
        // Remover event listeners anteriores para evitar duplicação
        profileIcon.replaceWith(profileIcon.cloneNode(true));
        
        // Adicionar novo event listener
        document.getElementById('logout-btn').addEventListener("click", function() {
            localStorage.removeItem(LOGGED_IN_KEY);
            showLoginScreen();
        });
    }
}

// Modais
function openAddBookForm() {
    const modal = $("addBookModal");
    if (modal) modal.style.display = "flex";
}

function closeAddBookForm() {
    const modal = $("addBookModal");
    if (modal) modal.style.display = "none";
    const form = $("addBookForm");
    if (form) form.reset();
    const preview = $("image-preview");
    if (preview) preview.style.display = "none";
}

function openEditBookForm(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    if ($("edit-id")) $("edit-id").value = book.id;
    if ($("edit-title")) $("edit-title").value = book.title;
    if ($("edit-author")) $("edit-author").value = book.author;
    if ($("edit-year")) $("edit-year").value = book.year;
    if ($("edit-description")) $("edit-description").value = book.description;
    if ($("edit-genre")) $("edit-genre").value = book.genre;
    if ($("edit-quantity")) $("edit-quantity").value = book.quantity;

    const editPreview = $("edit-image-preview");
    const editImage = $("edit-preview-image");
    if (editPreview && editImage) {
        if (book.cover) {
            editImage.src = book.cover;
            editPreview.style.display = "block";
        } else {
            editPreview.style.display = "none";
        }
    }

    const modal = $("editBookModal");
    if (modal) modal.style.display = "flex";
}

function closeEditBookForm() {
    const modal = $("editBookModal");
    if (modal) modal.style.display = "none";
    const form = $("editBookForm");
    if (form) form.reset();
    const preview = $("edit-image-preview");
    if (preview) preview.style.display = "none";
}

function openConfirmModal(title, message, action) {
    if ($("confirm-title")) $("confirm-title").textContent = title;
    if ($("confirm-message")) $("confirm-message").textContent = message;
    currentAction = action;
    const modal = $("confirmModal");
    if (modal) modal.style.display = "flex";
}

function closeConfirmModal() {
    const modal = $("confirmModal");
    if (modal) modal.style.display = "none";
    currentAction = null;
}

function confirmAction() {
    if (typeof currentAction === "function") currentAction();
    closeConfirmModal();
}

function confirmCode(code) {
    alert(`Código ${code} confirmado com sucesso!`);
}

// Preview de imagem
function handleImagePreview(inputId, previewId, imageId) {
    const input = $(inputId);
    const preview = $(previewId);
    const image = $(imageId);

    if (!input || !preview || !image) return;

    input.addEventListener("change", function () {
        const file = this.files && this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                image.src = this.result;
                preview.style.display = "block";
            });
            reader.readAsDataURL(file);
        }
    });
}

// Manipulação de livros
function deleteBook(bookId) {
    openConfirmModal("Confirmar Exclusão", "Tem certeza que deseja excluir este livro?", () => {
        books = books.filter(b => b.id !== bookId);
        renderBooks();
        alert("Livro excluído com sucesso!");
    });
}

// Renderização
function renderBooks() {
    const booksGrid = $("librarian-catalog");
    if (!booksGrid) return;
    booksGrid.innerHTML = "";

    books.forEach(book => {
        const safeGenre = book.genre ? (book.genre.charAt(0).toUpperCase() + book.genre.slice(1)) : "";
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.style.display = "flex";
        bookCard.style.flexDirection = "column";
        bookCard.style.justifyContent = "space-between";
        bookCard.innerHTML = `
            <div class="book-cover">
                <img src="${book.cover}" alt="${book.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="book-info" style="flex-grow: 1;">
                <h3>${book.title}</h3>
                <p>Autor: ${book.author}</p>
                <p>Ano: ${book.year}</p>
                <p>Gênero: ${safeGenre}</p>
            </div>
            <div class="book-actions" style="margin-top: auto; display: flex; justify-content: space-around; width: 100%;">
                <button class="edit-btn" data-id="${book.id}"><i class="fas fa-edit"></i> Editar</button>
                <button class="delete-btn" data-id="${book.id}"><i class="fas fa-trash"></i> Excluir</button>
            </div>
        `;
        booksGrid.appendChild(bookCard);
    });

    // Delegação de eventos para botões de editar/excluir
    booksGrid.querySelectorAll(".edit-btn").forEach(btn => {
        btn.addEventListener("click", () => openEditBookForm(Number(btn.dataset.id)));
    });
    booksGrid.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => deleteBook(Number(btn.dataset.id)));
    });
}

function renderGeneratedCodes() {
    const codesList = $("generated-codes-list");
    if (!codesList) return;
    codesList.innerHTML = "";

    generatedCodes.forEach(code => {
        const codeCard = document.createElement("div");
        codeCard.className = "code-card";
        codeCard.innerHTML = `
            <img src="${code.cover}" alt="Capa do livro ${code.bookTitle}">
            <div class="code-info">
                <p>${code.bookTitle}</p>
                <p class="author">${code.author}</p>
            </div>
            <div class="code-details code-status-${code.status}">
                <p>Código: <span>${code.code}</span></p>
                <p>Aluno: <span>${code.student}</span></p>
            </div>
            <button class="code-confirm-btn">Confirmar</button>
        `;
        codesList.appendChild(codeCard);

        const btn = codeCard.querySelector(".code-confirm-btn");
        if (btn) btn.addEventListener("click", () => confirmCode(code.code));
    });
}

function renderActiveLoans() {
    const loansList = $("generated-loans-list");
    if (!loansList) return;
    loansList.innerHTML = "";

    activeLoans.forEach(loan => {
        const loanCard = document.createElement("div");
        loanCard.className = "code-card";
        loanCard.innerHTML = `
            <img src="${loan.cover}" alt="Capa do livro ${loan.bookTitle}">
            <div class="code-info">
                <p>${loan.bookTitle}</p>
                <p class="author">${loan.author}</p>
            </div>
            <div class="code-details code-status-${loan.fine ? "pending" : "available"}">
                <p>Código: <span>${loan.code}</span></p>
                <p>Data: <span>${loan.date}</span></p>
                ${loan.fine ? `<p>Multa: <span>${loan.fine}</span></p>` : ""}
            </div>
            <button class="code-received-btn" style="padding: 0.5rem 1.5rem; margin-top: 0.3rem;">Recebido</button>
        `;
        loansList.appendChild(loanCard);

        const btn = loanCard.querySelector(".code-received-btn");
        if (btn) btn.addEventListener("click", () => confirmCode(loan.code));
    });
}

// Utilitárias
function scrollToSection(id) {
    const element = $(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// DOMContentLoaded com try/catch para capturar erros
document.addEventListener("DOMContentLoaded", function () {
    try {
        // 1. Inicializar sistema de login PRIMEIRO
        initializeLoginSystem();

        // 2. Só configurar o resto da aplicação se estiver logado
        if (localStorage.getItem(LOGGED_IN_KEY) === "true") {
            initializeApplication();
        }

    } catch (err) {
        console.error("Erro no script principal:", err);
    }
});

function initializeApplication() {
    // Configurar preview de imagens
    handleImagePreview("cover-image", "image-preview", "preview-image");
    handleImagePreview("edit-cover-image", "edit-image-preview", "edit-preview-image");

    // Renderizar dados
    renderBooks();
    renderGeneratedCodes();
    renderActiveLoans();

    // Configurar todos os event listeners
    setupAllEventListeners();
}

function setupAllEventListeners() {
    // Botão de adicionar livro do dashboard
    const addBookDashboardBtn = $("add-book-dashboard-btn");
    if (addBookDashboardBtn) {
        addBookDashboardBtn.addEventListener("click", openAddBookForm);
    }

    // Formulário de adicionar livro
    const addForm = $("addBookForm");
    if (addForm) {
        addForm.addEventListener("submit", function (e) {
            e.preventDefault();
            handleAddBookSubmit();
        });
    }

    // Formulário de editar livro
    const editForm = $("editBookForm");
    if (editForm) {
        editForm.addEventListener("submit", function (e) {
            e.preventDefault();
            handleEditBookSubmit();
        });
    }

    // Navegação
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            scrollToSection(targetId);
        });
    });

    // Sistema de pesquisa
    setupSearchSystem();
}

function handleAddBookSubmit() {
    const coverInput = $("cover-image");
    const coverImage = coverInput && coverInput.files ? coverInput.files[0] : null;
    let imageUrl = "imagens/default-book.jpg"; // Imagem padrão

    if (coverImage) {
        imageUrl = URL.createObjectURL(coverImage);
    }

    const newBook = {
        id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
        title: $("title").value,
        author: $("author").value,
        year: parseInt($("year").value, 10),
        description: $("description").value,
        genre: $("genre").value,
        quantity: parseInt($("quantity").value, 10),
        cover: imageUrl
    };

    books.push(newBook);
    renderBooks();
    closeAddBookForm();
    alert("Livro adicionado com sucesso!");
}

function handleEditBookSubmit() {
    const bookId = Number($("edit-id").value);
    const bookIndex = books.findIndex(b => b.id === bookId);
    const editCoverInput = $("edit-cover-image");
    const editCoverImage = editCoverInput && editCoverInput.files ? editCoverInput.files[0] : null;

    if (bookIndex !== -1) {
        let imageUrl = books[bookIndex].cover; // Mantém a imagem atual se não for alterada
        
        if (editCoverImage) {
            imageUrl = URL.createObjectURL(editCoverImage);
        }

        books[bookIndex] = {
            id: bookId,
            title: $("edit-title").value,
            author: $("edit-author").value,
            year: parseInt($("edit-year").value, 10),
            description: $("edit-description").value,
            genre: $("edit-genre").value,
            quantity: parseInt($("edit-quantity").value, 10),
            cover: imageUrl
        };

        renderBooks();
        closeEditBookForm();
        alert("Livro atualizado com sucesso!");
    }
}

function setupSearchSystem() {
    const searchInput = $("search-input");
    const searchButton = $("search-button");
    const resultsDiv = $("results");

    function performSearch() {
        if (!searchInput || !resultsDiv) return;
        
        const searchTerm = (searchInput.value || "").toLowerCase().trim();
        resultsDiv.innerHTML = "";

        if (!searchTerm) {
            resultsDiv.innerHTML = "<p>Por favor, digite algo para pesquisar.</p>";
            resultsDiv.style.display = "block";
            return;
        }

        const filteredBooks = books.filter(book =>
            (book.title || "").toLowerCase().includes(searchTerm) ||
            (book.author || "").toLowerCase().includes(searchTerm) ||
            (book.genre || "").toLowerCase().includes(searchTerm)
        );

        if (filteredBooks.length === 0) {
            resultsDiv.innerHTML = "<p>Nenhum livro encontrado. Tente outro termo.</p>";
            resultsDiv.style.display = "block";
            return;
        }

        filteredBooks.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.className = "book-result";
            bookElement.innerHTML = `
                <div class="book-result-title">${book.title}</div>
                <div class="book-result-author">${book.author}</div>
                <div class="${book.quantity > 0 ? "available" : "unavailable"}">
                    ${book.quantity > 0 ? "Disponível" : "Indisponível"}
                </div>
            `;
            
            bookElement.addEventListener("click", () => {
                const cards = document.querySelectorAll(".book-card");
                for (const card of cards) {
                    const titleElement = card.querySelector(".book-info h3");
                    if (titleElement && titleElement.textContent === book.title) {
                        card.scrollIntoView({ behavior: "smooth", block: "center" });
                        card.style.outline = "3px solid var(--secondary-color)";
                        setTimeout(() => card.style.outline = "none", 1800);
                        break;
                    }
                }
                resultsDiv.style.display = "none";
                searchInput.value = ""; // Limpa a busca
            });

            resultsDiv.appendChild(bookElement);
        });

        resultsDiv.style.display = "block";
    }

    if (searchButton) {
        searchButton.addEventListener("click", performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") performSearch();
        });
    }

    // Fechar resultados ao clicar fora
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".search-container") && resultsDiv) {
            resultsDiv.style.display = "none";
        }
    });
}

        // UserWay widget (apenas insere o script se o elemento existir)
        (function (d) {
            var s = d.createElement("script");
            s.setAttribute("data-account", "INSIRA_SEU_CODIGO_USERWAY_AQUI");
            s.setAttribute("src", "https://cdn.userway.org/widget.js");
            (d.body || d.head).appendChild(s);
        })(document);


