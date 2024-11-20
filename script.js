document.getElementById('mood-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
  
    const mood = document.querySelector('input[name="mood"]:checked');
    const suggestionsDiv = document.getElementById('suggestions');
  
    if (mood) {
      const moodValue = mood.value;
      let suggestionText = '';
  
      switch (moodValue) {
        case 'nostalgic':
          suggestionText = `
            <h3>Você está se sentindo nostálgico!</h3>
            <p>Que tal preparar uma receita de <strong>pão caseiro</strong> ou <strong>brigadeiro de panela</strong>? </p>
          `;
          break;
        case 'stressed':
          suggestionText = `
            <h3>Você está estressado!</h3>
            <p>Uma boa sopa de <strong>abóbora</strong> ou uma sobremesa de <strong>chocolate quente</strong> vai acalmar seu dia.</p>
          `;
          break;
        case 'energetic':
          suggestionText = `
            <h3>Você está cheio de energia!</h3>
            <p>Experimente um <strong>poke bowl</strong> ou <strong>tacos coloridos</strong> para dar mais sabor ao seu dia!</p>
          `;
          break;
        case 'curious':
          suggestionText = `
            <h3>Você está curioso!</h3>
            <p>Que tal experimentar um prato diferente como <strong>quinoa com legumes</strong> ou um <strong>curry tailandês</strong>?</p>
          `;
          break;
        default:
          suggestionText = `<p>Selecione um humor para ver a sugestão.</p>`;
      }
  
      suggestionsDiv.innerHTML = suggestionText;
    } else {
      suggestionsDiv.innerHTML = '<p>Por favor, escolha um humor para obter a sugestão.</p>';
    }
  });