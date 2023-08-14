const badges = [
    "https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white",
    "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
    "https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white",
    "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
    "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    "https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
    "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white",
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
    "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
    "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
    "https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white",
    "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
    "https://img.shields.io/badge/Node--Red-8F0000?style=for-the-badge&logo=nodered&logoColor=white",
    "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
    "https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white",
    "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
    "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",
    "https://img.shields.io/badge/unrealengine-%23313131.svg?style=for-the-badge&logo=unrealengine&logoColor=white",
    "https://img.shields.io/badge/Powershell-2CA5E0?style=for-the-badge&logo=powershell&logoColor=white",
    "https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge",
    "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
    "https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
    "https://img.shields.io/badge/rabbitmq-%23FF6600.svg?&style=for-the-badge&logo=rabbitmq&logoColor=white",
    "https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white",
    "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
];

const container = document.querySelector(".badges");

badges.forEach(badge => {
    const img = document.createElement("img");
    img.src = badge;
    img.className = 'badge'
    container.appendChild(img);
});