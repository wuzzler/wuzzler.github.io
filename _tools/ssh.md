---
title:  ssh
tags:
 - basic
 - linux
---
> Tool for establishing a shell to a remote host, can also be used for tunneling different protocols over ssh - or tunnel traffic through an intermediate host out of an internal network

<hr>

```
# Tunnel Traffic from C to A via B
ssh -N -L <portA>:<ipC>:<portC> <userB>@<ipB>
```