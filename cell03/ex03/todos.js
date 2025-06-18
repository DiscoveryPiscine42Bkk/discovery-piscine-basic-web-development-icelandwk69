 function saveToCookie() {
        const todos = Array.from(document.querySelectorAll("#ft_list div"))
                            .map(el => el.textContent);
        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";max-age=31536000;";
    }
  
    function loadFromCookie() {
        const match = document.cookie.match(/todos=([^;]+)/);
        if (match) {
            try {
                const todos = JSON.parse(decodeURIComponent(match[1]));
                todos.reverse().forEach(text => addToDom(text));
            } catch (e) {
                console.error("Error loading from cookies", e);
            }
        }
    }
  
    function addToDom(text) {
        let div = document.createElement('div');
        div.textContent = text;
        div.addEventListener('click', () => {
            if (confirm('Remove this To-Do?')) {
                div.remove();
                saveToCookie();
            }
        });

        document.querySelector("#ft_list").prepend(div);
    }
  
    document.querySelector("#newBtn").addEventListener('click', () => {
        let todo = prompt('Enter a To-Do:');
        if (todo && todo.trim()) {
            addToDom(todo.trim()); 
            saveToCookie();
        }
    });

    window.onload = loadFromCookie;