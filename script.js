document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const article = button.closest('.article');
        const content = article.querySelector('.article-content');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            content.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});

document.querySelectorAll('.article').forEach(article => {
    article.addEventListener('click', (event) => {
        if (!event.target.classList.contains('expand-btn')) {
            window.location.href = article.querySelector('a').getAttribute('href');
        }
    });
});
