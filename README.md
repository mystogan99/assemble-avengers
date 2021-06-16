avengers-assemble
=================

Simple cli for assembling your own avengers.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/avengers-assemble.svg)](https://npmjs.org/package/avengers-assemble)
[![Downloads/week](https://img.shields.io/npm/dw/avengers-assemble.svg)](https://npmjs.org/package/avengers-assemble)
[![License](https://img.shields.io/npm/l/avengers-assemble.svg)](https://github.com/hrithik098/avengers-assemble/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g avengers-assemble
$ avengers-assemble COMMAND
running command...
$ avengers-assemble (-v|--version|version)
avengers-assemble/0.0.0 darwin-x64 node-v14.17.0
$ avengers-assemble --help [COMMAND]
USAGE
  $ avengers-assemble COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`avengers-assemble hello`](#avengers-assemble-hello)
* [`avengers-assemble help [COMMAND]`](#avengers-assemble-help-command)
* [`avengers-assemble meet`](#avengers-assemble-meet)
* [`avengers-assemble setup`](#avengers-assemble-setup)
* [`avengers-assemble start [FILE]`](#avengers-assemble-start-file)

## `avengers-assemble hello`

Assembles you avengers.

```
USAGE
  $ avengers-assemble hello

OPTIONS
  -n, --now=now  Assemble avengers

EXAMPLE
  $ avengers-assemble hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/hrithik098/avengers-assemble/blob/v0.0.0/src/commands/hello.ts)_

## `avengers-assemble help [COMMAND]`

display help for avengers-assemble

```
USAGE
  $ avengers-assemble help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `avengers-assemble meet`

Open google chrome with new meet link.

```
USAGE
  $ avengers-assemble meet

OPTIONS
  -n, --groupName=groupName  Assemble avengers
```

_See code: [src/commands/meet.ts](https://github.com/hrithik098/avengers-assemble/blob/v0.0.0/src/commands/meet.ts)_

## `avengers-assemble setup`

describe the command here

```
USAGE
  $ avengers-assemble setup

OPTIONS
  -a, --apiId=apiId      Get your apiId from telegram.
  -f, --force
  -h, --help             show CLI help
  -z, --apiHash=apiHash  Get your apiHash key from telegram.

EXAMPLE
  $ avengers-assemble setup --apihash 'somestr' --apiId 605023
  hello world from ./src/hello.ts!
```

_See code: [src/commands/setup.ts](https://github.com/hrithik098/avengers-assemble/blob/v0.0.0/src/commands/setup.ts)_

## `avengers-assemble start [FILE]`

describe the command here

```
USAGE
  $ avengers-assemble start [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/start.ts](https://github.com/hrithik098/avengers-assemble/blob/v0.0.0/src/commands/start.ts)_
<!-- commandsstop -->
