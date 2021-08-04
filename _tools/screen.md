---
title:  screen
os: linux
tags:
 - basic
 - linux
source: repo
---
> manager for screens with builtin terminal emulation, can also be used to connect to UART connections and log the traffic

```bash
# connect to UART
screen -L -Logfile trafficlog /dev/ttyUSB0 57600,cs8,-cstopb,-cstartb # 8 bits per byte, no stop or startbit set (-)
# ctr+a d => detach screen
```

Params explained