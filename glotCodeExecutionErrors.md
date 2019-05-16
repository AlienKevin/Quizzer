Error messages:
1. js
output: Object
stdout: ""
stderr: "/tmp/214208694/main:4
console.log('we)
            ^^^^

SyntaxError: Invalid or unexpected token
    at new Script (vm.js:74:7)
    at createScript (vm.js:246:10)
    at Object.runInThisContext (vm.js:298:10)
    at Module._compile (internal/modules/cjs/loader.js:670:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:744:10)
    at startup (internal/bootstrap/node.js:238:19)
"
error: "exit status 1"

2. python
output: Object
stdout: ""
stderr: "  File "/tmp/087143353/main", line 2
    for(i in range(3)):
                      ^
SyntaxError: invalid syntax
"
error: "exit status 1"

3. c
PROGRAM:
#include <stdio.h>

1int main(void) {
2
3  printf("Hello World1!\n");
4  printf("Hello World2!\n");
5  printf("Hello World3!\n");
6  printf("Hello World4!\n"
7  return 0;
8}

OUTPUT:
stdout: ""
stderr: "/tmp/484541382/main.c:8:3: error: expected ')'
  return 0;
  ^
/tmp/484541382/main.c:7:9: note: to match this '('
  printf("Hello World4!\n"
        ^
1 error generated.
"
error: "exit status 1"

4. java
PROGRAM:
1class Main {
2    public static void main(String[] args) {
3      System.out.println("Hello World!");
4      System.out.println("Hello World! weio";
5    }
6}

OUTPUT:
stdout: ""
stderr: "Main.java:4: error: ')' expected
      System.out.println("Hello World! weio";
                                            ^
1 error
"
error: "exit status 1"