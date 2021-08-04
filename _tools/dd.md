---
title:  dd
os: linux
tags:
 - basic
 - linux
source: repo
---
> Simple tool for writing binary data from 'a' to 'b'

```bash
# create bootable thumbdrive form image file
dd if=/path/to/inputfile of=/dev/sda bs=4M conv=fdatasync status=progress
```

Params explained
- `bs` - blocksize, can be ommited usual chosen as above - small sizes tend to take longer ;)
- `conv` - conversion option, here with `fdatasync` to have data written to disk when `dd` is closed
- `status` - optional, shows `progress` of write operation