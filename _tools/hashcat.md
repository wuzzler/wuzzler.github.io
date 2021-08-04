---
title:  hashcat
os: linux/windows
tags:
 - basic
 - itsec
 - linux
 - windows
source: repo/github
---
> Cracking hashes with password lists or bruteforcing via given masks

Taking the fast lane, password lists can be used in order to provide the values to be hashed and checked against.

Comparing a passwordlist with 1.000.000 entries to a keyspace of 26^8 (208.827.064.576 possible combinations using only lowercase alphanumerics) shows how much faster this is. Hits not guaranteed as the password in question must be included in the list in order to score a hit whit the hash. Further explained in [2].

Example with password list:

```bash
hashcat -m 0 -a 0 hash.txt pw_list.txt
```

While using brute force, it's recommended to utilze the graphics card in the system - increasing the speed in which hashes are generated.

```bash
hashcat -m 0 -a 3 -1 ?l?u?d hash.txt ?1?1?1?1?1?1?1?1 --increment --increment-min 4
```

Params explained
- `m` supplied hash algorithm, `0` states raw md5
- `a` specifies attack mode, `3` permutation of all possible values in given keyspace
- `1` states a custom mask, `?l?u?d` stands for *lowercase*, *uppercase* and *digits*
- `?1?1...` is the the keyspace, defined by the custom mask

[1] : https://github.com/hashcat/hashcat <br>
[2] : https://hashcat.net/wiki/doku.php?id=mask_attack