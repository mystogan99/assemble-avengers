import figlet from 'figlet'


export const printWordInAscii = async (word: string) => {
    figlet(word, {
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 100,
      whitespaceBreak: true,
    }, function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data)
    });
  }