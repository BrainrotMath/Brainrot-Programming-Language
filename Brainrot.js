class Brainrot {
  constructor() {
    this.slots = Array(42).fill(0); // 42 slots, all initialized to 0
    this.pointer = 0; // Points to the current slot
    this.instructions = []; // Loaded instructions
    this.output = ""; // Stores program output
    this.input = ""; // Stores user input
    this.instructionPointer = 0; // Tracks execution location
  }

  // Map of commands to their functionality
  commands = {
    RIZZ: () => this.slots[this.pointer] += 10,
    Brain: () => this.slots[this.pointer] +=1,
    rot: ()=>this.slots[this.pointer]-=1,
    YEE: () => this.slots[this.pointer] -= 5,
    TOILET: () => this.slots[this.pointer] *= 2,
    SKIBIDI: () => this.pointer = (this.pointer + 1) % 42,
    DOP: () => this.output += String.fromCharCode(this.slots[this.pointer]),
    BOINK: () => {
      if (this.slots[this.pointer] % 7 === 0) {
        this.instructionPointer = Math.max(0, this.instructionPointer - 3);
      }
    },
    OMG: () => {
      if (this.input.length > 0) {
        this.slots[this.pointer] = this.input.charCodeAt(0);
        this.input = this.input.slice(1);
      } else {
        this.slots[this.pointer] = 0; // Default if no input provided
      }
    },
    ROT: () => {
      const prev = (this.pointer - 1 + 42) % 42;
      [this.slots[this.pointer], this.slots[prev]] = [this.slots[prev], this.slots[this.pointer]];
    },
    LMAO: () => {
      this.slots[this.pointer] = Math.floor(Math.random() * 128);
    }
  };

  // Load a Brainrot program and optional input
  loadProgram(program, input = "") {
    this.instructions = program.split(/\s+/).filter(Boolean); // Split commands by whitespace
    this.input = input; // Store user input
  }

  // Run the loaded program
  run() {
    while (this.instructionPointer < this.instructions.length) {
      const command = this.instructions[this.instructionPointer];
      if (this.commands[command]) {
        this.commands[command](); // Execute the command
      }
      this.instructionPointer++; // Move to the next instruction
    }
    return this.output;
  }
}

// Example usage
const brainrot = new Brainrot();

const program = `
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ  
YEE YEE YEE rot rot                       
DOP

SKIBIDI
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ
Brain Brain RIZZ YEE
DOP

SKIBIDI
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ
RIZZ YEE
DOP

SKIBIDI
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ
rot rot 
DOP

SKIBIDI
RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ RIZZ
Brain Brain Brain Brain Brain
DOP

SKIBIDI
RIZZ TOILET RIZZ TOILET TOILET YEE YEE YEE
YEE
DOP

SKIBIDI
Brain TOILET TOILET TOILET TOILET TOILET
TOILET Brain YEE TOILET
YEE YEE YEE
DOP
`;

brainrot.loadProgram(program);
const output = brainrot.run();
console.log(output); // Outputs: "Skibidi"
