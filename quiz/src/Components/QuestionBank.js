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
        image: "../../qimages/tesla.avif",
        imgalt: "tesla",
        question: "Which car company produces the Model S electric vehicle?",
        options: ["Tesla", "Chevrolet", "BMW", "Nissan"],
        answer: "Tesla",
        category: 0
      },
      {
        id: 29,
        image: "../../qimages/slipstream.webp",
        imgalt: "slipstream",
        question: "What is the term for driving close behind another car to reduce wind resistance in racing?",
        options: ["Oversteering", "Drafting", "Drifting", "Cornering"],
        answer: "Drafting",
        category: 1
      },
      {
        id: 30,
        image: "../../qimages/engine.jpg",
        imgalt: "engine",
        question: "What component in a car converts fuel into power?",
        options: ["Battery", "Engine", "Alternator", "Radiator"],
        answer: "Engine",
        category: 2
      },
      {
        id: 31,
        image: "../../qimages/warning.avif",
        imgalt: "warning",
        question: "What is the shape of a 'Yield' traffic sign?",
        options: ["Circle", "Triangle", "Square", "Octagon"],
        answer: "Triangle",
        category: 3
      },
      {
        id: 32,
        image: "../../qimages/ferrari.avif",
        imgalt: "ferrari",
        question: "Which country is home to the car brand Ferrari?",
        options: ["France", "Italy", "Germany", "USA"],
        answer: "Italy",
        category: 0
      },
      {
        id: 33,
        image: "../../qimages/eau_rouge.jpg",
        imgalt: "eau_rouge",
        question: "What is the name of the race track that hosts the Belgian Grand Prix?",
        options: ["Silverstone", "Monza", "Circuit de Monaco", "Spa-Francorchamps"],
        answer: "Spa-Francorchamps",
        category: 1
      },
      {
        id: 34,
        image: "../../qimages/susp.png",
        imgalt: "susp",
        question: "What type of suspension system is commonly found in modern cars?",
        options: ["Leaf Spring", "Air Suspension", "Hydraulic Suspension", "MacPherson Strut"],
        answer: "MacPherson Strut",
        category: 2
      },
      {
        id: 35,
        image: "../../qimages/flashing_yellow.jpeg",
        imgalt: "flashing_yellow",
        question: "What does a flashing yellow traffic light usually mean?",
        options: ["Stop", "Proceed with caution", "Yield", "Do not enter"],
        answer: "Proceed with caution",
        category: 3
      },
      {
        id: 36,
        image: "../../qimages/bugatti.avif",
        imgalt: "bugatti",
        question: "What is the highest speed a Bugatti Chiron can reach?",
        options: ["300 km/h", "350 km/h", "420 km/h", "490 km/h"],
        answer: "490 km/h",
        category: 0
      },
      {
        id: 37,
        image: "../../qimages/cota.jpg",
        imgalt: "cota",
        question: "What is the term for a racing event that includes both right and left turns?",
        options: ["Oval racing", "Road course", "Drag racing", "Hill climb"],
        answer: "Road course",
        category: 1
      },
      {
        id: 38,
        image: "../../qimages/warning.avif",
        imgalt: "warning",
        question: "What color is typically used for warning signs on roads?",
        options: ["Green", "Yellow", "Blue", "Red"],
        answer: "Yellow",
        category: 3
      },
      {
        id: 39,
        image: "../../qimages/indiana.jpg",
        imgalt: "indiana",
        question: "Which motorsport event is known as 'The Greatest Spectacle in Racing'?",
        options: ["Le Mans 24 Hours", "Indianapolis 500", "Monaco Grand Prix", "Daytona 500"],
        answer: "Indianapolis 500",
        category: 1
      },
      {
        id: 40,
        image: "../../qimages/car_ecu.png",
        imgalt: "car_ecu",
        question: "What does ECU stand for in a car's electrical system?",
        options: ["Electronic Control Unit", "Engine Calibration Utility", "Energy Conversion Unit", "Electric Car Upgrade"],
        answer: "Electronic Control Unit",
        category: 2
      },
      {
        id: 41,
        image: "../../qimages/road.jpg",
        imgalt: "road",
        question: "What is the typical color of lines that divide opposing lanes of traffic?",
        options: ["White", "Yellow", "Red", "Blue"],
        answer: "Yellow",
        category: 3
      },
      {
        id: 42,
        image: "../../qimages/check_engine.jpg",
        imgalt: "check_engine",
        question: "What does the 'check engine' light indicate?",
        options: ["Fuel tank is full", "Engine needs maintenance", "Oil change needed", "Windshield wipers are low on fluid"],
        answer: "Engine needs maintenance",
        category: 2
    },
    {
        id: 43,
        image: "../../qimages/fuel_injector.webp",
        imgalt: "fuel_injector",
        question: "Which of the following is NOT part of a car’s electrical system?",
        options: ["Battery", "Alternator", "Fuel injector", "Fuses"],
        answer: "Fuel injector",
        category: 2
    },
    {
        id: 44,
        image: "../../qimages/rpm_meter.jpg",
        imgalt: "rpm_meter",
        question: "What does a car’s tachometer measure?",
        options: ["Engine speed (RPM)", "Fuel consumption", "Vehicle speed", "Battery level"],
        answer: "Engine speed (RPM)",
        category: 3
    },
    {
        id: 45,
        image: "../../qimages/engine.jpg",
        imgalt: "engine",
        question: "Which type of engine configuration typically provides better fuel economy?",
        options: ["V8", "V6", "Inline 4", "Inline 6"],
        answer: "Inline 4",
        category: 2
    },
    {
        id: 46,
        image: "../../qimages/radiator.jpg",
        imgalt: "radiator",
        question: "What is the main purpose of the car's radiator?",
        options: ["To cool the engine", "To power the air conditioning", "To filter exhaust gases", "To store coolant"],
        answer: "To cool the engine",
        category: 2
    },
    {
        id: 47,
        image: "../../qimages/transmission.webp",
        imgalt: "transmission",
        question: "Which part of the car is directly responsible for transferring power from the engine to the wheels?",
        options: ["Alternator", "Transmission", "Exhaust system", "Fuel pump"],
        answer: "Transmission",
        category: 2
    },
    {
        id: 48,
        image: "../../qimages/filters.jpg",
        imgalt: "filters",
        question: "Which of these is a primary function of a car’s oil filter?",
        options: ["Cool the engine", "Remove dirt and debris from the oil", "Increase fuel efficiency", "Reduce engine noise"],
        answer: "Remove dirt and debris from the oil",
        category: 2
    },
    {
        id: 49,
        image: "../../qimages/hybrid.jpg",
        imgalt: "hybrid",
        question: "What does a hybrid car use for propulsion?",
        options: ["Electric motor only", "Gasoline engine only", "Gasoline engine and electric motor", "Natural gas engine"],
        answer: "Gasoline engine and electric motor",
        category: 3
    },
    {
        id: 50,
        image: "../../qimages/tc.jpg",
        imgalt: "tc",
        question: "Which system in a car is responsible for preventing skidding?",
        options: ["Traction control", "Power steering", "Anti-lock braking system (ABS)", "Exhaust system"],
        answer: "Traction control",
        category: 2
    },
    {
        id: 51,
        image: "../../qimages/dct.webp",
        imgalt: "dct",
        question: "Which of these is a feature typically found in high-performance sports cars?",
        options: ["Electric power steering", "Dual-clutch transmission", "Four-wheel drive", "Manual windows"],
        answer: "Dual-clutch transmission",
        category: 1
    },
    {
        id: 52,
        image: "../../qimages/filters.jpg",
        imgalt: "filters",
        question: "What type of car maintenance involves replacing air, oil, or cabin filters?",
        options: ["Fluid check", "Tire rotation", "Filter change", "Brake servicing"],
        answer: "Filter change",
        category: 0
    },
    {
        id: 53,
        image: "../../qimages/awd.jpg",
        imgalt: "awd",
        question: "What is a primary advantage of a rear-wheel-drive car?",
        options: ["Better traction in slippery conditions", "More fuel-efficient", "Better handling in dry conditions", "Increased interior space"],
        answer: "Better handling in dry conditions",
        category: 2
    },
    {
        id: 54,
        image: "../../qimages/understeer.jpg",
        imgalt: "understeer",
        question: "What does the term 'understeer' refer to in vehicle handling?",
        options: ["When the car turns too much", "When the car turns too little", "When the car loses traction on the rear wheels", "When the car is too light"],
        answer: "When the car turns too little",
        category: 2
      },
      {
        id: 55,
        image: "../../qimages/ford.jpg",
        imgalt: "ford",
        question: "Which manufacturer is responsible for the car model, the 'Taurus'?",
        options: ["Toyota", "Honda", "Ford", "Nissan"],
        answer: "Ford",
        category: 0
      },
      {
        id: 56,
        image: "../../qimages/timing_belt.jpg",
        imgalt: "timing_belt",
        question: "What is the function of a car's timing belt?",
        options: ["Regulates the exhaust system", "Keeps the engine cool", "Synchronizes the movement of the engine’s valves and pistons", "Increases engine performance"],
        answer: "Synchronizes the movement of the engine’s valves and pistons",
        category: 2
      },
      {
        id: 57,
        image: "../../qimages/engine.jpg",
        imgalt: "engine",
        question: "Which of the following is a common layout for a car's engine?",
        options: ["Rear-engine, rear-wheel drive", "Front-engine, all-wheel drive", "Mid-engine, rear-wheel drive", "Rear-engine, front-wheel drive"],
        answer: "Front-engine, all-wheel drive",
        category: 2
      },
      {
        id: 58,
        image: "../../qimages/911.webp",
        imgalt: "911",
        question: "Which car manufacturer produces the '911' sports car?",
        options: ["BMW", "Porsche", "Ferrari", "Lamborghini"],
        answer: "Porsche",
        category: 3
      },
      {
        id: 59,
        image: "../../qimages/le_mans.webp",
        imgalt: "le_mans",
        question: "In what type of racing is the 'Le Mans 24 Hours' event held?",
        options: ["Formula 1", "Endurance racing", "IndyCar", "Stock car racing"],
        answer: "Endurance racing",
        category: 1
      },
      {
        id: 60,
        image: "../../qimages/volt.png",
        imgalt: "volt",
        question: "What year did the first electric car, the Chevrolet Volt, get released?",
        options: ["2007", "2011", "2012", "2015"],
        answer: "2011",
        category: 0
      },
      {
        id: 61,
        image: "../../qimages/awd.jpg",
        imgalt: "awd",
        question: "What is the primary advantage of all-wheel drive (AWD) in a vehicle?",
        options: ["Improved fuel economy", "Enhanced towing capacity", "Better traction on slippery surfaces", "Higher top speed"],
        answer: "Better traction on slippery surfaces",
        category: 2
      },
      {
        id: 62,
        image: "../../qimages/m_perf.webp",
        imgalt: "m_perf",
        question: "Which of these car brands is famous for its 'M' performance models?",
        options: ["Audi", "BMW", "Mercedes-Benz", "Lexus"],
        answer: "BMW",
        category: 3
      },
      {
        id: 63,
        image: "../../qimages/car_brakes.jpg",
        imgalt: "car_brakes",
        question: "Which car component is primarily responsible for stopping the vehicle?",
        options: ["Alternator", "Exhaust system", "Brakes", "Battery"],
        answer: "Brakes",
        category: 2
      },
      {
        id: 64,
        image: "../../qimages/nurburgring.webp",
        imgalt: "nurburgring",
        question: "Which race track is known as the 'Ring' and is a popular venue for performance car testing?",
        options: ["Monaco Circuit", "Silverstone", "Nürburgring", "Circuit de Spa-Francorchamps"],
        answer: "Nürburgring",
        category: 1
      },
      {
        id: 65,
        image: "../../qimages/s_class.webp",
        imgalt: "s_class",
        question: "What car brand is associated with the luxury sedan model 'S-Class'?",
        options: ["Audi", "BMW", "Mercedes-Benz", "Lexus"],
        answer: "Mercedes-Benz",
        category: 3
      },
      {
        id: 66,
        image: "../../qimages/sweden.webp",
        imgalt: "sweden",
        question: "Which country is home to the car manufacturer Volvo?",
        options: ["Germany", "Sweden", "USA", "Japan"],
        answer: "Sweden",
        category: 0
      },
      {
        id: 67,
        image: "../../qimages/green_white_flag.png",
        imgalt: "green_white_flag",
        question: "Which racing series uses the term 'Green-White-Checkered' for its overtime finish?",
        options: ["Formula 1", "NASCAR", "IndyCar", "WEC"],
        answer: "NASCAR",
        category: 1
      },
      {
        id: 68,
        image: "../../qimages/engine.jpg",
        imgalt: "engine",
        question: "What does the 'compression ratio' in an engine refer to?",
        options: ["The ratio of fuel to air in the engine", "The ratio of the cylinder volume before and after compression", "The pressure of the fuel injection system", "The speed at which the engine compresses air"],
        answer: "The ratio of the cylinder volume before and after compression",
        category: 2
      },
      {
        id: 69,
        image: "../../qimages/camry.avif",
        imgalt: "camry",
        question: "Which car manufacturer produces the Camry?",
        options: ["Honda", "Nissan", "Toyota", "Ford"],
        answer: "Toyota",
        category: 3
      },
      {
        id: 70,
        image: "../../qimages/model_t.jpg",
        imgalt: "model_t",
        question: "What was the first mass-produced car?",
        options: ["Ford Model T", "Volkswagen Beetle", "Chevrolet Bel Air", "Mercedes-Benz 300SL"],
        answer: "Ford Model T",
        category: 0
      },
      {
        id: 71,
        image: "../../qimages/f1_constructors.avif",
        imgalt: "f1_constructors",
        question: "Which F1 team holds the record for the most consecutive Constructors' Championships?",
        options: ["Ferrari", "Red Bull", "Mercedes", "McLaren"],
        answer: "Mercedes",
        category: 1
      },
      {
        id: 72,
        image: "../../qimages/differential.webp",
        imgalt: "differential",
        question: "What does a limited-slip differential do?",
        options: ["Prevents wheel lock-up under braking", "Improves traction by limiting wheel spin", "Reduces engine temperature", "Increases fuel efficiency"],
        answer: "Improves traction by limiting wheel spin",
        category: 2
      },
      {
        id: 73,
        image: "../../qimages/audi.png",
        imgalt: "audi",
        question: "Which car brand uses four interlocking rings as its logo?",
        options: ["BMW", "Audi", "Mercedes-Benz", "Volkswagen"],
        answer: "Audi",
        category: 3
      },
      {
        id: 74,
        image: "../../qimages/h_shifter.jpg",
        imgalt: "h_shifter",
        question: "What does the 'H' in H-pattern shifter stand for?",
        options: ["Hydraulic", "Horizontal", "High-performance", "It doesn't stand for anything"],
        answer: "It doesn't stand for anything",
        category: 0
      },
      {
        id: 75,
        image: "../../qimages/supercars.jpg",
        imgalt: "supercars",
        question: "Which racing series features the 'Bathurst 1000'?",
        options: ["NASCAR", "Supercars Championship", "Formula 1", "WRC"],
        answer: "Supercars Championship",
        category: 1
      },
      {
        id: 76,
        image: "../../qimages/turbo.webp",
        imgalt: "turbo",
        question: "What is the primary function of an intercooler in a turbocharged engine?",
        options: ["Increase fuel efficiency", "Reduce intake air temperature", "Boost oil circulation", "Control emissions"],
        answer: "Reduce intake air temperature",
        category: 2
      },
      {
        id: 77,
        image: "../../qimages/rocket_league.jpg",
        imgalt: "rocket_league",
        question: "Which car model is often credited with starting the 'muscle car' era?",
        options: ["Chevrolet Camaro", "Pontiac GTO", "Dodge Charger", "Ford Mustang"],
        answer: "Pontiac GTO",
        category: 3
      },
      {
        id: 78,
        image: "../../qimages/airbags.webp",
        imgalt: "airbags",
        question: "Which company developed the first practical airbag system for passenger cars?",
        options: ["Mercedes-Benz", "Ford", "Volvo", "General Motors"],
        answer: "Mercedes-Benz",
        category: 0
      },
      {
        id: 79,
        image: "../../qimages/ProstPodium.jpg",
        imgalt: "ProstPodium",
        question: "Which legendary F1 driver was known as 'The Professor'?",
        options: ["Ayrton Senna", "Michael Schumacher", "Alain Prost", "Niki Lauda"],
        answer: "Alain Prost",
        category: 1
      },
      {
        id: 80,
        image: "../../qimages/car_ecu.png",
        imgalt: "car_ecu",
        question: "What does a car's ECU control?",
        options: ["The air conditioning system", "The engine’s performance and efficiency", "The audio and infotainment system", "The suspension system"],
        answer: "The engine’s performance and efficiency",
        category: 2
      },
      {
        id: 81,
        image: "../../qimages/car_brakes.jpg",
        imgalt: "car_brakes",
        question: "What is the name of the safety feature that prevents car wheels from locking up during braking?",
        options: ["ABS", "ESP", "TCS", "EBD"],
        answer: "ABS",
        category: 2
      },
      {
        id: 82,
        image: "../../qimages/mustang.avif",
        imgalt: "mustang",
        question: "Which automaker produces the Mustang?",
        options: ["Chevrolet", "Dodge", "Ford", "Pontiac"],
        answer: "Ford",
        category: 3
      },
      {
        id: 83,
        image: "../../qimages/horse.jpg",
        imgalt: "horse",
        question: "What does the term 'horsepower' measure in a car engine?",
        options: ["Torque", "Acceleration", "Power output", "Top speed"],
        answer: "Power output",
        category: 2
      },
      {
        id: 84,
        image: "../../qimages/awd.jpg",
        imgalt: "awd",
        question: "Which type of drivetrain powers all four wheels at the same time?",
        options: ["FWD", "RWD", "AWD", "CVT"],
        answer: "AWD",
        category: 2
      },
      {
        id: 85,
        image: "../../qimages/italia.webp",
        imgalt: "italia",
        question: "Which Italian car manufacturer is known for its prancing horse logo?",
        options: ["Lamborghini", "Ferrari", "Maserati", "Alfa Romeo"],
        answer: "Ferrari",
        category: 3
      },
      {
        id: 86,
        image: "../../qimages/le_mans.webp",
        imgalt: "le_mans",
        question: "Which legendary endurance race, first held in 1923, is known for testing both speed and durability over a full day?",
        options: ["Bathurst 1000", "Le Mans 24 Hours", "Indy 500", "Sebring 12 Hours"],
        answer: "Le Mans 24 Hours",
        category: 1
      },
      {
        id: 87,
        image: "../../qimages/schumacher.jpg",
        imgalt: "schumacher",
        question: "Which year did Michael Schumacher win his first Formula 1 championship?",
        options: ["1992", "1994", "1996", "1998"],
        answer: "1994",
        category: 1
      },
      {
        id: 88,
        image: "../../qimages/flywheel.jpg",
        imgalt: "flywheel",
        question: "What is the purpose of a car’s flywheel?",
        options: ["Store rotational energy and smooth engine power delivery", "Increase horsepower", "Control air intake", "Regulate coolant temperature"],
        answer: "Store rotational energy and smooth engine power delivery",
        category: 2
      },
      {
        id: 89,
        image: "../../qimages/corvette.jpg",
        imgalt: "corvette",
        question: "Which American car brand produces the Corvette?",
        options: ["Ford", "Dodge", "Chevrolet", "Cadillac"],
        answer: "Chevrolet",
        category: 3
      },
      {
        id: 90,
        image: "../../qimages/hybrid.jpg",
        imgalt: "hybrid",
        question: "Which car manufacturer introduced the first hybrid mass-market vehicle?",
        options: ["Tesla", "Toyota", "Honda", "Nissan"],
        answer: "Toyota",
        category: 0
      },
      {
        id: 91,
        image: "../../qimages/rx_7.jpg",
        imgalt: "rx_7",
        question: "What is the name of the unique engine type that Mazda is famous for using in sports cars like the RX-7 and RX-8?",
        options: ["Boxer", "Rotary", "Inline-six", "VTEC"],
        answer: "Rotary",
        category: 2
      },
      {
        id: 92,
        image: "../../qimages/spark_plug.jpg",
        imgalt: "spark_plug",
        question: "Which part of a car is responsible for igniting the air-fuel mixture in an internal combustion engine?",
        options: ["Fuel pump", "Alternator", "Spark plug", "Radiator"],
        answer: "Spark plug",
        category: 2
      },
      {
        id: 93,
        image: "../../qimages/sweden.webp",
        imgalt: "sweden",
        question: "Which country is home to the car manufacturer Koenigsegg?",
        options: ["Germany", "Sweden", "Italy", "USA"],
        answer: "Sweden",
        category: 3
      },
      {
        id: 94,
        image: "../../qimages/fast_koengigsegg.png",
        imgalt: "fast_koengigsegg",
        question: "What is the fastest production car as of 2024?",
        options: ["Bugatti Chiron Super Sport", "SSC Tuatara", "Koenigsegg Jesko Absolut", "Hennessey Venom F5"],
        answer: "Koenigsegg Jesko Absolut",
        category: 0
      },
      {
        id: 95,
        image: "../../qimages/eau_rouge.jpg",
        imgalt: "eau_rouge",
        question: "Which race track is famous for the Eau Rouge corner?",
        options: ["Silverstone", "Monza", "Spa-Francorchamps", "Suzuka"],
        answer: "Spa-Francorchamps",
        category: 1
      },
      {
        id: 96,
        image: "../../qimages/pirelli.jpg",
        imgalt: "pirelli",
        question: "Which tire company supplies Formula 1 as of 2024?",
        options: ["Michelin", "Goodyear", "Pirelli", "Bridgestone"],
        answer: "Pirelli",
        category: 1
      },
      {
        id: 97,
        image: "../../qimages/rpm_meter.jpg",
        imgalt: "rpm_meter",
        question: "In automotive terms, what does RPM indicate?",
        options: ["The number of times an engine's crankshaft rotates per minute", "The speed of a car in kilometers per hour", "The ratio of fuel efficiency to power output", "The air pressure in the engine cylinders"],
        answer: "The number of times an engine's crankshaft rotates per minute",
        category: 2
      },
      {
        id: 98,
        image: "../../qimages/octane93.jpg",
        imgalt: "octane93",
        question: "What type of fuel is commonly used in high-performance race cars?",
        options: ["Diesel", "Ethanol", "Methanol", "High-octane gasoline"],
        answer: "High-octane gasoline",
        category: 1
      },
      {
        id: 99,
        image: "../../qimages/rolls_royce_phantom.avif",
        imgalt: "rolls_royce_phantom",
        question: "Which luxury car brand produces the Phantom model?",
        options: ["Bentley", "Rolls-Royce", "Mercedes-Benz", "Maserati"],
        answer: "Rolls-Royce",
        category: 3
      },
      {
        id: 100,
        image: "../../qimages/carbon_ceramic.webp",
        imgalt: "carbon_ceramic",
        question: "What is the primary advantage of using carbon-ceramic brakes in high-performance cars?",
        options: ["Lower cost", "Improved fuel efficiency", "Better heat resistance and durability", "Smoother ride"],
        answer: "Better heat resistance and durability",
        category: 2
      }
    
]

export default qBank;