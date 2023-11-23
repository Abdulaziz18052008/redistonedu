// Образец текста для вопросов
let sampleText = "JavaScript is a versatile programming language used for web development.";

// Вопрос 1: Какая длина у текста?
let question1 = "Question 1: What is the length of the text?";
let answer1 = sampleText.length;

// Вопрос 2: Какой индекс первой буквы 'p' в тексте?
let question2 = "Question 2: What is the index of the first 'p' in the text?";
let answer2 = sampleText.indexOf('p');

// Вопрос 3: Какая подстрока начинается с 11-го символа и заканчивается 20-м символом в тексте?
let question3 = "Question 3: What is the substring starting at character 11 and ending at character 20 in the text?";
let answer3 = sampleText.substring(10, 20);

// Вопрос 4: Замените слово 'versatile' на 'powerful' в тексте.
let question4 = "Question 4: Replace the word 'versatile' with 'powerful' in the text.";
let answer4 = sampleText.replace('versatile', 'powerful');

// Вопрос 5: Преобразуйте весь текст в нижний регистр.
let question5 = "Question 5: Convert the entire text to lowercase.";
let answer5 = sampleText.toLowerCase();

// Создание объекта с вопросами и ответами
let test = {
  [question1]: answer1,
  [question2]: answer2,
  [question3]: answer3,
  [question4]: answer4,
  [question5]: answer5,
};

// Вывод вопросов и ответов
for (const question in test) {
  console.log(question);
  console.log("Answer: " + test[question] + "\n");
}