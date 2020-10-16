const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';



client.once('ready', () => {

    console.log('======== Necromatic Is On ======== ');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const argvs = message.content.slice(prefix.length).split(/ +/);
    const command = argvs.shift().toLocaleLowerCase();

    if (command === 'comandos') {
        const botimglink = 'https://i.imgur.com/VHvNdEv.gif';
        const Comandsembed = new Discord.MessageEmbed()
            .setTitle(`Olá , está é minha lista de comandos:`)
            .addField('+cafune', value = 'Faça um cafuné em alguém, não se esqueça de mencionar a pessoa!', inline = false)
            .addField('+double', value = 'Veja XANDÃO dando aquele DOUBLE BÍCEPS', inline = false)
            .addField('+runa', value = 'Veja a runa de um campeão do lol, insira o comando e o nome do campeão, por exemplo: +runa kogmaw .', inline = false)
            .addField('+hdp', value = 'Veja o histórico de partidadas no lol de seu amigo criminoso, escreva o comando, e de espaço e escreva o nome de invocador de sua amigo, tudo junto.', inline = false)
            .addField('+moeda', value = 'Escolhe aleatoriamente um lado da moeda, cara ou coroa.', inline = false)
            .addField('+randomchamp', value = 'Escolhe aleatoriamente um campeão do lol para você mandar aquele feeding diferenciado.', inline = false)
            .addField('+slap', value = 'De aquele tapa no mongol que ta enchendo o saco, escreva o comando e o nome da pessoa, ou marque ela.s', inline = false)
            .setColor('#0000FF')
            .setImage(botimglink);

        message.channel.send(Comandsembed);

    } else if (command === 'cafune') {


        const cafune = ['https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif', 'https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif',
            'https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif', 'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif',
            'https://media.giphy.com/media/xVgGouGtc21H2/giphy.gif', 'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif',
            'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif', 'https://i.pinimg.com/originals/18/69/a0/1869a087b74dc5a8152278bcb9381b7e.gif',
            'https://i.pinimg.com/originals/c2/34/cd/c234cdcb3af7bed21ccbba2293470b8c.gif', 'https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-small.gif',
            'https://gifimage.net/wp-content/uploads/2017/09/anime-head-pat-gif-1.gif', 'https://gifimage.net/wp-content/uploads/2017/09/anime-head-pat-gif-5.gif',
            'https://66.media.tumblr.com/6289c42ea805f475698f02207da0a377/tumblr_p14hcsxPsb1tm1dgio1_400.gif', 'https://66.media.tumblr.com/b4d110b98079b935512467aad091f068/tumblr_myki5bzz0U1shdfeho1_500.gif',
            'https://i.kym-cdn.com/photos/images/original/001/286/811/7c7.gif', 'https://i.pinimg.com/originals/7e/e2/9b/7ee29b45d40b1b16d3705c31d1bceba0.gif',
            'https://media1.tenor.com/images/183ff4514cbe90609e3f286adaa3d0b4/tenor.gif?itemid=5518321', 'https://media1.tenor.com/images/291ea37382e1d6cd33349c50a398b6b9/tenor.gif?itemid=10204936',
            'https://media1.tenor.com/images/c0bcaeaa785a6bdf1fae82ecac65d0cc/tenor.gif?itemid=7453915', 'https://i.gifer.com/OVXY.gif',
            'https://66.media.tumblr.com/580396767c1ac6d9b0eeb02f7ede30de/tumblr_p9b11ijLuy1th206io2_500.gif', 'https://i.pinimg.com/originals/a0/6d/65/a06d65ad49f019aaae3f30fb872df619.gif',
            'https://data.whicdn.com/images/125164822/original.gif', 'https://i.imgur.com/42VnOL9.gif', 'https://thumbs.gfycat.com/NaughtySpottedAsiantrumpetfish-size_restricted.gif',
            'https://media.giphy.com/media/lq72vRtxJtpgQ/giphy.gif', 'https://media1.tenor.com/images/d6bc68f949e78c7d17b55d2f65e445c0/tenor.gif?itemid=5628617'
        ];
        const randomcafune = Math.floor(Math.random() * cafune.length);
        const giflink = cafune[randomcafune];
        const mencion = message.content.slice(7);
        const CafEmbed = new Discord.MessageEmbed()
            .setTitle('Que coisa linda...')
            .setDescription(`${message.author} fez um cafuné em ${mencion}`)
            .setColor('#0099ff')
            .setImage(giflink);
        message.channel.send(CafEmbed);




    } else if (command === 'double') {

        const doublegif = 'https://images-ext-2.discordapp.net/external/nqR8ck-zLrcxbMoNkqlSrady6eWBtRZIqN7r4FxUnS0/https/uploads.disquscdn.com/images/446249f8217a8b954f62604ead5e7b9bd8ea9989cd5edf14a5516b8b505871ee.gif';
        const DoubleEmbed = new Discord.MessageEmbed()
            .setTitle('SEM PRESSÃO, AQUI É XANDÃO')
            .setDescription('ENTÃO TOMA UM DOUBLE BÍCEPS')
            .setColor('#ff0000')
            .setImage(doublegif);
        message.channel.send(DoubleEmbed);

    } else if (command === 'runa') {


        const champname = message.content.slice(6);
        const runlink = `https://www.leagueofgraphs.com/pt/champions/runes/${champname}`;
        if (!champname) {
            return message.channel.send('Por favor, ensira o nome de um champ.');
        }
        message.channel.send(runlink);

    } else if (command === 'hdp') {

        const invocador = message.content.slice(5);
        const invlink = `https://www.leagueofgraphs.com/pt/summoner/br/${invocador}`;
        if (!invocador) {
            return message.channel.send('Por favor, ensira o nome de um invocador br.');
        }
        message.channel.send(invlink);

    } else if (command === 'moeda') {

        const moeda = ['cara', 'coroa'];
        var randommoeda = parseFloat(Math.floor(Math.random() * 3));
        var escolhidomoeda = moeda[randommoeda];
        message.channel.send(escolhidomoeda);



    } else if (command === 'randomchamp') {

        var champlist = ['AATROX', 'AHRI', 'AKALI', 'ALISTAR', 'AMUMU', 'ANIVIA', 'ANNIE', 'APHELIOS', 'ASHE', 'AURELION SOL', 'AZIR', 'BARDO', 'BLITZCRANK', 'BRAND', 'BRAUM', 'CAITLYN', 'CAMILLE', 'CASSIOPEIA', 'CHO GATH', 'CORKI', 'DARIUS', 'DIANA', 'DR. MUNDO', 'DRAVEN', 'EKKO', 'ELISE', 'EVELYNN', 'EZREAL', 'FIDDLESTICKS', 'FIORA', 'FIZZ', 'GALIO', 'GANGPLANK', 'GAREN', 'GNAR', 'GRAGAS', 'GRAVES', 'HECARIM', 'HEIMERDINGER', 'ILLAOI', 'IRELIA', 'IVERN', 'JANNA', 'JARVAN IV', 'JAX', 'JAYCE', 'JHIN', 'JINX', 'KAI SA', 'KALISTA', 'KARMA', 'KARTHUS', 'KASSADIN', 'KATARINA', 'KAYLE', 'KAYN', 'KENNEN', 'KHA ZIX', 'KINDRED', 'KLED', 'KOG MAW', 'LEBLANC', 'LEE SIN', 'LEONA', 'LILLIA', 'LISSANDRA', 'LUCIAN', 'LULU', 'LUX', 'MALPHITE', 'MALZAHAR', 'MAOKAI', 'MASTER YI', 'MISS FORTUNE', 'MORDEKAISER', 'MORGANA', 'NAMI', 'NASUS', 'NAUTILUS', 'NEEKO', 'NIDALEE', 'NOCTURNE', 'NUNU E WILLUMP', 'OLAF', 'ORIANNA', 'ORNN', 'PANTHEON', 'POPPY', 'PYKE', 'QIYANA', 'QUINN', 'RAKAN', 'RAMMUS', 'REK SAI', 'RENEKTON', 'RENGAR', 'RIVEN', 'RUMBLE', 'RYZE', 'SEJUANI', 'SENNA', 'SETT', 'SHACO BIRI BIRI', 'SHEN', 'SHYVANA', 'SINGED', 'SION', 'SIVIR', 'SKARNER', 'SONA', 'SORAKA', 'SWAIN', 'SYLAS', 'SYNDRA', 'TAHM KENCH', 'TALIYAH', 'TALON', 'TARIC', 'TEEMO', 'THRESH', 'TRISTANA', 'TRUNDLE', 'TRYNDAMERE', 'TWISTED FATE', 'TWITCH', 'UDYR', 'URGOT', 'VARUS', 'VAYNE', 'VEIGAR', 'VEL KOZ', 'VI', 'VIKTOR', 'VLADIMIR', 'VOLIBEAR', 'WARWICK', 'WUKONG', 'XAYAH', 'XERATH', 'XIN ZHAO', 'YASUO', 'YONE', 'YORICK', 'YUUMI', 'ZAC', 'ZED', 'ZIGGS', 'ZILEAN', 'ZOE', 'ZYRA'];
        var nun = champlist.length + 1;
        var randochampl = parseFloat(Math.floor(Math.random() * nun));
        var champescolhido = champlist[randochampl];
        message.channel.send(`O champ escolhido para você trolar hoje é ${champescolhido}.`);





    } else if (command === 'slap') {

        var slaplist = ['https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943', 'https://i.pinimg.com/originals/96/8c/b1/968cb1f9eaa12dde1d6fdf2f6ee296ed.gif', 'https://media1.tenor.com/images/2915aef3da681c2361ee9c4dcc9dbfa4/tenor.gif?itemid=14694312', 'https://i.imgur.com/fm49srQ.gif', 'https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUFk2Ae92E1tAeAfjk_pGLpKnHfWiikue5-m1fMe8_1TjRXlLKNwbrQTs1EfUN5ol3A', 'https://i.kym-cdn.com/photos/images/original/001/040/951/73e.gif', 'https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif', 'https://i.gifer.com/1Vbb.gif', 'https://media1.tenor.com/images/a6c2f17d9209f8f536b6b4bfbfb84686/tenor.gif?itemid=5376964', 'https://media3.giphy.com/media/lSDqu7IbMqMiQvCjjN/giphy.gif', 'https://media1.tenor.com/images/85722c3e51d390e11a0493696f32fb69/tenor.gif?itemid=5463215', 'https://i.kym-cdn.com/photos/images/newsfeed/000/940/326/086.gif', 'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956'];
        var randotapnun = parseFloat(Math.floor(Math.random() * slaplist.length));
        var tapalink = slaplist[randotapnun];
        const mencion = message.content.slice(5);
        var slapEmbed = new Discord.MessageEmbed()
            .setTitle('Se quer? então pega!')
            .setDescription(`${message.author} fez um cafuné em ${mencion}`)
            .setColor('#CB06F2')
            .setImage(tapalink);
        message.channel.send(slapEmbed);




    }




});


client.login('BOT TOKEN');