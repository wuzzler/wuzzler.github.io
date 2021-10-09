---
title: awk
os: linux
tags:
 - basic
 - linux
 - I/O stream
source: repo
---
> Kind of like `sed` but syntax goes more into programming style

As with `sed` you process a file line by line and can match patterns or print specific fields (default seperator is a whitespace ` `) of the file.

```bash
# print the first field of lines that match the regex pattern, fields seperated by a comma
awk -F, '/regexPattern/ { print $1 }' myFile

# executing multiple commands
awk '{ print $1; print $2}' myFile
```

To use multiple commands, they can be seperated and will be executed per line one after another.

As `sed` will suffice on a command line level, `awk` allows the usage of scripts - passed via the `f` parameter


A simple script may look like this:

```bash
# sample awk script
BEGIN { FS = "[',;\t]" } # set field seperator to array - any match seperates the field
{	print "" # print blank line
	print $1 ": " $2 # print multiple fields in one line
}

$1 ~ /ger/ { print "itsamatch" } # conditional print: field 1 must match regex pattern 
/m/ { print "123 in here" } # prints if any field matches pattern, but only once per line

# print number of blank lines
/^$/	{
		x += 1
	}
END {
		print x
}
```


Params explained
- `F` - change of seperator (default: whitespace) `F ,` or `-F"\t"`
- `'{ }'` - allows command execution, commands must be passed within - multiple commands seperated by a semicolon `;`
- `'/ /'` - enclosing regex patterns to match (common regex can be used)
- `print $1` - prints corresponding field, `$1` refers to the first `$2` to the second, `$0` to the whole line
- `f`