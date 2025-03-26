// Vanilla JS SDK implementation
(function(global) {
    // Greeting constructor
    function Greeting() {
        // Ensure this is always an instance of Greeting
        if (!(this instanceof Greeting)) {
            return new Greeting();
        }
        
        this.version = '1.0';
        console.log('Web SDK initialized.');
    }

    // Greet method
    Greeting.prototype.greet = function(name) {
        if (!name || typeof name !== 'string') {
            console.error('Invalid name provided');
            return null;
        }

        const greeting = `Hello, ${name}! Welcome to the Web SDK.`;
        console.log(greeting);
        return greeting;
    };

    // Advanced method: Multilingual greeting
    Greeting.prototype.greetInLanguage = function(name, language) {
        if (!name || typeof name !== 'string') {
            console.error('Invalid name provided');
            return null;
        }

        const greetings = {
            'en': `Hello, ${name}!`,
            'es': `¡Hola, ${name}!`,
            'fr': `Bonjour, ${name}!`,
            'de': `Hallo, ${name}!`,
            'default': `Hello, ${name}!`
        };

        const greeting = greetings[language] || greetings['default'];
        console.log(greeting);
        return greeting;
    };

    // Export the Greeting constructor
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Greeting;
    } else {
        global.Greeting = Greeting;
    }

    // For ES6 module support
    return Greeting;
})(typeof window !== 'undefined' ? window : global);