---
title:  ssh
os: linux/windows
tags:
 - basic
 - linux
 - windows
source: repo
---
> Tool for establishing a shell to a remote host, can also be used for tunneling different protocols over ssh - or tunnel traffic through an intermediate host out of an internal network

Normal usage for simple ssh connection with username and specific public/private key pair:

```bash
# connect as user to a remotehost via hostname or IP and passing the keyfile for authentication
ssh user@remotehost -i ./path/to/key/priv_key
```

In order to pipe traffic from a remote host (C) through an intermediate host (B) to your own machine (A) use the following command:

```bash
# Tunnel Traffic from C to A via B
ssh -N -L <portA>:<ipC>:<portC> <userB>@<ipB>
```

Params explained
- `-N` - pipe only network traffic, don't start a shell
- `-L` - pipe ***L***ocal traffic to remote host (`-R` works the other way around)
- `-i` - use specified identityfile for remote authentication