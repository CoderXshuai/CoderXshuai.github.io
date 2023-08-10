// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    // texts: [
    //     "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
    //     "心爱的姑娘",  // 同上...
    //     "今天是你的生日",
    //     "这是我们在一起的",
    //     "第三个生日！",
    //     "这两年来，我见过你",
    //     "奇怪的样子",
    //     "可爱的样子",
    //     "生气的样子",
    //     "都是我喜欢的样子",
    //     "对了，礼物收全了吗？",
    //     "今年要吃好好的",
    //     "喂饱饱的",
    //     "然后才有力气干活",
    //     "和想我！",
    //     "生日快乐~~",
    // ],
    texts: [
        "今天是宝贝的生日",
        "也是给宝贝过的第一个生日",
        "祝我的宝贝生日快乐",
        "愿以后的日子宝贝",
        "狂吃不胖",
        "狂玩不穷",
        "愿你永远健康美好依旧",
        "愿你从旧衣服找到零钱",
        "愿你做过的美梦都实现",
        "最重要的是",
        "愿这岁月悠长",
        "我们能一直在一起",
        "吼哈!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    
    imgs: {
        "今天是宝贝的生日":"./imgs/今天是宝贝的生日.png",
        "也是给宝贝过的第一个生日":"./imgs/也是给宝贝过的第一个生日.png",
        "祝我的宝贝生日快乐":"./imgs/祝我的宝贝生日快乐.png",
        "愿以后的日子宝贝":"./imgs/愿以后的日子宝贝.jpg",
        "狂吃不胖":"./imgs/狂吃不胖.png",
        "狂玩不穷":"./imgs/狂玩不穷.png",
        "愿你永远健康美好依旧":"./imgs/愿你永远健康美好依旧.jpg",
        "愿你从旧衣服找到零钱":"./imgs/愿你从旧衣服找到零钱.jpg",
        "愿你做过的美梦都实现":"./imgs/愿你做过的美梦都实现.png",
        // "最重要的是":"./imgs/",
        // "愿这岁月悠长":"./imgs/",
        "我们能一直在一起":"./imgs/我们能一直在一起.png",
        "吼哈!":"./imgs/吼哈.png",
    },
    // imgs: {
    //     "今天是宝贝的生日": "./imgs/bd1.jpg",
    //     "也是一起过的第一个生日": "./imgs/nothing.jpg",
    //     "今天是你的生日": "./imgs/shengri.jpeg",
    //     "这是我们在一起的": "./imgs/zaiyiqi.png",
    //     "第三个生日！": "./imgs/nothing.jpg",
    //     "这两年来，我见过你": "./imgs/yangzi.jpeg",
    //     "奇怪的样子": "./imgs/nothing.jpg",
    //     "可爱的样子": "./imgs/nothing.jpg",
    //     "生气的样子": "./imgs/nothing.jpg",
    //     "都是我喜欢的样子": "./imgs/nothing.jpg",
    //     "对了，礼物收全了吗？": "./imgs/chuo.gif",
    //     "今年要吃好好的": "./imgs/chihaodian.jpeg",
    //     "喂饱饱的": "./imgs/weibao.jpeg",
    //     "然后才有力气干活": "./imgs/nothing.jpg",
    //     "和想我！": "./imgs/nothing.jpg",
    //     "生日快乐~~": "./imgs/nothing.jpg"
    // },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点击开始给宝贝庆生哦",
        play: "上音乐",
        bannar_coming: "怎么能没有皇冠呢",
        balloons_flying: "还有气球",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "还有几个想说给宝贝的话"
    },

    // 结束语
    loveText: '爱你的许帅同学~'
};
