---
title:  binwalk
os: linux
tags:
 - basic
 - linux
 - file
source: repo
---
> analyzing firmware, files and all sorts of data. Checking for magic bytes or also entropy in a file.

To show the entropy distribution in a file the `-E` switch will do the trick, an entropy diagram will be plotted an shows the entropy of the file in question.

```bash
binwalk -E filename.dat
```

Binwalk can also extract found files from within the containing file either with a single command line switch `-e` or with a little help from `dd`.

```bash
# simple extraction
binwalk -e filename.dat
```

```bash
# with dd extract either every found signature
binwalk --dd='.*' filename.dat
```

```bash
# or only jpeg
binwalk --dd='jpeg:jpg' filename.dat
```

Params explained
- `-e` - extract found files inside binary
- `-E` - show entropy diagram
- `--dd` - invoke `dd` for file extraction (alternative to `-e`)