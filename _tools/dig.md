---
title:  dig
os: linux
tags:
 - web
 - linux
source: repo
---
> `dig` does the work when it comes to resolving IP addresses to hostname or the reverse ("DNS lookup utility")

Call dig with either an IP or a hostname to show the response of the DNS-servers.

```bash
# for forware lookup
dig reddit.com

# simple reverse lookup 
dig -x 151.101.193.140
```

Reverse lookups may not always reveal a hostname to a corresponding IP address.

Params explained
- `-x` - simple reverse lookup

Additional ressources
- [1] : https://viewdns.info/reverseip/