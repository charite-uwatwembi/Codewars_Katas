// Debug helper
function unbleach(n) {
    if (n) return n.replace(/ /g, 's').replace(/\t/g, 't').replace(/\n/g, 'n');
  }
  
  function whitespace(code, input) {
    // Clean code: keep only whitespace chars
    code = code.replace(/[^\t \n]/g, '');
  
    // Interpreter state
    let ip = 0; // Instruction pointer
    let stack = [];
    let heap = {};
    let labels = {};
    let callStack = [];
    let output = '';
    let inputPos = 0;
  
    // Utilities
    const peek = () => code[ip];
    const next = () => code[ip++];
    const isEOF = () => ip >= code.length;
  
    function parseNumber() {
      let sign = next();
      if (sign !== ' ' && sign !== '\t') throw new Error("Invalid sign in number");
      let bits = '';
      while (!isEOF() && peek() !== '\n') {
        const bit = next();
        if (bit === ' ') bits += '0';
        else if (bit === '\t') bits += '1';
        else throw new Error("Invalid bit in number");
      }
      if (isEOF()) throw new Error("Unterminated number");
      next(); // consume '\n'
      let num = parseInt(bits, 2);
      return sign === '\t' ? -num : num;
    }
  
    function parseLabel() {
      let label = '';
      while (!isEOF() && peek() !== '\n') {
        label += next();
      }
      if (isEOF()) throw new Error("Unterminated label");
      next(); // consume '\n'
      return label;
    }
  
    // First pass: collect labels
    while (!isEOF()) {
      if (peek() === '\n') {
        ip++;
        if (code[ip] === ' ') {
          ip++;
          if (code[ip] === ' ') {
            ip++;
            const label = parseLabel();
            labels[label] = ip;
          } else {
            while (!isEOF() && code[ip++] !== '\n'); // skip rest
          }
        } else {
          while (!isEOF() && code[ip++] !== '\n');
        }
      } else {
        ip++;
      }
    }
  
    ip = 0; // reset for second pass
  
    function pop() {
      if (stack.length === 0) throw new Error("Stack underflow");
      return stack.pop();
    }
  
    function push(n) {
      stack.push(n);
    }
  
    function readChar() {
      if (inputPos >= input.length) throw new Error("Input exhausted");
      return input[inputPos++].charCodeAt(0);
    }
  
    function readNumber() {
      let str = '';
      while (inputPos < input.length && input[inputPos] !== '\n') {
        str += input[inputPos++];
      }
      if (inputPos >= input.length) throw new Error("Input exhausted before linefeed");
      inputPos++; // consume \n
      return parseInt(str, 10);
    }
  
    // Main execution loop
    while (!isEOF()) {
      const imp = next();
      if (imp === ' ') {
        const cmd = next();
        if (cmd === ' ') {
          const n = parseNumber();
          push(n);
        } else if (cmd === '\n') {
          const subCmd = next();
          if (subCmd === ' ') {
            push(stack[stack.length - 1]);
          } else if (subCmd === '\t') {
            const a = pop(), b = pop();
            push(a);
            push(b);
          } else if (subCmd === '\n') {
            pop();
          }
        }
      } else if (imp === '\t') {
        const subImp = next();
        if (subImp === ' ') {
          const cmd = next();
          const a = pop(), b = pop();
          if (cmd === ' ') push(b + a);
          else if (cmd === '\t') push(b - a);
          else if (cmd === '\n') push(b * a);
        } else if (subImp === '\n') {
          const cmd = next();
          if (cmd === ' ') output += String.fromCharCode(pop());
          else if (cmd === '\t') output += pop().toString();
          else if (cmd === '\n') return output;
        }
      } else if (imp === '\n') {
        const cmd = next();
        if (cmd === '\n') {
          const subCmd = next();
          if (subCmd === '\n') return output;
        }
      }
    }
  
    throw new Error("Program did not terminate properly");
  }
  console.log(
    whitespace('   \t\n\t\n \t\n\n\n', '')  // Push -1, output as number, end
  ); // Output: -1
    