---
title:  curl
os: linux
tags:
 - basic
 - linux
 - web
source: repo
---
> Command line tool for executing request in all kind of forms and shapes...

Request may vary in range from `GET`, `POST`, `PUT` (all html verbs), a simple request may look like this:

```bash
curl -X GET 'https://example.com' -i

curl -X GET 'https://example.com' -o webpage.html
```

Note the `-i` switch which will show you the header of the server response (which may be helpful), should be truncated if you want to safe the response into a file for display.

Trying a `POST` request with some additional data can be achieved via the following command:

```bash
curl -X POST 'https://example.com/api' -H "Authorization: Basic YXBpdXNlcjphcGlzZWN1cmVwYXNzd29yZA==" -d "token=somerndTOKENid" -i
```

Good to know:

- multiple headers can be passed with additional `-H` or `--header` params

For additional info `man curl` will definitely do the trick.

Params explained
- `-X` - chosen method (`GET`, `POST`, `PUT`...)
- `-i` - includes response http header
- `-o` - output file
- `-H` - pass Header
- `-d` - data obviously