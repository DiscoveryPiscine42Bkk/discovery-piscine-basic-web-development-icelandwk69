document.getElementById('calculate').addEventListener('click', function(){
        let left = document.getElementById('left').value.trim();
        let right = document.getElementById('right').value.trim();
        let operator = document.getElementById('operator').value;

        if (!/^\d+$/.test(left) ||
            !/^\d+$/.test(right)) {
            alert('Error :(');
            return;
        }
        
        let a = parseInt(left);
        let b = parseInt(right);
        let result;

        if ((operator === '/' || operator === '%') && b === 0) {
            alert("It’s over 9000!");
            console.log("It’s over 9000!");
            return;
        }
        
        switch (operator) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = a / b; break;
            case '%': result = a % b; break;
        }
        
        alert(result);
        console.log(result);
    });

    setInterval(function(){
        alert('Please, use me...')
    }, 30000);