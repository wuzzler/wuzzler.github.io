---
title:  Python
summary: Basic structure, cli parameters, shebang etc.
---

`Shebang` including the use of `cli`-parameters via `argparse`:


```python
#/usr/bin/env python3

import argparse

if __name__ == '__main__':
    argparser = argparse.ArgumentParser()
    argparser.add_argument('path',help = 'Captcha file path')
    args = argparser.parse_args()
```