---
title:  dd
tags:
 - basic
 - linux
---
> Simple tool for writing binary data from 'a' to 'b'

```
# create bootable thumbdrive form image file
dd if=/path/to/inputfile of=/dev/sda bs=4M conv=datasync status=progress
```