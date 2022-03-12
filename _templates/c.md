---
title:  C
summary: Basic structure, cli parameters
---

> Short codesnippets for `c` programming language.

- Simple `c` structure with main function and access to cli params. Protip: verify what is passed via cli!


```c
#include <stdio.h>

int main(int argc, char *argv[]) {
    int i;

    // access cli param via argv array
    if (argc == 2) {
        // convert ascii to int -> careful input not checked!
        i = atoi(argv[1]);
    } else {
        return -1;
    }

    printf("This is not a test: #!%d\n", i);

    return 0;
}
```