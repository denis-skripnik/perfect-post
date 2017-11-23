const golos = require('steem')
golos.config.set('websocket','wss://ws.golos.io');
golos.config.set('address_prefix','GLS');
golos.config.set('chain_id','782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12');

var key='Сюда вписываем приватный постинг ключ';//приватный постинг ключ
var author='сюда вписываем аккаунт без собачки';//автор поста (свой аккаунт без собачки)
var parent_author=''; //автор родитель (пустое значение)
var parent_permlink='ru--golos';//родительский пермлинк (тег)
var dt = Math.round(Date.now()/1000);//дата в миллисекундах
var permlink='post-'+dt;//пермлинк поста
var post_body=' ';//тело поста (пробел)
var title ='';//название поста (пустое значение)
var jsonMetadata = {};//метаданные json (пустое значение)
//---постинг	
golos.broadcast.comment(key,parent_author,parent_permlink,author,permlink,title,post_body,jsonMetadata,function(err, result) {
if(err){console.log(err); } else {console.log('Ок. Пост в ленте!');process.exit(-1);}
});
//---если всё прошло успешно, скрипт сам прекратит работу
