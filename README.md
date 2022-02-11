# node-1

# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/j406ill0iY7da8akDSpwocjnlGmPrC 

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/Gcavf81ZJ04Qf9uIhn54u3FH0vKKk4 

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/OO7nGfEmpCGpd7B6vE0mpqiNMgfY0P 

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/BtRbjsufPAuGlwi4LYck6iFXmEiQ7C 