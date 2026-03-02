document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberElements = document.querySelectorAll('.number');

    const generateNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        numberElements.forEach((element, index) => {
            element.textContent = sortedNumbers[index];
        });
    };

    generateBtn.addEventListener('click', generateNumbers);

    // 다크/화이트 모드 토글
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️ 화이트모드';
    }
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        themeToggle.textContent = isDark ? '☀️ 화이트모드' : '🌙 다크모드';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // 초기 번호 생성
    generateNumbers();
});
