import React, { useEffect } from 'react';

const GoogleTranslateWidget = ({code = 'en'}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: code, // Change to your default language
          includedLanguages: 'en,zh-CN,fr', // List of languages you want to include
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div id="google_translate_element">
      {/* This is where the Google Translate widget will be rendered */}
    </div>
  );
};

export default GoogleTranslateWidget;
