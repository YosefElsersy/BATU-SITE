let currentLanguage = 'arabic'; // Default language

async function loadTranslations() {
  const response = await fetch('../js/translations.json');
  if (response.ok) {
    const translations = await response.json();
    return translations;
  } else {
    throw new Error('Failed to load translations.');
  }
}

async function switchLanguage(language) {
  currentLanguage = language;
  await translate();
}

async function translate() {
  try {
    const translations = await loadTranslations();
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(element => {
      const translationKey = element.getAttribute('data-translate');
      if (translations[translationKey]) {
        const translatedText = currentLanguage === 'arabic' ? translations[translationKey]['arabic'] : translations[translationKey]['english'];
        element.textContent = translatedText;
        
        // Apply the appropriate font-family and text direction
        if (currentLanguage === 'arabic') {
          // element.style.fontWeight = "700";
          element.style.fontFamily = "'Cairo', sans-serif";
          element.style.fontSize = "17px";
          setLanguageDirection('rtl');
        } else {
          // Apply English font-family and reset text direction
          element.style.fontFamily = "Arial, Helvetica, sans-serif"; // Add your English font-family here
          element.style.fontSize = "16px"; // Set the appropriate font size
          setLanguageDirection('ltr');
        }
      }
    });

  } catch (error) {
    console.error(error);
  }
}

function setLanguageDirection(direction) {
  document.body.dir = direction; // Set the document direction
}

// Load translations and initial translation
loadTranslations().then(translate);