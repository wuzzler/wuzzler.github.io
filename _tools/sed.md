---
title: sed
os: linux
tags:
 - basic
 - linux
 - I/O stream
source: repo
---
> While originating from line editor `ed`, `sed` manipulates input streams according to passed patterns and flags

Passing a file to `sed` you can use the substitute option `s` to replace the first occurence of a string with the given replacement. A trailing `g` flag will substitute *all* occurences per line.

```bash
# replace rgXptrn with replacement on passed rndFile - all occurences
sed 's/rgXptrn/replacement/g' rndFile
```

Altough some lines may not be affected, they will be displayed nontheless. In order to supress those unaffected lines and only show the lines with changes the `-n` cli parameter and a trailing `p` flag will be used respectively.

```bash
# show only changed lines
sed -n 's/regexPattern/replacement/p; s/pattern2/replacement2/p' file

# prepend text in front of line
sed 's/^/text2prepend/g' file
```

Similar to bash commands, the instruction inside the single quotes can be delimited by a semicolon in order to pass a second instruction (or use cli `-e` with the instruction following for every instruction you want to execute with `sed`)

Also normal regex rules apply, so in order to match the beginning of every line passed the `^` is the pattern to choose.

Params explained
- `s` - prepending the regex pattern inside the instruction, flag for substitution mode
- `g` - global flag trailing instruction, affects all occurences inside one processed line
- `p` - trailing flag, print affected lines (flags can be stacked like `.../gp`)
- `-n` - noout cli option, supressing the output (limiting option, broadened with `p` flag)
- `-e` - passing expression/instruction to execute, multiple times possible
- `-f` - pass a script file instead of interactive input via terminal