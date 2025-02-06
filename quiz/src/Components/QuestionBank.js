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
    },
    {
        id: 26,
        question: "In which year was the first Formula 1 World Championship held?",
        options: ["1946", "1950", "1955", "1960"],
        answer: "1950",
        category: 1
      },
      {
        id: 27,
        question: "What is the primary color of a speed limit sign?",
        options: ["Blue", "Red", "White", "Yellow"],
        answer: "White",
        category: 3
      },
      {
        id: 28,
        question: "Which car company produces the Model S electric vehicle?",
        options: ["Tesla", "Chevrolet", "BMW", "Nissan"],
        answer: "Tesla",
        category: 0
      },
      {
        id: 29,
        question: "What is the term for driving close behind another car to reduce wind resistance in racing?",
        options: ["Oversteering", "Drafting", "Drifting", "Cornering"],
        answer: "Drafting",
        category: 1
      },
      {
        id: 30,
        question: "What component in a car converts fuel into power?",
        options: ["Battery", "Engine", "Alternator", "Radiator"],
        answer: "Engine",
        category: 2
      },
      {
        id: 31,
        question: "What is the shape of a 'Yield' traffic sign?",
        options: ["Circle", "Triangle", "Square", "Octagon"],
        answer: "Triangle",
        category: 3
      },
      {
        id: 32,
        question: "Which country is home to the car brand Ferrari?",
        options: ["France", "Italy", "Germany", "USA"],
        answer: "Italy",
        category: 0
      },
      {
        id: 33,
        question: "What is the name of the race track that hosts the Belgian Grand Prix?",
        options: ["Silverstone", "Monza", "Circuit de Monaco", "Spa-Francorchamps"],
        answer: "Spa-Francorchamps",
        category: 1
      },
      {
        id: 34,
        question: "What type of suspension system is commonly found in modern cars?",
        options: ["Leaf Spring", "Air Suspension", "Hydraulic Suspension", "MacPherson Strut"],
        answer: "MacPherson Strut",
        category: 2
      },
      {
        id: 35,
        question: "What does a flashing yellow traffic light usually mean?",
        options: ["Stop", "Proceed with caution", "Yield", "Do not enter"],
        answer: "Proceed with caution",
        category: 3
      },
      {
        id: 36,
        question: "What is the highest speed a Bugatti Chiron can reach?",
        options: ["300 km/h", "350 km/h", "420 km/h", "490 km/h"],
        answer: "490 km/h",
        category: 0
      },
      {
        id: 37,
        question: "What is the term for a racing event that includes both right and left turns?",
        options: ["Oval racing", "Road course", "Drag racing", "Hill climb"],
        answer: "Road course",
        category: 1
      },
      {
        id: 38,
        question: "What color is typically used for warning signs on roads?",
        options: ["Green", "Yellow", "Blue", "Red"],
        answer: "Yellow",
        category: 3
      },
      {
        id: 39,
        question: "Which motorsport event is known as 'The Greatest Spectacle in Racing'?",
        options: ["Le Mans 24 Hours", "Indianapolis 500", "Monaco Grand Prix", "Daytona 500"],
        answer: "Indianapolis 500",
        category: 1
      },
      {
        id: 40,
        question: "What does ECU stand for in a car's electrical system?",
        options: ["Electronic Control Unit", "Engine Calibration Utility", "Energy Conversion Unit", "Electric Car Upgrade"],
        answer: "Electronic Control Unit",
        category: 2
      },
      {
        id: 41,
        question: "What is the typical color of lines that divide opposing lanes of traffic?",
        options: ["White", "Yellow", "Red", "Blue"],
        answer: "Yellow",
        category: 3
      },
      {
        id: 42,
        question: "What does the 'check engine' light indicate?",
        options: ["Fuel tank is full", "Engine needs maintenance", "Oil change needed", "Windshield wipers are low on fluid"],
        answer: "Engine needs maintenance",
        category: 2
    },
    {
        id: 43,
        question: "Which of the following is NOT part of a car’s electrical system?",
        options: ["Battery", "Alternator", "Fuel injector", "Fuses"],
        answer: "Fuel injector",
        category: 2
    },
    {
        id: 44,
        question: "What does a car’s tachometer measure?",
        options: ["Engine speed (RPM)", "Fuel consumption", "Vehicle speed", "Battery level"],
        answer: "Engine speed (RPM)",
        category: 3
    },
    {
        id: 45,
        question: "Which type of engine configuration typically provides better fuel economy?",
        options: ["V8", "V6", "Inline 4", "Inline 6"],
        answer: "Inline 4",
        category: 2
    },
    {
        id: 46,
        question: "What is the main purpose of the car's radiator?",
        options: ["To cool the engine", "To power the air conditioning", "To filter exhaust gases", "To store coolant"],
        answer: "To cool the engine",
        category: 2
    },
    {
        id: 47,
        question: "Which part of the car is directly responsible for transferring power from the engine to the wheels?",
        options: ["Alternator", "Transmission", "Exhaust system", "Fuel pump"],
        answer: "Transmission",
        category: 2
    },
    {
        id: 48,
        question: "Which of these is a primary function of a car’s oil filter?",
        options: ["Cool the engine", "Remove dirt and debris from the oil", "Increase fuel efficiency", "Reduce engine noise"],
        answer: "Remove dirt and debris from the oil",
        category: 2
    },
    {
        id: 49,
        question: "What does a hybrid car use for propulsion?",
        options: ["Electric motor only", "Gasoline engine only", "Gasoline engine and electric motor", "Natural gas engine"],
        answer: "Gasoline engine and electric motor",
        category: 3
    },
    {
        id: 50,
        question: "Which system in a car is responsible for preventing skidding?",
        options: ["Traction control", "Power steering", "Anti-lock braking system (ABS)", "Exhaust system"],
        answer: "Traction control",
        category: 2
    },
    {
        id: 51,
        question: "Which of these is a feature typically found in high-performance sports cars?",
        options: ["Electric power steering", "Dual-clutch transmission", "Four-wheel drive", "Manual windows"],
        answer: "Dual-clutch transmission",
        category: 1
    },
    {
        id: 52,
        question: "What type of car maintenance involves replacing air, oil, or cabin filters?",
        options: ["Fluid check", "Tire rotation", "Filter change", "Brake servicing"],
        answer: "Filter change",
        category: 0
    },
    {
        id: 53,
        question: "What is a primary advantage of a rear-wheel-drive car?",
        options: ["Better traction in slippery conditions", "More fuel-efficient", "Better handling in dry conditions", "Increased interior space"],
        answer: "Better handling in dry conditions",
        category: 2
    },
    {
        id: 54,
        question: "What does the term 'understeer' refer to in vehicle handling?",
        options: ["When the car turns too much", "When the car turns too little", "When the car loses traction on the rear wheels", "When the car is too light"],
        answer: "When the car turns too little",
        category: 2
      },
      {
        id: 55,
        question: "Which manufacturer is responsible for the car model, the 'Taurus'?",
        options: ["Toyota", "Honda", "Ford", "Nissan"],
        answer: "Ford",
        category: 0
      },
      {
        id: 56,
        question: "What is the function of a car's timing belt?",
        options: ["Regulates the exhaust system", "Keeps the engine cool", "Synchronizes the movement of the engine’s valves and pistons", "Increases engine performance"],
        answer: "Synchronizes the movement of the engine’s valves and pistons",
        category: 2
      },
      {
        id: 57,
        question: "Which of the following is a common layout for a car's engine?",
        options: ["Rear-engine, rear-wheel drive", "Front-engine, all-wheel drive", "Mid-engine, rear-wheel drive", "Rear-engine, front-wheel drive"],
        answer: "Front-engine, all-wheel drive",
        category: 2
      },
      {
        id: 58,
        question: "Which car manufacturer produces the '911' sports car?",
        options: ["BMW", "Porsche", "Ferrari", "Lamborghini"],
        answer: "Porsche",
        category: 3
      },
      {
        id: 59,
        question: "In what type of racing is the 'Le Mans 24 Hours' event held?",
        options: ["Formula 1", "Endurance racing", "IndyCar", "Stock car racing"],
        answer: "Endurance racing",
        category: 1
      },
      {
        id: 60,
        question: "What year did the first electric car, the Chevrolet Volt, get released?",
        options: ["2007", "2011", "2012", "2015"],
        answer: "2011",
        category: 0
      },
      {
        id: 61,
        question: "What is the primary advantage of all-wheel drive (AWD) in a vehicle?",
        options: ["Improved fuel economy", "Enhanced towing capacity", "Better traction on slippery surfaces", "Higher top speed"],
        answer: "Better traction on slippery surfaces",
        category: 2
      },
      {
        id: 62,
        question: "Which of these car brands is famous for its 'M' performance models?",
        options: ["Audi", "BMW", "Mercedes-Benz", "Lexus"],
        answer: "BMW",
        category: 3
      },
      {
        id: 63,
        question: "Which car component is primarily responsible for stopping the vehicle?",
        options: ["Alternator", "Exhaust system", "Brakes", "Battery"],
        answer: "Brakes",
        category: 2
      },
      {
        id: 64,
        question: "Which race track is known as the 'Ring' and is a popular venue for performance car testing?",
        options: ["Monaco Circuit", "Silverstone", "Nürburgring", "Circuit de Spa-Francorchamps"],
        answer: "Nürburgring",
        category: 1
      },
      {
        id: 65,
        question: "What car brand is associated with the luxury sedan model 'S-Class'?",
        options: ["Audi", "BMW", "Mercedes-Benz", "Lexus"],
        answer: "Mercedes-Benz",
        category: 3
      }
      
      
    
]

export default qBank;