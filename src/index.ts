import program from 'commander'
import { printWordInAscii } from './utils'
const input = require('input')
import inquirer from 'inquirer'
import { TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'
import flatCache from 'flat-cache'
import { exit } from 'process'
import { questions } from './questions'
import { Logger } from "telegram/extensions";
import open from 'open'
import chalk from 'chalk'

Logger.setLevel("none"); // no logging

var cache = flatCache.load('telegramSetup');

async function telegramSetup(stringSession: StringSession, apiId: number, apiHash: string, groupId: string) {

  const client = new TelegramClient(stringSession, apiId, apiHash, { connectionRetries: 2 });

  const meetUrl = 'https://meet.google.com/new'

  await client.start({
    phoneNumber: async () => await input.text('Enter the number registered with telegram (Add +91) ?'),
    password: async () => await input.text('password?'),
    phoneCode: async () => await input.text('Check your telegram inbox. Got the codes?'),
    onError: (err) => console.log(err as unknown as string) as unknown as Promise<boolean>,
  });

  cache.setKey("stringSession", client.session.save())
  cache.save(true)

  console.log(`Your session has been saved successfully. Now you don't ever need to add these details again.`)
  
  client.sendMessage(groupId, { message: `Avengers! Assemble. Join now -> ${meetUrl}` }).then(() => {
    open(meetUrl)
  });
  client.disconnect()
  exit()
}

program
  .version("0.0.1")
  .command("now")
  .description("Risky command you are about to send a BOLO for all avengers registered with S.H.I.E.L.D")
  .action(async () => {
    printWordInAscii("Avengers Assemble")
      let stringSession: string = cache.getKey("stringSession")
      let apiId: number = cache.getKey('apiId');
      let apiHash: string = cache.getKey('apiHash')
      let groupId: string = cache.getKey("groupId")

      if (stringSession?.length > 0) {

        console.log("Found the string session moving directely to execution")
        await telegramSetup(new StringSession(stringSession), apiId, apiHash, groupId)

      } else {

        console.log(chalk.cyan.bold("You are about to be taken to telegram site, follow the steps there and copy your api-id and api-hash."))
        
        setTimeout(() => {
          open("https://my.telegram.org/auth")
        }, 5000)

        setTimeout(() => {
          inquirer.prompt(questions).then(async (answers) => {

            const apiId: number = parseInt(answers.apiId)
            const apiHash = answers.apiHash
            const stringSession = new StringSession('');
            let groupId: string = answers.groupId
  
            cache.setKey('apiId', apiId);
            cache.setKey('apiHash', apiHash)
            cache.setKey('groupId', groupId)
            cache.save(true)
  
            telegramSetup(stringSession, apiId, apiHash, groupId)
          })
        }, 10000)
      }
    })


program
  .command("reset")
  .description("Resets all congfig.")
  .action(() => {
    console.log("Reseting everything....")
    console.log(".......")
    console.log(".......")
    cache.removeCacheFile()
    console.log("Finished")
  })

program.parse(process.argv);