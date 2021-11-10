/**
 *
 * Default function Parameters
 *
 *
 */

//example 1

// const mulitplier = (num, mult = 2) => {

//     console.log(num,mult);
//     return num * mult;
// }

// console.log(mulitplier(10,3)); //30

// console.log(mulitplier(5)); //10

// console.log(mulitplier()); //NaN

//example 2

// const groceryItem = (
//     title,
//     qty,
//     item = {
//         groceryItemTitle:title,
//         gorcreyItemqty :qty,
//        // groceryItemprice : price // price is not defined
//     },
//     price
// ) =>{
//     console.log(title,qty,item);
// }

// groceryItem("banana",5);

//example 3

// const warning = (title) => {
//   console.log(
//     title !== undefined
//       ? `Title of the button is ${title}. But
//         color is not set`
//       : `Title and color are not set`
//   );
//   throw new Error(
//     "btn function must be called with two arguments- title and color"
//   );
// };

// const btn = (title = warning(), color = warning(title)) => {
//   console.log(title);
// };

// btn("button1", "red");
// btn("button2");
// /**
//  * Title of the button is button2. But
//         color is not set
//         Uncaught Error: btn function must be called with two arguments- title and color
//  */

//challenges 1

/**
 * create a function "weatherForecast " with tow parameters "city " and "weather"
 *
 * if second argument is absent , "weather" paramter should get value " Great weather".
 *
 * 1.first solve this without default fucnction paramter
 * 2. comment previous soluttion and solve same task with default function paramters.
 *
 */
//without default paramater

// const weatherForecast = (city,weather) =>
// {
//     if(weather !== undefined)
//     {
//         return `Weather Forecast for ${city} : ${weather}`;
//     }
//     else if (weather === undefined)
//     {
//         return`Weather Forecast for ${city} : Great weather!`;
//     }
//     else
//     {
//         return `weather Forecst for ${city} :`;
//     }

// };

// console.log(weatherForecast("Dubai","sunny"));

// console.log(weatherForecast("nepal","Light rain"));

// console.log(weatherForecast("paris"));

// console.log(weatherForecast("Dubai",""));\

/**
 *
 * with default parameters
 *
 */

// const weatherForecast = (city, weather='Great Weather') =>
// {

//     console.log( weather !== undefined ? `Weather Forecast for ${city} : ${weather}` : `Weather Forecast for ${city} :`);

// };

// weatherForecast("Dubai","sunny");

// weatherForecast("nepal","Light rain");

// weatherForecast("paris");

// weatherForecast("Dubai","");

/**
 *
 * tough challenge realted to default parameters
 *
 * //Generating missing Unique IDs
 *
 */

/**
 * create a function "tasksSortedbyIds" with tow paramters "tasks" and "tasksWithIds".
 *
 * 1.Before performing any actions inside of the function you need to generate unique 4-digit "taskId" for each task where it is missing.
 *
 * 2.At the beginning of the function log to the console
 * quantity of the missing taskIds:
 * " Quantity of the missin gtaskIds is 2"
 *
 * 3. Function should return array of tasks sorted by "taskId". all the task in the soreted array must have "taskId".
 *
 *
 * NOTE:Original "tasks" array should remain unchanged.
 *
 */

const tasks = [
  {
    title: "Meeting with John",
    taskId: 4621,
  },
  {
    title: "Visit gym",
    taskId: 6821,
  },
  {
    title: "Buy new phone",
  },
  {
    title: "Clean the room",
    taskId: 2721,
  },
  {
    title: "Plan a trip",
  },
];

const generateTaskIds = (tasks) => {
  let newTaskIds = [];
  return tasks.map(({ ...task }) => {
    // or task = {...task}; //aaba mutate hudaina copy of task spread operator
    if (!task.hasOwnProperty("taskId")) {
      let newTaskId;
      do {
        newTaskId = 1000 + Math.floor(Math.random() * 9000);
      } while (tasks.find((task) => task.taskId === newTaskId) || newTaskIds.includes(newTaskId));

      newTaskIds.push(newTaskId);

      task.taskId = newTaskId;
    }
    return task;
  });
};

const tasksSortedByIds = (tasks, tasksWithIds = generateTaskIds(tasks)) => {
  console.log(
    `Quantity of the missing taskIds is ${
      tasks.filter((task) => !task.hasOwnProperty("taskId")).length
    }`
  );
  return tasksWithIds.sort((a, b) => a.taskId - b.taskId);
};

console.log("Sorted array of task with taskIds:", tasksSortedByIds(tasks));

/**
 * Quantity of the missing taskIds is 2
 * Soreted array of tasks with taskIds: .....
 */

console.log("orginal unsoreted array of tasks with missing taskIds:", tasks);
/**
 * Original unsoreted array of tasks with missing taksIds: ...
 *
 */
