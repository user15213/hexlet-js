// Пример встроенной функции
Math.round(5.34); // 5

// Встроенный в Node.js модуль для работы с файлами
import fs from "fs";

// Читает содержимое файла
const data = fs.readFileSync("path/to/file");

// По общепринятому соглашению, lodash импортируется под именем _
import _ from "lodash";

// Пересечение массивов
_.intersection([2, 1], [2, 3]); // => [2]

// capitalize делает первую букву заглавной
_.capitalize("hello"); // Hello

// Так будет происходить поиск файла lodash.js в текущей директории
import _ from "./lodash.js";

// Так импортируется код из пакета
import _ from "lodash";

"dependencies": {
  "lodash": "^4.17.15"
}

import React from "react";

console.log(_.last(['one', 'two']));

