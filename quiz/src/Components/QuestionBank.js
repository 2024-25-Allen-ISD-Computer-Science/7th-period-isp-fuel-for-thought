/*
0 - Misc / No category
1 - Motorsport
2 - Technical
3 - Basic Recognition
*/
const qBank = [
    {
        id: 1,
        image: null,
        question: "What do Rolls-Royce and MINI Coop have in common?",
        options: ["Both are owned by BMW", "Both are luxury brands", "Both are Japanese", "They have nothing in common"],
        answer: "Both are owned by BMW",
        category: 3
    },
    {
        id: 2,
        image: "../../qimages/BMW Logo.svg",
        imgalt: "BMW Logo",
        question: "What does BMW stand for?",
        options: ["Bad Money Works", "Bay Motor Works", "Bayerische Motoren Werke", "Three names: Bob, Max, and Wyatt"],
        answer: "Bayerische Motoren Werke",
        category: 3
    },
    {
        id: 3,
        image: "../../qimages/MPG meter.jpg",
        question: "What does \"MPG\" stand for?",
        options: ["Manual Pedal Gear", "Maximum Power Gain", "Motor Power Gauge", "Miles per Gallon"],
        answer: "Miles per Gallon",
        category: 2
    },
    {
        id: 4,
        question: "What does \"MPH\" stand for?",
        options: ["Manual Pedal Hearing", "Maximum Per Horse", "Must Pull Huzz", "Miles per Hour"],
        answer: "Miles per Hour",
        category: 2
    },
    {
        id: 5,
        question: "What racing series is known as 'The Great American Race'?",
        options: ["Formula 1", "IndyCar", "Le Mans", "NASCAR"],
        answer: "NASCAR",
        category: 1
    },
    {
        id: 6,
        question: "What does 'FIA' stand for in motorsport?",
        options: ["Federation of International Automobiles", "Formula International Alliance", "Fédération Internationale de l'Automobile", "Fast International Autosport"],
        answer: "Fédération Internationale de l'Automobile",
        category: 1
    },
    {
        id: 7,
        question: "Which Formula 1 driver is known for his rivalry at Mercedes with Lewis Hamilton during the 2010s?",
        options: ["Sebastian Vettel", "Fernando Alonso", "Daniel Ricciardo", "Nico Rosberg"],
        answer: "Nico Rosberg",
        category: 1
    },
    {
        id: 8,
        question: "What is the name of the prestigious 24-hour endurance race held in France?",
        options: ["Daytona 500", "Monaco Grand Prix", "Le Mans", "Spa-Francorchamps"],
        answer: "Le Mans",
        category: 1
    },
    {
        id: 9,
        question: "Which team won the most Constructors' Championships in Formula 1 history?",
        options: ["Ferrari", "McLaren", "Mercedes", "Red Bull"],
        answer: "Ferrari",
        category: 1
    },
    {
        id: 10,
        question: "What component of a car helps reduce exhaust emissions?",
        options: ["Catalytic Converter", "Alternator", "Starter Motor", "Radiator"],
        answer: "Catalytic Converter",
        category: 2
    },
    {
        id: 11,
        question: "What is the purpose of a car's alternator?",
        options: ["Start the engine", "Charge the battery", "Cool the engine", "Boost acceleration"],
        answer: "Charge the battery",
        category: 2
    },
    {
        id: 12,
        question: "What type of engine layout is referred to as 'V8'?",
        options: ["An engine with 8 valves", "A 4-cylinder engine in V formation", "An engine with 8 cylinders arranged in two banks", "An electric motor with 8 rotors"],
        answer: "An engine with 8 cylinders arranged in two banks",
        category: 2
    },
    {
        id: 13,
        question: "What does 'RPM' stand for in relation to engines?",
        options: ["Revolutions Per Minute", "Rotations Per Meter", "Rapid Power Movement", "Rate of Performance Measurement"],
        answer: "Revolutions Per Minute",
        category: 2
    },
    {
        id: 14,
        question: "What does a turbocharger do in an engine?",
        options: ["Increases fuel efficiency", "Forces more air into the engine for extra power", "Reduces emissions", "Cools the engine"],
        answer: "Forces more air into the engine for extra power",
        category: 2
    },
    {
        id: 15,
        question: "What is the primary function of a differential in a car?",
        options: ["Distribute torque to the wheels", "Improve braking efficiency", "Stabilize the suspension", "Enhance fuel economy"],
        answer: "Distribute torque to the wheels",
        category: 2
    },
    {
        id: 16,
        question: "What is the logo of Toyota shaped like?",
        options: ["A circle", "Three overlapping ovals", "A single 'T' shape", "A star"],
        answer: "Three overlapping ovals",
        category: 3
    },
    {
        id: 17,
        question: "Which car brand is known for its luxury and features the logo of a silver star?",
        options: ["BMW", "Mercedes-Benz", "Audi", "Lexus"],
        answer: "Mercedes-Benz",
        category: 3
    },
    {
        id: 18,
        question: "Which company manufactures the Civic?",
        options: ["Toyota", "Nissan", "Honda", "Mazda"],
        answer: "Honda",
        category: 3
    },
    {
        id: 19,
        question: "Which car company is famous for the Beetle model?",
        options: ["Fiat", "Volkswagen", "Chevrolet", "Mini"],
        answer: "Volkswagen",
        category: 3
    },
    {
        id: 20,
        question: "What type of vehicle is a 'coupe'?",
        options: ["A car with two doors", "A car with a convertible roof", "A car with off-road capabilities", "A car designed for racing"],
        answer: "A car with two doors",
        category: 3
    },
    {
        id: 21,
        question: "Which country is known as the birthplace of Volvo?",
        options: ["Germany", "Sweden", "USA", "Japan"],
        answer: "Sweden",
        category: 0
    },
    {
        id: 22,
        question: "What is the term for a car that can switch between gasoline and electric power?",
        options: ["Electric car", "Hybrid car", "Hydrogen car", "Solar car"],
        answer: "Hybrid car",
        category: 0
    },
    {
        id: 23,
        question: "What is the typical shape of a stop sign?",
        options: ["Circle", "Triangle", "Octagon", "Square"],
        answer: "Octagon",
        category: 0
    },
    {
        id: 24,
        question: "What is the name of the feature that allows a car to maintain a constant speed without the driver pressing the accelerator?",
        options: ["Lane assist", "Cruise control", "Auto steer", "Speed limiter"],
        answer: "Cruise control",
        category: 0
    },
    {
        id: 25,
        question: "What does ABS stand for in car safety systems?",
        options: ["Automatic Braking System", "Anti-lock Braking System", "Advanced Braking Support", "Anti-slip Braking System"],
        answer: "Anti-lock Braking System",
        category: 0
    }
    
]

export default qBank;