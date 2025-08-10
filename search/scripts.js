document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (query) {
            showSuggestions(query);
        } else {
            suggestions.style.display = 'none';
        }
    });

    function showSuggestions(query) {
        const suggestionList = [
            'Google',
            'GitHub',
            'GitLab',
            'Stack Overflow',
            'Stack Exchange',
            'Microsoft',
            'Mozilla',
            'Amazon'
        ];

        const filteredSuggestions = suggestionList.filter(item => item.toLowerCase().includes(query.toLowerCase()));

        suggestions.innerHTML = '';
        filteredSuggestions.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = item;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = item;
                suggestions.style.display = 'none';
            });
            suggestions.appendChild(suggestionItem);
        });

        suggestions.style.display = filteredSuggestions.length > 0 ? 'block' : 'none';
    }
});