avengers-gather
=================

A dead simple cli tool to arrange a google meet call and send the link to telegram group.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g avengers-gather
$ avengers-gather now
You are about to be taken to telegram site, follow the steps there and copy your api-id and api-hash....
$ avengers-gather (-v|--version|version)
avengers-gather/0.0.0 darwin-x64 node-v14.17.0
$ avengers-gather --help [COMMAND]
USAGE
  $ avengers-gather COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`avengers-gather now`](#avengers-gather-now)
* [`avengers-gather help [COMMAND]`](#avengers-gather-help-command)
* [`avengers-gather reset`](#avengers-gather-reset)

## `avengers-gather now`

Initialize the cli. Just follow the simple steps to get you started.

```
USAGE
  $ avengers-gather now

OPTIONS
  -n, --now=now  gather avengers

EXAMPLE
  $ avengers-gather now
```

## `avengers-gather help [COMMAND]`

display help for avengers-gather

```
USAGE
  $ avengers-gather help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

## `avengers-gather reset`

Resets all your data.

```
USAGE
  $ avengers-gather reset
```
