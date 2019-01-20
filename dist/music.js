const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
	theme: '#FADFA3', //主题色
	mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    audio: [
	{
        name: '贝加尔湖畔',
        artist: '李建',
        url: 'http://www.ytmp3.cn/down/57247.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '凉凉',
        artist: '张碧晨',
        url: 'http://www.ytmp3.cn/down/57234.mp3',
        cover: 'http://s3.fx.kgimg.com/v2/fxroomcover/c81b2bd98e7a3903beba340506b8504b.jpg_200x200.jpg',
      },
	  {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});